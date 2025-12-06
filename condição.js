let senhaCorreta = 1234;
let senhaDigitadad = 1234;

if (senhaCorreta === senhaDigitada) {
    console.log('Acesso permitido')
} else {
    console.log('Senha incorreta')
}

//criar um programa que valide se a pessoa terá desconto na entrada do cinema. Criar 3 variaveis (idade, estudante, precoIngressso). Fazer condição para dar 50% de desconto caso a condição 'estudante seja true

let idade = 20;
let estudante = true;
let precoIngresso = 30;


if (estudante === true) {
    precoIngresso = precoIngresso / 2; 
    console.log('Preço com desconto: R$ ${precoIngresso}')
} else {
       console.log ('Preço normal: R$ ${precoIngresso}')
}


let peso = 55; 
let altura = 1.55;
let imc = peso /(altura * altura);

console.log('Seu IMC é: ' +imc.toFixed(2));

if(imc < 18.5) {
    console.log('Classificação abaixo do peso')
} else if (imc >=18.5 && imc <= 24.9) {
    console.log('Classificação sobrepeso')
} else {
    console.log('Classificação obesidade')
}