import { logicalExpression } from '@babel/types';
import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Component = () => {
    return (
        <ScrollView >
            <StatusBar backgroundColor='#fff' barStyle="light-content"/>
            <View style={styles.TitleContainer}>
                <Text style={styles.TitleText}>Settings</Text>
            </View>

            <View style={styles.InfoContainer}>
                <Ionicons 
                    style={styles.UserIcon}
                    name='person-circle-outline'
                    color='#001233'
                    size={70}
                />
                <View style={styles.TextInfoContainer}>
                    <Text style={styles.TextInfo_Username}>Hello Username</Text>
                </View>
            </View>

            <View style={styles.SettingsContainer}> 
                <TouchableOpacity style={styles.SettingsItem_Container}>  
                    <View style={styles.SettingsItem_Left}>
                        <Ionicons 
                            name='wifi-outline'
                            color='#0466C8'
                            size={30}
                        />
                        <Text style={styles.SettingsItem_Text}>WiFi</Text>
                    </View>
                    <Ionicons 
                        name='chevron-forward-outline'
                        color='#7D8597'
                        size={30}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.SettingsItem_Container}>  
                    <View style={styles.SettingsItem_Left}>
                        <Ionicons 
                            name='bluetooth-outline'
                            color='#0466C8'
                            size={30}
                        />
                        <Text style={styles.SettingsItem_Text}>Bluetooth</Text>
                    </View>
                    <Ionicons 
                        name='chevron-forward-outline'
                        color='#7D8597'
                        size={30}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.SettingsItem_Container}>  
                    <View style={styles.SettingsItem_Left}>
                        <Ionicons 
                            name='image-outline'
                            color='#008000'
                            size={30}
                        />
                        <Text style={styles.SettingsItem_Text}>Display</Text>
                    </View>
                    <Ionicons 
                        name='chevron-forward-outline'
                        color='#7D8597'
                        size={30}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.SettingsItem_Container}>  
                    <View style={styles.SettingsItem_Left}>
                        <Ionicons 
                            name='volume-high-outline'
                            color='#FFB703'
                            size={30}
                        />
                        <Text style={styles.SettingsItem_Text}>Sounds</Text>
                    </View>
                    <Ionicons 
                        name='chevron-forward-outline'
                        color='#7D8597'
                        size={30}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.SettingsItem_Container}>  
                    <View style={styles.SettingsItem_Left}>
                        <Ionicons 
                            name='cog-outline'
                            color='#0466C8'
                            size={30}
                        />
                        <Text style={styles.SettingsItem_Text}>System</Text>
                    </View>
                    <Ionicons 
                        name='chevron-forward-outline'
                        color='#7D8597'
                        size={30}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.SettingsItem_Container}>  
                    <View style={styles.SettingsItem_Left}>
                        <Ionicons 
                            name='cog-outline'
                            color='#FFB703'
                            size={30}
                        />
                        <Text style={styles.SettingsItem_Text}>System</Text>
                    </View>
                    <Ionicons 
                        name='chevron-forward-outline'
                        color='#7D8597'
                        size={30}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    TitleContainer: {
        display: 'flex',
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    TitleText: {
        fontSize: 40,
        color: '#001233',
        fontWeight: 'bold',
        letterSpacing: 2
    }, 
    InfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        height: '15%',
        paddingHorizontal: 20,
        borderColor: '#7D8597'
    },
    UserIcon: {
        paddingRight: 10,
    },
    TextInfoContainer: {
        display: 'flex',
        height: '100%',
        width: '80%',
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
        borderBottomWidth: 0.9,
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