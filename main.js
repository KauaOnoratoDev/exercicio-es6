class Alunos {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota
        if (this.nota > 6) {
            this.media = true
        }
    }
}

const aluno1 = new Alunos('Ana', 6.5)
const aluno2 = new Alunos('Jorge', 4)
const aluno3 = new Alunos('Fabiano', 8.5)
const aluno4 = new Alunos('Maria', 7)
const aluno5 = new Alunos('Helena', 3)

listaAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5]
arrayAlunos = []
const alunosAprovados = listaAlunos.filter(function(item) {
        if (item.nota >= 6) {
            arrayAlunos.push(item)
        }
})

console.log('Alunos aprovados')
arrayAlunos.forEach((item) => {
    console.log(`${item.nome} com nota ${item.nota}`)
})
