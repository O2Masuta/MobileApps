const express = require('express');
const router2 = express.Router();
const Skateshops = require('./models/Skateshops');

//routes Skateshops
router2.get('/Skateshops', async(req, res) => {
    console.log('/skateshops route called');
    try {
        res.json(await Skateshops.find());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router2.post('/Skateshops/create', async(req, res) => {
    console.log('/skateshops/create is now called');
    try {
        res.send(await skateshops.create(req.body));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router2.get('/skateshops/:id', async(req, res) => {
    console.log('/skateshops/:id is now called');
    try {
        res.send(await skateshops.findById(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});



router2.put('/skateshops/update/:id', async(req, res) => {
    console.log('/skateshops/update/:id is now called');
    try {
        res.send(await skateshops.findByIdAndUpdate(req.params.id, { $set: req.body }));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


router2.delete('/skateshops/delete/:id', async(req, res) => {
    console.log('/skateshops/delete/:id is now called');
    try {
        res.send(await skateshops.findByIdAndDelete(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//routes exports
module.exports = router2;