const express=require('express');
const { getWater,getSingleWater } = require('../controllers/waterController');
const router = express.Router();

router.route('/waterData').get(getWater);
//router.route('/waterData/:id').get(getSingleWater);
router.route('/waterData/:name').get(getSingleWater);


module.exports = router;