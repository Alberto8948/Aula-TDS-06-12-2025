//sem função 
console.log('===Bolo de chocolate===');
console.log('1. Misture os ingredientes');
console.log('2. Asse por 40 minutos');
console.log('3. Decore com chocolate');

console.log('===Bolo de cenoura===');
console.log('1. Misture os ingredientes'); //repetido
console.log('2. Asse por 40 minutos'); //repetido
console.log('3. Decore com cream chease');

//com função
function mostrarReceita(nome, decoração) {
    console.log('===' + nome + '===');
    console.log('1. Misture os ingredientes');
    console.log('2. Asse por 40 minutos');
    console.log('3. Decore com + decoraçao');
}

mostrarReceita('Bolo de chocolate', 'chocolate');
mostrarReceita('Bolo de cenoura', 'cream chease');
mostrarRceita('Bolo de laranja', 'casca de laranja');
mostrarRceita('Bolo de limao', 'casca de limao');

