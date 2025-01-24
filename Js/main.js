const tecnologias = document.querySelector(".ContenedorTecnologias");
const menuTecnologias = document.querySelector(".tec");
const certificados = document.querySelector(".contenedorCertificados");
const menuCertificados = document.querySelector(".certificados");
const proyectos = document.querySelector(".ContenedorProyectos");
const menuProyectos = document.querySelector(".pry");

menuTecnologias.addEventListener("click", toggleTecMenu);
menuCertificados.addEventListener("click", toggleStudyMenu);
menuProyectos.addEventListener("click", toggleProyectMenu);

function toggleTecMenu (){
    const isStudyMenuClosed = certificados.classList.contains("inactive");

    if(!isStudyMenuClosed){
        certificados.classList.toggle("inactive");
    }

    const isProyectMenuClosed = proyectos.classList.contains("inactive");

    if(!isProyectMenuClosed){
        proyectos.classList.toggle("inactive");
    }

    tecnologias.classList.toggle("inactive")
}

function toggleStudyMenu (){
    const isTecMenuClosed = tecnologias.classList.contains("inactive");

    if(!isTecMenuClosed){
        tecnologias.classList.toggle("inactive");
    }

    const isProyectMenuClosed = proyectos.classList.contains("inactive");

    if(!isProyectMenuClosed){
        proyectos.classList.toggle("inactive");
    }

    certificados.classList.toggle("inactive");
}

function toggleProyectMenu (){
    const isTecMenuClosed = tecnologias.classList.contains("inactive");

    if(!isTecMenuClosed){
        tecnologias.classList.toggle("inactive");
    }

    const isStudyMenuClosed = certificados.classList.contains("inactive");

    if(!isStudyMenuClosed){
        certificados.classList.toggle("inactive");
    }

    proyectos.classList.toggle("inactive");
}