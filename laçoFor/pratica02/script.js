function exibir() {
    let tab = document.getElementById('tab').value
    let resultado = ''

    if (tab.length == 0 || isNaN(tab)) {
        alert('[ERRO] DIGITE UM NÚMERO')
    } else {
        let t = Number(tab)
        for (let c = 1; c <= 10; c++) {
            let res = t * c
            resultado += `${t} x ${c} = ${res} <br>`
        }
        document.getElementById('resultado').innerHTML = resultado
    }
}
