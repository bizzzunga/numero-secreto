alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 4;
    console.log(numeroSecreto)
let chute = prompt('Escolha um número de 1 a 10');

//Se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso aí, você descobriu o número secreto ${numeroSecreto}`);
} else { 
    alert('Você errou :(')
}