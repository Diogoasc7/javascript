function exibir(){
    let termos = Number(document.getElementById('termos').value) // Corrigindo para pegar o valor do input corretamente
    let res = document.getElementById('res')
    let numero
    let primeiroTermo = 0
    let segundoTermo = 1

    if(isNaN(termos) || termos <= 0) { // Verificando se o valor é um número válido e maior que zero
        alert('[ERRO] Preencha a quantidade de termos com um número válido e maior que zero');
    } else if (termos === 1) {
        res.innerHTML = '0' // Exibir o primeiro termo se houver apenas um termo
    } else {
        res.innerHTML = '0, 1' // Exibir os dois primeiros termos
        for (let c = 3; c <= termos; c++){
            numero = primeiroTermo + segundoTermo
            res.innerHTML += `, ${numero}` // Adicionando o novo número ao resultado
            primeiroTermo = segundoTermo
            segundoTermo = numero
        }
    }
}
