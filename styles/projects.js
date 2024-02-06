let hoverTimeout;

// Data for projects (ensure this is accurate and complete)
const projects = [
    {
        id: 1,
        title: 'Personal Nutritionist using Gemini Pro, Langchain and Streamlit',
        description: 'Detailed description for Project 1...',
        imageUrl: 'path/to/image1.jpg',
        // ... other details
    },
    // ... other projects
];

// Function to show and hide arrows based on scroll position
function updateArrowVisibility() {
    const container = document.querySelector('.section-content');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const singleProjectWidth = document.querySelector('.content').clientWidth;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    leftArrow.style.display = container.scrollLeft > singleProjectWidth ? 'block' : 'none';
    rightArrow.style.display = container.scrollLeft < maxScrollLeft - singleProjectWidth ? 'block' : 'none';
}

// Function to shift the projects slide left or right
function shiftSlide(direction) {
    const container = document.querySelector('.section-content');
    const singleProjectWidth = document.querySelector('.content').clientWidth;
    const totalScrollWidth = container.scrollWidth;
    const maxScrollLeft = totalScrollWidth - container.clientWidth;

    // Calculate the width of the scroll based on the visible width of the container
    const scrollStep = container.clientWidth - singleProjectWidth; // Scrolls by almost one full view minus one project

    if (direction === 1 && container.scrollLeft < maxScrollLeft) {
        container.scrollLeft += scrollStep;
    } else if (direction === -1 && container.scrollLeft > 0) {
        container.scrollLeft -= scrollStep;
    }
    
    updateArrowVisibility();
}

// Function to handle mouse enter on project
function handleMouseEnter(projectId) {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
        showProjectDetails(projectId);
    }, 1000); // 1 second delay
}

// Function to handle mouse leave on project
function handleMouseLeave() {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(()=>{
        showProjectDetails(projectId)
    }, 3000)
    closePopup(); // Optional: close popup immediately when mouse leaves
}

// Function to show project details either instantly on click or after hover
function showProjectDetails(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project && !document.querySelector('.project-popup')) {
        const popupContent = `
            <div class="project-popup" onclick="closePopup()">
                <div class="project-popup-content">
                    <span class="project-popup-close">&times;</span>
                    <img src="${project.imageUrl}" alt="${project.title}" />
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                </div>
            </div>
        `;
        document.body.innerHTML += popupContent;
        document.querySelector('.project-popup').style.display = 'block';
    }
}

// Function to show project details instantly on click (bypassing the hover delay)
function showProjectDetailsInstantly(projectId) {
    clearTimeout(hoverTimeout);
    showProjectDetails(projectId);
}

// Function to close the project detail popup
function closePopup() {
    const popup = document.querySelector('.project-popup');
    if (popup) {
        popup.remove();
    }
}

// Event listeners for initialization and scroll events
document.querySelector('.section-content').addEventListener('mouseenter', (event) => {
    if (event.target.matches('.content')) {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
            // Assuming the data-id attribute is set to the project's id
            const projectId = event.target.getAttribute('data-id');
            showProjectDetails(projectId);
        }, 1000); // 1 second delay
    }
}, true);

document.querySelector('.section-content').addEventListener('click', (event) => {
    if (event.target.matches('.view-details-arrow')) {
        clearTimeout(hoverTimeout);
        const projectId = event.target.closest('.content').getAttribute('data-id');
        showProjectDetailsInstantly(projectId);
    }
}, true);