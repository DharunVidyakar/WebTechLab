const waterDataModel = require('../models/waterDataModel');


exports.getWater = async (req, res,next) => {   
    const waterDatas = await waterDataModel.find({});
    
    
    res.json({
        status: 'success',
        waterDatas
    });
}

exports.getSingleWater = async (req, res) => {
    try {
        const waterName = req.params.name;
        
        const waterData = await waterDataModel.find({ water_body_name: waterName });

        res.json({
            status: 'success',
            waterData
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'no location found'
        });
    }
};
