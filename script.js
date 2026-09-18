/* =========================================================
   CAREER ROLES AND REQUIRED SKILLS
========================================================= */

const jobSkills = {

    "Data Analyst": [
        "Excel",
        "SQL",
        "Power BI",
        "Python",
        "Statistics",
        "Data Visualization"
    ],

    "Data Scientist": [
        "Python",
        "Statistics",
        "Machine Learning",
        "SQL",
        "Pandas",
        "Data Visualization"
    ],

    "Business Analyst": [
        "Excel",
        "SQL",
        "Statistics",
        "Data Visualization",
        "Business Communication",
        "Requirements Analysis"
    ],

    "Machine Learning Engineer": [
        "Python",
        "Machine Learning",
        "SQL",
        "Pandas",
        "NumPy",
        "Model Deployment"
    ],

    "Web Developer": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Git",
        "Responsive Design"
    ],

    "Software Developer": [
        "Java",
        "Python",
        "SQL",
        "Git",
        "Data Structures",
        "OOP"
    ],

    "Full Stack Developer": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Database"
    ],

    "Cyber Security Analyst": [
        "Networking",
        "Linux",
        "Cyber Security",
        "Python",
        "Cryptography",
        "Ethical Hacking"
    ],

    "Database Administrator": [
        "SQL",
        "Database Management",
        "MySQL",
        "Backup and Recovery",
        "Database Security",
        "Performance Tuning"
    ],

    "UI/UX Designer": [
        "Figma",
        "Wireframing",
        "Prototyping",
        "User Research",
        "UI Design",
        "UX Design"
    ]
};


/* =========================================================
   SKILL ICONS
========================================================= */

const skillIcons = {

    "Excel": "📊",
    "SQL": "🗃️",
    "Power BI": "📈",
    "Python": "🐍",
    "Statistics": "📐",
    "Data Visualization": "📊",

    "Machine Learning": "🤖",
    "Pandas": "🐼",
    "NumPy": "🔢",
    "Model Deployment": "🚀",

    "Business Communication": "💬",
    "Requirements Analysis": "📝",

    "HTML": "🌐",
    "CSS": "🎨",
    "JavaScript": "⚡",
    "React": "⚛️",
    "Git": "🔀",
    "Responsive Design": "📱",

    "Java": "☕",
    "Data Structures": "🧩",
    "OOP": "🧱",

    "Node.js": "🟢",
    "Database": "🗄️",

    "Networking": "🌐",
    "Linux": "🐧",
    "Cyber Security": "🛡️",
    "Cryptography": "🔐",
    "Ethical Hacking": "💻",

    "Database Management": "🗄️",
    "MySQL": "🐬",
    "Backup and Recovery": "💾",
    "Database Security": "🔒",
    "Performance Tuning": "⚙️",

    "Figma": "🎨",
    "Wireframing": "📐",
    "Prototyping": "🖥️",
    "User Research": "🔎",
    "UI Design": "✨",
    "UX Design": "🧠"
};


/* =========================================================
   LEARNING ROADMAPS
========================================================= */

