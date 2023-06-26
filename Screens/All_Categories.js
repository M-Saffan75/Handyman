import React from 'react'
import { COLOURS } from '../ThemeColour/Theme'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Image, ScrollView, StatusBar, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native'

const All_Categories = ({ navigation }) => {
    return (

        <>
            <StatusBar backgroundColor={COLOURS.backgroundLight} barStyle={'dark-content'} />

            <ScrollView style={styles.container}>
                <View style={styles.nav_notifi}>

                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <MaterialIcons name='keyboard-arrow-left' style={styles.name} />
                    </TouchableOpacity>
                    <Text style={styles.categories}>All Services</Text>

                    <Text style={styles.see}></Text>

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
                    <TouchableOpacity style={styles.categorie_box} activeOpacity={0.6}>
                        <Image source={require('../icons/delivery-moto.png')} style={styles.categorie_img} />
                        <Text style={styles.categorie_name}>Delivery </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categorie_box} activeOpacity={0.6}>
                        <Image source={require('../icons/maintenance.png')} style={styles.categorie_img} />
                        <Text style={styles.categorie_name}>Maintenance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categorie_box} activeOpacity={0.6}>
                        <Image source={require('../icons/ambulance.png')} style={styles.categorie_img} />
                        <Text style={styles.categorie_name}>Emergency</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categorie_box} activeOpacity={0.6}>
                        <Image source={require('../icons/cctv.png')} style={styles.categorie_img} />
                        <Text style={styles.categorie_name}>Cctv Security</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categorie_box} activeOpacity={0.6}>
                        <Image source={require('../icons/beauty-saloon.png')} style={styles.categorie_img} />
                        <Text style={styles.categorie_name}>Beauty & Saloon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categorie_box} activeOpacity={0.6}>
                        <Image source={require('../icons/truck.png')} style={styles.categorie_img} />
                        <Text style={styles.categorie_name}>Shifting</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categorie_box_separate} activeOpacity={0.6}>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </>
    )
}

export default All_Categories

const styles = StyleSheet.create({

    container: {
        height: '100%',
        backgroundColor: COLOURS.white
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
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    categories: {
        fontSize: 20,
        right: 15,
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
        marginVertical: 10,
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    categorie_box: {
        width: 105,
        height: 110,
        marginBottom: 20,
        borderRadius: 10,
        paddingBottom: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOURS.Lightgrey,
    },
    categorie_box_separate: {
        width: 110,
        height: 110,
        marginBottom: 20,
        borderRadius: 10,
        paddingBottom: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOURS.white,
    },

    categorie_img: {
        height: 40,
        width: 40,
    },

    categorie_name: {
        top: 15,
        fontSize: 13,
        textAlign: 'center',
        letterSpacing: .4,
        color: COLOURS.black,
        paddingHorizontal: 5,
        fontFamily: 'Roboto-Regular',
    },
})