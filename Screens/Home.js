import Slider from './Slider'
import Simple_Slider from './Simple_Slider'
import { COLOURS } from '../ThemeColour/Theme'
import themeContext from '../Toggle.js/themeContext'
import React, { useContext, useEffect, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Image, ScrollView, StatusBar, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native'

export default function Home({ navigation }) {

    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    const iconName = isPressed ? 'heart' : 'heart-outline';

    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle={'dark-content'} />


            <ScrollView style={[styles.container, { backgroundColor: COLOURS.white }]}>
                <View style={{ marginHorizontal: 12 }}>

                    {/* <View style={styles.nav_notifi}>
                        <TouchableOpacity style={styles.bar_ground} onPress={() => navigation.navigate('Drawer')}>
                            <Image source={require('../Bold/menu.png')} style={styles.bar_img} tintColor={COLOURS.blue} />
                        </TouchableOpacity>

                        <View style={styles.noti_ground}>
                            <Text style={styles.bell_noti}>{'1'}</Text>
                            <TouchableOpacity style={styles.bar_ground}>
                                <Image source={require('../Bold/bell.png')} style={styles.bar_img} tintColor={COLOURS.blue} />
                            </TouchableOpacity>
                        </View>
                    </View> */}


                </View>

                {/* Slider */}
                <View style={{ marginBottom: 30, marginTop: 10, }}>
                    <Slider />
                </View>
                {/* Slider */}

                <View style={[styles.map_inpt_container, { marginHorizontal: 20, paddingHorizontal: 0 }]}>
                    <TouchableOpacity style={styles.search_bg} activeOpacity={0.6}>
                        <FontAwesome5 name='map-marker-alt' style={[styles.icon, { right: 0, color: COLOURS.blue }]} tintColor={COLOURS.blue} />
                    </TouchableOpacity>
                    <TextInput placeholder='All Service Available' placeholderTextColor={'grey'} style={[styles.location_here]} />
                    <TouchableOpacity style={styles.search_bg} activeOpacity={0.6}>
                        <MaterialCommunityIcons name='crosshairs-gps' style={[styles.icon, { right: 15, color: COLOURS.blue }]} />
                    </TouchableOpacity>
                </View>

                <View style={styles.short_container}>
                    <View style={styles.see_categorie}>
                        <Text style={styles.categories}>All Services</Text>
                        <TouchableOpacity style={styles.see_all} onPress={() => navigation.navigate('Drawer')}>
                            <Text style={styles.see}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.categorie_Container}>
                        <TouchableOpacity style={styles.categorie_box} activeOpacity={0.6}>
                            <Image source={require('../icons/electrician.png')} style={styles.categorie_img} />
                            <Text style={styles.categorie_name}>Electrician</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categorie_box} activeOpacity={0.6}>
                            <Image source={require('../icons/plumber.png')} style={styles.categorie_img} />
                            <Text style={styles.categorie_name}>Plumber</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categorie_box} activeOpacity={0.6}>
                            <Image source={require('../icons/paint-roller.png')} style={styles.categorie_img} />
                            <Text style={styles.categorie_name}>Painter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categorie_box} activeOpacity={0.6}>
                            <Image source={require('../icons/repair.png')} style={styles.categorie_img} />
                            <Text style={styles.categorie_name}>Repairing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categorie_box} activeOpacity={0.6}>
                            <Image source={require('../icons/house-cleaning.png')} style={styles.categorie_img} />
                            <Text style={styles.categorie_name}>House Cleaning</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categorie_box} activeOpacity={0.6} onPress={() => navigation.navigate('All_Categories')}>
                            <Image source={require('../icons/button.png')} style={styles.categorie_img} tintColor={COLOURS.blue} />
                            <Text style={styles.categorie_name}>More...</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.servce_sec}>
                        <Text style={styles.categories}>Nearby Services</Text>
                    </View>
                </View>

                <ScrollView vertical showsHorizontalScrollIndicator={false}>

                    <TouchableOpacity style={styles.provider_box} activeOpacity={0.99}>
                        <Image source={require('../images/plumber.png')} style={styles.provider_image} />
                        <View style={styles.insider_box}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.provider_name}>Robert Downey</Text>
                                <View style={styles.provider_number}>
                                    <MaterialCommunityIcons name='phone' style={styles.provider_icon} />
                                    <Text style={styles.provider_contact}>98214345789</Text>
                                </View>
                                <Text style={styles.provider_profession}>Plumber</Text>
                            </View>

                            <TouchableOpacity activeOpacity={0.4} onPress={handlePress}>
                                <MaterialCommunityIcons name={iconName} style={styles.heart_icon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    {/*  */}
                    <TouchableOpacity style={styles.provider_box} activeOpacity={0.99}>
                        <Image source={require('../images/hair-styling.png')} style={styles.provider_image} />
                        <View style={styles.insider_box}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.provider_name}>Steve Rogers</Text>
                                <View style={styles.provider_number}>
                                    <MaterialCommunityIcons name='phone' style={styles.provider_icon} />
                                    <Text style={styles.provider_contact}>98214345789</Text>
                                </View>
                                <Text style={styles.provider_profession}>Beauty & Saloon</Text>
                            </View>

                            <TouchableOpacity activeOpacity={0.6}>
                                <MaterialCommunityIcons name='cards-heart-outline' style={styles.heart_icon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    {/*  */}
                    <TouchableOpacity style={styles.provider_box} activeOpacity={0.99}>
                        <Image source={require('../images/painter.png')} style={styles.provider_image} />
                        <View style={styles.insider_box}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.provider_name}>Hemsworth</Text>
                                <View style={styles.provider_number}>
                                    <MaterialCommunityIcons name='phone' style={styles.provider_icon} />
                                    <Text style={styles.provider_contact}>98214345789</Text>
                                </View>
                                <Text style={styles.provider_profession}>Painter</Text>
                            </View>

                            <TouchableOpacity activeOpacity={0.6}>
                                <MaterialCommunityIcons name='cards-heart-outline' style={styles.heart_icon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    {/*  */}
                    <TouchableOpacity style={styles.provider_box} activeOpacity={0.99}>
                        <Image source={require('../images/office-worker.png')} style={styles.provider_image} />
                        <View style={styles.insider_box}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.provider_name}>Tom Hardy</Text>
                                <View style={styles.provider_number}>
                                    <MaterialCommunityIcons name='phone' style={styles.provider_icon} />
                                    <Text style={styles.provider_contact}>98214345789</Text>
                                </View>
                                <Text style={styles.provider_profession}>Maintenance</Text>
                            </View>

                            <TouchableOpacity activeOpacity={0.6}>
                                <MaterialCommunityIcons name='cards-heart-outline' style={styles.heart_icon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    {/*  */}
                    <TouchableOpacity style={styles.provider_box} activeOpacity={0.99}>
                        <Image source={require('../images/doctor.png')} style={styles.provider_image} />
                        <View style={styles.insider_box}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.provider_name}>Dr Banner</Text>
                                <View style={styles.provider_number}>
                                    <MaterialCommunityIcons name='phone' style={styles.provider_icon} />
                                    <Text style={styles.provider_contact}>98214345789</Text>
                                </View>
                                <Text style={styles.provider_profession}>Emergency</Text>
                            </View>

                            <TouchableOpacity activeOpacity={0.6}>
                                <MaterialCommunityIcons name='cards-heart-outline' style={styles.heart_icon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    {/*  */}
                    <TouchableOpacity style={styles.provider_box} activeOpacity={0.99}>
                        <Image source={require('../images/electrician.png')} style={styles.provider_image} />
                        <View style={styles.insider_box}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.provider_name}>Nick Fury</Text>
                                <View style={styles.provider_number}>
                                    <MaterialCommunityIcons name='phone' style={styles.provider_icon} />
                                    <Text style={styles.provider_contact}>98214345789</Text>
                                </View>
                                <Text style={styles.provider_profession}>Electrician</Text>
                            </View>

                            <TouchableOpacity activeOpacity={0.6}>
                                <MaterialCommunityIcons name='cards-heart-outline' style={styles.heart_icon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    {/*  */}
                    <TouchableOpacity style={styles.provider_box} activeOpacity={0.99}>
                        <Image source={require('../images/young-man.png')} style={styles.provider_image} />
                        <View style={styles.insider_box}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.provider_name}>Tom Holland</Text>
                                <View style={styles.provider_number}>
                                    <MaterialCommunityIcons name='phone' style={styles.provider_icon} />
                                    <Text style={styles.provider_contact}>98214345789</Text>
                                </View>
                                <Text style={styles.provider_profession}>Delevery Boy</Text>
                            </View>

                            <TouchableOpacity activeOpacity={0.6}>
                                <MaterialCommunityIcons name='cards-heart-outline' style={styles.heart_icon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    {/*  */}
                    <TouchableOpacity style={styles.provider_box} activeOpacity={0.99}>
                        <Image source={require('../images/technician.png')} style={styles.provider_image} />
                        <View style={styles.insider_box}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.provider_name}>Vin Diesel</Text>
                                <View style={styles.provider_number}>
                                    <MaterialCommunityIcons name='phone' style={styles.provider_icon} />
                                    <Text style={styles.provider_contact}>98214345789</Text>
                                </View>
                                <Text style={styles.provider_profession}>Repairing</Text>
                            </View>

                            <TouchableOpacity activeOpacity={0.6}>
                                <MaterialCommunityIcons name='cards-heart-outline' style={styles.heart_icon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    {/*  */}
                    <TouchableOpacity style={styles.provider_box} activeOpacity={0.99}>
                        <Image source={require('../images/courier.png')} style={styles.provider_image} />
                        <View style={styles.insider_box}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.provider_name}>john Doe</Text>
                                <View style={styles.provider_number}>
                                    <MaterialCommunityIcons name='phone' style={styles.provider_icon} />
                                    <Text style={styles.provider_contact}>98214345789</Text>
                                </View>
                                <Text style={styles.provider_profession}>Shifting</Text>
                            </View>

                            <TouchableOpacity activeOpacity={0.6}>
                                <MaterialCommunityIcons name='cards-heart-outline' style={styles.heart_icon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    {/*  */}
                    <TouchableOpacity style={styles.provider_box} activeOpacity={0.99}>
                        <Image source={require('../images/manager.png')} style={styles.provider_image} />
                        <View style={styles.insider_box}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.provider_name}>Paul Walker</Text>
                                <View style={styles.provider_number}>
                                    <MaterialCommunityIcons name='phone' style={styles.provider_icon} />
                                    <Text style={styles.provider_contact}>98214345789</Text>
                                </View>
                                <Text style={styles.provider_profession}>CcTv Security</Text>
                            </View>

                            <TouchableOpacity activeOpacity={0.6}>
                                <MaterialCommunityIcons name='cards-heart-outline' style={styles.heart_icon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                </ScrollView>


                {/* <View style={[styles.inpt_container, { marginHorizontal: 20, }]}>
                    <TextInput placeholder='Search' placeholderTextColor={COLOURS.grey} style={styles.name_inpt} />
                    <TouchableOpacity style={styles.search_bg} activeOpacity={0.6}>
                        <Image source={require('../Bold/search.png')} style={styles.icon} tintColor={COLOURS.blue} />
                    </TouchableOpacity>
                </View>  */}

            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({

    provider_box: {
        Width: 180,
        elevation: 3,
        marginLeft: 12,
        marginRight: 10,
        borderRadius: 10,
        marginVertical: 7,
        paddingVertical: 15,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        // justifyContent: 'space-around',
        backgroundColor: COLOURS.white,
    },

    insider_box: {
        width: 200,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    provider_number: {
        right: 5,
        width: 115,
        letterSpacing: 1,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    heart_icon: {
        fontSize: 30,
        color: COLOURS.red,
    },

    map_inpt_container: {
        elevation: 4,
        marginTop: -60,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingVertical: 3,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: COLOURS.white,
        backgroundColor: COLOURS.white,
        justifyContent: 'space-between',
    },

    location_here: {
        width: '80%',
        fontSize: 12,
        // height:30k,
        color: COLOURS.grey,
        alignItems: 'flex-start',
        fontFamily: 'Roboto-Medium',
    },

    provider_image: {
        width: 100,
        height: 100,
    },

    provider_name: {
        top: 4,
        fontSize: 16,
        letterSpacing: .2,
        color: COLOURS.black,
        fontFamily: 'Roboto-Bold',
    },

    provider_icon: {
        fontSize: 20,
        color: COLOURS.grey,
    },

    provider_contact: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium'
    },

    provider_profession: {
        fontSize: 13,
        letterSpacing: .3,
        color: COLOURS.red,
        fontFamily: 'Roboto-Bold',
        textTransform: 'uppercase',
    },

    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },

    short_container: {
        marginHorizontal: 12,
    },

    nav_notifi: {
        height: 100,
        // marginBottom:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    see_categorie: {
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    bar_ground: {
        width: 45,
        height: 45,
        padding: 7,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: COLOURS.Lightgrey,
    },

    bar_img: {
        width: 30,
        height: 30,
    },

    noti_ground: {
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    bell_noti: {
        left: 10,
        width: 20,
        zIndex: 2,
        height: 20,
        bottom: 12,
        fontSize: 15,
        borderRadius: 20,
        textAlign: 'center',
        color: COLOURS.white,
        backgroundColor: COLOURS.blue,
    },

    pswd_name: {
        fontSize: 17,
        marginTop: 30,
        paddingBottom: 10,
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },

    name_inpt: {
        right: 12,
        width: '80%',
        color: COLOURS.black,
        paddingLeft: 20,
    },

    inpt_container: {
        elevation: 4,
        // top: -60,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: COLOURS.white,
        backgroundColor: COLOURS.white,
        justifyContent: 'space-between',
    },

    search_bg: {
        width: 40,
        height: 40,
        padding: 10,
        borderRadius: 20,
        // backgroundColor: COLOURS.blue,
    },

    icon: {
        height: 20,
        width: 20,
        fontSize: 17,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: COLOURS.Lightgrey,
    },

    categories: {
        fontSize: 20,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
    },

    see: {
        padding: 5,
        fontSize: 12,
        fontSize: 13,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
    },

    see_all: {
        height: 30,
        width: 60,
        borderRadius: 10,
        backgroundColor: COLOURS.Lightgrey

    },

    categorie_Container: {
        height: 250,
        marginVertical: 10,
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    categorie_box: {
        width: 105,
        height: 110,
        marginBottom: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOURS.Lightgrey,
    },

    categorie_img: {
        height: 40,
        width: 40,
    },

    categorie_name: {
        top: 15,
        fontSize: 13,
        paddingBottom: 5,
        letterSpacing: .4,
        color: COLOURS.black,
        paddingHorizontal: 5,
        fontFamily: 'Roboto-Regular',
    },

    servce_box_provider: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    srvce_box: {
        width: 150,
        height: 215,
        elevation: 5,
        borderRadius: 10,
        marginBottom: 40,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLOURS.white,
    },

    servce_sec: {
        marginTop: 30,
        marginBottom: 10,
    },

    categorie_serce_img: {
        height: 120,
        width: 150,
        borderRadius: 10,
    },

    categorie_service_btn: {
        top: -10,
        height: 25,
        width: 120,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: COLOURS.red,
    },

    categorie_service_name: {
        fontSize: 12,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
    },

    name_icon: {
        top: -12,
        width: 120,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    icon_sericer: {
        fontSize: 18,
        width: 28,
        color: COLOURS.grey
    },

    service_name: {
        fontSize: 14,
        letterSpacing: .3,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
    },

    service_money: {
        top: -12,
        fontSize: 20,
        marginTop: 10,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold'
    },
    service_percent: {
        top: -12,
        right: 10,
        fontSize: 18,
        marginTop: 10,
        color: COLOURS.red,
        fontFamily: 'Roboto-Bold'
    },
    money_percent: {
        width: 150,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },

})