const roadmaps = {

    "Data Analyst": [

        {
            icon: "📊",
            title: "Strengthen Excel",
            text: "Practice formulas, PivotTables, charts, dashboards, and data cleaning."
        },

        {
            icon: "🗃️",
            title: "Learn SQL",
            text: "Start with SELECT, WHERE, GROUP BY, JOIN, subqueries, and aggregate functions."
        },

        {
            icon: "📈",
            title: "Build Power BI Skills",
            text: "Create interactive dashboards, use Power Query, and learn basic DAX."
        },

        {
            icon: "🐍",
            title: "Learn Python for Data Analysis",
            text: "Focus on Pandas, NumPy, data cleaning, analysis, and basic visualization."
        },

        {
            icon: "📐",
            title: "Improve Statistics",
            text: "Learn mean, median, standard deviation, correlation, and basic statistical analysis."
        },

        {
            icon: "💼",
            title: "Build Projects",
            text: "Create practical dashboards and analysis projects to demonstrate your skills."
        }
    ],


    "Data Scientist": [

        {
            icon: "🐍",
            title: "Strengthen Python",
            text: "Practice Python programming and libraries used for data analysis."
        },

        {
            icon: "📐",
            title: "Learn Statistics",
            text: "Build a strong foundation in probability, statistics, and data interpretation."
        },

        {
            icon: "🤖",
            title: "Learn Machine Learning",
            text: "Understand supervised and unsupervised learning algorithms."
        },

        {
            icon: "🗃️",
            title: "Practice SQL",
            text: "Learn how to retrieve, filter, join, and analyze database information."
        },

        {
            icon: "🐼",
            title: "Master Pandas",
            text: "Practice data cleaning, transformation, grouping, and analysis."
        },

        {
            icon: "💼",
            title: "Build ML Projects",
            text: "Create practical projects that demonstrate your complete data science workflow."
        }
    ],


    "Business Analyst": [

        {
            icon: "📊",
            title: "Strengthen Excel",
            text: "Practice formulas, PivotTables, charts, data cleaning, and reporting."
        },

        {
            icon: "🗃️",
            title: "Learn SQL",
            text: "Practice queries, filtering, grouping, joins, and basic database analysis."
        },

        {
            icon: "📐",
            title: "Improve Statistics",
            text: "Learn basic statistical concepts for understanding business data."
        },

        {
            icon: "📈",
            title: "Learn Data Visualization",
            text: "Create clear charts and dashboards that communicate business insights."
        },

        {
            icon: "💬",
            title: "Improve Communication",
            text: "Practice presenting findings clearly to technical and non-technical users."
        },

        {
            icon: "📝",
            title: "Learn Requirements Analysis",
            text: "Understand how to collect, document, and analyse business requirements."
        }
    ],


    "Machine Learning Engineer": [

        {
            icon: "🐍",
            title: "Strengthen Python",
            text: "Practice Python programming and libraries used in machine learning."
        },

        {
            icon: "🤖",
            title: "Learn Machine Learning",
            text: "Understand model training, feature selection, classification, and regression."
        },

        {
            icon: "🗃️",
            title: "Practice SQL",
            text: "Learn to retrieve and prepare data from relational databases."
        },

        {
            icon: "🐼",
            title: "Learn Pandas and NumPy",
            text: "Practice data manipulation, preprocessing, and numerical operations."
        },

        {
            icon: "🔢",
            title: "Work with Data",
            text: "Practice cleaning, transforming, and preparing datasets for models."
        },

        {
            icon: "🚀",
            title: "Learn Model Deployment",
            text: "Understand how trained machine learning models can be used in applications."
        }
    ],


    "Web Developer": [

        {
            icon: "🌐",
            title: "Learn HTML",
            text: "Understand page structure, forms, links, images, and semantic elements."
        },

        {
            icon: "🎨",
            title: "Learn CSS",
            text: "Practice layouts, Flexbox, Grid, responsive design, and styling."
        },

        {
            icon: "⚡",
            title: "Learn JavaScript",
            text: "Understand variables, functions, arrays, DOM manipulation, and events."
        },

        {
            icon: "⚛️",
            title: "Learn React",
            text: "Practice components, props, state, and basic React applications."
        },

        {
            icon: "🔀",
            title: "Learn Git",
            text: "Practice repositories, commits, branches, and version control."
        },

        {
            icon: "💻",
            title: "Build Websites",
            text: "Create responsive projects and deploy them online."
        }
    ],


    "Software Developer": [

        {
            icon: "☕",
            title: "Strengthen Programming",
            text: "Practice Java or Python through small programming problems."
        },

        {
            icon: "🧱",
            title: "Learn OOP",
            text: "Understand classes, objects, inheritance, polymorphism, and encapsulation."
        },

        {
            icon: "🧩",
            title: "Practice Data Structures",
            text: "Learn arrays, linked lists, stacks, queues, trees, and basic algorithms."
        },

        {
            icon: "🗃️",
            title: "Learn SQL",
            text: "Practice database queries and understand relational databases."
        },

        {
            icon: "🔀",
            title: "Learn Git",
            text: "Use Git for version control and managing software projects."
        },

        {
            icon: "💻",
            title: "Build Projects",
            text: "Create applications that demonstrate programming and problem-solving skills."
        }
    ],


    "Full Stack Developer": [

        {
            icon: "🌐",
            title: "Learn HTML and CSS",
            text: "Build structured and responsive web pages."
        },

        {
            icon: "⚡",
            title: "Learn JavaScript",
            text: "Practice programming logic, DOM manipulation, events, and APIs."
        },

        {
            icon: "⚛️",
            title: "Learn React",
            text: "Build interactive front-end applications using components and state."
        },

        {
            icon: "🟢",
            title: "Learn Node.js",
            text: "Understand server-side JavaScript and basic API development."
        },

        {
            icon: "🗄️",
            title: "Learn Databases",
            text: "Practice storing, retrieving, and managing application data."
        },

        {
            icon: "💻",
            title: "Build Full Stack Projects",
            text: "Combine frontend, backend, and database skills in practical applications."
        }
    ],


    "Cyber Security Analyst": [

        {
            icon: "🌐",
            title: "Learn Networking",
            text: "Understand IP addresses, protocols, ports, TCP/IP, and network security."
        },

        {
            icon: "🐧",
            title: "Learn Linux",
            text: "Practice Linux commands, permissions, processes, and system administration."
        },

        {
            icon: "🛡️",
            title: "Learn Cyber Security",
            text: "Understand common threats, vulnerabilities, attacks, and security controls."
        },

        {
            icon: "💻",
            title: "Practice Python",
            text: "Use Python for automation, scripting, and basic security tasks."
        },

        {
            icon: "🔐",
            title: "Learn Cryptography",
            text: "Understand encryption, hashing, digital signatures, and authentication."
        },

        {
            icon: "🧪",
            title: "Build Security Projects",
            text: "Practice security concepts through small hands-on projects."
        }
    ],


    "Database Administrator": [

        {
            icon: "🗃️",
            title: "Learn SQL",
            text: "Practice queries, joins, filtering, grouping, and database operations."
        },

        {
            icon: "🗄️",
            title: "Learn Database Management",
            text: "Understand tables, schemas, indexes, constraints, and database administration."
        },

        {
            icon: "🐬",
            title: "Practice MySQL",
            text: "Work with a relational database and practice database administration tasks."
        },

        {
            icon: "💾",
            title: "Learn Backup and Recovery",
            text: "Understand how databases can be backed up and restored."
        },

        {
            icon: "🔒",
            title: "Learn Database Security",
            text: "Understand users, permissions, authentication, and database protection."
        },

        {
            icon: "⚙️",
            title: "Learn Performance Tuning",
            text: "Practice indexes, query optimization, and database performance concepts."
        }
    ],


    "UI/UX Designer": [

        {
            icon: "🎨",
            title: "Learn Figma",
            text: "Practice creating layouts, components, and interface designs."
        },

        {
            icon: "📐",
            title: "Practice Wireframing",
            text: "Create simple wireframes to plan the structure of applications."
        },

        {
            icon: "🖥️",
            title: "Learn Prototyping",
            text: "Create interactive prototypes to demonstrate user flows."
        },

        {
            icon: "🔎",
            title: "Understand User Research",
            text: "Learn how to identify user needs and understand user behaviour."
        },

        {
            icon: "✨",
            title: "Improve UI Design",
            text: "Practice typography, spacing, layouts, colours, and visual hierarchy."
        },

        {
            icon: "🧠",
            title: "Improve UX Design",
            text: "Focus on usability, user flows, accessibility, and overall experience."
        }
    ]
};


