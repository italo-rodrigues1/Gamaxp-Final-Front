const Router = require('express'); 
const produtosController = require('../controllers/produtosControllers') ;
const routes = Router(); 


routes.get('/livros', produtosController.getAll);
routes.get('/livros/:id', produtosController.getOneId);


/*

routes.post('/produtos', produtosController.create);
routes.put('/produtos/:id', produtosController.update);
*/


module.exports = routes;