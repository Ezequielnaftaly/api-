const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAreaPoligono(vertices) {
  const numVertices = vertices.length;
  let area = 0;

  for (let i = 0; i < numVertices; i++) {
    const x1 = vertices[i][0];
    const y1 = vertices[i][1];
    const x2 = vertices[(i + 1) % numVertices][0];
    const y2 = vertices[(i + 1) % numVertices][1];

    area += (x1 * y2 - x2 * y1);
  }

  area = Math.abs(area) / 2;
  return area;
}

rl.question('Digite o número de vértices do polígono: ', (numVertices) => {
  numVertices = parseInt(numVertices);
  const vertices = [];

  (function collectVertices(i) {
    if (i < numVertices) {
      rl.question(`Digite as coordenadas (x, y) do vértice ${i + 1}: `, (coordenadas) => {
        const [x, y] = coordenadas.split(' ').map(parseFloat);
        vertices.push([x, y]);
        collectVertices(i + 1);
      });
    } else {
      const area = calcularAreaPoligono(vertices);
      console.log(`A área do polígono irregular é: ${area}`);
      rl.close();
    }
  })(0);
});