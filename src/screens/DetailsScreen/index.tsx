import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { params } from '../../navigators/MainNavigator'

interface Props extends NativeStackScreenProps<params, 'Details'>{}
const Component = (props: Props) => {

    const {
        route: {params: container}
    } = props

    const {origin, destiny, tacking_number, temp, img} = container

    console.log(temp);

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
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
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
        height: '100%',
        padding: 20,
        justifyContent: 'center',
    },
    Box: {
        width: '100%',
        paddingVertical: 20,
        display: 'flex',
    },
    Title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 32
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
        paddingVertical: 20
    },
    RouteItem_Text: {
        color: '#000',
        fontSize: 20,
        fontWeight: '400'
    },
    Img_Container: {
        width: '100%',
    },
    Img: {
        width: '100%',
        height: 200,
    }



})

export default Component
