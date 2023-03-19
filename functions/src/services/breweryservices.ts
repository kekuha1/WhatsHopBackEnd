import axios from "axios";
import Brewery from "../model/Brewery";

export async function GetAllBreweries(): Promise<Brewery[]> {
  const response = await axios.get<Brewery[]>('https://api.openbrewerydb.org/breweries?per_page=12');
  return response.data;
}