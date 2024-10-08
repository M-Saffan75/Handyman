import ModalBox from '../ThemeColour/ModalBox';
import { COLOURS } from '../ThemeColour/Theme';
import themeContext from '../Toggle/themeContext';
import React, { useContext, useState, } from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import {Image, Linking, Modal, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';


const Drawer = () => {


    const [logoutVisible, setVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();
    const theme = useContext(themeContext);

    const openModal = () => {
        setModalVisible(true);
    };

    const openlogout = () => {
        setVisible(true);
    }



    return (

        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />

            <SafeAreaView>

                <View style={[styles.top_header, { backgroundColor: COLOURS.blue }]}>
                    <View style={styles.vrsn_name_accnt_box}>
                        <Text style={[styles.accnt_name, { color: COLOURS.white }]}>My Account</Text>
                    </View>

                    <View style={styles.profle_versn}>
                        <Text style={[styles.prfl_setng, { color: COLOURS.white }]}>Profile Setting & more</Text>
                    </View>
                </View>

                <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>

                    <Animatable.View style={styles.profile_container} duration={1000} animation={'slideInUp'}>


                        <View style={[styles.profile_box]}>

                            <View style={[styles.profile_all_in_one, { borderColor: theme.colorblue }]}>
                                <Image source={require('../images/star.png')} style={styles.star} />

                                <Image source={require('../images/profile-real.jpg')}
                                    style={styles.profile_image} resizeMode='contain' />
                                <TouchableOpacity activeOpacity={0.6} style={[styles.plus_icon_one_bg, { backgroundColor: COLOURS.blue, borderColor: COLOURS.white }]} onPress={() => navigation.navigate('Edit_Profile')}>
                                    <Image source={require('../images/edit_text.png')} style={[styles.plus_icon_one,]} tintColor={COLOURS.white} />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.name_email_text_bg}>
                            <Text style={[styles.provder_name_text, { color: theme.colorblue }]}>user demo</Text>
                            <Text style={styles.provder_email_text}>demo@gmail.com</Text>
                        </View>


                        <View style={styles.help_zone_bg_area}>
                            <Text style={styles.help}>general</Text>
                        </View>
                        <View style={styles.information_here}>
                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Edit_Profile')}>
                                <View style={styles.user_here_box}>
                                    <MaterialCommunityIcons name='account-convert' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>Account Setting</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Favourites_Services')}>
                                <View style={styles.user_here_box}>
                                    <AntDesign name='hearto' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>Favourites Services</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Favourites_Providers')}>
                                <View style={styles.user_here_box}>
                                    <Image source={require('../images/heart.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>Favourites providers</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>


                            {/*  */}

                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('My_Money')}>
                                <View style={styles.user_here_box}>
                                    <Ionicons name='wallet-outline' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>My Wallet</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>

                            {/*  */}

                            {/*  */}

                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Change_Password')}>
                                <View style={styles.user_here_box}>
                                    <Ionicons name='settings-outline' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>Change Password</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>

                            {/*  */}
                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={openModal}>
                                <View style={styles.user_here_box}>
                                    <FontAwesome5 name='exchange-alt' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>App Theme</Text>
                                </View>
                                {/* <Switch value={darkmode} onValueChange={(value) => {
                                    setDarkMode(value)
                                    EventRegister.emit('changeTheme', !value)
                                }} /> */}
                                <Image
                                    source={
                                        theme.theme === 'dark'
                                            ? require('../images/dark-moon.png')
                                            : require('../images/sun.png')
                                    }
                                    style={styles.prifile_arrow_icon} tintColor={theme.colorblue} />
                            </TouchableOpacity>

                            {/*  */}
                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => Linking.openURL("http://play.google.com/store/apps/details?id=<com.MagichianHub>")}>
                                <View style={styles.user_here_box}>
                                    <FontAwesome name='hourglass-start' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>Rate us</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>
                            {/*  */}

                            {/*  */}
                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => Linking.openURL("http://play.google.com/store/apps/details?id=<com.MagichianHub>")}>
                                <View style={styles.user_here_box}>
                                    <Image source={require('../images/letter-i.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>My reviews</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>
                            {/*  */}

                        </View>


                        <View style={styles.help_zone_bg_area}>
                            <Text style={styles.help}>about app</Text>
                        </View>

                        {/*  */}
                        <View style={{ marginHorizontal: responsiveWidth(5.5) }}>
                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Privacy_Policy')}>
                                <View style={styles.user_here_box}>
                                    <FontAwesome5 name='info-circle' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>Privacy Policy</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>

                            {/*  */}

                            {/*  */}

                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Terms_Conditions')}>
                                <View style={styles.user_here_box}>
                                    <Image source={require('../images/document.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>terms & conditions</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>

                            {/*  */}

                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail}>
                                <View style={styles.user_here_box}>
                                    <FontAwesome5 name='headset' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>helpline number</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>

                            {/*  */}

                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Faq')}>
                                <View style={styles.user_here_box}>
                                    <FontAwesome name='circle-o-notch' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>Help & FAQS</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>

                            {/*  */}

                        </View>

                        <View style={styles.danger_zone_bg_area}>
                            <Text style={styles.help_one}>danger zone</Text>
                        </View>

                        <View style={styles.side_space}>
                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail}>
                                <View style={styles.user_here_box}>
                                    <Image source={require('../images/disabled.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>delete account</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.logout_bg}>
                            <TouchableOpacity activeOpacity={0.4} onPress={openlogout}>
                                <Text style={[styles.logout_text_here,{color:theme.colorblue}]}>Logout</Text>
                            </TouchableOpacity>
                            <Text style={[styles.version, { color: COLOURS.grey }]}>Version V.2.9.20</Text>
                        </View>


                        <ModalBox modalVisible={modalVisible} setModalVisible={setModalVisible} />

                        {/* Modal Here To COngratulation start*/}

                        <Modal visible={logoutVisible} animationType="fade" transparent={true}>

                            <View style={[styles.modalContainer]}>
                                <View style={[styles.modal, { backgroundColor: theme.lightblack }]}>
                                    <View>
                                        <View style={styles.imag_lock}>
                                            <Image source={require('../images/logout_logo.png')} style={styles.congrats_done} resizeMode='cover' />
                                        </View>
                                        <Text style={[styles.congrat_text, { color: theme.colorwhite }]}>oh no, you are leaving!</Text>
                                        <Text style={[styles.ready_ride, { color: COLOURS.grey }]}>do you want to logout ?</Text>
                                        <View style={styles.btn_up_area}>
                                            <TouchableOpacity style={[styles.book_btn, { backgroundColor: theme.lightblack_card }]} activeOpacity={0.6} onPress={() => setVisible(false)}>
                                                <Text style={[styles.book_btn_text, { color: theme.colorwhite }]}>no</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[styles.book_btn, { backgroundColor: COLOURS.blue }]} activeOpacity={0.6} onPress={() => navigation.navigate('Login')}>
                                                <Text style={[styles.book_btn_text, { color: COLOURS.white }]}>yes</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Modal>

                        {/* Modal Here To COngratulation start*/}


                    </Animatable.View>
                </ScrollView>
            </SafeAreaView >
        </>
    )
}


export default Drawer

const styles = StyleSheet.create({


    /*  */

    logout_bg: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(5),
        marginBottom: responsiveHeight(13),
    },

    logout_text_here: {
        letterSpacing: .4,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2),
    },

    /*  */

    // Modal Here start

    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modal: {
        paddingTop: 0,
        width: '80%',
        elevation: 10,
        backgroundColor: '#fff',
        borderRadius: responsiveWidth(5),
        paddingVertical: responsiveWidth(2),
        paddingHorizontal: responsiveWidth(6),
    },

    ready_ride: {
        lineHeight: 18,
        textAlign: 'center',
        color: COLOURS.grey,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        paddingTop: responsiveHeight(1),
        fontSize: responsiveFontSize(1.8),
        paddingHorizontal: responsiveWidth(1.8),
    },

    load_modal_img: {
        alignItems: 'center',
        marginTop: responsiveHeight(2),
    },

    load_img: {
        width: responsiveWidth(20),
        height: responsiveHeight(10),
    },

    imag_lock: {
        alignItems: 'center',
    },

    congrats_done: {
        width: responsiveWidth(65),
        height: responsiveHeight(30),
    },

    congrat_text: {
        textAlign: 'center',
        color: COLOURS.black,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        paddingTop: responsiveHeight(2),
        fontSize: responsiveFontSize(2.6),
    },

    // Modal Here End 

    /*  */

    btn_up_area: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: responsiveWidth(5),
    },

    space_down: {
        marginBottom: responsiveHeight(15),
    },

    book_btn: {
        zIndex: 10,
        width: responsiveWidth(32),
        borderRadius: responsiveWidth(3),
        paddingVertical: responsiveWidth(5),
    },

    book_btn_text: {
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.8),
    },

    book_btn_one: {
        zIndex: 10,
        width: responsiveWidth(90),
        borderRadius: responsiveWidth(3),
        paddingVertical: responsiveWidth(5),
        paddingHorizontal: responsiveWidth(4),
        marginHorizontal: responsiveHeight(2),
    },

    book_btn_text_one: {
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.8),
    },
    /*  */



    /*  */

    provder_name_text: {
        letterSpacing: .3,
        color: COLOURS.blue,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Bold',
        fontSize: responsiveFontSize(2),
    },

    provder_email_text: {
        letterSpacing: .7,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        marginBottom: responsiveWidth(1),
        fontSize: responsiveFontSize(2),
    },

    name_email_text_bg: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: responsiveWidth(5),
    },

    /*  */

    /*  */

    top_header: {
        backgroundColor: COLOURS.blue,
        paddingBottom: responsiveWidth(5),
    },


    vrsn_name_accnt_box: {
        marginTop: responsiveWidth(4),
        marginHorizontal: responsiveWidth(5),
    },

    accnt_name: {
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(3.3),
    },

    profle_versn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(4.5),
    },

    prfl_setng: {
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.5),
        marginHorizontal: responsiveWidth(1.4),
    },

    version: {
        letterSpacing: .3,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.5),
    },


    /*  */

    /*  */

    plus_icon: {
        zIndex: 2,
        right: responsiveWidth(1),
        width: responsiveWidth(8),
        height: responsiveWidth(8),
        bottom: responsiveWidth(.1),
        fontSize: responsiveFontSize(1.8),
        borderRadius: responsiveWidth(20),
        position: 'absolute',
        textAlign: 'center',
        color: COLOURS.white,
        textAlignVertical: 'center',
        backgroundColor: COLOURS.black,
    },

    plus_icon_one_bg: {
        zIndex: 2,
        right: responsiveWidth(1),
        width: responsiveWidth(8),
        height: responsiveWidth(8),
        bottom: responsiveWidth(1.5),
        borderWidth: responsiveWidth(.4),
        borderRadius: responsiveWidth(20),

        position: 'absolute',
        alignItems: 'center',
        color: COLOURS.white,
        justifyContent: 'center',
        backgroundColor: COLOURS.black,
    },

    plus_icon_one: {
        width: responsiveWidth(4),
        height: responsiveWidth(4),
    },

    prifile_arrow_icon: {
        width: responsiveWidth(5.5),
        height: responsiveWidth(5.6),
    },

    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },


    /*  profile image area */

    profile_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: responsiveWidth(4),
        paddingVertical: responsiveWidth(5.5),
    },

    profile_all_in_one: {
        flexDirection: 'column',
        borderColor: COLOURS.white,
        borderWidth: responsiveWidth(.3),
        borderRadius: responsiveWidth(20),
        paddingVertical: responsiveWidth(2.2),
        paddingHorizontal: responsiveWidth(2.2),
    },

    star: {
        top: 2,
        right: 3,
        zIndex: 2,
        width: 25,
        height: 25,
        position: 'absolute',
        display: 'none',
        color: COLOURS.orange,
    },

    profile_image: {
        width: 120,
        height: 120,
        elevation: 41,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    profile_container: {
        marginVertical: 20,
    },

    /*  profile image area */


    information_here: {
        marginHorizontal: responsiveWidth(5.5),
    },

    user_detail: {
        marginVertical: 5,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    user_here_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    user_icon: {
        fontSize: responsiveFontSize(2.8),
        paddingRight: responsiveWidth(5.7),
        color: COLOURS.blue,
    },

    user_icon_img: {
        marginRight: responsiveWidth(5.3),
        height: responsiveWidth(6),
        width: responsiveWidth(6),
    },

    user_name: {
        letterSpacing: .2,
        color: COLOURS.black,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.9),
    },

    user_arrow: {
        fontSize: 25,
        color: COLOURS.grey,
    },

    help: {
        letterSpacing: 1,
        color: COLOURS.blue,
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2.4),
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(5.5),
    },

    help_zone_bg_area: {
        marginHorizontal: 0,
        backgroundColor: '#006CFF33',
        marginVertical: responsiveHeight(2),
        paddingVertical: responsiveHeight(.6)
    },


    danger_zone_bg_area: {
        marginHorizontal: 0,
        backgroundColor: '#FF000033',
        marginVertical: responsiveHeight(2),
        paddingVertical: responsiveHeight(.5)
    },

    side_space: {
        marginHorizontal: responsiveWidth(5.5),
    },

    help_one: {
        letterSpacing: 1,
        color: COLOURS.red,
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2.2),
        paddingVertical: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(5.5),
    },

    user_logout: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(2.1),
        paddingVertical: responsiveHeight(1),
    },

    logout_image: {
        color: COLOURS.blue,
        width: responsiveWidth(6),
        height: responsiveWidth(6),
        marginRight: responsiveWidth(5),
    },

    logout_name: {
        letterSpacing: .2,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.9),
    },

})