function fibonacci(n) {
  if (n < 0) {
    return "Num precisa ser Positivo";
  }
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  let fib;

  for (let i = 2; i <= n; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }
  return fib;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(15));
