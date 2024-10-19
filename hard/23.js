function atualizarClassificacao(lista, acao) {
  let [nome, movimento] = acao.split(" ");

  if (movimento === "ELIMINATE") {
    let index = lista.indexOf(nome);
    if (index !== -1) {
      let eliminado = lista.splice(index, 1)[0];
      lista.push(eliminado + " ELIMINATED");
    }
  } else {
    movimento = parseInt(movimento);
    let posAtual = lista.indexOf(nome);
    if (posAtual !== -1) {
      let novaPos = posAtual + movimento;

      novaPos = Math.max(0, Math.min(novaPos, lista.length - 1));

      lista.splice(posAtual, 1);
      lista.splice(novaPos, 0, nome);
    }
  }

  let naoEliminados = lista.filter(
    (corredor) => !corredor.includes("ELIMINATED")
  );
  let eliminados = lista.filter((corredor) => corredor.includes("ELIMINATED"));

  return [...naoEliminados, ...eliminados];
}

let classificacao = ["Mario", "Luigi", "Peach", "Bowser"];
console.log(atualizarClassificacao(classificacao, "Luigi +2"));
console.log(atualizarClassificacao(classificacao, "Bowser ELIMINATE"));
