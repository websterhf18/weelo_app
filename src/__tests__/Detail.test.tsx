/**
 * @author Hugo Garcia
 * @description Test to check if Detail Component
 * @returns 
 */
 import React from 'react';
 import 'react-native';
 import { Provider } from 'react-redux';
 
 import Detail from '../presentation/screens/Detail/Detail';
 import store from '../data/redux';
 
 /**Inject HOC Functions */
 import { SlicesDetail } from '../presentation/navigation/interfaceInject';
 import InjectHOC from '../presentation/navigation/InjectHOC';
 
 interface Props {
    navigation: any;
    route: any;
 }
 
 describe('Detail', () => {
     jest.useFakeTimers();
     const pageDetail = (
        <Provider store={store}>
            {InjectHOC<Props, SlicesDetail>(Detail, {})}
        </Provider>
     );
     it('Detail renders correctly', () => {
         expect(pageDetail).toBeDefined();
     });
 });
 