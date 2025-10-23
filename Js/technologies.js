const techData =
[
    {
        "name":"C#",
        "image":"./logosTecnologias/Csharp_Logo.png"
    },
    {
        "name":".NET",
        "image":"./logosTecnologias/NET.png"
    },
    {
        "name":"Unity",
        "image":"./logosTecnologias/Unity.png"
    },
    {
        "name":"Javascript",
        "image":"./logosTecnologias/JavaScript-logo.png"
    },
    {
        "name":"Html",
        "image":"./logosTecnologias/HTML5_logo_and_wordmark.svg.png"
    },
    {
        "name":"CSS",
        "image":"./logosTecnologias/CSS3_logo_and_wordmark.svg.png"
    },
    {
        "name":"SQL",
        "image":"./logosTecnologias/4299956.png"
    },
    {
        "name":"MySQL",
        "image":"./logosTecnologias/MySQL.png"
    },
    {
        "name":"PostgreSQL",
        "image":"./logosTecnologias/PostgreSQL.png"
    },
    {
        "name":"Git",
        "image":"./logosTecnologias/git.png"
    },
    {
        "name":"Ubuntu",
        "image":"./logosTecnologias/Ubuntu.png"
    },
    {
        "name":"Linux Terminal",
        "image":"./logosTecnologias/linux-logo.png"
    },
]


function generateHtmlTechCards() {
    let html = '<div class="tech-container">';

    techData.forEach((tech) => {
        html += `
            <div class="tech-card">
                <img class="tech-image" src="${tech.image}" alt="${tech.name}">
                <span class="tech-title">${tech.name}</span>
            </div>
        `;
    });

    html += '</div>';
    return html;
}

