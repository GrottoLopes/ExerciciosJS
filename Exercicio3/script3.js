function calcular(){
    var numberi = document.getElementById('numberInput1')
    var numberf = document.getElementById('numberInput2')
    var res = document.getElementById('resultado')
    var ni = Number(numberi.value)
    var nf = Number(numberf.value)
    let total = 0

    res.innerHTML = ''
    for(let c = 1; c <= nf; c++){
        total = ni*c
        res.innerHTML += (`${ni} x ${c} = ${total}<br>`)
        console.log(`${ni} x ${c} = ${total}`)
    }

}
