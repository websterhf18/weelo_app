/**
 * @author Hugo Garcia
 * @description Cache repo for coins 
 * @returns 
 */
// Axios URL https://api.coinlore.net/api/tickers/?start=0&limit=20
//import axios from "axios";
//import R from "ramda";

import { CoinsContract } from "@contracts/coins.contract";
import { CoinsEntity } from "@entity/coins.entity";

export class CoinsAxiosRepo implements CoinsContract {

    async getCoins(): Promise<CoinsEntity[]> {
        throw new Error("Method not implemented.");
    }
}