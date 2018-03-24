/*var express = require('express')
    , router = express.Router()
const hasAktivnosti  = require('../models/hasAktivnost')

router.get('/', async (req, res, next) => {
    try {
        const data = await hasAktivnosti.fetchAll();
        res.json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
        const data = await hasAktivnosti.where({id : id}).fetch();
        res.json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { oseba_id, aktivnost_id } = req.body;
        const shrani = await new Aktivnosti({oseba_id, aktivnost_id}).save();
        res.json(shrani);
    }
    catch (error) {
        res.json(error);
    }
})


router.delete('/:id', async (req, res, next) => {

    const id = parseInt(req.params.id);
    try {
        const data = await new hasAktivnosti({id : id}).destroy();
        res.json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
})

router.put('/:id', async (req, res, next) => {
    const id = req.params.id;

    const { idAktivnost } = req.body;
    const { idOseba } = req.body;
    const put = await new hasAktivnosti({id : id}).save({idOseba, idAktivnost});
    res.json(put);
})

module.exports = router
*/