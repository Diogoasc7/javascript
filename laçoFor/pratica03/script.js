function contar(){
    let ti = document.getElementById('ti').value
    let rz = document.getElementById('rz').value
    let qt = document.getElementById('qt').value
    let res = document.getElementById('res')
    res.innerHTML = '' // Limpa o conteúdo anterior

    if(ti.length == 0 || rz.length == 0 || qt.length == 0){
        alert('[ERRO] Preencha todas caixas')
    } else {
        let t = Number(ti)
        let r = Number(rz)
        let q = Number(qt)

        for(let c = 1; c <= q; c++){
            let termo = t + (c - 1) * r // Fórmula da Progressão Aritmética
            res.innerHTML += `Termo ${c} = ${termo} <br>`
        }
    }
}