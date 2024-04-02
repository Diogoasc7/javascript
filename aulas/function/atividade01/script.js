//CALCULADORA JS

function adicao(num1 , num2){
    return num1 + num2
}

function subtracao(num1 , num2){
    return num1 - num2
}

function multiplicacao(num1 , num2){
    return num1 * num2
}

function divisao(num1 , num2){
    if (num2 == 0){
        return '[ERRO] divisão por 0 '
    } else {
        return num1 / num2
    }
}

console.log("Resultado da adição: " + adicao(5, 3))
console.log("Resultado da subtração: " + subtracao(10, 4))
console.log("Resultado da multiplicação: " + multiplicacao(6, 2))
console.log("Resultado da divisão: " + divisao(15, 3))