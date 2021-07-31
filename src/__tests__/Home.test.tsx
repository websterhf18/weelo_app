/**
 * @author Hugo Garcia
 * @description Test to check if Home Component
 * @returns 
 */
import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { Provider } from 'react-redux';

import Home from '../presentation/screens/Home/Home';
import store from '../data/redux';

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
            {InjectHOC<Props, SlicesHome>(Home, {})}
        </Provider>
    );
    it('should renders correctly', () => {
        const page = render(pageHome);
        expect(page).toBeDefined();
    });
});
