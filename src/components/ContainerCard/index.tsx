import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ContainersInterface } from '../../interfaces/interfaces';
import Ionicons from 'react-native-vector-icons/Ionicons';


interface Props {
    container: ContainersInterface;
    onClick: (container: ContainersInterface) => void;
}

const Component = (props: Props) => {
    const { container, onClick} = props;
    const { id, origin, destiny, img, temp, tacking_number } = container;

    return (
        <TouchableHighlight style={styles.Container} onPress={() => onClick(container)}>
            <>
                <View style={styles.LineTop}></View>
                <View style={styles.ImageContainer}>
                    <Image
                        style={styles.Image}
                        source={{uri: img}}
                    />
                    <Text style={styles.TackingNumber}>Container: {tacking_number}</Text>
                </View>
                <View style={styles.DataContainer}>
                    <View style={styles.Information}>
                        <View style={styles.MoreInfo}>
                            <View style={styles.IconText}>
                                <Ionicons 
                                    name='navigate'
                                    color='#d90429'
                                    size={30}
                                />
                                <Text style={styles.NickName}>{origin}</Text>
                            </View>

                            <Ionicons 
                                name='arrow-forward-outline'
                                color='#000'
                                size={25}
                            />

                            <View style={styles.IconText}>
                                <Ionicons 
                                    name='navigate'
                                    color='#008000'
                                    size={25}
                                />
                                <Text style={styles.NickName}>{destiny}</Text>
                            </View>
                        </View>

                        <View style={styles.MoreInfo}>
                            <View style={styles.IconText}>
                                <Ionicons 
                                    name='thermometer-outline'
                                    color='#0466C8'
                                    size={25}
                                />
                                <Text style={styles.NickName}>{temp}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginHorizontal: 20,
        marginTop: 20,
        height: 275,
        borderRadius: 10,
        backgroundColor: '#f8f9fa',
        display: 'flex',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    LineTop: {
        backgroundColor: '#0466C8',
        height: '30%',
        width: '100%',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    },
    ImageContainer: {
        display: 'flex',
        justifyContent: 'center',
        height: '30%',
        position: 'absolute',
        left: 20,
        top: 40,
        width: '90%',
    },
    Image: {
        borderRadius: 100,
        height: 80,
        justifyContent: 'center',
        width: 80,
    },
    DataContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        height: '70%',
        padding: 20,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10
    },
    Information: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '70%',
        width: '100%',
        marginTop: 20
    },
    TackingNumber: {
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 18,
        position: 'absolute',
        left: 85,
        top: 15,
    },
    IconText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    MoreInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    NickName: {
        color: '#000',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export { Component as ContainerCard };
export default Component;