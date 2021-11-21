import React, { useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {useForm} from '../../hooks/useForm';
import {LoginInterface} from '../../interfaces/LoginInterfaces';

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
    const {navigation} = props;

    const {email, password, onChange} = useForm<LoginInterface>({
        email: '',
        password: '',
    })

    useEffect(() => {
        console.log(`Email => ${email}`);
        console.log(`Password => ${password}`); 
    }, [email, password]);

    const doLogin = () => {
        if (!(email === '1' && password === '1')) return;

        navigation.navigate('Home');
    }

    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Containers</Text>
            <View>
                <TextInput
                    value={email as string}
                    onChangeText={value => onChange('email', value)}
                    placeholder='Email'
                    maxLength={40}
                    style={styles.Input}
                    placeholderTextColor='black'
                    keyboardType='email-address'
                />
                <TextInput
                    placeholder='Password'
                    maxLength={20}
                    style={styles.Input}
                    placeholderTextColor='black'
                    secureTextEntry={true}
                    onChangeText={value => onChange('password', value)}
                    value={password as string}

                />
            </View>

            <TouchableOpacity onPress={doLogin} style={styles.MoveTouchable}>
                <Text style={styles.TouchableText}>SignIn</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        backgroundColor: 'white',
        display: 'flex',
        height: '100%',
        justifyContent: 'center'
    },
    Title: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 4,
    },
    Input: {
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 0.5,
        color: 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
        width: 170,
        height: 50,
    },
    TouchableText: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 15,
        backgroundColor: 'blue',
        width: 170,
        height: 30,
        textAlign: 'center',
    },
    MoveTouchable: {
        paddingTop: 25,
        borderRadius: 3,
    },
})

export default Component;