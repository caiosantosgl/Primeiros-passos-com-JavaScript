function parimpar(n){
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}
let res = parimpar(5) //A função pode ser armazenada numa variável
console.log(res)


function soma(n1=0, n2=0){
    return n1 + n2
}
console.log(soma(7))


let v = function(x){ //Função armazenada na variável
    return x*2
}
console.log(v(5))


//Jeito 1 de fazer uma função fatorial
function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c++){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))


//Jeito 2 de fazer uma função fatorial
//RECURSIVIDADE!!!!
function fatorial2(n) {
    if(n == 1){
        return 1
    } else {
        return n * fatorial2(n - 1)
    }
}
console.log(fatorial2(5))