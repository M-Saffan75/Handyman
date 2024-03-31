import { COLOURS } from '../../ThemeColour/Theme';
import themeContext from '../../Toggle/themeContext';
import * as Animatable from 'react-native-animatable'; 
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState, useEffect } from 'react';
import { fav_providers, featued_items } from '../../Backend/data';
import styles from '../../css/favourites/favouriteproviderdetails';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View, SafeAreaView, FlatList, ImageBackground } from 'react-native';


const Favourites_Providers_Details = ({ route }) => {

    const { id } = route.params
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [provider_user, setProvider_user] = useState(null)
    const [provider_more, setProvider_more] = useState(null)
    const selectedItem = fav_providers.find(item => item.id === id);
    
    
    useEffect(() => {
        setProvider_user(selectedItem);
        setProvider_more(selectedItem.items)
        console.log(selectedItem.items)
    }, [selectedItem]);


    return (
        <>
            {/* <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} /> */}
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <SafeAreaView>
                <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>

                    <View>

                        <View style={[styles.bg_area_book, { backgroundColor: COLOURS.blue }]}>
                            <View style={styles.arrow_area}>
                                <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                    <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                                </TouchableOpacity>
                                <Text style={[styles.acc_name, { color: COLOURS.white }]}>About providers</Text>
                            </View>
                        </View>

                        <View style={[styles.short_profl_name_area, { backgroundColor: theme.lightblack_card }]}>
                            <View style={styles.row_area}>
                                <Image source={provider_user?.provider_profile} style={styles.prfle_book_here} />

                                <View style={styles.name_icon_area}>
                                    <View style={styles.name_icon}>
                                        <Text style={[styles.name_demo_text, { color: theme.colorwhite }]}>{provider_user?.provider_name}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.member_sinc_text}>{provider_user?.member}</Text>
                                    </View>
                                    <View style={styles.rat_area}>
                                        <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                                        <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                                        <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                                        <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                                        <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                                    </View>
                                </View>
                            </View>

                            <View>
                                <Image source={require('../../images/love.png')} style={styles.booK_user_favourite} tintColor={COLOURS.red} />
                            </View>
                        </View>

                        <View style={styles.more_handyman}>
                            <Text style={[styles.more_handyman_text, { color: theme.colorwhite }]}>known languages</Text>
                        </View>

                        <View style={styles.row_lang_here}>
                            {provider_user?.langauges.map((language, index) => (
                                <Text style={[styles.lang_1, { backgroundColor: theme.lightblack, color: theme.colorblue }]} key={index}>
                                    {language}
                                </Text>
                            ))}
                        </View>
                        
                        <View style={styles.more_handyman}>
                            <Text style={[styles.more_handyman_text, { color: theme.colorwhite }]}>personal info</Text>
                        </View>

                        <View style={styles.mail_area_container}>
                            <View style={styles.mail_area}>
                                <Image source={require('../../Bold/envelope.png')} style={styles.msg_img} tintColor={theme.colorblue} />
                                <Text style={styles.msg_text}>{provider_user?.email}</Text>
                            </View>
                            <View style={styles.mail_area}>
                                <Image source={require('../../images/phone-call.png')} style={styles.msg_img} tintColor={theme.colorblue} />
                                <Text style={styles.msg_text}>{provider_user?.phone}</Text>
                            </View>
                        </View>

                        <View style={styles.all_see}>
                            <View style={styles.see_categorie}>
                                <Text style={[styles.categories, { color: theme.colorblue }]}>services</Text>
                                <TouchableOpacity style={[styles.see_all, { backgroundColor: theme.lightblack }]} activeOpacity={0.7}>
                                    <Text style={[styles.see, { color: theme.colorblue }]}>View All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/*  */}

                        <Animatable.View style={styles.bg_fetaure} animation={'zoomIn'} >
                            <FlatList
                                data={provider_more}
                                alwaysBounceVertical
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={[styles.featur_bg_area, { backgroundColor: theme.lightblack }]}>

                                            <ImageBackground source={item?.bg_provider} style={styles.bg_img_content_area} resizeMode='cover'>
                                                <View style={styles.out_line_btn}>
                                                    <TouchableOpacity activeOpacity={0.7} style={[styles.pressn_btn, { backgroundColor: theme.lightblack }]}>
                                                        <Text style={[styles.prfeson_name, { color: theme.colorblue }]}>{item?.title}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </ImageBackground>

                                            <View style={styles.prver_detail_area}>
                                                <View style={styles.prvder_rat}>
                                                    <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                                                    <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                                                    <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                                                    <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                                                    <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                                                </View>
                                                <TouchableOpacity activeOpacity={0.7} style={styles.charg_balanc_btn}>
                                                    <Text style={styles.charg_balanc}>{'$' + item?.price + '.00'}</Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View style={styles.space_some_text}>
                                                <Text style={[styles.Profeson_title, { color: theme.colorblue }]}>{item?.full_title}</Text>
                                                <View style={styles.profile_prodr_area}>
                                                    <Image source={provider_user?.provider_profile} style={styles.profile_prodr} />
                                                    <Text style={styles.profile_prodr_name}>{provider_user?.provider_name}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }}
                            />
                        </Animatable.View>

                        {/*  */}

                    </View>
                </ScrollView>
            </SafeAreaView >
        </>
    )
}

export default Favourites_Providers_Details