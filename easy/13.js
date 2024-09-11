function numeroValido(numero) {
  numero = numero.toString();
  let somaPares = 0;
  let somaImpares = 0;
  for (let i = 1; i < numero.length; i += 2) {
    somaPares += parseInt(numero[i]);
  }
  somaPares *= 3;
  for (let i = 0; i < numero.length; i += 2) {
    somaImpares += parseInt(numero[i]);
  }
  let total = somaPares + somaImpares;
  return total % 10 === 0 ? true : false;
}
console.log(numeroValido(123456789872));
