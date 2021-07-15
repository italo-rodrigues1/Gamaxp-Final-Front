const knex = require('../database/index');

exports.getUsuario = (req, res) => {

    knex('usuario').then((produtos)=>{
        return res.status(200).json(produtos);
    })   
    
  }
  