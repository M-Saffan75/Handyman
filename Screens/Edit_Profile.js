import React, { useState } from 'react'
import { COLOURS } from '../ThemeColour/Theme'
import { launchImageLibrary } from 'react-native-image-picker'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Image, ScrollView, StatusBar, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native'

const Edit_Profile = ({ navigation }) => {

    const [galleryphoto, setGalleryPhoto] = useState(null);

    let options = {
        saveTophotos: true,
        mediatype: ' photo',
    };

    const opengallery = async () => {
        const result = await launchImageLibrary(options);
        setGalleryPhoto(result.assets[0].uri);
    }

    return (
        <>
            <StatusBar backgroundColor={COLOURS.backgroundLight} barStyle={'dark-content'} />

            <ScrollView style={styles.container}>
                <View style={styles.nav_notifi}>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <MaterialIcons name='keyboard-arrow-left' style={styles.name} />
                    </TouchableOpacity>
                    <Text style={styles.categories}>Edit Profile</Text>
                    <Text style={styles.see}></Text>
                </View>

                <View style={styles.profile_box}>
                    <View style={styles.profile_all_in_one}>
                        <Image source={require('../images/star.png')} style={styles.star} />
                        {galleryphoto == null ?
                            <Image source={require('../images/profile-real.jpg')}
                                style={styles.profile_image} resizeMode='contain' />
                            :
                            < Image source={{ uri: galleryphoto }}
                                style={styles.profile_image} resizeMode='contain'
                            />
                        }

                        <TouchableOpacity activeOpacity={0.6} onPress={opengallery}>
                            <FontAwesome5 name='plus' style={styles.plus_icon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.top_gap}></View>
                <View style={styles.pswd_inpt_container}>
                    <TextInput placeholder='' defaultValue='Ahmed Raza' placeholderTextColor={COLOURS.grey} style={styles.pswd_inpt} />
                    <FontAwesome5 name={'user-edit'} style={styles.icon} />
                </View>
                <View style={styles.pswd_inpt_container}>
                    <TextInput placeholder='' defaultValue='AhmedRaza88' placeholderTextColor={COLOURS.grey} style={styles.pswd_inpt} />
                    <FontAwesome5 name={'user-tag'} style={styles.icon} />
                </View>
                <View style={styles.pswd_inpt_container}>
                    <TextInput placeholder='' defaultValue='Ahmedraza@gmail.com' placeholderTextColor={COLOURS.grey} style={styles.pswd_inpt} />
                    <FontAwesome5 name={'envelope'} style={styles.icon} />
                </View>
                <View style={styles.pswd_inpt_container}>
                    <TextInput placeholder='' defaultValue='03130932657' placeholderTextColor={COLOURS.grey} style={styles.pswd_inpt} keyboardType='number-pad' />
                    <FontAwesome5 name={'phone-alt'} style={styles.icon} />
                </View>

                <View style={styles.btn_center}>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                        <Text style={styles.btn_text}>Update Profile</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </>

    )
}

export default Edit_Profile

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

    profile_box: {
        padding: 20,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
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
        display: 'none',
        position: 'absolute',
        color: COLOURS.orange,
    },

    profile_image: {
        width: 150,
        height: 150,
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
        right: 15,
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

    top_gap: {
        marginTop: 10,
    },

    pswd_inpt_container: {
        marginTop: 15,
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 30,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        borderColor: COLOURS.blue,
        justifyContent: 'space-around',
    },

    icon: {
        width: 25,
        fontSize: 18,
        color: COLOURS.blue,
    },

    pswd_inpt: {
        width: '100%',
        letterSpacing: .5,
        color: COLOURS.black,
        paddingHorizontal: 5,
        fontFamily: 'Roboto-Medium',
    },

    btn: {
        width: '100%',
        marginTop: 30,
        borderRadius: 30,
        padding: 5,
        borderColor: COLOURS.blue,
        backgroundColor: COLOURS.blue,
    },

    btn_text: {
        color: COLOURS.white,
        fontSize: 12,
        letterSpacing: .5,
        paddingVertical: 15,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
    },

    btn_center: {
        marginBottom: 30,
        marginHorizontal: 20,
        alignItems: 'center',
    },

})