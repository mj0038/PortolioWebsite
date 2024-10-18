// Personal details
const introductionData = {
    imageUrl: "assets/images/home/Mridul_headshot.jpeg",
    name: "Hi, I am Mridul Jhawar!!",
    description: "USC Data Science Graduate | AI & ML Enthusiast | Open to Opportunities | Breaking into the world of Software Engineering | Photographer | Serial Traveler | WVU Alum"
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
    <p>As an aspiring data scientist with a passion for software development and product building, I have interned as a data analyst, data scientist, and data engineer. I am deeply passionate and an advocate for integrating technology within healthcare to innovate and improve outcomes.</p>
    <p>I hold a Master's degree in Data Science from the University of Southern California and a Bachelor's degree in Biochemistry from West Virginia University, with minors in Mathematics, Statistics, and Psychology. This unique blend of science and analytics equips me with the skills necessary to tackle complex data-driven challenges.</p>
    <p>When I'm not immersed in data, you'll find me outdoors, hiking and exploring new places, or at home trying out new recipes and binge-watching Netflix. These personal passions help me maintain a balanced and joyful life.</p>
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
