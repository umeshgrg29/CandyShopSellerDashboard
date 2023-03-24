
const express = require('express');

const router = express.Router();

const usercontroller = require('../controllers/candy')


router.post('/add-candy', usercontroller.addCandy)

router.get('/get-candy', usercontroller.getCandy)

router.put('/edit-candy/:id', usercontroller.editCandy)

module.exports = router;