import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, ViewComponent } from 'react-native'
import { Avatar,Icon, ListItem } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements'


const Component = () => {
    return (
        <>
            <ScrollView>

                <View style={styles.view}>
                    {<ListItem key={undefined} bottomDivider hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}>
                        <Avatar size="large"
                            title="MA"
                            rounded
                            activeOpacity={0.7}
                            backgroundColor="blue" />
                        
                        <ListItem.Content>
                            <ListItem.Title>Maria Aguilar </ListItem.Title>
                            <ListItem.Subtitle>Ingeniera en telematica</ListItem.Subtitle>
                        </ListItem.Content>
                    <Icon name="person" size={30}  tvParallaxProperties={undefined} />
                    </ListItem>}
                </View>

                <View style={styles.view}>

                    <View style={styles.item}>
                        <Text style={styles.Title}>My info</Text>
                    </View>
                        <Text style={styles.SubTitle}>Ing. Maria Aguilar Hernandez </Text>

                    <Text style={styles.Title}>Account</Text>
                    <Text style={styles.SubTitle}>mariaguilarhernandez@gmail.com</Text>

                    <View style={styles.item}>
                        <Text style={styles.Title}>Number phone</Text>    
                    </View>
                    <Text style={styles.SubTitle}>+52 312 129 60 40</Text>

                    <View style={styles.item}>
                        <Text style={styles.Title}>Help</Text>
                    </View>
                    <Text style={styles.SubTitle}>Questions about this app</Text>

                </View>

                <View style={styles.view}>


                    <Text style={styles.Title}>
                        Social media
                    </Text>
                    {<ListItem hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}>
                        <SocialIcon
                            type='twitter' />

                        <SocialIcon
                            type='facebook' />

                        <SocialIcon
                            raised={false}
                            type='gitlab' />
                        <SocialIcon
                            type='instagram' />

                    </ListItem>}
                </View>



            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    item:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    ImageContainer: {
        alignItems: 'center',
        display: 'flex',
        flex: 0.2,
        height: '100%',
        justifyContent: 'center'
    },
    DataContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.7,
        padding: 1,
    },
    SubTitle:{
        fontSize:14,
        color: 'gray',
        paddingTop: 5,
        borderBottomColor: 'black',
        borderBottomWidth: .5,
    },
    view:{
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 20,

    },
    Container: {
        alignItems: 'center',
        backgroundColor: 'white',
        display: 'flex',
        height: '100%',
        justifyContent: 'center'
    },
    Title: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 4,
        paddingBottom: 10,
        paddingTop: 10,
        
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