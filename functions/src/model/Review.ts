import { ObjectId } from "mongodb";

export default interface Review {
  _id?: ObjectId;
  brewery_id: string;
  fullName: string;
  rating: number;
  beerSelection: string;
  atmosphere: string;
  comment: string;
}
