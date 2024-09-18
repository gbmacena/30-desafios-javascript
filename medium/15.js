function tradutorRomano(str) {
  let geral = 0;
  const romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < str.length; i++) {
    const atual = romanos[str[i]];
    const proximo = romanos[str[i + 1]] || romanos[str[str.length - 1]];

    if (atual < proximo) {
      geral -= atual;
    } else {
      geral += atual;
    }
  }
  return geral;
}

console.log(tradutorRomano("CDXXXVIII"));
console.log(tradutorRomano("CMIX"));
console.log(tradutorRomano("MMMCMXCIX"));
console.log(tradutorRomano("IV"));
