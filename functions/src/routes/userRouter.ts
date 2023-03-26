import express from "express";
import { getClient } from "../db";


const userRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};
userRouter.get("/user", async (req, res) => {
  try {
    const client = await getClient();
    const cursor = client.db().collection<any[]>("profiles").find();
    const results = await cursor.toArray();
    results
      ? res.status(200).json(results)
      : res.status(404).json({ message: "Not found" });
  } catch (err) {
    errorResponse(err, res);
  }
});

export default userRouter;