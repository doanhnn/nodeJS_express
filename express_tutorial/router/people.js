const express = require('express');
const router = express.Router()

const {getPeople,
    updatePeople,
    putPeople} = require('../controllers/people');

router.get("/", getPeople)

router.post("/", updatePeople)

router.put("/:id", putPeople)

module.exports = router