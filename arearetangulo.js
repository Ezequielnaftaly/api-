const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a largura do retângulo: ', (largura) => {
  rl.question('Digite a altura do retângulo: ', (altura) => {
    // Converte os valores de entrada para números
    largura = parseFloat(largura);
    altura = parseFloat(altura);

    // Calcula a área do retângulo
    const area = largura * altura;

    console.log(`A área do retângulo é: ${area}`);
    rl.close();
  });
});






