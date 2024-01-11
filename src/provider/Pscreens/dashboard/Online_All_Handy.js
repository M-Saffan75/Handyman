import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext';
import styles from '../../Pcss/dashboard/onlineallhandy';
import { useNavigation } from '@react-navigation/native';
import { online_handymans } from '../../Pbackend/P_Data';
import React, { useContext, useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View, SafeAreaView, FlatList, ImageBackground } from 'react-native'

const Online_All_Handy = () => {

    const navigation = useNavigation();
    const theme = useContext(themeContext);

    const onClickItem = (item) => {
        navigation.navigate('Online_Handy_Details', { id: item.id })
    }

    const createItem = () => {
        navigation.navigate('Create_Handyman')
    }

    return (
        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <SafeAreaView>

                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>

                    <View style={styles.bg_area_book}>
                        <View style={styles.arrow_area}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <Text style={[styles.acc_name, { color: COLOURS.white }]}>handyman list</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.7} onPress={createItem}>
                            <Image source={require('../../../images/plus.png')} style={styles.menu_img} tintColor={COLOURS.white} />
                        </TouchableOpacity>
                    </View>

                    {/*  */}
                    {/* <View> */}
                    <View style={styles.btm_space}></View>

                    <FlatList data={online_handymans}
                        numColumns={2}
                        style={styles.btm_space}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <Animatable.View animation={'zoomIn'}>
                                    <TouchableOpacity onPress={() => onClickItem(item)} activeOpacity={0.7}>
                                        <View style={[styles.bg_provider_container, { backgroundColor: theme.lightblack }]} key={item.id}>
                                            <View style={styles.bg_here_radius}>
                                                <ImageBackground source={item.provider_profile} style={styles.bg_fav_prvder_img} >
                                                    <View style={styles.end_set}>
                                                        <TouchableOpacity activeOpacity={0.7} style={[styles.pressn_btn_fav, { backgroundColor: theme.lightblack }]}>
                                                            <Image source={require('../../../images/power-switch.png')} style={styles.fav_heart_img} tintColor={COLOURS.green} />
                                                        </TouchableOpacity>
                                                    </View>
                                                </ImageBackground>
                                            </View>

                                            <View style={styles.online_image_container}>
                                                <Text style={[styles.online_dot, { backgroundColor: COLOURS.green }]}></Text>
                                                <Text style={[styles.name_here_prvdr, { color: theme.colorwhite }]}>
                                                    {item.provider_name}
                                                </Text>
                                            </View>

                                            <View style={styles.bg_area_fav_provder}>
                                                <TouchableOpacity activeOpacity={0.7} style={[styles.fav_area_bg, { backgroundColor: theme.lightbox }]}>
                                                    <Image source={require('../../../images/phone-call.png')} style={styles.phone_img} tintColor={theme.colorblue} />
                                                </TouchableOpacity>
                                                <TouchableOpacity activeOpacity={0.7} style={[styles.fav_area_bg, { backgroundColor: theme.lightbox }]}>
                                                    <Image source={require('../../../Bold/envelope.png')} style={styles.phone_img} tintColor={theme.colorblue} />
                                                </TouchableOpacity>
                                                <TouchableOpacity activeOpacity={0.7} style={[styles.fav_area_bg, { backgroundColor: theme.lightbox }]}>
                                                    <Image source={require('../../../images/chat.png')} style={styles.phone_img} tintColor={theme.colorblue} />
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                </Animatable.View>
                            )
                        }}
                    />
                    {/*  */}

                </View>
            </SafeAreaView>

        </>

    )
}

export default Online_All_Handy
