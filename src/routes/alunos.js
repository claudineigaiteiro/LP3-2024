const alunoController = require('../controllers/alunos');

module.exports = (app) => {
    app.get('/aluno/:name', alunoController.getAlunos)
}