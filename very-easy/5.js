function maiorLetra(str) {
  let maior = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] > maior) {
      maior = str[i];
    }
  }
  return maior;
}

console.log(maiorLetra("bluvj"));
