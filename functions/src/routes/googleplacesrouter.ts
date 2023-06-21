import axios from "axios";
import express from "express";

const googleplacesrouter = express.Router();

googleplacesrouter.get('/', async (req, res) => {
  try {
    const { name, city, state } = req.query;
    const formattedAddress = `${name} ${city} ${state}`;
    const encodedAddress = encodeURIComponent(formattedAddress);
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodedAddress}&inputtype=textquery&fields=formatted_address,name,rating,opening_hours,geometry,photo&key=${apiKey}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error occurred' });
  }
});

export default googleplacesrouter