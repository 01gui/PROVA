/**Escreva uma função chamada verificarNumero que retorne uma Promise. A função deve 
gerar um número aleatório entre 1 e 10. Se o número gerado for maior que 5, a Promise 
deve ser resolvida com a mensagem "Número alto!". Se for 5 ou menor, a Promise deve 
ser rejeitada com a mensagem "Número baixo!"*/

function verificarNumero (Promise) {
    if(Promise > 5){
        return "Número alto!"
    }
    else{
        return "Número baixo!"
    }
}
console.log(verificarNumero(1))