const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número de lados do polígono regular: ', (lados) => {
  rl.question('Digite o comprimento de um lado do polígono regular: ', (lado) => {
    // Converte os valores de entrada para números
    lados = parseInt(lados);
    lado = parseFloat(lado);

    // Calcula a área do polígono regular
    const area = (lado * lado * lados) / (4 * Math.tan(Math.PI / lados));

    console.log(`A área do polígono regular é: ${area}`);
    rl.close();
  });
});