const express = require('express')
    , router = express.Router()
const Osebe  = require('../models/oseba')

router.get('/', async (req, res, next) => {
    try {
        const data = await Osebe.fetchAll();
        res.json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
        const data = await Osebe.where({id : id}).fetch();
        res.json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { ime, priimek, vloga } = req.body;
        const shrani = await new Osebe({ime, priimek, vloga}).save();
        res.json(shrani);
    }
    catch (error) {
        res.json(error);
    }
})


router.delete('/:id', async (req, res, next) => {

    const id = parseInt(req.params.id);
    try {
        const data = await new Osebe({id : id}).destroy();
        res.json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
});

router.put('/:id', async (req, res, next) => {
    const id = req.params.id;
    const { ime, priimek, vloga } = req.body;
    try {
        const put = await new Osebe({id: id}).save({ime, priimek, vloga});
        res.json(put);
    }
    catch (error) {
        res.status(500).json(error);
    }
    });

module.exports = router