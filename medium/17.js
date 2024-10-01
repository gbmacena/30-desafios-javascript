function relatorioMissao(frase, palavra, indices) {
  if (indices.length === 0) {
    return frase;
  }

  let fraseArray = frase.split("");

  for (let i = 0; i < indices.length; i++) {
    let indice = indices[i];

    if (indice >= 0 && indice < frase.length) {
      fraseArray.splice(indice, 0, palavra + " ");

      for (let j = i + 1; j < indices.length; j++) {
        indices[j] += palavra.length;
      }
    }
  }

  return fraseArray.join("");
}

console.log(
  relatorioMissao(
    "O capitão liderou a missão com sucesso.",
    "corajosamente",
    [10, 30]
  )
);
