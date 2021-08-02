/**
 * @author Hugo Garcia
 * @description Redux Slice Coins
 * @returns
 */
import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { CoinsController } from '@controllers/coins.controller';

const coinsController = new CoinsController();
export const getCoinsRedux = () => async (dispatch: Dispatch) => {
    try {
        const data = await coinsController.getCoins();
        await dispatch(setCoins(data));
    } catch (error) {
        console.log('*** getCoinsRedux Error: ****', error.message);
        throw new Error(error);
    }
};

const coinsSlice = createSlice({
    name: 'coins',
    initialState: {
        coins_list: [],
        detail: {
            name: '',
            price: 0,
            price_usd: 0,
            price_total: 0
        }
    },
    reducers: {
        setCoins: (state, action) => {
            state.coins_list = action.payload;
        }
    },
});

export const { setCoins } = coinsSlice.actions;

export default coinsSlice.reducer;
