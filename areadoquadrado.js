const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o comprimento do lado do quadrado: ', (lado) => {
  // Converte o valor de entrada para um número
  lado = parseFloat(lado);

  // Calcula a área do quadrado
  const area = lado * lado;

  console.log(`A área do quadrado é: ${area}`);
  rl.close();
});