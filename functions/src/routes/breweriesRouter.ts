import express from 'express';
import { getClient } from '../db';
import { ObjectId } from 'mongodb';
import Brewery from '../model/Brewery';

const breweriesRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error('FAIL', error);
  res.status(500).json({ message: 'Internal Server Error' });
};
breweriesRouter.get('/', async (req, res) => {
  try {
     const client = await getClient();
     const cursor = client.db().collection<Brewery[]>('breweries').find();
     const results = await cursor.toArray();
     results ? res.status(200).json(results):res.status(404).json({message: 'Not found'});
  } catch (err) {
    errorResponse(err, res);
  }
});

breweriesRouter.get('/:id', async (req, res) => {
  try {
let id:string = req.params.id as string;
     const client = await getClient();
     const results = client.db().collection<Brewery>('breweries').find({_id: new ObjectId(id)});
if (results){
     res.status(200).json(results);
} else {
res.status(404).json({message: 'ID not Found'});
}
  } catch (err) {
    errorResponse(err, res);
  }
});

breweriesRouter.post('/', async (req, res) => {
  try {
     const client = await getClient();
     const newItem = req.body
    client.db().collection<Brewery>('breweries').insertOne(newItem);
     res.status(200);
     res.json(newItem);
  } catch (error) {
    errorResponse(error, res);
  }
});

breweriesRouter.put('/:id', async (req, res) => {
  try {
let id: string = req.params.id as string;
const replacement = req.body;
replacement._id = new ObjectId(id);
const client = await getClient();
const result = await client.db().collection<Brewery>('breweries').replaceOne({_id: new ObjectId(id)}, replacement);
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

breweriesRouter.patch('/:id', async (req, res) => {
  try {
let id: string = req.params.id as string;
const update = req.body;
const client = await getClient();
const result = await client.db().collection<Brewery>('breweries').updateOne({_id: new ObjectId(id)}, {$set: update});
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

breweriesRouter.delete('/:id', async (req, res) => {
  try {
let id: string = req.params.id as string;
const client = await getClient();
const result = await client.db().collection<Brewery>('breweries').deleteOne({_id: new ObjectId(id)});
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

export default breweriesRouter;