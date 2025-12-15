let num = document.querySelector('input#num')
let tab = document.querySelector('select#tabuada')
function tabuada() {
    if(num.value.length == 0){
        window.alert('Você precisa digitar um valor para verificar a tabuada!')
    } else {
        let nm = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${nm} x ${c} = ${nm*c}`
            tab.appendChild(item)
        }
        num.value = ''
        num.focus()
    }
}