function SomaTudo(...args) {
  const soma = args.reduce((acumulador, valor) => acumulador + valor, 0);
  return soma / args.length;
}

console.log(SomaTudo(10, 9, 6, 8, 9, 1, 5, 7));
