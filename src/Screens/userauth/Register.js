import { COLOURS } from '../../ThemeColour/Theme';
import React, { useContext, useState, } from 'react'
import themeContext from '../../Toggle/themeContext';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, Text, View, SafeAreaView } from 'react-native';

const Register = ({ navigation }) => {

    const [hidePass, setHidePass] = useState(true);
    const [darkmode, setDarkMode] = useState(false);

    const theme = useContext(themeContext);


    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView>

                <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, { backgroundColor: theme.backgroundColor }]}>

                    <View style={styles.short_container}>
                        <View style={styles.name_line}>
                            <Text style={[styles.login_name, { color: theme.colorwhite }]}>Register Here</Text>
                            <Text style={[styles.login_line, { backgroundColor: theme.colorblue }]}></Text>
                        </View>

                        <View style={styles.login_msg_bg}>
                            <Text style={[styles.login_msg,{color:COLOURS.grey}]}>create your account for a better experience !</Text>
                        </View>

                        <Text style={[styles.your_name, { color: theme.colorwhite }]}>Name</Text>
                        <View style={[styles.inpt_container, { backgroundColor: theme.lightblack }]}>
                            <FontAwesome5 name='user-edit' style={[styles.icon, { color: theme.colorblue }]} />
                            <TextInput placeholder='Your Name' placeholderTextColor={COLOURS.grey} style={styles.name_inpt} />
                        </View>

                        <Text style={[styles.your_name, { color: theme.colorwhite }]}>Email</Text>
                        <View style={[styles.inpt_container, { backgroundColor: theme.lightblack }]}>
                            <FontAwesome5 name='envelope' style={[styles.icon, { color: theme.colorblue }]} />
                            <TextInput placeholder='Your Email' placeholderTextColor={COLOURS.grey} style={styles.name_inpt} />
                        </View>

                        <Text style={[styles.your_name, { color: theme.colorwhite }]}>Contact</Text>
                        <View style={[styles.inpt_container, { backgroundColor: theme.lightblack }]}>
                            <FontAwesome5 name='phone-alt' style={[styles.icon, { color: theme.colorblue }]} />
                            <TextInput placeholder='Your Cell' placeholderTextColor={COLOURS.grey} style={styles.name_inpt} keyboardType='numeric' />
                        </View>

                        <Text style={[styles.pswd_name, { color: theme.colorwhite }]}>Password</Text>
                        <View style={[styles.pswd_inpt_container, { backgroundColor: theme.lightblack }]}>
                            <TouchableOpacity activeOpacity={0.6}>
                                <MaterialCommunityIcons name='key-variant' style={[styles.icon, { color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <TextInput placeholder='Your Password' secureTextEntry={hidePass ? true : false} placeholderTextColor={COLOURS.grey} style={styles.pswd_inpt} />

                            <FontAwesome5 name={hidePass ? 'eye-slash' : 'eye'} onPress={() => setHidePass(!hidePass)} style={[styles.eye_icon, { color: theme.colorblue }]} />
                        </View>

                        <Text style={[styles.pswd_name, { color: theme.colorwhite }]}>Confirm Password</Text>
                        <View style={[styles.pswd_inpt_container, { backgroundColor: theme.lightblack }]}>
                            <TouchableOpacity activeOpacity={0.6}>
                                <MaterialCommunityIcons name='key-variant' style={[styles.icon, { color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <TextInput placeholder='Confirm Password' secureTextEntry={hidePass ? true : false} placeholderTextColor={COLOURS.grey} style={styles.pswd_inpt} />
                        </View>

                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.replace('Login')}>
                            <Text style={[styles.forgot_pswd, { color: theme.colorblue }]}>Already Have an account ?</Text>
                        </TouchableOpacity>


                        <View style={styles.btn_center}>
                            <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                                <Text style={styles.btn_text}>sign in</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.dont_account}>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Text style={styles.already_have}></Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>
            </SafeAreaView>

        </>
    )
}

export default Register

const styles = StyleSheet.create({

    login_msg_bg: {
        alignItems:'center',
        justifyContent:'center',
        marginTop:responsiveHeight(3),
    },

    login_msg : {
        textAlign: 'center',
        color: COLOURS.black,
        textTransform:'capitalize',
        width:responsiveWidth(60),
        fontFamily: 'Roboto-Medium',
        lineHeight:responsiveWidth(5),
        fontSize: responsiveFontSize(1.7),
    },

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    },

    short_container: {
        marginTop: responsiveWidth(14.2),
        marginHorizontal: responsiveWidth(5.5),
    },

    login_name: {
        textAlign: 'center',
        color: COLOURS.black,
        fontFamily: 'Roboto-Bold',
        marginTop: responsiveWidth(10),
        fontSize: responsiveFontSize(3.1),
    },

    name_line: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    login_line: {
        height: responsiveWidth(1.2),
        right: responsiveWidth(12.5),
        width: responsiveWidth(14),
        top: responsiveWidth(1.3),
        backgroundColor: COLOURS.blue,
        borderRadius: responsiveWidth(10),
    },

    your_name: {
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        marginTop: responsiveWidth(3),
        fontSize: responsiveFontSize(2.2),
        paddingBottom: responsiveWidth(2.8),
    },

    pswd_name: {
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveWidth(5.5),
        paddingBottom: responsiveWidth(2.8),
    },

    inpt_container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: responsiveWidth(10),
        paddingHorizontal: responsiveWidth(5.5),
    },

    pswd_inpt_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around', 
        borderRadius: responsiveWidth(10),
        paddingHorizontal: responsiveWidth(6.9),
    },

    icon: {
        color: COLOURS.blue,
        width: responsiveWidth(5.5),
        fontSize: responsiveFontSize(2.3),
    },

    eye_icon: {
        color: COLOURS.blue,
        width: responsiveWidth(7),
        fontSize: responsiveFontSize(2.5),
    },

    name_inpt: {
        width: '100%',
        letterSpacing: .5,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        paddingHorizontal: responsiveWidth(3),
    },

    pswd_inpt: {
        width: '100%',
        letterSpacing: .5,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        paddingHorizontal: responsiveWidth(6)
    },

    forgot_pswd: {
        color: COLOURS.blue,
        fontStyle: 'italic',
        alignSelf: 'flex-end',
        fontFamily: 'Roboto-Medium',
        marginTop: responsiveWidth(4),
        fontSize: responsiveFontSize(1.8),
        paddingHorizontal: responsiveWidth(2),
    },

    already_have: {
        letterSpacing: .2,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.7),
    },

    remember_me: {
        letterSpacing: .2,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        marginLeft: responsiveWidth(1),
        fontSize: responsiveFontSize(1.6),
    },

    btn: {
        width: '100%',
        borderColor: COLOURS.blue,
        padding: responsiveWidth(1),
        marginTop: responsiveWidth(7),
        backgroundColor: COLOURS.blue,
        borderRadius: responsiveWidth(20),
    },

    btn_text: {
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.6),
        paddingVertical: responsiveWidth(3.5),
    },

    btn_center: {
        alignItems: 'center',
        marginBottom: responsiveHeight(3),
    },

    dont_account: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    signUp_link_bg: {
        marginLeft: responsiveWidth(1),
    },

    signUp_link: {
        fontStyle: 'italic',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.8),
    },

    check_emember_area: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveWidth(5),
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(3)
    },

    remeb_area: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

})