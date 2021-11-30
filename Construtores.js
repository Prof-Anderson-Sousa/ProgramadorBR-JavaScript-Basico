// function criarAluno(nome, n1, n2){
//     return {
//             nome: nome,
//             nota1: n1,
//             nota2: n2,
//             media: function() {
//             return (this.nota1 + this.nota2) / 2;
//         }
//     }
// }

function aluno(nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function (){
        return (this.nota1 + this.nota2) / 2;
    }
}

// var turma = [
//     criarAluno("Igor", 8, 6),
//     criarAluno("João", 7, 5),
//     criarAluno("Anderson", 10, 10),
//     criarAluno("Andresa", 8, 7),
//     criarAluno("Diego", 10, 7)
// ]

// var aluno = turma[2];

var a = new aluno("Igor", 8, 7)

console.log(a.nome, a.media())

// for (var aluno of turma) {
//     console.log(aluno.nome + " - " + aluno.media())
// }