async function startAnalysis() {

    let response = await fetch("http://localhost:8000/roles");
    let roles = await response.json();

    let html = `
    <h1>Choose Your Career Path</h1>
    <p>Select a role to discover the skills required for it.</p>

    <select id="careerRole">
        <option value="">Select your role</option>
`;

for (let role of roles) {
    html += `<option>${role}</option>`;
}

html += `
    </select>
    <br>
    <button onclick="showSkills()">Continue →</button>
`;

    document.getElementById("app").innerHTML = html;
}


async function showSkills() {

    let role = document.getElementById("careerRole").value;

    if (role == "") {
        alert("Please select a role");
        return;
    }

    let response = await fetch("http://localhost:8000/skills", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ role: role })
    });

    let skills = await response.json();

    let html = `
    <h1>Your Current Skills</h1>
    <p>Select the skills you already know.</p>

    <div class="skills">
`;

for (let skill of skills) {
    html += `
        <label class="skill-card">
            <input type="checkbox" value="${skill}">
            <span>${skill}</span>
        </label>
    `;
}

html += `
    </div>

    <button onclick="analyzeSkills('${role}')">
        Analyze Skills →
    </button>
`;
    document.getElementById("app").innerHTML = html;
}


async function analyzeSkills(role) {

    let selected = document.querySelectorAll("input:checked");
    let present = [];

    for (let item of selected) {
        present.push(item.value);
    }

    let response = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            role: role,
            skills: present
        })
    });

    let result = await response.json();

    document.getElementById("app").innerHTML = `
    <h1>Skill Analysis</h1>

    <h2>${role}</h2>

    <div class="match-box">
        <div class="percentage">${result.percentage}%</div>
        <div>Skill Match</div>
    </div>

    <div class="readiness">
        Career Readiness: <b>${result.level}</b>
    </div>

    <div class="result-section">
        <h3>✓ Skills You Have</h3>
        <p>${result.present.join(" • ") || "None"}</p>
    </div>

    <div class="result-section">
        <h3>○ Skills to Learn</h3>
        <p>${result.missing.join(" • ") || "None"}</p>
    </div>

    <div class="result-section">
        <h3>Learning Roadmap</h3>
        <p>${result.roadmap}</p>
    </div>

    <div class="result-section">
        <h3>Recommended Project</h3>
        <p>${result.project}</p>
    </div>

    <button onclick="startAnalysis()">Start Again</button>
`;
}