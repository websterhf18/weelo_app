/**
 * @author Hugo Garcia
 * @description Stack Navigation
 * @returns 
 */
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';

import InjectHOC from './InjectHOC';
import { Props, SlicesDetail } from './interfaceInject'

import DrawerNavigation from './drawer.navigation';

import Splash from '@screens/Splash/Splash';
import Detail from '@screens/Detail/Detail';

//import { getCoinsRedux } from '@redux/coinsSlice';

enableScreens();

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName='Coins'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Detail" component={InjectHOC<Props, SlicesDetail>(Detail, {})} />
            <Stack.Screen name="Coins" component={DrawerNavigation} />
        </Stack.Navigator>
    );
}

export default StackNavigation;