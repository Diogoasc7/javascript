function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano').value
    let res = document.querySelector('div#res')
    if (fano.length == 0 || fano > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - fano
        let genero = ''
        let img = document.createElement('img')
        //Criação de uma tag img
        img.setAttribute('id', 'foto')
        // (<img id= foto>)
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //CRIANÇA
                img.setAttribute('src', 'criancaM.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'adolecenteM.png')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', 'adultoM.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //CRIANÇA
                img.setAttribute('src', 'criancaF.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'adolecenteF.png')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', 'adultoF.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}