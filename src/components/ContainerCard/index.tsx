import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ContainersInterface } from '../../interfaces/LoginInterfaces';


interface Props {
    container: ContainersInterface;
}

const Component = (props: Props) => {
    const { container } = props;
    const { id, origin, destiny, img } = container;
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
                        <Text style={styles.Name}>{id}</Text>
                        <Text style={styles.NickName}>{origin}</Text>
                        <Text style={styles.NickName}>{destiny}</Text>
                    </View>
                </View>
            </>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#ddd',
        display: 'flex',
        flexDirection: 'row',
        borderColor: '#rrr',
        borderWidth: 0.5,
        height: 100,
        padding: 20,
        with: '100%',
    },
    ImageContainer: {
        alignItems: 'center',
        display: 'flex',
        flex: 0.2,
        height: '100%',
        justifyContent: 'center'
    },
    Image: {
        borderRadius: 100,
        height: '100%',
        justifyContent: 'center',
        width: 60,
    },
    DataContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.7,
        padding: 1,
    },
    Information: {
        justifyContent: 'center',
    },
    Name: {
        color: '#101419',
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    NickName: {
        color: '#464655'
    },
});

export { Component as ContainerCard };
export default Component;