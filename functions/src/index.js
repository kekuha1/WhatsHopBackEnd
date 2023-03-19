"use strict";
// import * as functions from "firebase-functions";
// import express, {Application} from "express";
// import cors from "cors";
exports.__esModule = true;
// const app:Application = express();
// app.use(cors());
// app.use(express.json());
// export const api = functions.https.onRequest(app);
// import express, { Application } from "express";
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
var port = 3000;
app.get('/api/test', function (req, res) {
    res.send('Hello from the backend!');
});
app.listen(port, function () {
    console.log("server listening on port ".concat(port));
});