/* =========================================================
   RECOMMENDED PROJECTS
========================================================= */

const projects = {

    "Data Analyst": [

        {
            icon: "📊",
            title: "Sales Dashboard",
            why: "Helps you practice analysing sales data and presenting business insights through an interactive dashboard.",
            improve: "You improve Excel/Power BI, data visualization, analytical thinking, and presentation skills."
        },

        {
            icon: "👥",
            title: "Customer Churn Analysis",
            why: "Helps you understand customer behaviour and identify patterns behind customer loss.",
            improve: "You improve SQL, data analysis, visualization, and problem-solving skills."
        },

        {
            icon: "👤",
            title: "Employee Engagement Dashboard",
            why: "Helps you analyse employee-related data and identify patterns in engagement and productivity.",
            improve: "You improve dashboard creation, data interpretation, visualization, and business communication."
        }
    ],


    "Data Scientist": [

        {
            icon: "🏠",
            title: "House Price Prediction",
            why: "A beginner-friendly machine learning project using real-world housing data.",
            improve: "You improve Python, data preprocessing, machine learning, and model evaluation."
        },

        {
            icon: "🔍",
            title: "Customer Churn Prediction",
            why: "Uses customer data to identify customers who may leave a service.",
            improve: "You improve Python, machine learning, data analysis, and problem-solving."
        }
    ],


    "Business Analyst": [

        {
            icon: "📊",
            title: "Business Sales Analysis",
            why: "Helps analyse sales performance and identify useful business trends.",
            improve: "You improve Excel, SQL, data visualization, and business thinking."
        },

        {
            icon: "💬",
            title: "Customer Feedback Analysis",
            why: "Helps identify common patterns in customer feedback.",
            improve: "You improve data interpretation, communication, analysis, and reporting."
        }
    ],


    "Machine Learning Engineer": [

        {
            icon: "🤖",
            title: "Customer Churn Prediction",
            why: "A practical machine learning project that predicts possible customer churn.",
            improve: "You improve Python, preprocessing, machine learning, and model evaluation."
        },

        {
            icon: "🏠",
            title: "House Price Prediction",
            why: "A practical regression project using housing features.",
            improve: "You improve data preparation, regression, Python, and model evaluation."
        }
    ],


    "Web Developer": [

        {
            icon: "💻",
            title: "Personal Portfolio Website",
            why: "A practical way to demonstrate your web development skills through a real website.",
            improve: "You improve HTML, CSS, JavaScript, responsive design, and UI skills."
        },

        {
            icon: "📚",
            title: "Book Exchange Website",
            why: "Allows users to browse and exchange books through an interactive website.",
            improve: "You improve webpage design, JavaScript functionality, and user-interface skills."
        }
    ],


    "Software Developer": [

        {
            icon: "🎓",
            title: "Student Management System",
            why: "A practical application for storing and managing student information.",
            improve: "You improve programming, OOP, database concepts, and application development."
        },

        {
            icon: "📖",
            title: "Library Management System",
            why: "Helps manage books, students, borrowing, and returning records.",
            improve: "You improve programming logic, database handling, and software development skills."
        }
    ],


    "Full Stack Developer": [

        {
            icon: "🛒",
            title: "Online Shopping Website",
            why: "Combines frontend interaction with backend and database concepts.",
            improve: "You improve HTML, CSS, JavaScript, React, backend, and database skills."
        },

        {
            icon: "📚",
            title: "Book Exchange Website",
            why: "A practical application that can use frontend, backend, and database functionality.",
            improve: "You improve full stack development, API concepts, and database handling."
        }
    ],


    "Cyber Security Analyst": [

        {
            icon: "🛡️",
            title: "Network Security Monitor",
            why: "Helps understand how network activity can be monitored for suspicious behaviour.",
            improve: "You improve networking, security concepts, analytical thinking, and monitoring skills."
        },

        {
            icon: "🔐",
            title: "Password Security Analyzer",
            why: "Demonstrates how password strength can be evaluated using security rules.",
            improve: "You improve security awareness, programming logic, and problem-solving."
        }
    ],


    "Database Administrator": [

        {
            icon: "🗄️",
            title: "Student Database System",
            why: "Provides practical experience with storing, retrieving, and managing structured records.",
            improve: "You improve SQL, database design, queries, and administration concepts."
        },

        {
            icon: "📚",
            title: "Library Database",
            why: "Helps manage books, users, borrowing, and returning information in a database.",
            improve: "You improve relational database concepts, SQL, and data management."
        }
    ],


    "UI/UX Designer": [

        {
            icon: "📱",
            title: "Mobile App UI Design",
            why: "Helps you practice designing clean and user-friendly mobile interfaces.",
            improve: "You improve Figma, UI design, layouts, visual hierarchy, and prototyping."
        },

        {
            icon: "🎨",
            title: "College Event App Design",
            why: "A practical design project based on a familiar user environment.",
            improve: "You improve user research, wireframing, prototyping, and UX thinking."
        }
    ]
};


