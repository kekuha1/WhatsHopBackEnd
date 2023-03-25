
import * as functions from "firebase-functions";
import express, { Application } from "express";
import cors from "cors";
import userRouter from "./routes/userRouter";

const app: Application = express();

app.use(cors());
app.use(express.json());
// Define your endpoint and specify the HTTP method
app.use("/", userRouter);

export const api = functions.https.onRequest(app);