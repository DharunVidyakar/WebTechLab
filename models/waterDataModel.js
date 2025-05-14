    const mongoose = require('mongoose');

    const sensorDataSchema = new mongoose.Schema({
    water_body_id: mongoose.Schema.Types.ObjectId,
    water_body_name: String,
    timestamp: Date,
    temperature: Number,
    pH: Number,
    turbidity: Number,
    dissolved_oxygen: Number
    });

    module.exports = mongoose.model('waterData', sensorDataSchema);
