const express = require("express");
const bootcamp = express.Router();
const controller = require('../controller/bootcamp.js')

const { getBootcamps
    , postBootcamps
    , putBootcamps
    , deleteBootcamps } = controller

bootcamp.route('/').get(getBootcamps).post(postBootcamps);

bootcamp.route('/:id').put(putBootcamps).delete(deleteBootcamps);

module.exports = bootcamp;