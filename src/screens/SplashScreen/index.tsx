import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

const animationBoat = '../../assets/animation/splashAnimation.json';

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {

    const {navigation} = props;
    const navigateToLoginScreen = () => { navigation.navigate('Login') };

    return (
        <View style={styles.Container}>
            <LottieView 
                source={require(animationBoat)} 
                autoPlay 
                loop={false}
                speed={0.5}
                onAnimationFinish = {() => { navigateToLoginScreen() }}
                />        
        </View>
        
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff'
    },
})

export default Component;