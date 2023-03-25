import express from 'express';
import { getClient } from '../db';
import { ObjectId } from 'mongodb';
import Review from '../model/Review';

const reviewsRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error('FAIL', error);
  res.status(500).json({ message: 'Internal Server Error' });
};
reviewsRouter.get('/reviews', async (req, res) => {
  try {
     const client = await getClient();
     const cursor = client.db().collection<Review[]>('reviews').find();
     const results = await cursor.toArray();
     results ? res.status(200).json(results):res.status(404).json({message: 'Not found'});
  } catch (err) {
    errorResponse(err, res);
  }
});

reviewsRouter.get('/reviews/:id', async (req, res) => {
  try {
let id:string = req.params.id as string;
     const client = await getClient();
     const results = client.db().collection<Review>('reviews').find({_id: new ObjectId(id)});
if (results){
     res.status(200).json(results);
} else {
res.status(404).json({message: 'ID not Found'});
}
  } catch (err) {
    errorResponse(err, res);
  }
});

reviewsRouter.post('/reviews', async (req, res) => {
  try {
     const client = await getClient();
     const newItem = req.body
    client.db().collection<Review>('reviews').insertOne(newItem);
     res.status(200);
     res.json(newItem);
  } catch (error) {
    errorResponse(error, res);
  }
});

reviewsRouter.put('/reviews/:id', async (req, res) => {
  try {
let id: string = req.params.id as string;
const replacement = req.body;
replacement._id = new ObjectId(id);
const client = await getClient();
const result = await client.db().collection<Review>('reviews').replaceOne({_id: new ObjectId(id)}, replacement);
if (result.modifiedCount) {
  res.status(200);
  res.json(replacement);
} else {
  res.status(404);
  res.send('ID not found');
}
  } catch (error) {
    errorResponse(error, res);
  }
});

reviewsRouter.patch('/reviews/:id', async (req, res) => {
  try {
let id: string = req.params.id as string;
const update = req.body;
const client = await getClient();
const result = await client.db().collection<Review>('reviews').updateOne({_id: new ObjectId(id)}, {$set: update});
if (result.modifiedCount) {
  res.status(200);
  res.json(update);
} else {
  res.status(404);
  res.send('ID not found');
}
  } catch (error) {
    errorResponse(error, res);
  }
});

reviewsRouter.delete('/reviews/:id', async (req, res) => {
  try {
let id: string = req.params.id as string;
const client = await getClient();
const result = await client.db().collection<Review>('reviews').deleteOne({_id: new ObjectId(id)});
if (result.deletedCount) {
  res.sendStatus(204);
} else {
  res.status(404);
  res.send('No ID found');
}
  } catch (error) {
    errorResponse(error, res);
  }
});

export default reviewsRouter;