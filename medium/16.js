function criptografar(str, num) {
  const alfabeto = "abcdefghijklmnopqrstuvwxyz";

  num = num % 26;
  if (num < 0) num += 26;

  let resultado = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    const indexAtual = alfabeto.indexOf(char);

    if (indexAtual !== -1) {
      let novoIndex = (indexAtual - num + 26) % 26;
      resultado += alfabeto[novoIndex];
    } else {
      resultado += str[i];
    }
  }

  return resultado;
}

console.log(criptografar("qaiik", 60));
