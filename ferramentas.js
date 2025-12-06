//1 - Função para calcular a área de um quadrado
//2 - Função para calcular a area de um retângulo
//3 - Função para converter Celsius em Fahrenheit
//4 - Função para formatar preço com duas casas decimais
//5 - Todas com return e console fora da função

function areaQuadrado (l) {
    return l * l;
}
const res1 = areaQuadrado(8);
console.log('1. Area do Quadrado (lado 8):', res1);



function areaRetângulo(a, b) {
    return a * b;
}
const res2 = areaRetângulo (4, 6);
console.log('2. Area do Retângulo (4x6):',res2);



function celsiusParaFahrenheit (c) {
    return (c * 1.8) + 32;
}
const res3 = celsiusParaFahrenheit(30);
console.log('3. 30°C em Fahrenheit é:',res3);



function formatarPreço (valor) {
    return valor.toFixed(2);
}
const res4 = formatarPreço (29.8805);
console.log('4. Preço Formatado:', res4);
