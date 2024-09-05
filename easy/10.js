function fatorial(n) {
  return n === 1 ? n * 1 : n * fatorial(n - 1);
}

console.log(fatorial(5));
