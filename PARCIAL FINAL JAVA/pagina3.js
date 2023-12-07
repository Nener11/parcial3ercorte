// pagina3.js

const numeroAleatorio = generarNumeroAleatorio();
let intentos = 0;

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

function verificarAdivinanza() {
    const numeroIngresado = document.getElementById("entradaNumero").value;
    const mensaje = document.getElementById("mensaje");

    if (numeroIngresado < 1 || numeroIngresado > 10) {
        mensaje.textContent = "Debes ingresar un número del 1 al 10";
        mensaje.style.fontSize = "16px";
    } else {
        intentos++;

        if (numeroIngresado == numeroAleatorio) {
            mensaje.textContent = "¡Felicidades! Adivinaste el número en " + intentos + " intentos.";
            mensaje.style.color = "green";
            mensaje.style.fontSize = "16px";
        } else {
            mensaje.textContent = "Inténtalo de nuevo.";
            mensaje.style.color = "red";
            mensaje.style.fontSize = "16px";
        }
    }
}

function reiniciarPagina() {
    location.reload(); // recarga la página
}
