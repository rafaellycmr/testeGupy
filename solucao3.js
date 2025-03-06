const dadosJson =
    '{"faturamento": [0, 1500, 1700, 0, 2200, 800, 0, 2500, 1800, 0]}'; // Exemplo de JSON
const dados = JSON.parse(dadosJson);
const faturamento = dados.faturamento.filter((valor) => valor > 0);

const menor = Math.min(...faturamento);
const maior = Math.max(...faturamento);
const media = faturamento.reduce((a, b) => a + b, 0) / faturamento.length;
const diasAcimaMedia = faturamento.filter((valor) => valor > media).length;

console.log("\n3) Faturamento Diário:");
console.log(`Menor faturamento: R$ ${menor.toFixed(2)}`);
console.log(`Maior faturamento: R$ ${maior.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);
