from http.server import BaseHTTPRequestHandler, HTTPServer
import mysql.connector
import json
import os

PASSWORD = "nazimamom1234"


def connect_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password=PASSWORD,
        database="skill_gap"
    )


class Server(BaseHTTPRequestHandler):

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):

        if self.path == "/":
            with open("index.html", "rb") as file:
                content = file.read()

            self.send_response(200)
            self.send_header("Content-Type", "text/html")
            self.end_headers()
            self.wfile.write(content)
            return

        if self.path == "/style.css":
            with open("style.css", "rb") as file:
                content = file.read()

            self.send_response(200)
            self.send_header("Content-Type", "text/css")
            self.end_headers()
            self.wfile.write(content)
            return

        if self.path == "/script.js":
            with open("script.js", "rb") as file:
                content = file.read()

            self.send_response(200)
            self.send_header("Content-Type", "application/javascript")
            self.end_headers()
            self.wfile.write(content)
            return

        if self.path == "/roles":
            db = connect_db()
            cursor = db.cursor()

            cursor.execute("SELECT role_name FROM roles")
            roles = [row[0] for row in cursor.fetchall()]

            cursor.close()
            db.close()

            self.send_json(roles)

    def do_POST(self):

        if self.path == "/skills":
            length = int(self.headers["Content-Length"])
            data = json.loads(self.rfile.read(length))

            role = data["role"]

            db = connect_db()
            cursor = db.cursor()

            cursor.execute("""
                SELECT s.skill_name
                FROM skills s
                JOIN role_skills rs ON s.id = rs.skill_id
                JOIN roles r ON r.id = rs.role_id
                WHERE r.role_name = %s
            """, (role,))

            skills = [row[0] for row in cursor.fetchall()]

            cursor.close()
            db.close()

            self.send_json(skills)

        elif self.path == "/analyze":
            length = int(self.headers["Content-Length"])
            data = json.loads(self.rfile.read(length))

            role = data["role"]
            present = data["skills"]

            db = connect_db()
            cursor = db.cursor()

            cursor.execute("""
                SELECT s.skill_name
                FROM skills s
                JOIN role_skills rs ON s.id = rs.skill_id
                JOIN roles r ON r.id = rs.role_id
                WHERE r.role_name = %s
            """, (role,))

            required = [row[0] for row in cursor.fetchall()]

            cursor.execute("""
                SELECT roadmap, project
                FROM roles
                WHERE role_name = %s
            """, (role,))

            roadmap, project = cursor.fetchone()

            missing = [
                skill for skill in required
                if skill not in present
            ]

            percentage = round(
                len(present) / len(required) * 100
            )

            if percentage >= 80:
                level = "Advanced"
            elif percentage >= 50:
                level = "Intermediate"
            else:
                level = "Beginner"

            cursor.close()
            db.close()

            result = {
                "present": present,
                "missing": missing,
                "percentage": percentage,
                "level": level,
                "roadmap": roadmap,
                "project": project
            }

            self.send_json(result)

    def send_json(self, data):
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())


port = int(os.environ.get("PORT", 8000))

server = HTTPServer(("0.0.0.0", port), Server)

print(f"Server running on port {port}")

server.serve_forever()

