// navigations/TabsNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MensajeScreen from '../screen/MensajeScreen';
import RegistroScreen from '../screen/RegistroScreen';
import EditarEliminarScreen from '../screen/EditarEliminarScreen';
import ListaApiScreen from '../screen/ListaApiScreen';
import Home from '../components/Homex';
import App from '../App';
import CardVideogame from '../components/CardVideogame';
import ListaExternaScreen from '../screen/listas/listaExternaScreen';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Registro" component={RegistroScreen} />
            <Tab.Screen name="Leer registros" component={MensajeScreen} />
            <Tab.Screen name="Editar Eliminar" component={EditarEliminarScreen} />
            <Tab.Screen name="Api" component={ListaExternaScreen} />
        </Tab.Navigator>
    );
}
