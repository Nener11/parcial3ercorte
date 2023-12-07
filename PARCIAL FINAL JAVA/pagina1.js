function calcular() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operacion = document.getElementById('operacion').value;
    var resultadoElement = document.getElementById('resultado');

    var resultado;

    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'No se puede dividir por cero';
            }
            break;
        default:
            resultado = 'No se puede hacer la operación';
    }

    resultadoElement.innerHTML = 'El resultado de la operacion: ' + resultado;
}
