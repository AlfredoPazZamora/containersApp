import React from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import SplashScreen from '../../screens/SplashScreen';
import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import { ContainersInterface, LoginInterface } from '../../interfaces/interfaces';
import DetailsScreen from '../../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export type params = {
    Splash: undefined,
    Login: undefined,
    Home: LoginInterface,
    Details: ContainersInterface,
}

export const Component = () => {
    return (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}

export default Component;