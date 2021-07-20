const knex = require('../database/index');

exports.createAutor = (req, res) => {

    const { nome } = req.body;

    const data = { nome };

    knex.insert(data).into('autor').then(data => {
        return res.status(201).json({ message: 'Autor inserido com sucesso na base de dados.' });
        // return res.status(201).json({data});

    }).catch(err => {
        console.log(err);
    });
}
