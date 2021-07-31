/**
 * @author Hugo Garcia
 * @description Cache repo for coins 
 * @returns 
 */
//import axios from "axios";
//import R from "ramda";

import { CoinsContract } from "@contracts/coins.contract";
import { CoinsEntity } from "@entity/coins.entity";

export class CoinsAxiosRepo implements CoinsContract {

    async getCoins(): Promise<CoinsEntity[]> {
        throw new Error("Method not implemented.");
    }
}