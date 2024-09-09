function cordenadas([x, y]) {
  const pares = [];

  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      pares.push([i, j]);
    }
  }

  return pares;
}

console.log(cordenadas([2, 2]));
