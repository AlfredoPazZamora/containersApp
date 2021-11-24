import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

// Screens
import ContainersScreen from '../../screens/ContainersScreen';
import WorkersScreen from '../../screens/WorkersScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import { colors } from '../../theme/Colors';

// Screen names
const containersName = 'Containers';
const workersName = 'Workers';
const settingsName = 'Settings';

const Component = () => {
    return (
        <Tab.Navigator
            activeColor={colors.white}
            inactiveColor={colors.blue_001}
            barStyle={{ borderTopStartRadius: 10}}
            shifting={true}
        >
            <Tab.Screen
                name={containersName}
                component={ContainersScreen}
                options={{
                    tabBarLabel: 'Containers',
                    tabBarColor: colors.primary,
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
                    tabBarColor: colors.secondary,
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
                    tabBarColor: colors.gray_334,
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
