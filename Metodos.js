function calcMedia (){
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Anderson",
    notas: [10, 10],
    
    media: calcMedia
}

var aluno1 = {
    nome: "Andresa",
    notas: [8, 7.5],
    media: calcMedia
}

console.log(aluno.nome)
console.log(aluno.media())

console.log(aluno1.nome)
console.log(aluno1.media())