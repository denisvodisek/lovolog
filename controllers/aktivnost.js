var express = require('express')
    , router = express.Router()

const Aktivnosti = require('../models/aktivnost')

router.get('/', async (req, res, next) => {
    const data = await Aktivnosti.fetchAll();
    res.json(data);
});

router.get('/:id', async (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
        const data = await Aktivnosti.where({id : id}).fetch();
        res.json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
})

router.post('/', async (req, res, next) => {

    try {
        const { tip_aktivnosti, datum, cas_odhoda, cas_prihoda } = req.body;
        const shrani = await new Aktivnosti({tip_aktivnosti, datum, cas_odhoda, cas_prihoda}).save();
        res.json(shrani);
    }
    catch (error) {
        res.json(error);
    }

})


router.delete('/:id', async (req, res, next) => {

    const id = parseInt(req.params.id);
    try {
        const data = await new Aktivnosti({id : id}).destroy();
        res.json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
})

router.put('/:id', async (req, res, next) => {
    const id = req.params.id;
    const { tip_aktivnosti, datum, cas_odhoda, cas_prihoda } = req.body;
    try {
        const put = await new Aktivnosti({id: id}).save({tip_aktivnosti, datum, cas_odhoda, cas_prihoda});
        res.json(put);
    }
    catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router
