const techData =
[
    {
        "name":"Javascript",
        "image":"./logostecnologias/JavaScript-logo.png"
    },
    {
        "name":"Html",
        "image":"./logostecnologias/HTML5_logo_and_wordmark.svg.png"
    },
    {
        "name":"CSS",
        "image":"./logostecnologias/CSS3_logo_and_wordmark.svg.png"
    },
    {
        "name":"Python",
        "image":"./logostecnologias/Python-logo-notext.svg.png"
    },
    {
        "name":"C#",
        "image":"./logostecnologias/Csharp_Logo.png"
    },
    {
        "name":"SQL",
        "image":"./logostecnologias/4299956.png"
    },
    {
        "name":"Git",
        "image":"./logostecnologias/git.png"
    },
    {
        "name":"Linux Terminal",
        "image":"./logostecnologias/linux-logo.png"
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

