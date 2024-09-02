function elevarTudo(number) {
  const str_number = String(number);
  let str_quadrado = "";
  for (let i = 0; i < str_number.length; i++) {
    let quadrado = Math.pow(parseInt(str_number[i]), 2).toString();
    str_quadrado += quadrado;
  }
  return str_quadrado;
}

console.log(elevarTudo(3514));
