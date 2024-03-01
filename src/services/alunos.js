const db = require('../configs/pg')

const getAluno = async (params) => {
    let aluno = {}
    if (params.name === "Claudinei"){
        aluno.id = 16105
        aluno.nome = "Claudinei Roberto"
        aluno.sobrenome = "Mayolo"
        aluno.notas = []
        aluno.notas.push(10)
        aluno.notas.push(9)
        aluno.notas.push(9.5)
        aluno.notas.push(8.5)
        aluno.notas.push(9.2)
        aluno.notas.push(8.2)
    } else {
        throw "Aluno não cadastrado!"
    }
    return aluno
}

const sql =
    `insert into alunos (id, nome, sobrenome, periodo, observacao)
                    values ($1, $2, $3, $4, $5)`
const postAlunos = async (params) => {
    const { id, nome, sobrenome, periodo, observacao } = params
    await db.query(sql, [id, nome, sobrenome, periodo, observacao])
}

module.exports.getAluno = getAluno
module.exports.postAlunos = postAlunos