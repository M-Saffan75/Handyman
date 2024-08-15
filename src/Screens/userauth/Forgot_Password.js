import React, { useContext } from 'react';
import { COLOURS } from '../../ThemeColour/Theme';
import themeContext from '../../Toggle/themeContext';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, Text, View, SafeAreaView } from 'react-native';

const Forgot_Password = ({ navigation }) => {

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
                            <Text style={[styles.login_name, { color: theme.colorwhite }]}>Your Email</Text>
                            <Text style={[styles.login_line, { backgroundColor: theme.colorblue }]}></Text>
                        </View>

                        <Text style={[styles.your_name, { color: theme.colorwhite }]}>Email</Text>
                        <View style={[styles.inpt_container, { backgroundColor: theme.lightblack }]}>
                            <FontAwesome5 name='envelope' style={[styles.icon, { color: theme.colorblue }]} />
                            <TextInput placeholder='Your Email' placeholderTextColor={COLOURS.grey} style={[styles.name_inpt, { color: theme.colorwhite }]} />
                        </View>

                        <View style={styles.btn_center}>
                            <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => navigation.replace('Otp')}>
                                <Text style={styles.btn_text}>Send Email </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Forgot_Password

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

    inpt_container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: responsiveWidth(10),
        paddingHorizontal: responsiveWidth(5.5),
    },

    name_inpt: {
        width: '100%',
        letterSpacing: .5,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        // backgroundColor:'red',
        paddingHorizontal: responsiveWidth(3),
    },

    icon: {
        color: COLOURS.blue,
        width: responsiveWidth(5.5),
        fontSize: responsiveFontSize(2.3),
    },


    /*  */

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

    /*  */

})