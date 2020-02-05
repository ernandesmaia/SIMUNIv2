const mongoose = require('mongoose')

const Geral = require('../models/Geral');

class GeralController{
    async mostrarSexo(req, res) {
        const sexo = await Geral.find({})
        console.log(sexo);
        return res.render('public.njk', {
            nome: ['Ernandes', 'Lucas', 'Jarbele']
        })
    }

    async testeAleatorio(req, res) {
        const sexo = await Geral.find({})
        console.log(sexo);
        return res.render('teste.njk', {
            nome: 89
        })
    }
    
}

module.exports = new GeralController()