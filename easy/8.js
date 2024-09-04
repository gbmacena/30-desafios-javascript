function abreviarNome(nome) {
  nomeArray = nome.split(" ");
  let abreviaçao = nomeArray[nomeArray.length - 1].toUpperCase() + ", ";
  for (let i = 0; i < nomeArray.length - 1; i++) {
    abreviaçao += nomeArray[i][0].toUpperCase() + ". ";
  }
  return abreviaçao;
}

console.log(abreviarNome("João da Silva"));
