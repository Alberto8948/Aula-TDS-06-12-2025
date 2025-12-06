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