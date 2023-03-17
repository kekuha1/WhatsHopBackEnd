import axios from "axios";
import Brewery from "../model/Brewery";

export function GetAllBrewries(): Promise<Brewery> {
    return axios.get<Brewery[]>(`https://api.openbrewerydb.org/breweries?per_page=12`)
    .then((response:any) => response.data);
  }