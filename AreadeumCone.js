const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o raio da base do cone: ', (raio) => {
  rl.question('Digite a altura do cone: ', (altura) => {
    // Converte os valores de entrada para números
    raio = parseFloat(raio);
    altura = parseFloat(altura);

    // Calcula a área do cone
    const geratriz = Math.sqrt(raio * raio + altura * altura);
    const areaSuperficieLateral = Math.PI * raio * geratriz;
    const areaBase = Math.PI * Math.pow(raio, 2);
    const areaTotal = areaSuperficieLateral + areaBase;

    console.log(`A área do cone é: ${areaTotal}`);
    rl.close();
  });
});