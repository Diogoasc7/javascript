function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacao = document.getElementById("operacao").value;
    
    var resultado;
    if (operacao == "soma") {
        resultado = num1 + num2;
    } else if (operacao == "subtracao") {
        resultado = num1 - num2;
    } else if (operacao == "multiplicacao") {
      resultado = num1 * num2;
    } else if (operacao == "divisao") {
        resultado = num1 / num2;
    }
    
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
