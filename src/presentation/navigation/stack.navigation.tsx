import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';

import InjectHOC from './InjectHOC';
import { Props, SlicesDetail, SlicesLogin } from './interfaceInject'

import DrawerNavigation from './drawer.navigation';

import Splash from '@screens/Splash/Splash';
import Detail from '@screens/Detail/Detail';

import { getIndicadoresByTypeRedux } from '@presenter/io/indicadoresSlice';

enableScreens();

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName='Indicadores'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Detail" component={InjectHOC<Props, SlicesDetail>(Detail, { getIndicadoresByTypeRedux })} />
            <Stack.Screen name="Indicadores" component={DrawerNavigation} />
        </Stack.Navigator>
    );
}

export default StackNavigation;