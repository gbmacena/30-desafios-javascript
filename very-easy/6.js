function letraAoContario(str) {
  return str
    .split(" ")
    .map((palavra) => palavra.split("").reverse().join(""))
    .join(" ");
}

console.log(letraAoContario("JavaScript é Divertido"));
