var express = require('express')
    , router = express.Router()

const aktivnosti = require('../models/aktivnost')

router.get('/', (req, res, next) => {
    res.json(aktivnosti)
});

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(500).send(`Internal server error: ${id}`);
    } else {
        let aktivnost = aktivnosti.aktivnost.find(f => f.id === id)
        res.json(aktivnost);
    }
})

router.post('/', (req, res, next) => {
    const sortId = aktivnosti.aktivnost.sort((a, b) => Number(a.id) - Number(b.id));
    const newId = sortId[sortId.length - 1].id + 1;
    const { datum } = req.body;
    const { cas_odhoda } = req.body;
    const { cas_prihoda } = req.body;
    const { tip_aktivnosti } = req.body;
    const novaAktivnost = {
        id: newId,
        datum: datum,
        cas_odhoda: cas_odhoda,
        cas_prihoda: cas_prihoda,
        tip_aktivnosti: tip_aktivnosti
    };
    aktivnosti.aktivnost.push(novaAktivnost);
    res.json(req.body);
})


router.delete('/:id', (req, res, next) => {

    const id = req.params.id;
    let deleted = false;
    if (isNaN(req.params.id)) {
        res.status(500).send(`Internal server error: ${id}`);
    }
    else {
        console.log("Brišem " + id);
        aktivnosti.aktivnost.forEach((aktivnost, index) => {
            if (aktivnost.id == id) {
                aktivnosti.aktivnost.splice(index, 1);
                deleted = true;
            }
        });
        if(!deleted) {
            res.json({message: 'Aktivnost ne obstaja!'});
        }
        res.json(aktivnosti);
    }
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.status(500).send(`Internal server error: ${id}`);
    }
    else {
        let aktivnost = aktivnosti.aktivnost.find((a => a.id == id));
        const {datum} = req.body;
        aktivnost.datum = datum;
        res.send({message: 'Aktivnost ' + aktivnost.id + ' posodobljen!'});
    }
})

module.exports = router
