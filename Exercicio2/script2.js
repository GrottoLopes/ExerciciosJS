function contar(){
    let inicio = document.getElementById('inicio')
    let final = document.getElementById('final')
    let passo = document.getElementById('passo')
    let res = document.getElementById('resultado')

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        res.innerHTML = ('Insira todos os valores!')
        res.style.fontSize = '20px'
        res.style.color = 'red'
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        
        if (i > f || p == 0){
            res.innerHTML = (`Verifique os valores`)
        }else{
            do{
                res.innerHTML += (` ${i} \u{1F60E}`)
                i += p
            }while (i <= f)
        }
    }


}