import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

// Screens
import ContainersScreen from '../../screens/ContainersScreen';
import WorkersScreen from '../../screens/WorkersScreen';
import SettingsScreen from '../../screens/SettingsScreen';

// Screen names
const containersName = 'Containers';
const workersName = 'Workers';
const settingsName = 'Settings';

const Component = () => {
    return (
        <Tab.Navigator
            activeColor="#fff"
            inactiveColor="#001233"
            barStyle={{ backgroundColor: 'tomato', borderTopStartRadius: 10}}
            shifting={true}
        >
            <Tab.Screen
                name={containersName}
                component={ContainersScreen}
                options={{
                    tabBarLabel: 'Containers',
                    tabBarColor: '#0466C8',
                    tabBarIcon: ({focused, color }) => (
                        !focused ?
                            <Ionicons name='cube-outline' size={26} color={color}/>
                            :
                            <Ionicons name='cube' size={26} color={color}/>
                    ),
                  }}
            />
            <Tab.Screen
                name={workersName}
                component={WorkersScreen}
                options={{
                    tabBarLabel: 'Workers',
                    tabBarColor: '#FB8500',
                    tabBarIcon: ({focused, color }) => (
                        !focused ? 
                            <Ionicons name='person-outline' size={26} color={color}/>
                            :
                            <Ionicons name='person' size={26} color={color}/>
                    ),
                  }}
            />
            <Tab.Screen
                name={settingsName}
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarColor: '#33415C',
                    tabBarIcon: ({focused, color }) => (
                        !focused ? 
                            <Ionicons name='cog-outline' size={26} color={color}/>
                            :
                            <Ionicons name='cog' size={26} color={color}/>
                    ),
                  }}
            />
        </Tab.Navigator>
    )
}

export default Component
