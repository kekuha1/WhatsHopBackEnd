import { ObjectId } from "mongodb";
import Brewery from "./Brewery";

export default interface Favorites {
    _id?: ObjectId;
    uid?: string;
    Brewery: Brewery;
}