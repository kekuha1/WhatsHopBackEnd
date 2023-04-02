import express from "express";
import { getClient } from "../db";
import Favorites from "../model/Favorites";


const userRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};
userRouter.get("/:uid", async (req, res) => {
  try {
    const uid = req.params.uid
    const client = await getClient();
    const cursor = client.db("breweries_users").collection<Favorites>("users").find({uid: uid});
    const results = await cursor.toArray();
    
      res.status(200).json(results);
      
  } catch (err) {
    errorResponse(err, res);
  }
});

  userRouter.post("/", async (req, res) => {
    try {
      const client = await getClient();
      const newItem = req.body as Favorites
      client
      .db("breweries_users")
      .collection<Favorites>("users")
      .insertOne(newItem)
      res.status(200)
      res.json(newItem)
    } catch (err) {
      errorResponse(err, res);
    }
  });

export default userRouter;