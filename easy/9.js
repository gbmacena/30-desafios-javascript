function StringBalanceada(str) {
  const contagemCaracteres = {};

  for (let i = 0; i < str.length; i++) {
    contagemCaracteres[str[i]] = contagemCaracteres[str[i]]
      ? contagemCaracteres[str[i]] + 1
      : 1;
  }

  return Object.values(contagemCaracteres).every((contagem, indice, array) =>
    indice !== 0 ? contagem === array[indice - 1] : true
  );
}

console.log(StringBalanceada("Isso e um Teste"));
console.log(StringBalanceada("Is si"));
console.log(StringBalanceada("This is Thee"));
console.log(StringBalanceada("Teste"));
