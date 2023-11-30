const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escolha a forma da base (quadrado ou retângulo): ', (formaBase) => {
  rl.question('Digite a largura da base: ', (larguraBase) => {
    rl.question('Digite o comprimento da base: ', (comprimentoBase) => {
      rl.question('Digite a altura do prisma: ', (altura) => {
        // Converte os valores de entrada para números
        larguraBase = parseFloat(larguraBase);
        comprimentoBase = parseFloat(comprimentoBase);
        altura = parseFloat(altura);

        // Calcula a área total do prisma
        let areaBase, perimetroBase;

        if (formaBase.toLowerCase() === 'quadrado') {
          areaBase = larguraBase * larguraBase;
          perimetroBase = 4 * larguraBase;
        } else if (formaBase.toLowerCase() === 'retângulo') {
          areaBase = larguraBase * comprimentoBase;
          perimetroBase = 2 * (larguraBase + comprimentoBase);
        } else {
          console.log('Forma da base não reconhecida.');
          rl.close();
          return;
        }

        const areaTotal = 2 * areaBase + perimetroBase * altura;

        console.log(`A área total do prisma é: ${areaTotal}`);
        rl.close();
      });
    });
  });
});