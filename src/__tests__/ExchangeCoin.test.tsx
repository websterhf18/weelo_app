/**
 * @author Hugo Garcia
 * @description Test to check formula Exchange
 * @returns 
 */
import { exchangeCurrency } from '../data/utils/currency';
describe('ExchangeCoin', () => {
    const total = exchangeCurrency('10', '10');
    it('Exchange formula is correct', () => {
        expect(typeof total).toBe('number');
    });
});