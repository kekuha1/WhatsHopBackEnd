import * as functions from "firebase-functions";
import express, { Application } from "express";
import cors from "cors";
import userRouter from "./routes/userRouter";
import reviewsRouter from "./routes/reviewsRouter";
import breweriesRouter from "./routes/breweriesRouter";
import googleplacesrouter from "./routes/googleplacesrouter";

const app: Application = express();

app.use(cors());
app.use(express.json());
// Define your endpoint and specify the HTTP method
app.use("/user", userRouter);
app.use("/review", reviewsRouter);
app.use("/breweries", breweriesRouter);
app.use("/google-places", googleplacesrouter);

export const api = functions.https.onRequest(app);
