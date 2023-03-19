"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllBrewries = void 0;
const axios_1 = __importDefault(require("axios"));
function GetAllBrewries() {
    return axios_1.default.get(`https://api.openbrewerydb.org/breweries?per_page=12`)
        .then((response) => response.data);
}
exports.GetAllBrewries = GetAllBrewries;
//# sourceMappingURL=breweryservices.js.map