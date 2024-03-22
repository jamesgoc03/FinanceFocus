const barraLateral = document.querySelector(".barra-lateral-minimizada");
let estaAbierta = false;
let estaAbiertaMinimizada = false;

const botonCerrarAbrirMenu = document.querySelector(".barra-lateral__boton-cerrar-abrir");
const textosMenuNavegacion = document.querySelectorAll(".barra-lateral__texto--oculto");
const iconoMenu = document.querySelector(".barra-lateral__icono--menu");

const botonCerrarAbrirMenuIndividual = document.querySelector(".boton-cerrar-abrir-menu");
const iconoMenuIndividual = document.querySelector(".boton-cerrar-abrir-menu__icono");

botonCerrarAbrirMenuIndividual.addEventListener("click", ()=>{
    if(estaAbiertaMinimizada){
        cerrarBarraNavegacionMinimizada();
    } else {
        abrirBarraNavegacionMinimizada();
    }
});

function abrirBarraNavegacionMinimizada () {
    barraLateral.classList.add("barra-lateral-minimizada--abierta");
    estaAbiertaMinimizada = true;
}

function cerrarBarraNavegacionMinimizada () {
    barraLateral.classList.remove("barra-lateral-minimizada--abierta");
    estaAbiertaMinimizada = false;
}

function rotarIconoMenu() {
    if (estaAbierta) {
        iconoMenu.classList.remove("barra-lateral__icono--menu-abierto");
        iconoMenu.classList.add("barra-lateral__icono--menu-cerrado");
    } else {
        iconoMenu.classList.add("barra-lateral__icono--menu-abierto");
        iconoMenu.classList.remove("barra-lateral__icono--menu-cerrado");
    }
}

function abrirBarraNavegacion() {
    rotarIconoMenu();
    barraLateral.classList.add("barra-lateral");
    textosMenuNavegacion.forEach((span) => {
        span.classList.add("barra-lateral__texto");
    });
    estaAbierta = true;
}

function cerrarBarraNavegacion() {
    rotarIconoMenu();
    barraLateral.classList.remove("barra-lateral");
    textosMenuNavegacion.forEach((span) => {
        span.classList.remove("barra-lateral__texto");
    });
    estaAbierta = false;
}

botonCerrarAbrirMenu.addEventListener("click", ()=>{
    if(estaAbierta){
        cerrarBarraNavegacion();
    } else {
        abrirBarraNavegacion();
    }
});

document.addEventListener("click", (event) => {
    const targetElement = event.target;
    const barraLateralElement = targetElement.closest(".barra-lateral-minimizada");
    const botonCerrarAbrirMenuIndividualElement = targetElement.closest(".boton-cerrar-abrir-menu");

    if(window.innerWidth <= 1100) {
        if ((!barraLateralElement && !botonCerrarAbrirMenuIndividualElement) && (estaAbierta && estaAbiertaMinimizada)) {
            cerrarBarraNavegacion();
            cerrarBarraNavegacionMinimizada();
        }
        if ((!barraLateralElement && !botonCerrarAbrirMenuIndividualElement) && (estaAbiertaMinimizada)) {
            cerrarBarraNavegacionMinimizada();
        }
    }else {
        if (!barraLateralElement && estaAbierta) {
            cerrarBarraNavegacion();
        }
    }
});