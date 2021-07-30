/**
 * @author Hugo Garcia
 * @description Controller of coins
 * @returns 
 */
import { CoinsEntity } from "@entity/coins.entity";
import { CoinsService } from "@usecases/coins.service";
import { CoinsCacheRepo } from "@repositories/coins.cache.repo";

const coinsRepo = new CoinsCacheRepo();
const coinsService = new CoinsService(coinsRepo);

export class CoinsController {
    
    async getCoins(): Promise<CoinsEntity[]> {
        try {
            return await coinsService.getCoins();
        } catch (error) {
            console.log('***** Error CoinsController -> getCoins *****', error.message);
            throw new Error(error);
        }
    }
}