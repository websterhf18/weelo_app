/**
 * @author Hugo Garcia
 * @description Funcion para obtener todos los indicadores
 * @returns 
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import store from '@redux';
import App from './src/presentation/App';
import { name as appName } from './app.json';

const Aplication = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Aplication);
