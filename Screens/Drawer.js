import { COLOURS } from '../ThemeColour/Theme'
import React, { useContext, useState, } from 'react'
import themeContext from '../Toggle.js/themeContext'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { EventRegister } from 'react-native-event-listeners'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Animated, Image, Linking, Modal, ScrollView, Switch, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
// import { Switch } from 'react-native-paper'

const Drawer = ({ navigation }) => {

    const [visible, setVisible] = useState('');
    const [darkmode, setDarkMode] = useState(false);

    const theme = useContext(themeContext);

    // Logout Start
    const ModalPoup = ({ visible, children }) => {
        const [showModal, setShowModal] = React.useState(visible);
        const scaleValue = React.useRef(new Animated.Value(0)).current;
        React.useEffect(() => {
            toggleModal();
        }, [visible]);
        const toggleModal = () => {
            if (visible) {
                setShowModal(true);
                Animated.spring(scaleValue, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            } else {
                setTimeout(() => setShowModal(false), 200);
                Animated.timing(scaleValue, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }
        };
        return (
            <Modal transparent visible={showModal}>
                <View style={styles.modalBackGround}>
                    <Animated.View
                        style={[styles.modalContainer, { transform: [{ scale: scaleValue, }], backgroundColor: COLOURS.white }]}>
                        {children}
                    </Animated.View>
                </View>
            </Modal>

        );
    };
    // Logout End


    return (

        <>
            <StatusBar backgroundColor={theme.backgroundColor} barStyle={darkmode === true ? 'light-content' : 'dark-content'} />

            <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
                <View style={styles.nav_notifi}>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.navigate('Home')}>
                        <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                    </TouchableOpacity>
                </View>

                <View style={styles.vrsn_name_accnt_box}>
                    <Text style={[styles.accnt_name, { color: theme.colorwhite }]}>My Account</Text>
                </View>
                <View style={styles.profle_versn}>
                    <Text style={[styles.prfl_setng, { color: theme.colorwhite }]}>Profile Setting & more</Text>
                    <Text style={[styles.version, { color: theme.colorgrey }]}>Version V.2.9.20</Text>
                </View>

                <View style={styles.profile_container}>

                    <View style={[styles.profile_box, { backgroundColor: theme.deepblack }]}>
                        <View style={styles.profile_all_in_one}>
                            <Image source={require('../images/star.png')} style={styles.star} />

                            <Image source={require('../images/profile-real.jpg')}
                                style={styles.profile_image} resizeMode='contain' />


                            <TouchableOpacity activeOpacity={0.6} >
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <FontAwesome5 name='share-alt' style={styles.icon_share} />

                            <TouchableOpacity activeOpacity={0.6} style={styles.profile_edit} onPress={() => navigation.navigate('Edit_Profile')}>
                                <FontAwesome5 name='pencil-alt' style={styles.pencil_icon} />
                                <Text style={styles.profile_email}>
                                    Edit Profile
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.information_here}>

                        <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Edit_Profile')}>
                            <View style={styles.user_here_box}>
                                <MaterialCommunityIcons name='account-convert' style={[styles.user_icon, { color: theme.colorblue }]} />
                                <Text style={[styles.user_name, { color: theme.colorwhite }]}>Account Setting</Text>
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

                        <TouchableOpacity activeOpacity={0.7} style={styles.user_detail}>
                            <View style={styles.user_here_box}>
                                <AntDesign name='staro' style={[styles.user_icon, { color: theme.colorblue }]} />
                                <Text style={[styles.user_name, { color: theme.colorwhite }]}>My Favourites</Text>
                            </View>
                            <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                        </TouchableOpacity>

                        {/*  */}

                        <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Change_Password')}>
                            <View style={styles.user_here_box}>
                                <Ionicons name='settings-outline' style={[styles.user_icon, { color: theme.colorblue }]} />
                                <Text style={[styles.user_name, { color: theme.colorwhite }]}>Change Password</Text>
                            </View>
                            <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                        </TouchableOpacity>

                        {/*  */}
                        {/* <TouchableOpacity activeOpacity={0.7} style={styles.user_detail}>
                            <View style={styles.user_here_box}>
                                <FontAwesome5 name='exchange-alt' style={[styles.user_icon, { color: theme.colorblue }]} />
                                <Text style={[styles.user_name, { color: theme.colorwhite }]}>App Theme</Text>
                            </View>
                            <Switch value={darkmode} onValueChange={(value) => {
                                setDarkMode(value)
                                EventRegister.emit('changeTheme', !value)
                            }} />
                        </TouchableOpacity> */}

                        {/*  */}
                        <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => Linking.openURL("http://play.google.com/store/apps/details?id=<com.MagichianHub>")}>
                            <View style={styles.user_here_box}>
                                <FontAwesome name='hourglass-start' style={[styles.user_icon, { color: theme.colorblue }]} />
                                <Text style={[styles.user_name, { color: theme.colorwhite }]}>Rate us</Text>
                            </View>
                            <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                        </TouchableOpacity>

                        {/*  */}

                        <View>
                            <Text style={styles.help}>HELP</Text>
                        </View>

                        {/*  */}

                        <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => Linking.openURL('http://google.com')}>
                            <View style={styles.user_here_box}>
                                <FontAwesome5 name='info-circle' style={[styles.user_icon, { color: theme.colorblue }]} />
                                <Text style={[styles.user_name, { color: theme.colorwhite }]}>Privacy Policy</Text>
                            </View>
                            <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                        </TouchableOpacity>

                        {/*  */}

                        <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Admin_Support')}>
                            <View style={styles.user_here_box}>
                                <FontAwesome5 name='headset' style={[styles.user_icon, { color: theme.colorblue }]} />
                                <Text style={[styles.user_name, { color: theme.colorwhite }]}>Admin Support</Text>
                            </View>
                            <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                        </TouchableOpacity>

                        {/*  */}

                        <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Help')}>
                            <View style={styles.user_here_box}>
                                <FontAwesome name='circle-o-notch' style={[styles.user_icon, { color: theme.colorblue }]} />
                                <Text style={[styles.user_name, { color: theme.colorwhite }]}>Help & FAQS</Text>
                            </View>
                            <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                        </TouchableOpacity>

                        {/*  */}

                        <TouchableOpacity activeOpacity={0.7} style={styles.user_logout} onPress={() => setVisible(true)}>
                            <View style={styles.user_here_box}>
                                <Image source={require('../Bold/log-out.png')} style={styles.logout_image} tintColor={COLOURS.red} />
                                <Text style={styles.logout_name}>Log out</Text>
                            </View>
                        </TouchableOpacity>


                        {/* // Logout Modal start // */}

                        <View style={styles.modal_box}>
                            <ModalPoup visible={visible} style={styles.modalpop}>
                                <Text style={styles.modal_text} >
                                    Sign Out
                                </Text>
                                <Text style={styles.modal_email}>Ahmed88@gmail.com</Text>
                                <View style={styles.modal_cancel_more}>
                                    <TouchableOpacity activeOpacity={0.6} onPress={() => setVisible(false)}>
                                        <Text style={styles.cancel}>Cancel</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.border_line}></Text>
                                    <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Login')}>
                                        <Text style={styles.modal_logout}>Log out</Text>
                                    </TouchableOpacity>
                                </View>
                            </ModalPoup>
                        </View>

                        {/* // Logout Modal End // */}

                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Drawer

