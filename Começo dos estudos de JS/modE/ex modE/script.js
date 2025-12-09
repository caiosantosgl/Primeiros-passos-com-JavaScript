function contar() {
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let resultado = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //Verifica se está vazio, os inputs
        resultado.innerHTML = 'Impossível contar!'
        window.alert('Preencha os dados para fazer a contagem!')
    } else { //Se não estiver vazio, aqui começa a funcionar
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f){
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
            resultado.innerHTML += ` ${c} ➡️`
        }
        } else {
            //Contagem decrescente
            for (let c = i; c >= f; c -= p){
                resultado.innerHTML += ` ${c} ➡️`
            }
        }
    resultado.innerHTML += `\u{1F3C1}`
    }
}