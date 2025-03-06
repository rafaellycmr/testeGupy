const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function pertenceFibonacci(numero) {
    let a = 0,
        b = 1;
    while (b < numero) {
        [a, b] = [b, a + b];
    }
    return b === numero || numero === 0;
}

rl.question(
    "\nDigite um número para verificar se pertence à sequência de Fibonacci: ",
    (num) => {
        num = parseInt(num);

        if (isNaN(num)) {
            console.log("Por favor, insira um número válido.");
        } else if (pertenceFibonacci(num)) {
            console.log(`O número ${num} pertence à sequência de Fibonacci.`);
        } else {
            console.log(
                `O número ${num} não pertence à sequência de Fibonacci.`
            );
        }

        rl.close();
    }
);
