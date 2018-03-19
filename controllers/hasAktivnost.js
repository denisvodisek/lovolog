var express = require('express')
    , router = express.Router()
const hasAktivnosti  = require('../models/hasAktivnost')

router.get('/', (req, res, next) => {
    res.json(hasAktivnosti)
});

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(500).send(`Internal server error: ${id}`);
    } else {
        //console.log(isNaN(id));
        let hasAktivnost = hasAktivnosti.hasAktivnost.find(a => a.id === id)
        res.render('aktivnosti/hasAktivnosti', {hasAktivnost: hasAktivnost})
    }
})

router.post('/', (req, res, next) => {
    const sortId = hasAktivnosti.hasAktivnost.sort((a, b) => Number(a.id) - Number(b.id));
    const newId = sortId[sortId.length - 1].id + 1;
    const { idAktivnost } = req.body;
    const { idOseba } = req.body;
    const novHasAktivnosti = {
        id: newId,
        idAktivnost : idAktivnost,
        idOseba: idOseba
    };
    hasAktivnosti.hasAktivnost.push(novHasAktivnosti);
    res.json(req.body);
})


router.delete('/:id', (req, res, next) => {

    const id = req.params.id;
    if (isNaN(req.params.id)) {
        res.status(500).send(`Internal server error: ${id}`);
    }
    else {
        console.log("Brišem " + id);

        hasAktivnosti.hasAktivnost.forEach((hasAktivnost, index) => {
            if (hasAktivnost.id == id) {
                hasAktivnosti.hasAktivnost.splice(index, 1);
            }
        });
        res.json(hasAktivnosti);
    }
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    let hasAktivnost = hasAktivnosti.hasAktivnost.find((a => a.id == id));

    const { idAktivnost } = req.body;
    const { idOseba } = req.body;

    hasAktivnost.idAktivnost = idAktivnost;
    hasAktivnost.idOseba = idOseba;

    res.send({ message: 'hasAktivnost ' + hasAktivnost.id + ' posodobljen!' });
})

module.exports = router
