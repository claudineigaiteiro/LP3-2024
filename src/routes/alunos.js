const alunoController = require('../controllers/alunos');

module.exports = (app) => {
    app.get('/alunos/', alunoController.getAlunos)
    app.post('/alunos/', alunoController.postAlunos)
    app.delete('/alunos/:id', alunoController.deleteAlunos)
    app.put('/alunos/:id', alunoController.putAlunos)
    app.patch('/alunos/:id', alunoController.putAlunos)
}