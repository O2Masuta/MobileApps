const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const cors = require('cors')
const router = require('./routes');
const router2 = require('./routes2')

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'HEAD'],
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type: application/json', 'Authorization']
}

app.use(cors(corsOptions))
app.options('*', cors()) // include before other routes

app.use(express.json());
app.use(router);
app.use(router2);



mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Succesfully connected to the database!');
        app.listen(process.env.PORT, () => {
            console.log(`server is up and running on ${process.env.PORT}`);
        });
    })
    .catch((e) => console.error(`Failed to connect to database ${e}`)

    );