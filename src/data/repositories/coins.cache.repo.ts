/**
 * @author Hugo Garcia
 * @description Cache repo for coins 
 * @returns 
 */
//import axios from "axios";
//import R from "ramda";

import { CoinsContract } from "@contracts/coins.contract";
import { CoinsEntity } from "@entity/coins.entity";

export class CoinsCacheRepo implements CoinsContract {

    async getCoins(): Promise<CoinsEntity[]> {
        return [
            {
                "symbol": "BTC",
                "name": "Bitcoin",
                "nameid": "bitcoin",
                "rank": 1,
                "price_usd": "41765.09",
            },
            {
                "symbol": "BTC",
                "name": "Bitcoin-1",
                "nameid": "bitcoin",
                "rank": 1,
                "price_usd": "41765.09",
            },
            {
                "symbol": "BTC",
                "name": "Bitcoin-2",
                "nameid": "bitcoin",
                "rank": 1,
                "price_usd": "41765.09",
            },
            {
                "symbol": "BTC",
                "name": "Bitcoin-3",
                "nameid": "bitcoin",
                "rank": 1,
                "price_usd": "41765.09",
            },
        ]
    }
}