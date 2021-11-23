import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

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
            
            initialRouteName={containersName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  let rn = route.name;
      
                  if (rn === containersName) {
                    iconName = focused ? 'home' : 'home-outline';
      
                  } else if (rn === workersName) {
                    iconName = focused ? 'list' : 'list-outline';
      
                  } else if (rn === settingsName) {
                    iconName = focused ? 'settings' : 'settings-outline';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName as string} size={size} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: '#0466C8',
                tabBarInactiveTintColor: '#979DAC',
                tabBarLabelStyle: {paddingBottom: 10, fontSize: 10},
                tabBarStyle: {padding: 10, height: 70}
              })}
              
            >

            <Tab.Screen name={containersName} component={ContainersScreen} />   
            <Tab.Screen name={workersName} component={WorkersScreen} />   
            <Tab.Screen name={settingsName} component={SettingsScreen} />   
        </Tab.Navigator>
    )
}

export default Component
