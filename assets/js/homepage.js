// Personal details
const introductionData = {
    imageUrl: "assets/images/home/Mridul_headshot.jpeg",
    name: "Hi, I am Mridul Jhawar!!",
    description: "AI & NLP Engineer | Architecting Multilingual Models and Human Action Recognition Systems | AI Innovator | USC & WVU Alum | Photographer & World Explorer"
};

// Tech stack categories
const techStackData = [
    {
        title: "Machine Learning",
        skills: ["Time Series Forecasting", "Regression Modeling", "Keras", "PyTorch", "NLTK", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "XGBoost"]
    },
    {
        title: "Languages and Databases",
        skills: ["Python", "JAVA", "HTML/CSS", "JavaScript", "MongoDB", "SQL", "DynamoDB"]
    },
    {
        title: "Tools and Infrastructure",
        skills: ["Amazon Web Services", "PySpark", "Hadoop", "Terraform", "Jenkins", "OpenShift", "Docker"]
    },
    {
        title: "Frontend",
        skills: ["HTML/CSS", "JavaScript", "React"]
    }
];

// Summary section
const summaryData = `
    <h2>Summary</h2>
    <p>I am an AI & Machine Learning Engineer specializing in Natural Language Processing (NLP) and Large Language Models (LLMs). With a robust background in data science and a passion for developing innovative AI solutions, I have successfully held roles as a data analyst, data scientist, and data engineer. My expertise lies in designing and optimizing machine learning models, building scalable data pipelines, and enhancing user experiences through advanced AI technologies.</p>
    <p>I hold a Master's degree in Data Science from the University of Southern California and a Bachelor's degree in Biochemistry from West Virginia University, complemented by minors in Mathematics, Statistics, and Psychology. This interdisciplinary education equips me with a unique perspective to tackle complex, data-driven challenges across various domains, including healthcare and technology.</p>
    <p>At HuroAI, I led the development of a real-time multilingual speech-to-speech model, reducing the Word Error Rate (WER) by 40% and cutting translation latency to just 2 seconds per sentence. I utilized PyTorch and distributed training on GCP and Vertex AI to ensure scalable and efficient performance. Additionally, I spearheaded projects involving Retrieval-Augmented Generation (RAG), enhancing model accuracy and contextual understanding by integrating retrieval-based techniques with large language models.</p>
    <p>My work extends to prompt engineering, model fine-tuning, and data annotation, where I have successfully improved model performance through iterative refinement and human feedback integration. I thrive in collaborative environments, working cross-functionally to deliver impactful AI solutions that drive accessibility and user engagement.</p>
    <p>Outside of my professional endeavors, I enjoy hiking, exploring new places, experimenting with new recipes, and staying updated with the latest advancements in AI and technology. These personal interests help me maintain a balanced and creative mindset, fueling my passion for continuous learning and innovation.</p>
    <p>If you're interested in leveraging cutting-edge AI technologies to solve real-world problems or exploring collaboration opportunities, let's connect! I'm always eager to discuss exciting projects and ways to make AI more powerful and accessible.</p>
`;


// Function to render introduction
function renderIntroduction() {
    const introContainer = document.getElementById('introduction');
    const introContent = `
        <img class="homepage-headshot" src="${introductionData.imageUrl}" alt="${introductionData.name}">
        <div class="text-content">
            <p>${introductionData.name}</p>
            <p class="intro-sub-text">${introductionData.description}</p>
        </div>
    `;
    introContainer.innerHTML = introContent;
}

// Function to render tech stack
function renderTechStack() {
    const techStackContainer = document.getElementById('techStack');
    techStackData.forEach(category => {
        const categoryContent = `
            <div class="tech-category">
                <p class="tech-title">${category.title}</p>
                <ul>${category.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
            </div>
        `;
        techStackContainer.innerHTML += categoryContent;
    });
}

// Function to render summary
function renderSummary() {
    const summaryContainer = document.getElementById('summary');
    summaryContainer.innerHTML = summaryData;
}

// Render everything on page load
document.addEventListener('DOMContentLoaded', () => {
    renderIntroduction();
    renderTechStack();
    renderSummary();
});