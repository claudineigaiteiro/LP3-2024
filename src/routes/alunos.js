const alunoController = require('../controllers/alunos');

module.exports = (app) => {
    app.get('/alunos/:name', alunoController.getAlunos)
}