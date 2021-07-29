/**
 * @author Hugo Garcia
 * @description Funcion para obtener todos los indicadores
 * @returns 
 */
import { createSlice, Dispatch } from '@reduxjs/toolkit';

import { IndicadoresController } from '@presenter/adapters/controllers/indicadores.controller';

const indicadoresController = new IndicadoresController()
export const getIndicadoresRedux = () => async (dispatch: Dispatch) => {
  try {
    const data = await indicadoresController.getIndicadores();
    await dispatch(setIndicadores(data));
  } catch (error) {
    console.log('*** getIndicadoresRedux Error: ****', error.message);
    throw new Error(error);
  }
};
export const getIndicadoresByTypeRedux = (type: string) => async (dispatch: Dispatch) => {
  try {
    const data = await indicadoresController.getIndicadoresByType(type);
    await dispatch(setSeries(data));
  } catch (error) {
    console.log('*** getIndicadoresByTypeRedux Error: ****', error.message);
    throw new Error(error);
  }
};

const coinsSlice = createSlice({
  name: 'indicadores',
  initialState: {
    indicadores: [],
    series: [],
  },
  reducers: {
    setIndicadores: (state, action) => {
      state.indicadores = action.payload;
    },
    setSeries: (state, action) => {
      state.series = action.payload;
    },
  },
});

export const { setIndicadores, setSeries } = coinsSlice.actions;

export default coinsSlice.reducer;
