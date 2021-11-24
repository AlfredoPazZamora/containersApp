import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ToastAndroid } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {useForm} from '../../hooks/useForm';
import {LoginInterface} from '../../interfaces/interfaces';
import * as Animatable from 'react-native-animatable';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/Colors';

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
            ToastAndroid.show(`Welcome ${username}`, ToastAndroid.SHORT );
            navigation.navigate('Home', {username, password});
        }
    }

    return (

        <View style={styles.Container}>
            <StatusBar backgroundColor={colors.primary} barStyle="light-content"/>
            <View style={styles.Header}> 
                <Ionicons 
                    name='boat-outline'
                    color={colors.white}
                    size={100}
                />
            </View>
            
            <Animatable.View style={styles.Footer} animation="fadeInUpBig">
                <Text style={styles.Text_footer}>Email</Text>
                <View style={styles.Action}>
                    <Ionicons
                        name="person-outline"
                        color={colors.blue_001}
                        size={30}
                    />
                    <TextInput 
                        value={username as string}
                        onChangeText={value => onChange('username', value)}
                        maxLength={20}
                        placeholder='Your Username'
                        placeholderTextColor={colors.gray_979}
                        style={styles.TextInput}
                        autoCapitalize='none'
                    />
                    {username.length >= 4 ?
                        <Animatable.View animation="bounceIn">
                            <Ionicons 
                                name='checkmark-circle-outline'
                                color={colors.green}
                                size={30}
                            /> 
                        </Animatable.View>
                    : null}
                </View>

                <Text style={[styles.Text_footer, {marginTop: 20}]}>Password</Text>
                <View style={styles.Action}>
                    <Ionicons
                        name="lock-closed-outline"
                        color={colors.blue_001}
                        size={30}
                    />
                    <TextInput 
                        value={password as string}
                        onChangeText={value => onChange('password', value)}
                        placeholder='Your Password'
                        placeholderTextColor={colors.gray_979}
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
                                color={colors.gray_979}
                                size={30}
                            /> : 
                            <Ionicons 
                                name='eye'
                                color={colors.gray_979}
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
      backgroundColor: colors.primary
    },
    Header: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        alignSelf: 'center'
    },
    Footer: {
        flex: 3,
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    Text_footer: {
        color: colors.blue_001,
        fontSize: 18
    },
    Action: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray_f2f,
        paddingBottom: 5,
    },
    TextInput: {
        flex: 1,
        paddingLeft: 10,
        color: colors.blue_001,
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
        backgroundColor: colors.primary
    },
    TextSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white
    }
  });

export default Component;