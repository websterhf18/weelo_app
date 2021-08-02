/**
 * @author Hugo Garcia
 * @description Function to exchange currency
 * @returns 
 */

export const exchangeCurrency = (value: string, value_usd: string) => {
    const amountInBtc = parseInt(value_usd);
    const exchangeRate = parseInt(value);
    const amount = amountInBtc * exchangeRate;
    return amount;
}