const styles = StyleSheet.create({

    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },

    icon_share: {
        fontSize: 27,
        color: COLOURS.blue,
    },

    profile_edit: {
        backgroundColor: COLOURS.blue,
        // width: 100,
        marginTop: 20,
        borderRadius: 5,
        paddingVertical: 8,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },

    pencil_icon: {
        paddingRight: 7,
        color: COLOURS.white,
    },

    profile_email: {
        fontSize: 12,
        letterSpacing: .5,
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
    },

    profile_box: {
        padding: 20,
        elevation: 1,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 0,
        paddingHorizontal: 10,
        backgroundColor: COLOURS.white,
        justifyContent: 'space-between',
    },

    profile_all_in_one: {
        flexDirection: 'column'
    },

    star: {
        top: 2,
        right: 3,
        zIndex: 2,
        width: 25,
        height: 25,
        position: 'absolute',
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
        marginHorizontal: 20,
        marginVertical: 20,
    },

    plus_icon: {
        right: 5,
        zIndex: 2,
        width: 25,
        bottom: 2,
        height: 25,
        fontSize: 12,
        borderRadius: 100,
        position: 'absolute',
        textAlign: 'center',
        color: COLOURS.white,
        textAlignVertical: 'center',
        backgroundColor: COLOURS.black,
    },

    information_here: {
        marginTop: 20
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
        fontSize: 21,
        paddingRight: 20,
        color: COLOURS.blue,
    },

    user_name: {
        fontSize: 14,
        letterSpacing: .2,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },

    user_arrow: {
        fontSize: 25,
        color: COLOURS.grey,
    },

    help: {
        fontSize: 22,
        letterSpacing: 1,
        paddingVertical: 10,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
    },
    user_logout: {
        marginTop: 15,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    logout_image: {
        width: 22,
        height: 22,
        marginRight: 15,
        color: COLOURS.blue,
    },

    logout_name: {
        fontSize: 14,
        letterSpacing: .2,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
    },

    categorie_img: {
        bottom: 5,
        height: 80,
        width: 80,
        borderRadius: 100,
    },


    btn_align: {
        marginHorizontal: 20,
        alignSelf: 'flex-start',
    },

    name: {
        width: 40,
        padding: 5,
        fontSize: 30,
        marginTop: 30,
        borderRadius: 7,
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
        backgroundColor: COLOURS.Lightgrey,
    },

    nav_notifi: {
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    vrsn_name_accnt_box: {
        marginHorizontal: 20,
    },

    accnt_name: {
        fontSize: 24,
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },

    profle_versn: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    prfl_setng: {
        fontSize: 11,
        letterSpacing: .3,
        marginHorizontal: 5,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },

    version: {
        fontSize: 14,
        letterSpacing: .3,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Regular',
    },

    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContainer: {
        width: '80%',
        backgroundColor: COLOURS.white,
        borderColor: COLOURS.white,
        borderWidth: .4,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },

    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    modal_box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    modalpop: {
        borderWidth: 4,
        borderColor: COLOURS.white,
    },

    modal_text: {
        fontSize: 14,
        paddingLeft: 9,
        marginBottom: 10,
        letterSpacing: .2,
        textAlign: 'center',
        color: COLOURS.black,
        fontFamily: 'Roboto-Bold',
    },

    modal_email: {
        paddingBottom: 10,
        color: COLOURS.black,
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
    },

    modal_cancel_more: {
        borderTopWidth: .4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: COLOURS.grey,
    },

    cancel: {
        paddingTop: 20,
        paddingLeft: 40,
        color: COLOURS.black,
        textAlign: 'center',
        fontFamily: 'Inter-Medium',
    },

    border_line: {
        borderLeftWidth: .4,
        paddingVertical: 2,
        borderLeftColor: COLOURS.grey,
    },

    modal_logout: {
        paddingTop: 20,
        paddingRight: 40,
        color: COLOURS.red,
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
    },
})