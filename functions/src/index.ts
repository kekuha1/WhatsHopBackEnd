import * as functions from "firebase-functions";
import express, { Application } from "express";
import cors from "cors";
import userRouter from "./routes/userRouter";
import reviewsRouter from "./routes/reviewsRouter";
import breweriesRouter from "./routes/breweriesRouter";

const app: Application = express();

app.use(cors());
app.use(express.json());
// Define your endpoint and specify the HTTP method
app.use("/user", userRouter);
app.use("/review", reviewsRouter);
app.use("/breweries", breweriesRouter);

export const api = functions.https.onRequest(app);
