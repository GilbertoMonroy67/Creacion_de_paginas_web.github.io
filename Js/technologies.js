const technologies = [
    {
        category: "Core Backend .NET",
        items: [
            {
                name: "C#",
                image: "./logosTecnologias/Csharp_Logo.png",
                role: "Lógica de negocio y Programación Orientada a Objetos"
            },
            {
                name: ".NET",
                image: "./logosTecnologias/NET.png",
                role: "Desarrollo backend y estructura de aplicaciones"
            },
            {
                name: "ASP.NET",
                image: "./logosTecnologias/ASP_Net.png",
                role: "Desarrollo de aplicaciones web con el framework ASP.NET utilizando la arquitectura Modelo–Vista–Controlador (MVC)."
            },
            {
                name: "SQL",
                image: "./logosTecnologias/4299956.png",
                role: "Persistencia de datos y consultas"
            }
        ]
    },
    {
        category: "Soporte Técnico",
        items: [
            {
                name: "MySQL",
                image: "./logosTecnologias/MySQL.png",
                role: "Bases de datos relacionales"
            },
            {
                name: "Git",
                image: "./logosTecnologias/git.png",
                role: "Control de versiones y trabajo en equipo"
            },
            {
                name: "HTML5",
                image: "./logosTecnologias/HTML5_logo_and_wordmark.svg.png",
                role: "Estructura semántica"
            },
            {
                name: "CSS3",
                image: "./logosTecnologias/CSS3_logo_and_wordmark.svg.png",
                role: "Diseño y maquetación"
            },
            {
                name: "JavaScript",
                image: "./logosTecnologias/JavaScript-logo.png",
                role: "Interactividad básica y consumo de APIs"
            }
        ]
    }
];

/* =========================
   HTML GENERATOR
========================= */
function generateHtmlTechCards() {
    let html = '';

    technologies.forEach((group) => {
        html += `
            <section class="tech-group">
                <h4 class="tech-category">${group.category}</h4>
                <div class="tech-container">
        `;

        group.items.forEach((tech) => {
            html += `
                <div class="tech-card">
                    <img class="tech-image" src="${tech.image}" alt="${tech.name}">
                    <span class="tech-title">${tech.name}</span>
                    <span class="tech-role">${tech.role}</span>
                </div>
            `;
        });

        html += `
                </div>
            </section>
        `;
    });

    return html;
}

/* =========================
   DOM LOAD
========================= */
document.addEventListener('DOMContentLoaded', () => {
    const techContainer = document.getElementById('tech-list');

    if (techContainer) {
        techContainer.innerHTML = generateHtmlTechCards();
    }
});
