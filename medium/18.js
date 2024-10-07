class Equation {
  constructor(a = 0, b = 0, c = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  solve() {
    if (this.a === 0 && this.b === 0 && this.c === 0) {
      return "Erro: Todos os coeficientes são zero. A equação é indeterminada.";
    }

    if (this.a === 0) {
      return this.solveLinear();
    } else {
      return this.solveQuadratic();
    }
  }

  solveLinear() {
    if (this.b === 0) {
      return [];
    }
    const x = -this.c / this.b;
    console.log("Passos para resolver a equação linear:");
    console.log(`1. Equação original: ${this.b}x + ${this.c} = 0`);
    console.log(
      `2. Subtrair ${this.c} de ambos os lados: ${this.b}x = ${-this.c}`
    );
    console.log(`3. Dividir ambos os lados por ${this.b}: x = ${x}`);
    return [x];
  }

  solveQuadratic() {
    const delta = this.b ** 2 - 4 * this.a * this.c;
    console.log("Passos para resolver a equação quadrática:");
    console.log(
      `1. Equação original: ${this.a}x^2 + ${this.b}x + ${this.c} = 0`
    );
    console.log(`2. Calcular o discriminante (Δ): Δ = b^2 - 4ac = ${delta}`);

    if (delta < 0) {
      console.log("3. Como Δ < 0, não há raízes reais.");
      return [];
    } else if (delta === 0) {
      const x = -this.b / (2 * this.a);
      console.log(`3. Como Δ = 0, há uma raiz real: x = -b / (2a) = ${x}`);
      return [x];
    } else {
      const x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
      const x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
      console.log(`3. Como Δ > 0, há duas raízes reais:`);
      console.log(`   x1 = (-b + √Δ) / (2a) = ${x1}`);
      console.log(`   x2 = (-b - √Δ) / (2a) = ${x2}`);
      return [x1, x2];
    }
  }
}

const eq1 = new Equation(1, -5, 6);
console.log(eq1.solve());

const eq2 = new Equation(0, 2, -4);
console.log(eq2.solve());

const eq3 = new Equation(0, 0, 0);
console.log(eq3.solve());
