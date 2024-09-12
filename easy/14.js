class Piloto {
  constructor(nome, sobrenome, dataDeNascimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataDeNascimento = dataDeNascimento;
    this.licenca = null;
  }

  criarLicenca() {
    let sobrenomeParte =
      this.sobrenome.length < 5
        ? (this.sobrenome + "99999").slice(0, 5)
        : this.sobrenome.slice(0, 5);
    sobrenomeParte = sobrenomeParte.toUpperCase();
    let dataParte = this.dataDeNascimento.replace(/-/g, "");

    this.licenca = `${sobrenomeParte}-${dataParte[2]}${dataParte.slice(4, 6)}${
      dataParte[3]
    }.${this.nome[0].toLowerCase()}`;
  }
}

const piloto1 = new Piloto("João", "Silva", "1990-01-01");
const piloto2 = new Piloto("Jhon", "Doe", "1987-05-25");
const piloto3 = new Piloto("Carol", "Danvers", "1968-08-17");

piloto1.criarLicenca();
piloto2.criarLicenca();
piloto3.criarLicenca();

console.log(piloto1);
console.log(piloto2);
console.log(piloto3);
