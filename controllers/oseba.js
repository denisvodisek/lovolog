const express = require('express')
    , router = express.Router()
const osebe  = require('../models/oseba')

router.get('/', (req, res, next) => {
    res.json(osebe)
});

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(500).send(`Internal server error: ${id}`);
    } else {
        //console.log(isNaN(id));
        let lovec = osebe.oseba.find(f => f.id === id)
        res.render('osebe/oseba', {lovec: lovec})
    }
})

router.post('/', (req, res, next) => {
    const sortId = osebe.oseba.sort((a, b) => Number(a.id) - Number(b.id));
    const newId = sortId[sortId.length - 1].id + 1;
    console.log(newId);
    const { ime } = req.body;
    const { priimek } = req.body;
    const { vloga } = req.body;
    const novClan = {
        id: newId,
        ime: ime,
        priimek : priimek,
        vloga : vloga
    };
    osebe.oseba.push(novClan);
    res.json(req.body);
})


router.delete('/:id', (req, res, next) => {

    const id = req.params.id;

    if (isNaN(req.params.id)) {
        res.status(500).send(`Internal server error: ${id}`);
    }
    else {
        console.log("Brišem " + id);

        osebe.oseba.forEach((lovec, index) => {
            if (lovec.id == id) {
                osebe.oseba.splice(index, 1);
            }
        });
        res.json(osebe);
        }
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    let oseba = osebe.oseba.find((o => o.id == id));
    const { priimek } = req.body;
    oseba.priimek = priimek;
    res.send({ message: 'Lovec ' + oseba.id + ' posodobljen!' });
    })

module.exports = router