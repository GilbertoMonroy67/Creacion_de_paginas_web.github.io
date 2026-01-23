const projectsData = [
    {
        title: "Sistema de autenticación ASP.NET MVC + SQL",
        image: "../../IMG_Proyectos/Proyecto Login MVC Docker.png"
    },
    {
        title: "ToDo App con C#, Docker y SQL, Aplicando buenas prácticas y codigo limpio",
        image: "../../IMG_Proyectos/ToDo_Buenas_Practicas_Y_Codigo_Limpio_Csharp.png"
    },
    {
        title: "Videojuego Metroidvania 2D (Unity)",
        image: "../../IMG_Proyectos/Hadamop.png"
    },
    {
        title: "Videojuego 2D en JavaScript",
        image: "../../IMG_Proyectos/HerosHunter.png"
    },
    {
        title: "Landing Page con API de YouTube",
        image: "../../IMG_Proyectos/LandingPage.png"
    },
    {
        title: "E-commerce Yard Sale (HTML, CSS, JS, React)",
        image: "../../IMG_Proyectos/YardSale.png"
    },
    {
        title: "ChatBot en C++",
        image: "../../IMG_Proyectos/ChatBot.png"
    },
    {
        title: "To-Do App en JavaScript",
        image: "../../IMG_Proyectos/ToDoJavaScript.png"
    },
    {
        title: "Calculadora de ecuaciones en C++",
        image: "../../IMG_Proyectos/Calculadora.png"
    }
];

function generateHtmlProjectCards() {
    let html = '<div class="projects-container">';

    projectsData.forEach(project => {
        html += `
            <article class="project-card" onclick="openModal('${project.image}')">
                <img class="project-image" src="${project.image}" alt="${project.title}">
                <h3 class="project-title">${project.title}</h3>
            </article>
        `;
    });

    html += '</div>';

    html += `
        <div id="projectModal" class="modal">
            <div class="modal-content">
                <img id="modalImage" src="" alt="">
                <button class="close-btn" onclick="closeModal()">Cerrar</button>
            </div>
        </div>
    `;

    return html;
}

function openModal(image) {
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = image;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}
