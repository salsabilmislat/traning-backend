'use strict';

require('dotenv').config();
const axios = require('axios');
const { request, response } = require('express')
const chocoModel = require('../models/Choco.model');


const getItem = async (request, response) => {

    const URL = 'https://ltuc-asac-api.herokuapp.com/allChocolateData';
    const chocoUrl = await axios.get(URL)

    response.send(chocoUrl.data)
};

const addToChoco = (request, response) => {

    const { title, imageUrl, email } = request.body
    const newChoco = new chocoModel({
        title, imageUrl, email
    });
    newChoco.save();
    response.json(newChoco);
};

const getChoco = (request, response) => {
    chocoModel.find({ email: request.query.email }, (err, data) => {
        response.send(data);
    })
}

const deleteChoco = (request, response) => {
    const chocoId = request.params.choco_id;
    chocoModel.deleteOne({ _id: chocoId }, (err, deleteData) => {
        response.json(deleteData)
    });
};
const updateChoco = (request, response) => {
    const chocoId = request.params.choco_id;
    const { title, imageUrl, email } = request.body;
    chocoModel.findByIdAndUpdate({ _id: chocoId }, { title, imageUrl, email }, { new: true }, (err, updateData) => {
        response.json(updateData);
    });
}

module.exports = { getItem, addToChoco, getChoco, deleteChoco, updateChoco }