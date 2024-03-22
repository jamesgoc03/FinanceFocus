const fechaIngreso = document.querySelector(".formulario-aplicacion__input--fecha");
const etiquetasSelect1 = document.querySelector(".--select1");
const etiquetasSelect2 = document.querySelector(".--select2");
const etiquetasSelect3 = document.querySelector(".--select3");
const formularioLimpiar = document.querySelector(".formulario-aplicacion");

fechaIngreso.addEventListener("input", ()=> {
    if(fechaIngreso.value) {
        fechaIngreso.style.color = "#ffffff";
    } else {
        fechaIngreso.style.color = "#888888";
    }
});

etiquetasSelect1.addEventListener("change", function() {
    if(this.value !== "")
        this.classList.add("eligio");
});

etiquetasSelect2.addEventListener("change", function() {
    if(this.value !== "")
        this.classList.add("eligio");
});

etiquetasSelect3.addEventListener("change", function() {
    if(this.value !== "")
        this.classList.add("eligio");
});


function placeholderSelect() {
    etiquetasSelect1.classList.remove("eligio");
    etiquetasSelect2.classList.remove("eligio");
    etiquetasSelect3.classList.remove("eligio");
}


formularioLimpiar.addEventListener("reset", (event) => {
    placeholderSelect();
    fechaIngreso.style.color = "#888888";
});