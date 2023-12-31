import React from 'react';
import { COLOURS } from '../ThemeColour/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';

const Register = ({navigation}) => {

    const [hidePass, setHidePass] = React.useState(true);

    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle={'dark-content'} />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

                <View style={styles.short_container}>
                    <View style={styles.name_line}>
                        <Text style={styles.login_name}>Register Here</Text>
                        <Text style={styles.login_line}></Text>
                    </View>

                    <Text style={styles.your_name}>Name</Text>
                    <View style={styles.inpt_container}>
                        <FontAwesome5 name='user-edit' style={styles.icon} />
                        <TextInput placeholder='Your Name' placeholderTextColor={COLOURS.grey} style={styles.name_inpt} />
                    </View>

                    <Text style={styles.your_name}>Email</Text>
                    <View style={styles.inpt_container}>
                        <FontAwesome5 name='envelope' style={styles.icon} />
                        <TextInput placeholder='Your Email' placeholderTextColor={COLOURS.grey} style={styles.name_inpt} />
                    </View>

                    <Text style={styles.your_name}>Contact</Text>
                    <View style={styles.inpt_container}>
                        <FontAwesome5 name='phone-alt' style={styles.icon} />
                        <TextInput placeholder='Your Cell' placeholderTextColor={COLOURS.grey} style={styles.name_inpt} keyboardType='numeric' />
                    </View>


                    <Text style={styles.pswd_name}>Password</Text>
                    <View style={styles.pswd_inpt_container}>
                        <TouchableOpacity activeOpacity={0.6}>
                            <MaterialCommunityIcons name='key-variant' style={styles.icon} />
                        </TouchableOpacity>
                        <TextInput placeholder='Your Password' secureTextEntry={hidePass ? true : false} placeholderTextColor={COLOURS.grey} style={styles.pswd_inpt} />

                        <FontAwesome5 name={hidePass ? 'eye-slash' : 'eye'} onPress={() => setHidePass(!hidePass)} style={styles.eye_icon} />
                    </View>

                    <Text style={styles.pswd_name}>Confirm Password</Text>
                    <View style={styles.pswd_inpt_container}>
                        <TouchableOpacity activeOpacity={0.6}>
                            <MaterialCommunityIcons name='key-variant' style={styles.icon} />
                        </TouchableOpacity>
                        <TextInput placeholder='Confirm Password' secureTextEntry={hidePass ? true : false} placeholderTextColor={COLOURS.grey} style={styles.pswd_inpt} />

                        <FontAwesome5 name={hidePass ? 'eye-slash' : 'eye'} onPress={() => setHidePass(!hidePass)} style={styles.eye_icon} />
                    </View>

                    <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.replace('Login')}>
                        <Text style={styles.forgot_pswd}>Already Have an account ?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6} style={styles.login_here_btn} onPress={()=> navigation.replace('Home')}>
                        <Text style={styles.login_here}>Register </Text>
                    </TouchableOpacity>

                    <View style={styles.dont_account}>
                        <TouchableOpacity activeOpacity={0.6}>
                            <Text style={styles.already_have}></Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </>
    )
}

export default Register

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    },

    short_container: {
        marginTop: 50,
        marginHorizontal: 20,
    },

    login_name: {
        fontSize: 23,
        textAlign: 'center',
        color: COLOURS.black,
        fontFamily: 'Roboto-Bold',
    },

    name_line: {
        marginBottom: 20,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    login_line: {
        top: 5,
        right: 35,
        height: 4,
        width: 70,
        borderRadius: 10,
        backgroundColor: COLOURS.blue,
    },

    your_name: {
        fontSize: 17,
        marginTop: 20,
        paddingBottom: 10,
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },
    pswd_name: {
        fontSize: 17,
        marginTop: 20,
        paddingBottom: 10,
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },

    inpt_container: {
        borderWidth: 1,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderColor: COLOURS.blue,
    },

    pswd_inpt_container: {
        borderWidth: 1,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        borderColor: COLOURS.blue,
        justifyContent: 'space-around',
        // backgroundColor: 'red',
    },

    icon: {
        width: 20,
        fontSize: 17,
        color: COLOURS.blue,
    },

    eye_icon: {
        width: 25,
        fontSize: 18,
        color: COLOURS.blue,
    },

    name_inpt: {
        padding: 10,
        width: '100%',
        fontFamily: 'Roboto-Medium',
        letterSpacing: .5,
        color: COLOURS.black,
    },

    pswd_inpt: {
        width: '100%',
        fontFamily: 'Roboto-Medium',
        letterSpacing: .5,
        color: COLOURS.black,
        paddingHorizontal: 20,
    },

    forgot_pswd: {
        top: 30,
        fontFamily: 'Roboto-Medium',
        color: COLOURS.blue,
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
    },

    login_here_btn: {
        height: 50,
        padding: 15,
        marginTop: 50,
        width: '100%',
        borderRadius: 30,
        backgroundColor: COLOURS.blue,
    },

    login_here: {
        fontSize: 13,
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
    },


    dont_account: {
        width: 180,
        marginTop: 30,
        marginHorizontal: 10,
    },

    already_have: {
        letterSpacing: .2,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
    },
})