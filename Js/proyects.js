const certData =
[
    {
        "title":"Videojuego en Unity 2D Metroidevania Hadamop (en desarrollo)",
        "image":"../../IMG_Proyectos/Hadamop.png"
    },
    {
        "title":"Login con MVC con conexión a base de datos en Docker",
        "image":"../../IMG_Proyectos/Proyecto Login MVC Docker.png"
    },
    {
        "title":"Videojuego JavaScript 2D: Heroes Hunter (en desarrollo)",
        "image":"../../IMG_Proyectos/HerosHunter.png"
    },
    {
        "title":"Landing Page con API de YouTube",
        "image":"../../IMG_Proyectos/LandingPage.png"
    },
    {
        "title":"Yard Sale Proyecto de e-commerce con HTML, CSS, JavaScript y React en curso de Platzi",
        "image":"../../IMG_Proyectos/YardSale.png"
    },
    {
        "title":"ChatBot con C++ Proyecto escolar",
        "image":"../../IMG_Proyectos/ChatBot.png"
    },
    {
        "title":"ToDoJavaScript Manipulacion del DOM",
        "image":"../../IMG_Proyectos/ToDoJavaScript.png"
    },
    {
        "title":"Calculadora de ecuaciones en C++",
        "image":"../../IMG_Proyectos/Calculadora.png"
    },
]



function generateHtmlCertCards() {
        let html = '<div class="cert-container">';
    
        certData.forEach((cert, index) => {
            html += `
                <div class="cert-card" onclick="openModal('${cert.image}', '${cert.title}')">
                    <span class="cert-title">${cert.title}</span>
                    <img class="cert-image" src="${cert.image}" alt="${cert.title}">
                </div>
            `;
        });
    
        html += '</div>';
    
        html += `
            <div id="certModal" class="modal">
                <div class="modal-content">
                    <img id="modalImage" src="" alt="">
                    <button class="close-btn" onclick="closeModal()">Cerrar</button>
                </div>
            </div>
        `;
    
        return html;
    }


function openModal(imageSrc, title) {
    const modal = document.getElementById("certModal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "flex"; // Mostrar modal
    modalImage.src = imageSrc;
    modalImage.alt = title;
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}