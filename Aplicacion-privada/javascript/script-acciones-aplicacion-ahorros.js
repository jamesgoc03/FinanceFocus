const fechaIngreso = document.querySelector(".formulario-aplicacion__input--fecha");
const etiquetasSelect2 = document.querySelector(".--select2");
const etiquetasSelect3 = document.querySelector(".--select3");
const etiquetasSelect4 = document.querySelector(".--select4");
const formularioLimpiar = document.querySelector(".formulario-aplicacion");

fechaIngreso.addEventListener("input", ()=> {
    if(fechaIngreso.value) {
        fechaIngreso.style.color = "#ffffff";
    } else {
        fechaIngreso.style.color = "#888888";
    }
});

etiquetasSelect2.addEventListener("change", function() {
    if(this.value !== "")
        this.classList.add("eligio");
});

etiquetasSelect3.addEventListener("change", function() {
    if(this.value !== "")
        this.classList.add("eligio");
});

etiquetasSelect4.addEventListener("change", function() {
    if (this.value !== "") {
        this.classList.add("eligio");
    }
    if(this.value === "todos"){
        this.classList.remove("eligio")
    }
});


function placeholderSelect() {
    etiquetasSelect2.classList.remove("eligio");
    etiquetasSelect3.classList.remove("eligio");
}


formularioLimpiar.addEventListener("reset", (event) => {
    placeholderSelect();
    fechaIngreso.style.color = "#888888";
});