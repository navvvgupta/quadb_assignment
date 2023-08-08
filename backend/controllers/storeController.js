const axios=require('axios')
const mongoose = require('mongoose');
require('dotenv').config();
const Ticker = require('../Models/Ticker');

const storeController = async (req, res) => {
    try {
        const {data} = await axios.get('https://api.wazirx.com/api/v2/tickers');
        
        const sliceData = Object.entries(data).slice(0, 10);        
        const selectedData = sliceData.map(([key, value]) => ({
            name: value.name,
            last: value.last,
            buy: value.buy,
            sell: value.sell,
            volume: value.volume,
            base_unit: value.base_unit
        }));
        
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Save the selected data using the Mongoose model
        await Ticker.insertMany(selectedData);

        res.json(selectedData);
         
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
  storeController
};