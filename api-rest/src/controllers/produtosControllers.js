const knex = require('../database/index');


exports.getAll = (req, res) => {

  knex('livros').then((produtos)=>{
      return res.status(200).json(produtos);
  })   
  
}
