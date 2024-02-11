import Slider from './Slider'
import styles from '../css/home';
import { COLOURS } from '../ThemeColour/Theme';
import themeContext from '../Toggle/themeContext';
import React, { useContext, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { categories, featued_items, all_items, services_items } from '../Backend/data';
import { Image, ScrollView, StatusBar, TextInput, Text, FlatList, TouchableOpacity, View, SafeAreaView, ImageBackground } from 'react-native';


export default function Home({ navigation }) {

    const theme = useContext(themeContext);

    const onClickItem = (item) => {
        navigation.navigate('Service_Details', { id: item.id })
    }

    const OnCLickFeatured = (item) => {
        navigation.navigate('Featured_Details', { id: item.id })
    }

    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView>
                <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false} >
                    <Animatable.View style={{ marginHorizontal: 12 }}>

                        <>
                            {/* <View style={styles.nav_notifi}>
                                <TouchableOpacity style={[styles.bar_ground, { backgroundColor: theme.lightblack }]} onPress={() => navigation.navigate('Drawer')}>
                                    <Image source={require('../Bold/menu.png')} style={styles.bar_img} tintColor={theme.colorblue} />
                                </TouchableOpacity>

                                <View style={styles.name_screen}>
                                    <Text style={[styles.name_scren_text, { color: theme.colorblue }]}>Home</Text>
                                </View>

                                <View style={styles.noti_ground}>
                                    <Text style={styles.bell_noti}>{'1'}</Text>
                                    <TouchableOpacity style={[styles.bar_ground, { backgroundColor: theme.lightblack }]}>
                                        <Image source={require('../Bold/bell.png')} style={styles.bar_img} tintColor={theme.colorblue} />
                                    </TouchableOpacity>
                                </View>
                            </View> */}
                        </>


                    </Animatable.View>

                    {/* Slider */}
                    <Animatable.View style={{ marginBottom: 30, marginTop: 10, }} duration={2000} animation={'fadeInDown'}>
                        <Slider navigation={navigation} />
                    </Animatable.View>
                    {/* Slider */}

                    <Animatable.View style={[styles.map_inpt_container, { backgroundColor: theme.lightblack }]} duration={2000} animation={'fadeInUp'}>
                        <TouchableOpacity style={styles.search_bg} activeOpacity={0.6}>
                            <FontAwesome5 name='map-marker-alt' style={[styles.icon, { right: 0, color: theme.colorblue }]} />
                        </TouchableOpacity>

                        <TextInput placeholder='All Service Available' placeholderTextColor={'grey'} style={[styles.location_here, { color: theme.colorwhite }]} />

                        <TouchableOpacity style={styles.search_bg} activeOpacity={0.6}>
                            <MaterialCommunityIcons name='crosshairs-gps' style={[styles.icon, { right: 15, color: theme.colorblue }]} />
                        </TouchableOpacity>
                    </Animatable.View>

                    <Animatable.View style={styles.short_container} duration={2000} animation={'fadeInUp'}>
                        <View style={styles.see_categorie}>
                            <Text style={[styles.categories, { color: theme.colorblue }]}>All Services</Text>
                            <TouchableOpacity style={[styles.see_all, { backgroundColor: theme.lightblack }]}
                                onPress={() => navigation.navigate('All_Categories')}>
                                <Text style={[styles.see, { color: theme.colorblue }]}>View All</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.categorie_Container}>
                            {categories.slice(0, 6).map((item) => (
                                <TouchableOpacity
                                    style={[
                                        styles.categorie_box,
                                        { backgroundColor: theme.lightblack },
                                    ]}
                                    activeOpacity={0.6}
                                    key={item.id}
                                    onPress={() => navigation.navigate('All_Categories')}
                                >
                                    <Image
                                        source={item.categorie_img}
                                        style={styles.categorie_img}
                                        tintColor={item.id === 6 ? COLOURS.blue : ''}
                                    />
                                    <Text style={[styles.categorie_name, { color: theme.colorwhite }]}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                    </Animatable.View>

                    <View style={styles.all_see}>
                        <View style={styles.see_categorie}>
                            <Text style={[styles.categories, { color: theme.colorblue }]}>Featured</Text>
                            <TouchableOpacity style={[styles.see_all, { backgroundColor: theme.lightblack }]} onPress={() => navigation.navigate('Featured_All')}>
                                <Text style={[styles.see, { color: theme.colorblue }]}>View All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Animatable.View style={styles.bg_fetaure} duration={2000} animation={'fadeInRight'}>
                        {featued_items.slice(0, 3).map((item, index) => (
                            <TouchableOpacity
                                style={[
                                    styles.featur_bg_area,
                                    { backgroundColor: theme.lightblack },
                                ]}
                                activeOpacity={0.7}
                                onPress={() => OnCLickFeatured(item)}
                                key={index}
                            >
                                <ImageBackground
                                    source={item.bg_service}
                                    style={styles.bg_img_content_area}
                                    resizeMode='cover'
                                >
                                    <View style={styles.out_line_btn}>
                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            style={[styles.pressn_btn, { backgroundColor: theme.lightblack }]}
                                        >
                                            <Text style={[styles.prfeson_name, { color: theme.colorblue }]}>
                                                {item.title}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>

                                <View style={styles.prver_detail_area}>
                                    <View style={styles.prvder_rat}>
                                        {[1, 2, 3, 4, 5].map((star, i) => (
                                            <Image
                                                key={i}
                                                source={require('../images/star.png')}
                                                style={styles.rat_prodivder_img}
                                            />
                                        ))}
                                    </View>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        style={styles.charg_balanc_btn}
                                    >
                                        <Text style={styles.charg_balanc}>{'$' + item.price + '.00'}</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.space_some_text}>
                                    <Text style={[styles.Profeson_title, { color: theme.colorblue }]}>
                                        {item.full_title}
                                    </Text>
                                    <View style={styles.profile_prodr_area}>
                                        <Image
                                            source={item.service_profile}
                                            style={styles.profile_prodr}
                                        />
                                        <Text style={styles.profile_prodr_name}>{item.handyman}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </Animatable.View>

                    {/*  */}

                    <View style={styles.all_see}>
                        <View style={styles.see_categorie}>
                            <Text style={[styles.categories, { color: theme.colorblue }]}>services</Text>
                            <TouchableOpacity style={[styles.see_all, { backgroundColor: theme.lightblack }]} onPress={() => navigation.navigate('Service_All')}>
                                <Text style={[styles.see, { color: theme.colorblue }]}>View All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Animatable.View duration={2000} animation={'fadeInLeft'}>
                        <View style={styles.row_wise_data}>
                            {services_items.map((item, index) => (
                                <TouchableOpacity
                                    style={[
                                        styles.featur_bg_area_one,
                                        { backgroundColor: theme.lightblack },
                                    ]}
                                    activeOpacity={0.7}
                                    onPress={() => onClickItem(item)}
                                    key={index}
                                >
                                    <ImageBackground
                                        source={item.bg_service}
                                        style={styles.bg_img_content_area_one}
                                        resizeMode='cover'
                                    >
                                        <View style={styles.out_line_btn_one}>
                                            <TouchableOpacity
                                                activeOpacity={0.7}
                                                style={[styles.pressn_btn_one, { backgroundColor: theme.lightblack }]}
                                            >
                                                <Text style={[styles.prfeson_name_one, { color: theme.colorblue }]}>
                                                    {item.title}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </ImageBackground>

                                    <View style={styles.prver_detail_area_one}>
                                        <View style={styles.prvder_rat_one}>
                                            {[1, 2, 3, 4, 5].map((star, i) => (
                                                <Image
                                                    key={i}
                                                    source={require('../images/star.png')}
                                                    style={styles.rat_prodivder_img_one}
                                                />
                                            ))}
                                        </View>
                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            style={styles.charg_balanc_btn_one}
                                        >
                                            <Text style={styles.charg_balanc_one}>{'$' + item.price + '.00'}</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.space_some_text_one}>
                                        <Text style={[styles.Profeson_title_one, { color: theme.colorblue }]}>
                                            {item.full_title}
                                        </Text>
                                        <View style={styles.profile_prodr_area_one}>
                                            <Image
                                                source={item.service_profile}
                                                style={styles.profile_prodr_one}
                                            />
                                            <Text style={styles.profile_prodr_name_one}>{item.handyman}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </Animatable.View>

                    <View style={[styles.post_require_area, { backgroundColor: theme.lightblack }]}>
                        <Text style={[styles.post_require_text, { color: theme.colorblue }]}>Didn't find your service? don't worry you can post your requirements.</Text>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.post_btn, { backgroundColor: theme.backgroundColor }]}>
                            <Image source={require('../images/plus.png')} style={styles.plus_img} tintColor={theme.colorwhite} />
                            <Text style={[styles.text_text, { color: theme.colorwhite }]}>Now Post job request</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView >

        </>
    )
}

