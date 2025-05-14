const waterDataModel = require('../models/waterDataModel');

exports.createWater = async (req, res, next) => {
    try {
        const waterItem = req.body;

        // Create and save the water data entry
        const createdData = await waterDataModel.create(waterItem);

        res.status(201).json({
            status: 'success',
            message: 'Water data created successfully',
            data: createdData
        });
    } catch (error) {
        console.error('Error creating water data:', error.message);

        res.status(500).json({
            status: 'error',
            message: 'Failed to create water data',
            error: error.message
        });
    }
};
