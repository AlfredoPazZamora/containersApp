import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createMaterialBottomTabNavigator();

import ContainersScreen from '../../screens/ContainersScreen';
import WorkersScreen from '../../screens/WorkersScreen';
import SettingsScreen from '../../screens/SettingsScreen';


const App = () => {
    return (
        <Tab.Navigator
            activeColor="#f0edf6"
            inactiveColor="gray"
            barStyle={{ backgroundColor: 'tomato' }}
            shifting={true}
        >
            <Tab.Screen
                name="Containers"
                component={ContainersScreen}
                options={{
                    tabBarLabel: 'Containers',
                    tabBarColor: 'blue',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="ferry" color={color} size={26} />
                    ),
                  }}
            />
            <Tab.Screen
                name="Workers"
                component={WorkersScreen}
                options={{
                    tabBarLabel: 'Workers',
                    tabBarColor: 'green',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="account-hard-hat" color={color} size={26} />
                    ),
                  }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarColor: 'purple',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                    ),
                  }}
            />
        </Tab.Navigator>

    );

}

export default App