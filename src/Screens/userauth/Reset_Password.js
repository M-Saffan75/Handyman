import React, { useContext } from 'react';
import { COLOURS } from '../../ThemeColour/Theme';
import themeContext from '../../Toggle/themeContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, Text, View, SafeAreaView } from 'react-native';


const Reset_Password = ({ navigation }) => {

    const theme = useContext(themeContext);

    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView>
                <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>
                    <View style={styles.nav_notifi}>
                        <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                            <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.short_container}>
                        <View style={styles.name_line}>
                            <Text style={[styles.login_name, { color: theme.colorwhite }]}>Reset Password</Text>
                            <Text style={[styles.login_line, { backgroundColor: theme.colorblue }]}></Text>
                        </View>

                        <Text style={[styles.your_name, { color: theme.colorwhite }]}>New Password</Text>
                        <View style={[styles.inpt_container, { backgroundColor: theme.lightblack }]}>
                            <MaterialCommunityIcons name='key-variant' style={[styles.icon, { color: theme.colorblue }]} />
                            <TextInput placeholder='New Password' placeholderTextColor={COLOURS.grey} style={[styles.name_inpt,{color: theme.colorwhite}]} />
                        </View>

                        <Text style={[styles.pswd_name, { color: theme.colorwhite }]}>Confirm Password</Text>
                        <View style={[styles.inpt_container, { backgroundColor: theme.lightblack }]}>
                            <MaterialCommunityIcons name='key-variant' style={[styles.icon, { color: theme.colorblue }]} />
                            <TextInput placeholder='Confirm Password' placeholderTextColor={COLOURS.grey} style={[styles.name_inpt,{color: theme.colorwhite}]} />
                        </View>

                        <View style={styles.btn_center}>
                            <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => navigation.replace('Login')}>
                                <Text style={styles.btn_text}>save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>

        </>
    )
}

export default Reset_Password

const styles = StyleSheet.create({



    /*  */
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


    /*  */

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
        marginTop: responsiveWidth(12),
        fontSize: responsiveFontSize(3.1),
    },

    name_line: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    login_line: {
        height: responsiveWidth(1.2),
        right: responsiveWidth(15),
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
        borderColor: COLOURS.blue,
        justifyContent: 'space-around',
        borderWidth: responsiveWidth(.3),
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