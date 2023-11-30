const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor da base do triângulo: ', (base) => {
  rl.question('Digite o valor da altura do triângulo: ', (altura) => {
    // Converte os valores de entrada para números
    base = parseFloat(base);
    altura = parseFloat(altura);

    // Calcula a área do triângulo
    const area = (base * altura) / 2;

    console.log(`A área do triângulo é: ${area}`);
    rl.close();
  });
});