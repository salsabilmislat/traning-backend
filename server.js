'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json())
require('dotenv').config();
const axios = require('axios');
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);
const { getItem, addToChoco,getChoco,deleteChoco,updateChoco } = require('./controllers/Choco.controller')
app.get('/allData', getItem)
app.get('/chocolate',getChoco)
app.post('/chocolate', addToChoco)
app.delete('/chocolate/:choco_id',deleteChoco)
app.put('/chocolate/:choco_id',updateChoco)
app.listen(PORT, () => console.log(`listening on ${PORT}`))