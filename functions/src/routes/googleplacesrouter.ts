const express = require('express');
const axios = require('axios');


const googleplacesrouter = express.Router();

googleplacesrouter.post('/', async (req: any, res: any) => {
  try {
    const { name, city, state } = req.body;
    const formattedAddress = `${name} ${city} ${state}`;
    const encodedAddress = encodeURIComponent(formattedAddress);
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodedAddress}&inputtype=textquery&fields=formatted_address,name,rating,opening_hours,geometry,photo&key=${apiKey}`;

    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error occurred');
  }
});

export default googleplacesrouter