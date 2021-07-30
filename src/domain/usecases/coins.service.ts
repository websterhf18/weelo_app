/**
 * @author Hugo Garcia
 * @description Use cases for coins
 * @returns 
 */
import { CoinsContract } from "@contracts/coins.contract";
import { CoinsEntity } from "@entity/coins.entity";

export class CoinsService {
    constructor(private coinsRepo: CoinsContract) {};

    async getCoins(): Promise<CoinsEntity[]> {
        try {
            return await this.coinsRepo.getCoins();
        } catch (error) {
            console.log('***** Error CoinsService -> getCoins *****', error.message);
            throw new Error(error);
        }
    }
}