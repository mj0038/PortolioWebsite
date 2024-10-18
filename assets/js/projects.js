let hoverTimeout;

// Data for projects
const projects = [
    {
        id: 1,
        title: 'Personal Nutritionist using Gemini Pro, Langchain and Streamlit',
        description: 'An app built with Gemini Pro, Langchain, and Streamlit to provide personalized nutrition plans.',
        imageUrl: 'assets/icons/projects/nutritionapp_thumbnail.jpeg'
    },
    {
        id: 2,
        title: 'Comparative Analysis of LLMs: DialogGPT vs LLaMA',
        description: 'A comprehensive analysis between DialogGPT and LLaMA models for natural language processing.',
        imageUrl: 'assets/icons/projects/llmcompare-logo.jpeg'
    },
    {
        id: 3,
        title: 'Chatbot with LLaMA-2 and Python',
        description: 'A chatbot built using LLaMA-2, Langchain, and Python, deployed on a Flask server.',
        imageUrl: 'assets/icons/projects/llama-2.jpeg'
    }
];

// Function to update arrow visibility
function updateArrowVisibility() {
    const container = document.querySelector('.section-content');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const singleProjectWidth = document.querySelector('.content').clientWidth;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    leftArrow.style.display = container.scrollLeft > singleProjectWidth ? 'block' : 'none';
    rightArrow.style.display = container.scrollLeft < maxScrollLeft - singleProjectWidth ? 'block' : 'none';
}

// Function to shift the slide
function shiftSlide(direction) {
    const container = document.querySelector('.section-content');
    const singleProjectWidth = document.querySelector('.content').clientWidth;
    const scrollStep = container.clientWidth - singleProjectWidth;

    if (direction === 1) {
        container.scrollLeft += scrollStep;
    } else if (direction === -1) {
        container.scrollLeft -= scrollStep;
    }

    updateArrowVisibility();
}

// Function to handle mouse enter
function handleMouseEnter(projectId) {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
        showProjectDetails(projectId);
    }, 1000); // 1 second delay
}

// Function to handle mouse leave
function handleMouseLeave() {
    clearTimeout(hoverTimeout);
    closePopup();
}

// Function to show project details
function showProjectDetails(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project && !document.querySelector('.project-popup')) {
        const popupContent = `
            <div class="project-popup" onclick="closePopup()">
                <div class="project-popup-content">
                    <span class="project-popup-close" onclick="closePopup()">&times;</span>
                    <img src="${project.imageUrl}" alt="${project.title}">
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', popupContent);
        document.querySelector('.project-popup').style.display = 'block';
    }
}

// Function to show project details instantly on click
function showProjectDetailsInstantly(projectId) {
    clearTimeout(hoverTimeout);
    showProjectDetails(projectId);
}

// Function to close the popup
function closePopup() {
    const popup = document.querySelector('.project-popup');
    if (popup) {
        popup.remove();
    }
}

// Event listeners for mouse enter, leave, and click
document.querySelector('.section-content').addEventListener('mouseenter', (event) => {
    if (event.target.matches('.content')) {
        const projectId = event.target.getAttribute('data-id');
        handleMouseEnter(projectId);
    }
}, true);

document.querySelector('.section-content').addEventListener('mouseleave', (event) => {
    if (event.target.matches('.content')) {
        handleMouseLeave();
    }
}, true);

document.querySelector('.section-content').addEventListener('click', (event) => {
    if (event.target.matches('.view-details-arrow')) {
        const projectId = event.target.closest('.content').getAttribute('data-id');
        showProjectDetailsInstantly(projectId);
    }
}, true);
