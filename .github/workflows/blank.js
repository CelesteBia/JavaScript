class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

let pessoas = [];
let nomesComB = [];
let contador = 0;
let soma = 0;
let media;

pessoas[0] = new Pessoa("Beatriz", 18);
pessoas[1] = new Pessoa("Bianca", 32);
pessoas[2] = new Pessoa("Renato", 67);
pessoas[3] = new Pessoa("Caio", 15);
pessoas[4] = new Pessoa("Bruna", 9);
pessoas[5] = new Pessoa("Rafael", 70);

for(let i = 0; i < 6; i++){
    console.log(pessoas[i].nome);
}

for(let j = 0; j < 6; j++){
    if (pessoas[j].nome.startsWith("B")){
        nomesComB.push(pessoas[j].nome);
        soma += pessoas[j].idade;
        contador++;
    }
}
console.log(nomesComB);
media = soma/contador;
console.log(media);
