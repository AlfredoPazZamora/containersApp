import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ToastAndroid } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {useForm} from '../../hooks/useForm';
import {LoginInterface} from '../../interfaces/LoginInterfaces';
import * as Animatable from 'react-native-animatable';

import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
    const {navigation} = props;

    const {username, password, onChange} = useForm<LoginInterface>({
        username: '',
        password: '',
    })

    const [showPassword, setShowPassword] = useState(true)

    const doLogin = () => {        
        if(username.length == 0 || password.length == 0){
            ToastAndroid.show("Username or password field cannot be empty.", ToastAndroid.SHORT );
            return;
        }else if(username.length < 4){
            ToastAndroid.show("Username must have a minimum of 4 characters", ToastAndroid.SHORT );
            return;
        }else if(password.length < 4){
            ToastAndroid.show("Password must have a minimum of 4 characters", ToastAndroid.SHORT );
            return;
        }else{
            navigation.navigate('Home');
        }
    }

    return (

        <View style={styles.Container}>
            <StatusBar backgroundColor='#0466C8' barStyle="light-content"/>
            <View style={styles.Header}> 
                <Ionicons 
                    name='boat-outline'
                    color='#fff'
                    size={100}
                />
            </View>
            
            <Animatable.View style={styles.Footer} animation="fadeInUpBig">
                <Text style={styles.Text_footer}>Email</Text>
                <View style={styles.Action}>
                    <Ionicons
                        name="person-outline"
                        color={'#001233'}
                        size={30}
                    />
                    <TextInput 
                        value={username as string}
                        onChangeText={value => onChange('username', value)}
                        maxLength={20}
                        placeholder='Your Username'
                        placeholderTextColor='#979DAC'
                        style={styles.TextInput}
                        autoCapitalize='none'
                    />
                    {username.length >= 4 ?
                        <Animatable.View animation="bounceIn">
                            <Ionicons 
                                name='checkmark-circle-outline'
                                color='#38B000'
                                size={30}
                            /> 
                        </Animatable.View>
                    : null}
                </View>

                <Text style={[styles.Text_footer, {marginTop: 20}]}>Password</Text>
                <View style={styles.Action}>
                    <Ionicons
                        name="lock-closed-outline"
                        color={'#001233'}
                        size={30}
                    />
                    <TextInput 
                        value={password as string}
                        onChangeText={value => onChange('password', value)}
                        placeholder='Your Password'
                        placeholderTextColor='#979DAC'
                        style={styles.TextInput}
                        autoCapitalize='none'
                        secureTextEntry={showPassword}
                    />
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? 
                            <Ionicons 
                                name='eye-off'
                                color='#7D8597'
                                size={30}
                            /> : 
                            <Ionicons 
                                name='eye'
                                color='#7D8597'
                                size={30}
                            />

                        }

                    </TouchableOpacity>
                </View>

                <View style={styles.Button}>

                    <TouchableOpacity onPress={doLogin} style={styles.SignIn}>
                        <Text style={styles.TextSign} >Login</Text>
                    </TouchableOpacity>

                </View>
            </Animatable.View>

        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: "#0466C8"
    },
    Header: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        alignSelf: 'center'
    },
    Footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    Text_footer: {
        color: '#001233',
        fontSize: 18
    },
    Action: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    TextInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#001233',
        fontSize: 16
    },
    Button: {
        alignItems: 'center',
        marginTop: 50,
    },
    SignIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#0466C8'
    },
    TextSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
  });

export default Component;