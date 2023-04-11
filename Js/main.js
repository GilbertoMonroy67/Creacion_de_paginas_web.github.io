const tecnologias = document.querySelector(".ContenedorTecnologias");
const menuTecnologias = document.querySelector(".tec");
const certificados = document.querySelector(".contenedorCertificados");
const menuCertificados = document.querySelector(".certificados");

menuTecnologias.addEventListener("click", toggleTecMenu);
menuCertificados.addEventListener("click", toggleStudyMenu);

function toggleTecMenu (){
    tecnologias.classList.toggle("inactive")
}

function toggleStudyMenu (){
    certificados.classList.toggle("inactive")
}
