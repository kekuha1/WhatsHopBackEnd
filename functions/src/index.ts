import * as functions from "firebase-functions";
import express, {Application} from "express";
import cors from "cors";
import Brewery from './model/Brewery';
import { GetAllBreweries } from "./services/breweryservices";

const app:Application = express();
app.use(cors());
app.use(express.json());


// Define your endpoint and specify the HTTP method
app.get('/breweries', async (request: express.Request, response: express.Response) => {
  try {
    const breweries: Brewery[] = await GetAllBreweries();

    response.send(breweries);
  } catch (error) {
    console.error(error);
    response.status(500).send('Error fetching breweries');
  }
});

export const getBreweries = functions.https.onRequest(app);

export const api = functions.https.onRequest(app);