/**
 * @author Hugo Garcia
 * @description Test to check get Coins from API
 * @returns 
 */
import { CoinsController } from '../data/controllers/coins.controller';
const coinsController = new CoinsController();
describe('DataCoins', () => {
    const data = coinsController.getCoins();
    it('List of coins is correct', () => {
        expect(typeof data).toBe('array');
    });
});