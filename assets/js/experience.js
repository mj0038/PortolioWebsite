// Experience data
const experiences = [
    {
        title: "AI & NLP Engineer",
        companyLogo: "assets/icons/experience/huro_logo.jpeg",
        techStack: ["Python", "PyTorch", "GCP (Vertex AI)", "AWS", "Wav2Vec2-BERT", "Whisper", "Distributed Training", "RAG (Retrieval-Augmented Generation)", "NLP", "Model Fine-tuning", "Speech-to-Speech Translation", "A/B Testing", "Unstructured Data Cleaning"],
        project1: {
            title: "Real-Time Multilingual Speech-to-Speech Model",
            description: "Led the development of a real-time multilingual speech-to-speech model, reducing Word Error Rate (WER) by 40% and cutting translation latency to 2 seconds per sentence. Leveraged distributed training on GCP and Vertex AI to ensure scalable performance."
        },
        project2: {
            title: "Infrastructure Deployment and A/B Testing for Wav2Vec2 and Whisper Models",
            description: "Deployed and set up model infrastructure on GCP and AWS, integrating Wav2Vec2-BERT and Whisper models. Conducted A/B testing for both models, focusing on transcription accuracy and performance. Managed unstructured data cleaning, improving model performance across varied datasets."
        }
    },
    {
        title: "Data Engineer",
        companyLogo: "assets/icons/experience/adp-logo.png",
        techStack: ["Python", "SQL", "PySpark", "AWS (Glue, Lambda, State Machine, S3, SQS, IAM)", "Databricks", "Jenkins", "Postman", "Terraform", "Jira", "Git"],
        project1: {
            title: "Streamlining ETL Workflows for a legacy system",
            description: "The company was struggling with a legacy data system that was sluggish and difficult to scale. Recognizing the need for change, we set a clear goal: to refine the ETL process for seamless data migration to DynamoDB."
        },
        project2: {
            title: "Pioneering DevOps for a New Product Launch",
            description: "In our quest to launch a revolutionary product, I played a critical role in creating a DevOps framework that would lay the foundation for the future."
        }
    },
    {
        title: "Data Scientist",
        companyLogo: "assets/icons/experience/FundExpert_white.jpeg",
        techStack: ["Python", "SQL", "PyTorch", "AWS (Glue, Lambda, State Machine, S3, SQS, IAM)"],
        project1: {
            title: "Fraud Detection and Data Engineering",
            description: "As a Data Scientist, I took on the task of tackling fraud in the insurance sector, a domain plagued by deceptive claims and obscured data."
        },
        project2: {
            title: "Data Engineering with Apache Airflow",
            description: "Responsible for orchestrating complex ETL workflows using Apache Airflow processing over 90 terabytes of data."
        }
    },
    {
        title: "Data Scientist",
        companyLogo: "assets/icons/experience/DE.png",
        techStack: ["Python", "SQL", "PySpark", "AWS (Glue, Lambda, State Machine, S3, SQS, IAM)", "Databricks", "Jenkins", "Postman", "Terraform", "Jira", "Git"],
        project1: {
            title: "MediOptima: Data-Driven Healthcare Solutions",
            description: "I embarked on a transformative journey with Devesh Enterprises, a local business known for its trusted supply of generic medicines."
        }
    },
    {
        title: "Data Analyst",
        companyLogo: "assets/icons/experience/wvu-logo.svg",
        techStack: ["Python", "SQL", "Tableau", "CSS", "HTML", "Git", "ImageJ"],
        project1: {
            title: "Early Detection of Alzheimers",
            description: "The core of my role involved the intricate analysis of genetic data from mice, a crucial element in Alzheimer's research."
        }
    }
];

// Function to render experience data
function renderExperiences() {
    const container = document.getElementById('experience-content');
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
                    ${experience.project2 ? `<p><strong>${experience.project2.title}</strong><br>${experience.project2.description}</p>` : ''}
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

// Call the render function on DOMContentLoaded
document.addEventListener('DOMContentLoaded', renderExperiences);
