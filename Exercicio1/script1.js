function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    var msg = window.document.getElementById('infoHorario')
    var photo = window.document.getElementById('imagem')
    var singular = 'hora'
    var plural = 'horas'

    if (hora < 12 && hora >= 06){ //  MANHÃ
        if (minute < 10){
            msg.innerHTML = (`<bold>Agora são ${hora}:0${minute} ${plural}</bold>`)
        }else{
            msg.innerHTML = (`<bold>Agora são ${hora}:${minute} ${plural}</bold>`)
        }
        
        photo.src = './Imagens/Manha_edited.png'
        document.body.style.background = 'linear-gradient(#8AA8B0,#e7d1a2)'
    }else if (hora >= 12 && hora < 18){ // TARDE
        if (minute < 10){
            msg.innerHTML = (`<bold>Agora são ${hora}:0${minute} ${plural}</bold>`)
        }else{
            msg.innerHTML = (`<bold>Agora são ${hora}:${minute} ${plural}</bold>`)
        }
        photo.src = './Imagens/Tarde_edited.png'
        document.body.style.background = 'linear-gradient(#F85102,#6b3119)'
    }else{  // NOITE
        if (minute < 10){
            if (hora == 1){
                msg.innerHTML = (`<bold>Agora são ${hora}:0${minute} ${singular}</bold>`)
            }else{
                msg.innerHTML = (`<bold>Agora são ${hora}:${minute} ${singular}</bold>`)
            }
        }else{
            msg.innerHTML = (`<bold>Agora são ${hora}:${minute} ${plural}</bold>`)
        }
        
        if (hora == 1){
            msg.innerHTML = (`Agora é ${hora} ${singular}`)
        }else{
            msg.innerHTML = (`Agora são ${hora} ${plural}`)
        }
        photo.src = './Imagens/Noite_edited.png'
        document.body.style.background = 'linear-gradient(#152139, #AD5142)'
    }
}