function letraAoContario(str) {
  return str
    .split(" ")
    .map((palavra) => palavra.split("").reverse().join("").toLowerCase())
    .join(" ");
}

console.log(letraAoContario("JavaScript é Divertido"));
