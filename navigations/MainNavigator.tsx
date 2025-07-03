import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MensajeScreen from '../screen/MensajeScreen';
import RegistroScreen from '../screen/RegistroScreen';
import EditarEliminarScreen from '../screen/EditarEliminarScreen';
import ListaApiScreen from '../screen/ListaApiScreen';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../components/Homex';
import TabNavigator from './TabNavigator';


const Stack = createStackNavigator();

function Mystack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Mystack></Mystack>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})