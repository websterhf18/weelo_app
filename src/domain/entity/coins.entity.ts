/**
 * @author Hugo Garcia
 * @description Entity of Coins
 * @returns 
 */
export interface CoinsEntity {
    name: string;
    data: Data
}
interface Data {
    symbol: string;
    name: string;
    nameid: string;
    rank: number;
    price_usd: string;
}