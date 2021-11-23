import React from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import SplashScreen from '../../screens/SplashScreen';
import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import { LoginInterface } from '../../interfaces/interfaces';

const Stack = createNativeStackNavigator();

export type params = {
    Splash: undefined,
    Login: undefined,
    Home: LoginInterface,
}

export const Component = () => {
    return (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default Component;