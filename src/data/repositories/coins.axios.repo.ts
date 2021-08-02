/**
 * @author Hugo Garcia
 * @description Cache repo for coins 
 * @returns 
 */
// Axios URL https://api.coinlore.net/api/tickers/?start=0&limit=20
import axios from "axios";
import R from "ramda";

import { CoinsContract } from "@contracts/coins.contract";
import { CoinsEntity } from "@entity/coins.entity";

export class CoinsAxiosRepo implements CoinsContract {

    async getCoins(): Promise<CoinsEntity[]> {
        try {
            const request: any = await axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=20');
            let newData: any = [];
            request.data.data.map((item: any) => {
                newData.push({ name: item.nameid, data: item })
            })
            const sortByNameCaseInsensitive: any = R.sortBy(R.compose(R.toLower, R.prop('name')));
            return sortByNameCaseInsensitive(newData);
            //return newData;
        } catch (error) {
            console.log('***** Error CoinsAxiosRepo -> getCoins *****', error.message);
            throw new Error(error);
        }
    }
}