/* =========================================================
   START ANALYSIS
========================================================= */

function startAnalysis() {

    const app =
        document.getElementById("app");


    app.innerHTML = `

        <h2>Select Your Career Role</h2>

        <p>
            Choose the role you are preparing for.
        </p>

        <select id="role">

            <option value="">
                -- Select Role --
            </option>

            ${Object.keys(jobSkills)
                .map(role =>
                    `<option value="${role}">${role}</option>`
                )
                .join("")}

        </select>

        <br>

        <button onclick="showSkills()">
            Continue
        </button>
    `;
}


/* =========================================================
   SHOW CURRENT SKILLS
========================================================= */

function showSkills() {

    const role =
        document.getElementById("role").value;


    if (!role) {

        alert("Please select a career role.");

        return;
    }


    const app =
        document.getElementById("app");


    const skillsHTML =
        jobSkills[role]
            .map(skill => `

                <label class="skill-card">

                    <input
                        type="checkbox"
                        value="${skill}"
                    >

                    <span>
                        ${skillIcons[skill] || "⭐"} ${skill}
                    </span>

                </label>

            `)
            .join("");


    app.innerHTML = `

        <h2>Select Your Current Skills</h2>

        <p>
            Select the skills you already know.
        </p>

        <div class="skills">
            ${skillsHTML}
        </div>

        <button onclick="analyzeSkills('${role}')">
            Analyze Skills
        </button>
    `;
}


