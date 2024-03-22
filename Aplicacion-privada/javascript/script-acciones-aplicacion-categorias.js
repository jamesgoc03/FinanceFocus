const etiquetasSelect1 = document.querySelector(".--select1");
const etiquetasSelect4 = document.querySelector(".--select4");
const formularioLimpiar = document.querySelector(".formulario-aplicacion");

etiquetasSelect1.addEventListener("change", function() {
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
    etiquetasSelect1.classList.remove("eligio");
}


formularioLimpiar.addEventListener("reset", (event) => {
    placeholderSelect();
});