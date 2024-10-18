// Log to confirm JS is running
console.log("JavaScript is running!");

// Mock experience data
const experiences = [
    {
        title: "Application Developer Intern",
        companyLogo: "assets/icons/experience/adp-logo.png",
        techStack: ["Python", "SQL", "PySpark", "AWS (Glue, Lambda, State Machine, S3, SQS, IAM)", "Databricks", "Jenkins", "Postman", "Terraform", "Jira", "Git"],
        project1: {
            title: "Streamlining ETL Workflows for a legacy system",
            description: "The company was struggling with a legacy data system that was sluggish and difficult to scale..."
        },
        project2: {
            title: "Pioneering DevOps for a New Product Launch",
            description: "In our quest to launch a revolutionary product, I played a critical role in creating a DevOps framework..."
        }
    },
    {
        title: "Data Scientist",
        companyLogo: "assets/icons/experience/FundExpert_white.jpeg",
        techStack: ["Python", "SQL", "PyTorch", "AWS (Glue, Lambda, State Machine, S3, SQS, IAM)"],
        project1: {
            title: "Fraud Detection and Data Engineering",
            description: "As a Data Scientist, I took on the task of tackling fraud in the insurance sector..."
        },
        project2: {
            title: "Data Engineering with Apache Airflow",
            description: "Responsible for orchestrating complex ETL workflows using Apache Airflow processing over 90 terabytes of data..."
        }
    },
];

// Render experiences dynamically
function renderExperiences() {
    const container = document.querySelector('.content-wrap');
    experiences.forEach((experience, index) => {
        const content = `
            <div class="content" onclick="openModal('modalProject${index}')">
                <div class="photo-grid">
                    <img class="company-logo" src="${experience.companyLogo}" alt="${experience.title} Logo">
                </div>
                <div class="experience-details">
                    <h3>${experience.title}</h3>
                    <div class="tech-stack">
                        ${experience.techStack.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>

            <div id="modalProject${index}" class="modal">
                <div class="modal-content">
                    <span class="close-button" onclick="closeModal('modalProject${index}')">&times;</span>
                    <h3>${experience.title}</h3>
                    <p><strong>${experience.project1.title}</strong><br>${experience.project1.description}</p>
                    <p><strong>${experience.project2.title}</strong><br>${experience.project2.description}</p>
                </div>
            </div>
        `;
        container.innerHTML += content;
    });
}

// Modal open and close functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Call the function after DOM loads
document.addEventListener('DOMContentLoaded', renderExperiences);
