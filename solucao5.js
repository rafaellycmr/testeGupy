const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function inverterString(s) {
    let invertida = "";
    for (let char of s) {
        invertida = char + invertida;
    }
    return invertida;
}

rl.question("\nDigite uma string para inverter: ", (texto) => {
    console.log(`String invertida: ${inverterString(texto)}`);
    rl.close();
});
