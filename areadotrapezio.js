const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor da base maior do trapézio: ', (baseMaior) => {
  rl.question('Digite o valor da base menor do trapézio: ', (baseMenor) => {
    rl.question('Digite o valor da altura do trapézio: ', (altura) => {
      // Converte os valores de entrada para números
      baseMaior = parseFloat(baseMaior);
      baseMenor = parseFloat(baseMenor);
      altura = parseFloat(altura);

      // Calcula a área do trapézio
      const area = ((baseMaior + baseMenor) * altura) / 2;

      console.log(`A área do trapézio é: ${area}`);
      rl.close();
    });
  });
});