// import * as functions from "firebase-functions";
// import express, {Application} from "express";
// import cors from "cors";

// const app:Application = express();
// app.use(cors());
// app.use(express.json());

// export const api = functions.https.onRequest(app);

// import express, { Application } from "express";

const express = require('express')
import {Request, Response} from 'express'
const cors = require('cors')
const app = express()
app.use(cors())
const port: number = 3000;

app.get('/api/test', (req: Request, res: Response) => {
    res.send('Hello from the backend!')
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
