const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o raio da esfera: ', (raio) => {
  // Converte o valor de entrada para um número
  raio = parseFloat(raio);

  // Calcula a área da esfera
  const area = 4 * Math.PI * Math.pow(raio, 2);

  console.log(`A área da esfera é: ${area}`);
  rl.close();
});