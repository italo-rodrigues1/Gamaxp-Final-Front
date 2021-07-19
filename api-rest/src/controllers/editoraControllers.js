const knex = require('../database/index');

exports.createEditora = (req, res) => {

    const { nome } = req.body;

    const data = { nome };

    knex.insert(data).into('editora').then(data => {
        return res.status(201).json({ message: 'Editora inserida com sucesso na base de dados.' });
        // return res.status(201).json({data});

    }).catch(err => {
        console.log(err);
    });
}