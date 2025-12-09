let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let resultado = document.querySelector('div#res')
let tabela = []

function isNume(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNume(num.value) && !inLista(num.value, tabela)){
        tabela.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(tabela.length == 0) {
        window.alert('Você precisa adicionar algum valor para finalizar.')
    } else {
        let total = tabela.length
        let maior = tabela[0]
        let menor = tabela[0]
        let somatoria = 0
        let média = 0
        for(let p in tabela){
            somatoria += tabela[p]
            if(tabela[p] > maior) {
                maior = tabela[p]
            if(tabela[p] < menor) 
                menor = tabela[p]
            }
        média = somatoria / total
        }
        res.innerHTML += `<p>Ao todo, temos ${total} valores colocados.</p>`
        res.innerHTML += `<p>O maior valor digitado foi: ${maior}</p>`
        res.innerHTML += `<p>O menor valor digitado foi: ${menor}</p>`
        res.innerHTML += `<p>A somatória de todos os valores é: ${somatoria}</p>`
        res.innerHTML += `<p>A média de todos os valores é: ${média}</p>`
    }
}