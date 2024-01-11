import React, { useState, useContext } from 'react';
import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, StatusBar, Image } from 'react-native';

const P_Change_Password = ({ navigation }) => {

    const theme = useContext(themeContext);

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [secureTextEntry_one, setSecureTextEntry_one] = useState(true);
    const [secureTextEntry_two, setSecureTextEntry_two] = useState(true);

    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    }

    const toggleSecureTextEntry_one = () => {
        setSecureTextEntry_one(!secureTextEntry_one);
    }

    const toggleSecureTextEntry_two = () => {
        setSecureTextEntry_two(!secureTextEntry_two);
    }

    return (
        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />

            <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>

                <View>
                    <View style={styles.arrow_area}>
                        <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                            <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                        </TouchableOpacity>
                        <Text style={[styles.acc_name, { color: COLOURS.white }]}>password changes</Text>
                    </View>
                </View>

                <View style={styles.child_container}>

                    <View>
                        <Text style={[styles.frgt_name, { color: theme.colorblue }]}>your new password must be different from previous used password.</Text>
                    </View>

                    <View style={[styles.pswd_inpt_container, { backgroundColor: theme.lightblack }]} >
                        <TextInput placeholder='Old Password' secureTextEntry={secureTextEntry} placeholderTextColor={COLOURS.grey} style={[styles.pswd_inpt, { color: theme.colorwhite }]} />
                        <TouchableOpacity onPress={toggleSecureTextEntry} activeOpacity={0.6}>
                            {secureTextEntry ? (
                                <Image source={require('../../../Bold/eye-slash.png')} name={'phone-alt'} style={[styles.icon_one,]} tintColor={theme.colorblue} />
                            ) : (
                                <Image source={require('../../../Bold/eye.png')} name={'phone-alt'} style={[styles.icon_one,]} tintColor={theme.colorblue} />
                            )}
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.pswd_inpt_container, { backgroundColor: theme.lightblack }]}>
                        <TextInput placeholder='New Password' secureTextEntry={secureTextEntry_one} placeholderTextColor={COLOURS.grey} style={[styles.pswd_inpt, { color: theme.colorwhite }]} />
                        <TouchableOpacity onPress={toggleSecureTextEntry_one} activeOpacity={0.6}>
                            {secureTextEntry_one ? (
                                <Image source={require('../../../Bold/eye-slash.png')} name={'phone-alt'} style={[styles.icon_one,]} tintColor={theme.colorblue} />
                            ) : (
                                <Image source={require('../../../Bold/eye.png')} name={'phone-alt'} style={[styles.icon_one,]} tintColor={theme.colorblue} />
                            )}
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.pswd_inpt_container, { backgroundColor: theme.lightblack }]}>
                        <TextInput placeholder='Re-enter Password' secureTextEntry={secureTextEntry_two} placeholderTextColor={COLOURS.grey} style={[styles.pswd_inpt, { color: theme.colorwhite }]} />
                        <TouchableOpacity onPress={toggleSecureTextEntry_two} activeOpacity={0.6}>
                            {secureTextEntry_two ? (
                                <Image source={require('../../../Bold/eye-slash.png')} name={'phone-alt'} style={[styles.icon_one,]} tintColor={theme.colorblue} />
                            ) : (
                                <Image source={require('../../../Bold/eye.png')} name={'phone-alt'} style={[styles.icon_one,]} tintColor={theme.colorblue} />
                            )}
                        </TouchableOpacity>
                    </View>


                    <View style={styles.btn_center}>
                        <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                            <Text style={styles.btn_text}>save changes</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </>
    )
}

export default P_Change_Password

const styles = StyleSheet.create({

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
        marginBottom: responsiveHeight(4),
    },

    child_container: {
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    /* arrow back */

    acc_name: {
        letterSpacing: .8,
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.4),
        marginHorizontal: responsiveWidth(5),
    },

    arrow_area: {
        alignItems: 'center',
        flexDirection: 'row',
        width: responsiveWidth(100),
        justifyContent: 'flex-start',
        backgroundColor: COLOURS.blue,
        paddingTop: responsiveHeight(3),
        paddingBottom: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(5),
    },

    name: {
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.blue,
        width: responsiveWidth(11.2),
        padding: responsiveWidth(1.5),
        fontSize: responsiveFontSize(4),
        borderRadius: responsiveWidth(2),
        backgroundColor: COLOURS.Lightgrey,
    },


    /* arrow back */


    frgt_name: {
        letterSpacing: .5,
        color: COLOURS.blue,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Regular',
        marginTop: responsiveHeight(3),
        lineHeight: responsiveHeight(3),
        paddingTop: responsiveHeight(2),
        fontSize: responsiveFontSize(1.9),
        marginBottom: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(3),
    },

    pswd_name: {
        letterSpacing: .3,
        color: COLOURS.black,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        marginTop: responsiveWidth(2),
        fontSize: responsiveFontSize(2.2),
        marginHorizontal: responsiveWidth(6),
    },

    cnfrmpswd_name: {
        letterSpacing: .3,
        color: COLOURS.black,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        marginTop: responsiveWidth(2),
        fontSize: responsiveFontSize(2.2),
        marginHorizontal: responsiveWidth(6),
    },


    pswd_inpt_container: {
        marginTop: responsiveHeight(2),
        borderRadius: responsiveWidth(10),
        marginBottom: responsiveHeight(1.7),
        paddingHorizontal: responsiveWidth(6),
        marginHorizontal: responsiveWidth(4.5),

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    icon: {
        color: COLOURS.blue,
        width: responsiveWidth(7),
        fontSize: responsiveFontSize(2.3),
    },

    icon_one: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
    },

    pswd_inpt: {
        width: '100%',
        letterSpacing: .5,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        paddingHorizontal: responsiveWidth(2),
    },

    input_area: {
        width: '100%',
        alignItems: 'center',
    },

    inpt_here: {
        width: '90%',
        borderWidth: 1.2,
        borderRadius: 30,
        letterSpacing: .3,
        marginVertical: 5,
        color: COLOURS.black,
        paddingHorizontal: 15,
        borderColor: COLOURS.blue,
        fontFamily: 'Roboto-Regular',
    },

    btn: {
        width: '90%',
        marginTop: 30,
        borderRadius: 30,
        borderColor: COLOURS.blue,
        backgroundColor: COLOURS.blue,
    },

    btn_text: {
        color: COLOURS.white,
        fontSize: 12,
        letterSpacing: .5,
        paddingVertical: 15,
        textAlign: 'center',
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Bold',
    },
})