/**
 * @author Hugo Garcia
 * @description Drawer navigation
 * @returns 
 */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import InjectHOC from './InjectHOC';
import { Props, SlicesHome } from './interfaceInject';

import Home from '@screens/Home/Home';

import { getCoinsRedux } from '@redux/coinsSlice';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen name="Home" component={InjectHOC<Props, SlicesHome>(Home, { getCoinsRedux })} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;
