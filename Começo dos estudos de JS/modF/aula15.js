let lista = [2, 5, 6, 8, 10, 7, 3, 1]
/*
for(let pos = 0; pos < lista.length; pos++){
    console.log(`Posição: ${pos}, valor: ${lista[pos]}`)
}
*/

for(let pos in lista) {
        console.log(`Posição: ${pos}, valor: ${lista[pos]}`)
}