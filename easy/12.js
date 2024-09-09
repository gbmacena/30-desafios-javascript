function contadorDeMoedas(valor) {
  moedas = {
    1: 0,
    5: 0,
    10: 0,
    25: 0,
    100: 0,
    500: 0,
  };

  if (valor >= 500) {
    moedas[500] = Math.floor(valor / 500);
    valor -= moedas[500] * 500;
  }

  if (valor >= 100) {
    moedas[100] = Math.floor(valor / 100);
    valor -= moedas[100] * 100;
  }

  if (valor >= 25) {
    moedas[25] = Math.floor(valor / 25);
    valor -= moedas[25] * 25;
  }

  if (valor >= 10) {
    moedas[10] = Math.floor(valor / 10);
    valor -= moedas[10] * 10;
  }

  if (valor >= 5) {
    moedas[5] = Math.floor(valor / 5);
    valor -= moedas[5] * 5;
  }
  if (valor >= 1) {
    moedas[1] = valor;
    valor = 0;
  }

  return moedas;
}

console.log(contadorDeMoedas(1258));