/* =========================================================
   ANALYZE SKILLS
========================================================= */

function analyzeSkills(role) {

    const selectedSkills = [

        ...document.querySelectorAll(
            '.skill-card input[type="checkbox"]:checked'
        )

    ].map(input => input.value);


    const requiredSkills =
        jobSkills[role];


    /* Calculate actual percentage */

    const matchPercentage =
        Math.round(
            (selectedSkills.length /
                requiredSkills.length) * 100
        );


    /* Find missing skills */

    const missingSkills =
        requiredSkills.filter(
            skill =>
                !selectedSkills.includes(skill)
        );


    /* Get readiness level */

    const readiness =
        getReadinessLevel(matchPercentage);


    /* Get roadmap */

    const roadmap =
        roadmaps[role] || [];


    /* Get projects */

    const recommendedProjects =
        projects[role] || [];


    const app =
        document.getElementById("app");


    app.innerHTML = `

        <h2>Skill Gap Analysis</h2>


        <!-- SKILL MATCH -->

        <div class="match-box">

            <div
                class="percentage"
                id="percentageValue"
            >
                0%
            </div>

            <p>
                Skill Match
            </p>

        </div>


        <!-- CAREER READINESS -->

        <div class="readiness">

            <strong>
                Career Readiness:
            </strong>

            ${readiness}

        </div>


        <!-- DYNAMIC PROGRESS -->

        <div class="progress-container">

            <div class="progress-title">
                Your Progress
            </div>


            <div class="progress-bar">

                <div
                    class="progress-fill"
                    id="progressFill"
                ></div>

            </div>


            <div class="progress-labels">

                <span>0%</span>

                <span>20%</span>

                <span>40%</span>

                <span>60%</span>

                <span>80%</span>

                <span>100%</span>

            </div>


            <div
                class="progress-percentage"
                id="progressPercentage"
            >
                0% completed
            </div>

        </div>


        <!-- PRESENT SKILLS -->

        <div class="result-section">

            <div class="section-title">

                <span class="section-icon">
                    ✓
                </span>

                <h3>
                    Present Skills
                </h3>

            </div>


            <p>

                ${
                    selectedSkills.length
                        ? selectedSkills.join(" • ")
                        : "No skills selected yet."
                }

            </p>

        </div>


        <!-- SKILLS TO BUILD -->

        <div class="result-section">

            <div class="section-title">

                <span class="section-icon">
                    !
                </span>

                <h3>
                    Skills to Build
                </h3>

            </div>


            <p>

                ${
                    missingSkills.length
                        ? missingSkills.join(" • ")
                        : "Great! You have selected all the required skills."
                }

            </p>

        </div>


        <!-- LEARNING ROADMAP -->

        <div class="result-section">

            <div class="section-title">

                <span class="section-icon">
                    →
                </span>

                <h3>
                    Personalized Learning Roadmap
                </h3>

            </div>


            <div class="roadmap">

                ${roadmap
                    .map((step, index) => `

                        <div class="roadmap-step">

                            <div class="roadmap-number">
                                ${index + 1}
                            </div>


                            <div class="roadmap-icon">
                                ${step.icon}
                            </div>


                            <div class="roadmap-content">

                                <h4>
                                    ${step.title}
                                </h4>

                                <p>
                                    ${step.text}
                                </p>

                            </div>

                        </div>

                    `)
                    .join("")}

            </div>

        </div>


        <!-- RECOMMENDED PROJECTS -->

        <div class="result-section">

            <div class="section-title">

                <span class="section-icon">
                    ✦
                </span>

                <h3>
                    Recommended Projects
                </h3>

            </div>


            <div class="projects">

                ${recommendedProjects
                    .map(project => `

                        <div class="project-card">

                            <div class="project-icon">
                                ${project.icon}
                            </div>


                            <div class="project-content">

                                <h4>
                                    ${project.title}
                                </h4>


                                <p>

                                    <strong>
                                        Why this project?
                                    </strong>

                                    ${project.why}

                                </p>


                                <p>

                                    <strong>
                                        What will you improve?
                                    </strong>

                                    ${project.improve}

                                </p>

                            </div>

                        </div>

                    `)
                    .join("")}

            </div>

        </div>


        <!-- MOTIVATION — LAST -->

        <div class="motivation">

            <p>
                ${getMotivation(matchPercentage)}
            </p>

        </div>


        <!-- START AGAIN -->

        <button onclick="restart()">
            Start Again
        </button>

    `;


    /* Start the actual percentage animation */

    animateProgress(matchPercentage);
}


