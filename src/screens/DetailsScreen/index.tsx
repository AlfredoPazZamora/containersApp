import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Image, Text, View } from 'react-native'
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
        <View>
            <View>
                <Text>{tacking_number}</Text>
            </View>

            <View>
                <Ionicons 
                    name='thermometer-outline'
                    color='#000'
                    size={30}
                />
                <Text>{temp}</Text>
            </View>

            <View>
                <View>
                    <Ionicons 
                        name='navigate'
                        color='#000'
                        size={30}
                    />
                    <Text>{origin}</Text>
                </View>

                <View>
                    <Ionicons 
                        name='navigate'
                        color='#000'
                        size={30}
                    />
                    <Text>{destiny}</Text>
                </View>
            </View>

            <View>
                <Image source={{uri: img}}/>
            </View>
        </View>
    )
}

export default Component
