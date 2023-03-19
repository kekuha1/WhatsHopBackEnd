import * as functions from "firebase-functions";
import express, {Application} from "express";
import cors from "cors";

const app:Application = express();
app.use(cors());
app.use(express.json());

export const api = functions.https.onRequest(app);