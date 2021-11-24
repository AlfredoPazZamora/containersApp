import React from 'react'
import { FlatList,StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/Colors';

const Component = () => {
    const iconsData = [
        {iconName: 'link-outline', color: colors.primary, title: 'Connections'},
        {iconName: 'image-outline', color: colors.green, title: 'Display'},
        {iconName: 'notifications-outline', color: colors.secondary, title: 'Notifications'},
        {iconName: 'cog-outline', color: colors.primary, title: 'System'},
        {iconName: 'alert-circle-outline', color: colors.gray_334 , title: 'About application'},
    ];

    return (
        <SafeAreaView style={styles.Container}>
            <StatusBar backgroundColor={colors.gray_f2f} barStyle="dark-content"/>
            <View style={styles.HeaderContainer}>
                <Text style={styles.TitleText}>Settings</Text>
                <View style={styles.InfoContainer}>
                    <Ionicons 
                        style={styles.UserIcon}
                        name='person-circle-outline'
                        color={colors.gray_334}
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
                                    color={colors.gray_979}
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
        backgroundColor: colors.gray_f2f
    },
    HeaderContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    TitleText: {
        fontSize: 40,
        color: colors.gray_334,
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
        color: colors.blue_001
    },
    SettingsContainer: {
        borderTopColor: colors.gray_334,
        borderTopWidth: 20
    },
    SettingsItem_Container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderColor: colors.gray_979,
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
        color: colors.blue_001,
        fontWeight: '300',
        letterSpacing: 2
    },
})

export default Component;