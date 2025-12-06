// Inserir um console.log para ser o 'título'
console.log('--- Calculadora de Idade ---');

// Criar 3 variáveis (nome, anoNascimento, anoAtual)
let nome = 'Alberto';
let anoNascimento = 2008;
let anoAtual = 2025;

// Criar uma função sem parâmetro que calcula idade, usando return
function calcularIdade() {
    return anoAtual - anoNascimento;
}

// Chamar a função e mostrar o resultado
console.log(`A idade de ${nome} é ${calcularIdade()} anos.`);

// Criar uma função com parâmetros para fazer o mesmo cálculo de idade
function idade(anoAtual, anoNascimento) {
    return anoAtual - anoNascimento;
}

console.log(`Idade calculada com parâmetros: ${idade(2025, 2008)} anos.`);

// Criar uma função com parâmetro e return para mostrar a quantidade de DIAS vividos
function diasVividos(anoAtual, anoNascimento) {
    return (anoAtual - anoNascimento) * 365;
}

console.log(`${nome} viveu aproximadamente ${diasVividos(2025, 2008)} dias.`);

// Criar uma função para verificar se é maior de idade (com if e else)
function maioridade(anoAtual, anoNascimento) {
    let idade = anoAtual - anoNascimento;

    if (idade >= 18) {
        return 'Você é maior de idade.';
    } else {
        return 'Você NÃO é maior de idade.';
    }
}

console.log(maioridade(2025, 2008));
