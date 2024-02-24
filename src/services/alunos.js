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
        aluno.notas.push(8.2)
    } else {
        throw "Aluno não cadastrado!"
    }
    return aluno
}

module.exports.getAluno = getAluno