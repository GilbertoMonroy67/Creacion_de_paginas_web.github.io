const techData =
[
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
        "name":"Python",
        "image":"./logosTecnologias/Python-logo-notext.svg.png"
    },
    {
        "name":"C#",
        "image":"./logosTecnologias/Csharp_Logo.png"
    },
    {
        "name":"SQL",
        "image":"./logosTecnologias/4299956.png"
    },
    {
        "name":"Git",
        "image":"./logosTecnologias/git.png"
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

