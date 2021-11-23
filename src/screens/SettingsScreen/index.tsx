import { logicalExpression } from '@babel/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { FlatList, ScrollView, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { params } from '../../navigators/MainNavigator';


const Component = () => {
    const iconsData = [
        {iconName: 'link-outline', color: '#0466C8', title: 'Connections'},
        {iconName: 'image-outline', color: '#008000', title: 'Display'},
        {iconName: 'notifications-outline', color: '#FFB703', title: 'Notifications'},
        {iconName: 'cog-outline', color: '#0466C8', title: 'System'},
        {iconName: 'alert-circle-outline', color: '#5C677D', title: 'About application'},
    ];

    return (
        <SafeAreaView style={styles.Container}>
            <StatusBar backgroundColor='#fff' barStyle="light-content"/>
            <View style={styles.HeaderContainer}>
                <Text style={styles.TitleText}>Settings</Text>
                <View style={styles.InfoContainer}>
                    <Ionicons 
                        style={styles.UserIcon}
                        name='person-circle-outline'
                        color='#001233'
                        size={75}
                    />
                </View>
            </View>


            <View style={styles.SettingsContainer}> 
                <FlatList 
                    data={iconsData}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity style={styles.SettingsItem_Container}>  
                                <View style={styles.SettingsItem_Left}>
                                    <Ionicons 
                                        name={item.iconName}
                                        color={item.color}
                                        size={30}
                                    />
                                    <Text style={styles.SettingsItem_Text}>{item.title}</Text>
                                </View>
                                <Ionicons 
                                    name='chevron-forward-outline'
                                    color='#7D8597'
                                    size={30}
                                />
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    HeaderContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    TitleText: {
        fontSize: 40,
        color: '#001233',
        fontWeight: 'bold',
        letterSpacing: 2
    }, 
    InfoContainer: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        marginVertical: 20
    },
    UserIcon: {
        paddingRight: 10,
    },
    TextInfoContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    TextInfo_Username: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#001233'
    },
    SettingsContainer: {
        borderTopColor: '#7D8597',
        borderTopWidth: 20
    },
    SettingsItem_Container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderColor: '#7D8597',
        borderTopWidth: 0.9,
    },
    SettingsItem_Left: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    SettingsItem_Text: {
        marginLeft: 10,
        fontSize: 20,
        color: '#001233',
        fontWeight: '300',
        letterSpacing: 2
    },
})

export default Component;