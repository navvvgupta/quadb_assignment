const axios=require('axios')
const mongoose = require('mongoose');
require('dotenv').config();
const Ticker = require('../Models/Ticker');

const fetchController = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const tickers = await Ticker.find({});
        const tickersValues = tickers.map(ticker => ticker.name);
        res.json(tickersValues);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
  fetchController
};