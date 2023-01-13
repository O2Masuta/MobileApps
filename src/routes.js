const express = require('express');
const router = express.Router();
const Skatepark = require('./models/Skateparken');
const Skateshops = require('./models/Skateshops');

router.get('/', (req, res) => {
    console.log('/ route called');
    res.send('<h1>welcome to my api, these are the available routes:</h1>');
});

//Routes Skateparken
router.get('/Skateparken', async(req, res) => {
    console.log('/skatepark route called');
    try {
        res.json(await Skatepark.find());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/Skateparken/create', async(req, res) => {
    console.log('/skatepark/create is now called');
    try {
        res.send(await Skatepark.create(req.body));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/Skateparken/:id', async(req, res) => {
    console.log('/skatepark/:id is now called');
    try {
        res.send(await Skatepark.findById(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});



router.put('/Skateparken/update/:id', async(req, res) => {
    console.log('/skatepark/update/:id is now called');
    try {
        res.send(await Skatepark.findByIdAndUpdate(req.params.id, { $set: req.body }));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


router.delete('/Skateparken/delete/:id', async(req, res) => {
    console.log('/skatepark/delete/:id is now called');
    try {
        res.send(await Skatepark.findByIdAndDelete(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


// //routes Skateshops
// router.get('/Skateshops', async(req, res) => {
//     console.log('/skateshops route called');
//     try {
//         res.json(await Skateshops.find());
//     } catch (e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// });

// router.post('/Skateshops/create', async(req, res) => {
//     console.log('/skateshops/create is now called');
//     try {
//         res.send(await skateshops.create(req.body));
//     } catch (e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// });

// router.get('/skateshops/:id', async(req, res) => {
//     console.log('/skateshops/:id is now called');
//     try {
//         res.send(await skateshops.findById(req.params.id));
//     } catch (e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// });



// router.put('/skateshops/update/:id', async(req, res) => {
//     console.log('/skateshops/update/:id is now called');
//     try {
//         res.send(await skateshops.findByIdAndUpdate(req.params.id, { $set: req.body }));
//     } catch (e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// });


// router.delete('/skateshops/delete/:id', async(req, res) => {
//     console.log('/skateshops/delete/:id is now called');
//     try {
//         res.send(await skateshops.findByIdAndDelete(req.params.id));
//     } catch (e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// });

//routes exports
module.exports = router;