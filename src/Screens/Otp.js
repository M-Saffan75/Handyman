import { COLOURS } from '../ThemeColour/Theme';
import themeContext from '../Toggle/themeContext';
import React, { useState, useRef, useContext } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, Text, View, SafeAreaView } from 'react-native';

const Otp = ({ navigation }) => {

    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();

    const theme = useContext(themeContext);

    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView>
                <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.replace('Login')}>
                        <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                    </TouchableOpacity>
                    <View style={styles.short_container}>
                        <View style={styles.name_line}>
                            <Text style={[styles.login_name, { color: theme.colorwhite }]}>Your OTP</Text>
                            <Text style={[styles.login_line, { backgroundColor: theme.colorblue }]}></Text>
                        </View>

                        <Text style={[styles.your_name, { color: theme.colorwhite }]}>O T P</Text>
                        <View style={styles.otp_Container}>
                            <TextInput style={[styles.name_inpt, { backgroundColor: theme.lightblack, color: theme.colorwhite }]} keyboardType='numeric' ref={et1} maxLength={1}
                                onChangeText={txt => {
                                    if (txt.length >= 1) {
                                        et2.current.focus();
                                    }
                                    else if (txt.length < 1) {
                                        et1.current.focus();
                                    }
                                }} />
                            <TextInput style={[styles.name_inpt, { backgroundColor: theme.lightblack, color: theme.colorwhite }]} keyboardType='numeric' ref={et2} maxLength={1}
                                onChangeText={txt => {
                                    if (txt.length >= 1) {
                                        et3.current.focus();
                                    } else if (txt.length < 1) {
                                        et1.current.focus();
                                    }
                                }} />
                            <TextInput style={[styles.name_inpt, { backgroundColor: theme.lightblack, color: theme.colorwhite }]} keyboardType='numeric' ref={et3} maxLength={1}
                                onChangeText={txt => {
                                    if (txt.length >= 1) {
                                        et4.current.focus();
                                    } else if (txt.length < 1) {
                                        et2.current.focus();
                                    }
                                }} />
                            <TextInput style={[styles.name_inpt, { backgroundColor: theme.lightblack, color: theme.colorwhite }]} keyboardType='numeric' ref={et4} maxLength={1}
                                onChangeText={txt => {
                                    if (txt.length >= 1) {
                                        et4.current.focus();
                                    } else if (txt.length < 1) {
                                        et3.current.focus();
                                    }
                                }} />
                        </View>

                        <View style={styles.btn_center}>
                            <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => navigation.replace('Reset_Password')}>
                                <Text style={styles.btn_text}>Send</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Otp

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    },


    login_name: {
        textAlign: 'center',
        color: COLOURS.black,
        fontFamily: 'Roboto-Bold',
        marginTop: responsiveWidth(22),
        fontSize: responsiveFontSize(3.1),
    },

    short_container: {
        marginTop: responsiveWidth(5),
        marginHorizontal: responsiveWidth(5.5),
    },


    name_line: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    login_line: {
        height: responsiveWidth(1.2),
        right: responsiveWidth(8.4),
        width: responsiveWidth(14),
        top: responsiveWidth(1.3),
        backgroundColor: COLOURS.blue,
        borderRadius: responsiveWidth(10),
    },

    your_name: {
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveWidth(10),
        paddingBottom: responsiveWidth(2.8),
    },

    /*  */

    otp_Container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    name_inpt: {
        textAlign: 'center',
        color: COLOURS.black,
        borderColor: COLOURS.blue,
        width:responsiveWidth(14),
        fontFamily:'Roboto-Medium',
        borderRadius:responsiveWidth(3),
        fontSize:responsiveFontSize(2.5),
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

    btn_align: {
        alignSelf: 'flex-start',
        marginHorizontal: responsiveWidth(6),
    },

    name: {
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
        width: responsiveWidth(11.2),
        padding: responsiveWidth(1.5),
        fontSize: responsiveFontSize(4),
        marginTop: responsiveHeight(4.2),
        borderRadius: responsiveWidth(2),
        backgroundColor: COLOURS.Lightgrey,
    },

    nav_notifi: {
        flexDirection: 'row',
        alignItems: 'center',
        letterSpacing: .4,
        height: responsiveHeight(14),
        justifyContent: 'flex-start',
    },
})