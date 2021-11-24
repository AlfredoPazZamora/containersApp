import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { params } from '../../navigators/MainNavigator'

interface Props extends NativeStackScreenProps<params, 'Details'>{}
const Component = (props: Props) => {

    const {
        route: {params: container}
    } = props

    const {origin, destiny, tacking_number, temp, img} = container


    return (

        <View style={styles.Shadow}>
            <View style={styles.Container}>
                <StatusBar backgroundColor='#f2f2f2' barStyle="dark-content"/>
                <View style={styles.Box}>
                    <Text style={styles.Title}>N° {tacking_number}</Text>
                </View>

                <View style={[styles.Box, styles.Temp_Container]}>
                    <Ionicons 
                        name='thermometer-outline'
                        color='#0466C8'
                        size={30}
                    />
                    <Text style={styles.Temp_Text}>{temp}</Text>
                </View>

                <View style={[styles.Box, styles.Route_Container]}>
                    <View style={styles.RouteItem_Container}>
                        <Ionicons 
                            name='navigate'
                            color='#d90429'
                            size={25}
                        />
                        <Text style={styles.RouteItem_Text}>{origin}</Text>
                    </View>

                    <Ionicons 
                        name='arrow-forward-outline'
                        color='#000'
                        size={30}
                    />

                    <View style={styles.RouteItem_Container}>
                        <Ionicons 
                            name='navigate'
                            color='#008000'
                            size={25}
                        />
                        <Text style={styles.RouteItem_Text}>{destiny}</Text>
                    </View>
                </View>

                <View style={[styles.Box, styles.Img_Container]}>
                    <Image style={styles.Img} source={{uri: img}}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Shadow: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2'
    },
    Container: {
        margin: 20,
        height: '90%',
        borderRadius: 10,
        backgroundColor: '#f8f9fa',
        display: 'flex',
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,

        paddingHorizontal: 20
    },
    Box: {
        width: '100%',
        paddingVertical: 20,
        display: 'flex',
        // backgroundColor: '#333',
    },
    Title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 32,
        alignSelf: 'center'
    },
    Temp_Container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    Temp_Text: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 24,
        marginHorizontal: 10
    },
    Route_Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    RouteItem_Container: {
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'space-around',
        paddingVertical: 20,
    },
    RouteItem_Text: {
        color: '#000',
        fontSize: 20,
        fontWeight: '400'
    },
    Img_Container: {
        display: 'flex',
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    Img: {
        width: '100%',
        height: 200,
    }



})

export default Component
