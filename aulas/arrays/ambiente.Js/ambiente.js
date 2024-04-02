let num = [1,2,3,4,5,6,7]
console.log(num[6]) // Vai demonstrar o valor do número que corresponde a casa 6 no array

num[1] = 10 // posição 1 recebe valor 10
console.log(num)

num.push(47) // ou num[posição que deseja] ou se quiser adicionar é só colocar um número a mais do que o valor do array, um exemplo ai: num[7] = (número que deseja adicionar). Porque o array vai apenas de 0 a 6 ai.
console.log(num)

console .log(`O vetor tem ${num.length} posições`) // Número de elementos contidos no array

num.sort() // Coloca os valores do array em ordem crescente
console.log(num)

/*for(let pos = 0; i < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[i]}`)
} 
Código tradicional para exibição de percurso no array. Praticamente vai percorrer todo o vetor colocando o respectivo valor dentro de cada posição do vetor. Ex: Posição [0] possui o valor 1...*/

//Também possuimos uma maneira mais fácil e rápida de realizar o código acima. Utlizando o FOR IN .
for(pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} //Primeiro criamos uma váriavel ex:(pos) e depois colocamos o nome da nossa variavel composta ex:num. lemos o código acima da seguinte maneira: 'PARA cada (posição) EM (num).

let pas = num.indexOf(47)
console.log(`O número 47 se encontra na posição ${pas}`) // O indexOf é um 'instrumento' de busca quando queremos saber onde um determinado elemento se encontra dentro do array. Ele nos retorna entao a chave do valor que pesquisamos como no exemplo acima.

let erro = num.indexOf(9)
console.log(erro) 
// Quando tal valor não é encontrado dentro do array ele então nos retorna o valor -1 também exemplificado acima.

/* EXEMPLO DE IF E ELSE UTILIZANDO indexOf no array.
let pas = indexOf(9)
if (pas == -1){
    console.log('Erro, valor não encontrado')
} else {
    console.log(`A posição do valor procurado é ${pas}`)
} */
