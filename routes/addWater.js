const express = require('express');
const { createWater } = require('../controllers/addWaterController');
const router = express.Router();

router.route('/addWater').post(createWater );

module.exports = router;
