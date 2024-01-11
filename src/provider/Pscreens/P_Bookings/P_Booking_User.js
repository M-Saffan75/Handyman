import { COLOURS } from '../../../ThemeColour/Theme';
import styles from '../../Pcss/pbookings/pbookinguser';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Product_reviews, provider_all_booking } from '../../Pbackend/P_Data';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View, SafeAreaView, FlatList, } from 'react-native';


const P_Booking_User = ({ route }) => {

    const { id } = route.params
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [booking_user, setBook_user] = useState(null)
    const selectedItem = provider_all_booking.find(item => item.id === id);

    useEffect(() => {
        setBook_user(selectedItem);
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
                                <Text style={[styles.acc_name, { color: COLOURS.white }]}>About User</Text>
                            </View>
                        </View>

                        <View style={[styles.short_profl_name_area, { backgroundColor: theme.lightblack_card }]}>
                            <View style={styles.row_area}>
                                <Image source={booking_user?.booking_user_profile} style={styles.prfle_book_here} />

                                <View style={styles.name_icon_area}>
                                    <View style={styles.name_icon}>
                                        <Text style={[styles.name_demo_text, { color: theme.colorwhite }]}>{booking_user?.username}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.member_sinc_text}>{booking_user?.member}</Text>
                                    </View>
                                    <View style={styles.rat_area}>
                                        <Image source={require('../../../images/star.png')} style={styles.rat_prodivder_img} />
                                        <Image source={require('../../../images/star.png')} style={styles.rat_prodivder_img} />
                                        <Image source={require('../../../images/star.png')} style={styles.rat_prodivder_img} />
                                        <Image source={require('../../../images/star.png')} style={styles.rat_prodivder_img} />
                                        <Image source={require('../../../images/star.png')} style={styles.rat_prodivder_img} />
                                    </View>
                                </View>
                            </View>

                            <View>
                                <Image source={require('../../../images/love.png')} style={styles.booK_user_favourite} tintColor={COLOURS.red} />
                            </View>
                        </View>

                        <View style={styles.more_handyman}>
                            <Text style={[styles.more_handyman_text, { color: theme.colorwhite }]}>known languages</Text>
                        </View>

                        <View style={styles.row_lang_here}>
                            {booking_user?.langauges.map((language, index) => (
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
                                <Image source={require('../../../Bold/envelope.png')} style={styles.msg_img} tintColor={theme.colorblue} />
                                <Text style={styles.msg_text}>{booking_user?.email}</Text>
                            </View>
                            <View style={styles.mail_area}>
                                <Image source={require('../../../images/phone-call.png')} style={styles.msg_img} tintColor={theme.colorblue} />
                                <Text style={styles.msg_text}>{booking_user?.phone}</Text>
                            </View>
                        </View>

                        <View style={styles.all_see}>
                            <View style={styles.see_categorie}>
                                <Text style={[styles.categories, { color: theme.colorblue }]}>reviews</Text>
                                <TouchableOpacity style={[styles.see_all, { backgroundColor: theme.lightblack }]} activeOpacity={0.7}>
                                    <Text style={[styles.see, { color: theme.colorblue }]}>View All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <FlatList data={Product_reviews}
                                renderItem={({ item }) => {
                                    return (
                                        < View style={[styles.review_area, { backgroundColor: theme.lightblack_card }]} key={item.id}>
                                            <View style={styles.profl_info_review}>
                                                <View>
                                                    <Image source={item.review_profile} style={styles.prfle_book_here} />
                                                </View>
                                                <View style={styles.small_info__reivew}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                        <View style={{ flexDirection: 'column' }}>
                                                            <Text style={[styles.rvie_name, { color: theme.colorblue }]}>{item.name}</Text>
                                                            <Text style={[styles.rvie_date, { color: COLOURS.grey }]}>{item.date}</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                            <Image source={require('../../../images/star.png')} style={styles.rat_review_img}
                                                                tintColor={item.rating >= 1.0 && item.rating <= 2.1 ? COLOURS.red : ''} />
                                                            <Text style={[styles.rvie_date, { color: COLOURS.grey }]}>{item.rating}</Text>
                                                        </View>
                                                    </View>

                                                    <Text style={[styles.rvie_post, { color: theme.colorwhite }]}>
                                                        {item.review_post.length > 55
                                                            ? `${item.review_post.slice(0, 50)} ...`
                                                            : item.review_post}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }}
                            />
                        </View>
                        {/*  */}

                    </View>
                </ScrollView>
            </SafeAreaView >
        </>
    )
}

export default P_Booking_User