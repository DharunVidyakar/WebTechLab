const express = require('express');
const app = express();

const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase');
dotenv.config({path: path.join(__dirname, 'config','config.env')});

const cors = require('cors');
app.use(cors());

const waterData = require('./routes/waterData');
const addWater = require('./routes/addWater');

connectDatabase();

app.use(express.json());
app.use('/api/v1/', waterData);
app.use('/api/v1/', addWater);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

