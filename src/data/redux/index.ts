/**
 * @author Hugo Garcia
 * @description Index of Redux Slices
 * @returns 
 */
import { configureStore } from '@reduxjs/toolkit';
import coins from './coinsSlice';

export default configureStore({
    reducer: {
        coins,
    },
    devTools: true,
});
