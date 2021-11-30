// Forma 1 de Criar Objetos //
var aluno = { 
    nome:"João", 
    notas: [7.5, 5.0]
}

var novaProp = "Juarez";

aluno.matricula = 12345;

aluno["sobrenome"] = novaProp;

//console.log(aluno)//

// Forma 2 de Criar Objetos //

var pessoa = new Object();

pessoa.nome = "Anderson";
pessoa.notas = [8, 9];

var pessoa2 = new Object();

pessoa2.nome = "Andresa";
pessoa2.notas = [10, 9]; 


console.log(pessoa)
console.log(pessoa2)