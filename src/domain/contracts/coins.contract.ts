/**
 * @author Hugo Garcia
 * @description Contract of Coins
 * @returns 
 */
import { CoinsEntity } from "@entity/coins.entity";

export abstract class CoinsContract {
    abstract getCoins(): Promise<CoinsEntity[]>;
}