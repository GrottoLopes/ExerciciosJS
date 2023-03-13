let lista = []
var result = document.getElementById('result')
var res =  document.getElementById('resultado') 

function adicionar(){
    var numero = document.getElementById('number')
    var num = Number(numero.value)
    var isNull =  lista.length
    
    if (num < 1 || num > 100){
        window.alert('Número incorreto')
    }else if (isNull != 0){
        if (lista.indexOf(num) != -1){
            window.alert(`Número ${num} já adicionado!`)
        }else{
            lista.push(num)
            let item = document.createElement('option')
            item.text = (`Valor ${num} adicionado`)
            res.appendChild(item)
            console.log(`Numero ${num} adicionado`)
        }
    }else{
        lista.push(num)
        let item = document.createElement('option')
        item.text = (`Valor ${num} adicionado`)
        res.appendChild(item)
        console.log(`Numero ${num} adicionado`)
    }

    numero.value = ''
    numero.focus()
}

function analisar(){
    var tamanho = lista.length
    let maior = lista[0]
    let menor = lista[0]
    var soma = 0
    
    for(let pos in lista){
        if (lista[pos] > maior){
            maior = lista[pos]
        }
        if  (lista[pos] < menor){
            menor =  lista[pos]
        }
    }

    for(let pos in lista){
        soma  += lista[pos]
    }

    let media = (soma/tamanho)
    
    result.innerHTML = ''
    result.innerHTML += (`<p>Ao todo, existem ${tamanho} números</p>`)
    result.innerHTML += (`<p>O maior número cadastrado é ${maior}</p>`)
    result.innerHTML += (`<p>O menor número cadastrado é ${menor}</p>`)
    result.innerHTML += (`<p>A soma de todos os números é ${soma}</p>`)
    result.innerHTML += (`<p>A média dos números é ${media}</p>`)
}