const alunoService = require('../services/alunos')

const getAlunos = async (req, res, next) => {
    try {
        const retorno = await alunoService.getAluno(req.params)
        res.status(201).json(retorno)
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports.getAlunos = getAlunos