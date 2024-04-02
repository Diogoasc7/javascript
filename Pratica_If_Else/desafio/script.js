function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML=`Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'img/manha.png'
        document.body.style.backgroundColor = 'gold'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'img/tarde.png'
        document.body.style.backgroundColor = 'blue'
    } else {
        //BOA NOITE
        img.src = 'img/noite.png'
        document.body.style.backgroundColor = 'black'
    }
}