/* =========================================================
   READINESS LEVEL
========================================================= */

function getReadinessLevel(percentage) {

    if (percentage >= 80) {

        return "Advanced";
    }


    if (percentage >= 50) {

        return "Intermediate";
    }


    return "Beginner";
}


/* =========================================================
   MOTIVATIONAL MESSAGE
========================================================= */

function getMotivation(percentage) {

    if (percentage >= 80) {

        return "You are building a strong foundation. Keep improving your skills and continue working on practical projects!";
    }


    if (percentage >= 50) {

        return "You are making good progress. Focus on your missing skills and keep practicing through projects!";
    }


    return "Every skill starts with learning. Follow your roadmap step by step and keep building your confidence!";
}


/* =========================================================
   RESTART
========================================================= */

function restart() {

    const app =
        document.getElementById("app");


    app.innerHTML = `

        <h1>
            Skill Gap Analyzer
        </h1>

        <p>
            Identify your current skills, discover your skill gaps,
            and get a personalized learning roadmap.
        </p>

        <button onclick="startAnalysis()">
            Start Analysis
        </button>

    `;
}


/* =========================================================
   ACTUAL PROGRESS ANIMATION
========================================================= */

function animateProgress(targetPercentage) {

    const progressFill =
        document.getElementById("progressFill");


    const percentageValue =
        document.getElementById("percentageValue");


    const progressPercentage =
        document.getElementById("progressPercentage");


    let currentPercentage = 0;


    const animationSpeed = 15;


    const timer =
        setInterval(() => {

            currentPercentage += 1;


            if (currentPercentage >= targetPercentage) {

                currentPercentage =
                    targetPercentage;

                clearInterval(timer);
            }


            progressFill.style.width =
                currentPercentage + "%";


            percentageValue.textContent =
                currentPercentage + "%";


            progressPercentage.textContent =
                currentPercentage + "% completed";


        }, animationSpeed);
}
