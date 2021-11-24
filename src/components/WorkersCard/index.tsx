import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { WorkerInterface } from '../../interfaces/interfaces';


interface Props {
    worker: WorkerInterface;
}

const Component = (props: Props) => {
    const { worker } = props;
    const { id, name, surname, ocuppation, img } = worker;

    let iconName = ''

    switch(ocuppation){
        case 'Transportist':
            iconName ='bus-outline';
            break; 
        case 'Guard': 
            iconName ='lock-closed-outline';
            break; 
        case 'accountant': 
            iconName ='lock-closed-outline';
            break;
        case 'Engineer': 
            iconName ='build-outline';
            break;
    }


    return (
        <TouchableHighlight style={styles.Container}>
            <>
                <View style={styles.ImageContainer}>
                    <Image
                        style={styles.Image}
                        source={{uri: img}}
                    />
                </View>
                <View style={styles.DataContainer}>
                    <View style={styles.Information}>
                        <View>
                            <Text style={styles.Name}>{name}</Text> 

                            <Text style={styles.Name}>{surname}</Text>
                        </View>

                        <View style={styles.OccupationContainer}>
                            <Text style={styles.NickName}>{ocuppation}</Text>
                        </View>

                    </View>
                    <Ionicons
                        style={styles.Icon}
                        name={iconName}
                        color='#FB8500'
                        size={30}
                    />
                </View>
            </>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginHorizontal: 20,
        marginTop: 20,

        height: 150,
        backgroundColor: '#f8f9fa',

        display: 'flex',
        flexDirection: 'row',
        
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
    },
    ImageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        height: '90%',
        width: '29%',
    },
    Image: {
        justifyContent: 'center',

        width: '100%',
        height: '65%',
        marginLeft: 20,
        borderRadius: 100,
    },
    DataContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: '60%',
        marginLeft: 20,
    },
    Information: {
        display: 'flex',
        justifyContent: 'center',
        
        height: '80%',
    },
    Name: {
        color: '#101419',
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 20
    },
    NickName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
    },
    OccupationContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FB8500',
        borderRadius: 10,
        marginTop: 10,
        padding: 5,
        justifyContent: 'center'
    },
    Icon: {
        marginRight: 20
    },
    Box: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#333',
        width: '100%',
        justifyContent: 'space-around'
    }
});

export { Component as WokerkerCard };
export default Component;