const mainCerts =
[
    {
        "title":"Curso de Buenas Prácticas y Código Limpio en C#",
        "image":"../../Certificados/Curso de Buenas Prácticas y Código Limpio en CSharp.jpg"
    },
    {
        "title":"Curso Basico de Programacion con C#",
        "image":"../../Certificados/Curso Basico de Programacion con Csharp.jpg"
    },
    {
        "title":"Curso de pensamiento lógico: Algoritmos y diagramas de flujo",
        "image":"../../Certificados/algoritmosYDiagramasDeFlujo.jpeg"
    },
    {
        "title":"Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones",
        "image":"../../Certificados/Curso de Pensamiento Lógico Manejo de Datos, Estructuras y Funciones.jpg"
    },
    {
        "title":"Curso de pensamiento lógico: Funciones y estructuras de control",
        "image":"../../Certificados/funcionesYEstructurasDeControl.jpeg"
    },
    {
        "title":"Curso de pensamiento lógico: Lenguajes de programación",
        "image":"../../Certificados/LenguajesDeProgramacion.jpeg"
    },
    {
        "title":"Curso de Bases de Datos con SQL",
        "image":"../../Certificados/Curso de Bases de Datos con SQL.jpg"
    },
    {
        "title":"Curso de Fundamentos de Bases de Datos",
        "image":"../../Certificados/Curso_de_fundamentos_de_bases_de_datos.jpg"
    },
    {
        "title":"Curso de Fundamentos de Ingeniería de Software",
        "image":"../../Certificados/Curso de Fundamentos de Ingeniería de Software.jpg"
    }
];

const otherCerts =
[
    {
        "title":"Curso básico de javascript",
        "image":"../../Certificados/basicoDeJavaScript.jpeg"
    },
    {
        "title":"Curso practico de frontend developer",
        "image":"../../Certificados/practicoDeFrontendDeveloper.jpeg"
    },
    {
        "title":"Curso practico de JavaScript",
        "image":"../../Certificados/practicoDeJavaScript.jpeg"
    },
    {
        "title":"Curso practico de JavaScript",
        "image":"../../Certificados/asincronismo con javascript.png"
    },
    {
        "title":"Curso de Frontend Developer",
        "image":"../../Certificados/Curso de Frontend Developer.png"
    },
    {
        "title":"Curso de Introducción a la Terminal y Línea de Comandos",
        "image":"../../Certificados/Curso de Introducción a la Terminal y Línea de Comandos.png"
    },
    {
        "title":"Curso de JavaScript: Manipulación del DOM",
        "image":"../../Certificados/Curso de JavaScript_Manipulación del DOM.png"
    },
    {
        "title":"Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript",
        "image":"../../Certificados/Curso de NPM_Gestión de Paquetes y Dependencias en JavaScript.png"
    },
    {
        "title":"Curso de React.js",
        "image":"../../Certificados/Curso de React.js.png"
    },
    {
        "title":"Curso de Webpack",
        "image":"../../Certificados/Curso de Webpack.png"
    },
    {
        "title":"Curso de JavaScript Engine (V8) y el Navegador",
        "image":"../../Certificados/Curso de JavaScript Engine (V8) y el Navegador.jpg"
    },
    {
        "title":"Curso de computación básica",
        "image":"../../Certificados/ComputacionBasica.jpeg"
    },
    {
        "title":"Curso de chat GPT",
        "image":"../../Certificados/curso de chatGPT.png"
    },
    {
        "title":"Curso Gratis de Introducción a la Inteligencia Artificial",
        "image":"../../Certificados/Curso Gratis de Introducción a la Inteligencia Artificial.png"
    },
    {
        "title":"Curso de Creación de Páginas Web con Wordpress y No-code",
        "image":"../../Certificados/Curso de Creación de Páginas Web con Wordpress y No-code.png"
    },
    {
        "title":"Curso de Introducción a Ciberseguridad: Prevención de Ataques Informáticos",
        "image":"../../Certificados/Curso de Introducción a Ciberseguridad_Prevención de Ataques Informáticos.png"
    },
    {
        "title":"Curso Gratis de Ciberseguridad: Simulador Práctico en WhatsApp",
        "image":"../../Certificados/Curso Gratis de Ciberseguridad_Simulador Práctico en WhatsApp.png"
    },
];

function generateHtmlCertCards(certList) {
    let html = '<div class="cert-container">';

    certList.forEach((cert) => {
        html += `
            <div class="cert-card" onclick="openModal('${cert.image}', '${cert.title}')">
                <span class="cert-title">${cert.title}</span>
                <img class="cert-image" src="${cert.image}" alt="${cert.title}">
            </div>
        `;
    });

    html += '</div>';
    return html;
}

function openModal(imageSrc, title) {
    const modal = document.getElementById("certModal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImage.src = imageSrc;
    modalImage.alt = title;
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}