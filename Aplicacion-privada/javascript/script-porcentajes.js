let ProgresoCircular1 = document.querySelector(".porcentaje__progreso-circular1");
let progresoCircularValor1 = document.querySelector(".progreso-circular__valor1");

let valorProgresoInicio1 = 0;
let valorProgresoFin1 = 25;
let velocidad = 25;

let progreso1 = setInterval (()=>{
    valorProgresoInicio1++;

    ProgresoCircular1.style.background = `conic-gradient(white ${valorProgresoInicio1 * 3.6}deg, var(--color-tenue) 0deg)`;

    if(valorProgresoInicio1 == valorProgresoFin1) {
        clearInterval(progreso1);
    }
}, velocidad);


let ProgresoCircular2 = document.querySelector(".porcentaje__progreso-circular2");
let progresoCircularValor2 = document.querySelector(".progreso-circular__valor2");
let valorProgresoInicio2 = 0;
let valorProgresoFin2 = 80;
let progreso2 = setInterval (()=>{
    valorProgresoInicio2++;

    ProgresoCircular2.style.background = `conic-gradient(white ${valorProgresoInicio2 * 3.6}deg, var(--color-tenue) 0deg)`;

    if(valorProgresoInicio2 == valorProgresoFin2) {
        clearInterval(progreso2);
    }
}, velocidad);


let ProgresoCircular3 = document.querySelector(".porcentaje__progreso-circular3");
let progresoCircularValor3 = document.querySelector(".progreso-circular__valor3");
let valorProgresoInicio3 = 0;
let valorProgresoFin3 = 50;
let progreso3 = setInterval (()=>{
    valorProgresoInicio3++;

    ProgresoCircular3.style.background = `conic-gradient(white ${valorProgresoInicio3 * 3.6}deg, var(--color-tenue) 0deg)`;

    if(valorProgresoInicio3 == valorProgresoFin3) {
        clearInterval(progreso3);
    }
}, velocidad);