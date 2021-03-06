/**
 * @author Hugo Garcia
 * @description Test to check if Home Component
 * @returns 
 */
import React from 'react';
import 'react-native';
import { Provider } from 'react-redux';

import Home from '../presentation/screens/Home/Home';
import store from '../data/redux';
import { getCoinsRedux } from '../data/redux/coinsSlice';

/**Inject HOC Functions */
import { SlicesHome } from '../presentation/navigation/interfaceInject';
import InjectHOC from '../presentation/navigation/InjectHOC';

interface Props {
    navigation: any;
}

describe('Home', () => {
    jest.useFakeTimers();
    const pageHome = (
        <Provider store={store}>
            {InjectHOC<Props, SlicesHome>(Home, { getCoinsRedux })}
        </Provider>
    );
    it('Home renders correctly', () => {
        expect(pageHome).toBeDefined();
    });
});
