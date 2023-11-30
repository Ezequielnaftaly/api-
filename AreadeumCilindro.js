const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o raio da base do cilindro: ', (raio) => {
  rl.question('Digite a altura do cilindro: ', (altura) => {
    // Converte os valores de entrada para números
    raio = parseFloat(raio);
    altura = parseFloat(altura);

    // Calcula a área do cilindro
    const areaSuperficieLateral = 2 * Math.PI * raio * altura;
    const areaTotal = areaSuperficieLateral + 2 * Math.PI * Math.pow(raio, 2);

    console.log(`A área do cilindro é: ${areaTotal}`);
    rl.close();
  });
});