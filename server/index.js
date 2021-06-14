require("dotenv").config();
const express = require('express');

const contoller = require('./controller');

const app = express();

const {SERVER_PORT} = process.env;

// app.use(express.static(`${__dirname}/../build`))

app.use(express.json());

// contorller enpoints
app.get('/api/work', contoller.getWorks);
app.get('/api/work/:id', contoller.getWork);


app.listen(SERVER_PORT, () => console.log(`server is running on ${SERVER_PORT}`));