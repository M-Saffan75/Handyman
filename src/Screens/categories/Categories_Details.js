import { categories } from '../../Backend/data';
import TextTicker from 'react-native-text-ticker';
import { COLOURS } from '../../ThemeColour/Theme';
import { MarqueeText } from 'react-native-marquee';
import MarqueeView from 'react-native-marquee-view';
import themeContext from '../../Toggle/themeContext';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import styles from '../../css/categories/categoriesdetails';
import React, { useContext, useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View, SafeAreaView, TextInput, FlatList, ImageBackground } from 'react-native';


const Categories_Details = ({ route }) => {

    const { id } = route.params
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [categorie_here, setCategorie_Here] = useState(null)
    const selectedItem = categories.find(item => item.id === id);

    useEffect(() => {
        setCategorie_Here(selectedItem.categore_service)
    }, [selectedItem]);

    const onClickItem = (subId) => {
        navigation.navigate('Categories_Details_Here', { subId: subId })
    }

    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView>
                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>

                    <View>
                        <View style={styles.arrow_area}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <Text style={[styles.acc_name, { color: theme.colorwhite }]}>{'All ' + categorie_here?.[0]?.categorie}</Text>
                        </View>
                    </View>

                    <Animatable.View style={styles.search_imges_filter_area} animation={'fadeInUp'} direction="alternate" delay={1000}>
                        <View style={[styles.inpt_filter_area, { backgroundColor: theme.lightblack }]}>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image source={require('../../Bold/search.png')} style={styles.search_img} tintColor={COLOURS.grey} />
                            </TouchableOpacity>
                            <TextInput placeholder={'Search'} placeholderTextColor={theme.placeholder} style={[styles.search_inpt, { color: theme.colorwhite }]} />
                            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Booking_Filter')}>
                                <Image source={require('../../Bold/sliders-h.png')} style={styles.filter_img} tintColor={theme.colorblue} />
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>

                    <ScrollView Vertical showsVerticalScrollIndicator={false}>
                        <FlatList
                            data={categorie_here}
                            numColumns={2}
                            Vertical
                            showsVerticalScrollIndicator={false}
                            style={styles.space_around}
                            renderItem={({ item }) => {
                                return (
                                    <Animatable.View animation={'zoomIn'}>
                                        <TouchableOpacity style={[styles.featur_bg_area_one, { backgroundColor: theme.lightblack }]} activeOpacity={0.8} onPress={() => onClickItem(item.subId)}>
                                            <ImageBackground source={item.bg_service} style={styles.bg_img_content_area_one} resizeMode='cover'>
                                                <View style={styles.out_line_btn_one}>
                                                    <TouchableOpacity activeOpacity={10} style={[styles.pressn_btn_one, { backgroundColor: theme.lightblack }]}>
                                                        <MarqueeView speed={0.08} delay={0.9}>
                                                            {/* <Text style={[styles.prfeson_name_one, { color: theme.colorblue }]}>{item.title.length > 13 ? `${item.title.slice(0, 13)}...` : item.title}</Text> */}
                                                            <Text style={[styles.prfeson_name_one, { color: theme.colorblue }]}>{item.title}</Text>
                                                        </MarqueeView>
                                                    </TouchableOpacity>

                                                    <TouchableOpacity activeOpacity={0.9} style={[styles.pressn_btn_fav, { backgroundColor: theme.lightblack }]}>
                                                        <Image source={require('../../Bold/heart.png')} style={styles.fav_heart_img} tintColor={theme.colorblue} />
                                                    </TouchableOpacity>
                                                </View>
                                            </ImageBackground>

                                            <View style={styles.prver_detail_area_one}>
                                                <View style={styles.prvder_rat_one}>
                                                    <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img_one} />
                                                    <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img_one} />
                                                    <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img_one} />
                                                    <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img_one} />
                                                    <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img_one} />
                                                </View>
                                                <TouchableOpacity activeOpacity={0.9} style={styles.charg_balanc_btn_one}>
                                                    <Text style={styles.charg_balanc_one}>{'$' + item.price + '.00'}</Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View style={styles.space_some_text_one}>
                                                <Text style={[styles.Profeson_title_one, { color: theme.colorblue }]}>{item.full_title}</Text>
                                                <View style={styles.profile_prodr_area_one}>
                                                    <Image source={item.service_profile} style={styles.profile_prodr_one} />
                                                    <Text style={styles.profile_prodr_name_one}>{item.handyman}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </Animatable.View>
                                )
                            }}
                        />
                    </ScrollView>

                </View>
            </SafeAreaView>
        </>
    )
}

export default Categories_Details