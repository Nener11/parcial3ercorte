// script.js

function convertirTemperatura() {
    const entradaTemperatura = document.getElementById("temperatura");
    const unidadDesdeSelect = document.getElementById("desdeUnidad");
    const unidadHastaSelect = document.getElementById("hastaUnidad");
    const parrafoResultado = document.getElementById("resultado");

    const temperatura = parseFloat(entradaTemperatura.value);

    if (!isNaN(temperatura)) {
        const desdeUnidad = unidadDesdeSelect.value;
        const haciaUnidad = unidadHastaSelect.value;

        let temperaturaConvertida;

        if (desdeUnidad === "fahrenheit" && haciaUnidad === "celsius") {
            temperaturaConvertida = (temperatura - 32) * (5 / 9);
        } else if (desdeUnidad === "fahrenheit" && haciaUnidad === "kelvin") {
            temperaturaConvertida = (temperatura - 32) * (5 / 9) + 273.15;
        } else if (desdeUnidad === "celsius" && haciaUnidad === "fahrenheit") {
            temperaturaConvertida = (temperatura * 9 / 5) + 32;
        } else if (desdeUnidad === "celsius" && haciaUnidad === "kelvin") {
            temperaturaConvertida = temperatura + 273.15;
        } else if (desdeUnidad === "kelvin" && haciaUnidad === "fahrenheit") {
            temperaturaConvertida = (temperatura - 273.15) * 9 / 5 + 32;
        } else if (desdeUnidad === "kelvin" && haciaUnidad === "celsius") {
            temperaturaConvertida = temperatura - 273.15;
        } else {
            parrafoResultado.textContent = "Elija las conversiones";
            parrafoResultado.style.fontSize = "16px";
            return;
        }

        parrafoResultado.textContent = `${haciaUnidad.charAt(0).toUpperCase() + haciaUnidad.slice(1)}: ${temperaturaConvertida.toFixed(2)}`;
    } else {
        parrafoResultado.textContent = "Ingrese bien loa temperatura";
        parrafoResultado.style.fontSize = "16px";
    }
}
