import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import styles from '../../Pcss/pbookings/upcomingbookings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useContext, useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { provider_all_booking, online_handymans, Product_reviews } from '../../Pbackend/P_Data';
import { Image, ScrollView, StatusBar, TextInput, Text, TouchableOpacity, View, SafeAreaView, ImageBackground, TouchableHighlight, FlatList } from 'react-native'

const Up_Booking_Details = ({ route }) => {

    const { id } = route.params
    const navigation = useNavigation()
    const theme = useContext(themeContext);
    const [all_bookings, setOnlineBookings] = useState(null)
    const selectedItem = provider_all_booking.find(item => item.id === id);


    useEffect(() => {
        setOnlineBookings(selectedItem);
        console.log(selectedItem)
    }, [selectedItem]);

    const P_Booked_details_user = () => {
        navigation.navigate("P_Booking_User", { id: id })
    }

    const go_to_categigorie_details = () => {
        navigation.navigate('P_Bookings_Categorie', { id: id })
    }

    return (
        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <SafeAreaView>

                <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>

                    <View style={styles.bg_area_book}>
                        <View style={styles.arrow_area}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <Text style={[styles.acc_name, { color: COLOURS.white }]}>{all_bookings?.done}</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.7}>
                            {/* <Image source={require('../../../images/plus.png')} style={styles.menu_img} tintColor={COLOURS.white} /> */}
                        </TouchableOpacity>
                    </View>

                    {/*  */}

                    <Animatable.View style={styles.all_container_info_booking_one} duration={1000} animation={'fadeInUp'}>

                        <View style={styles.book_data}>
                            <Text style={styles.book_id}>Booking ID</Text>
                            <Text style={styles.book_no}>{all_bookings?.serial}</Text>
                        </View>

                        <TouchableOpacity activeOpacity={0.7} onPress={go_to_categigorie_details}>
                            <View style={[styles.book_underline_one, { backgroundColor: theme.lightblack }]}></View>
                            <View style={styles.date_time_area_one}>
                                <View>
                                    <Text style={[styles.name_test, { color: theme.colorwhite }]}>{all_bookings?.service}</Text>
                                    <Text style={[styles.real_date, { color: theme.colorwhite }]}><Text style={styles.date}>Date :  </Text>{all_bookings?.service_profilebook_date}</Text>
                                    <Text style={[styles.real_date, { color: theme.colorwhite }]}><Text style={styles.date}>Time :  </Text>{all_bookings?.service_profilebook_time}</Text>
                                </View>
                                <View>
                                    <Image source={all_bookings?.bg_booking} style={styles.book_image} />
                                </View>
                            </View>

                            <View style={[styles.book_underline_one, { backgroundColor: theme.lightblack }]}></View>
                        </TouchableOpacity>

                    </Animatable.View>

                    <Animatable.View duration={2000} animation={'fadeInUp'}>

                        <View style={styles.descript_bg}>
                            <Text style={[styles.descript_text, { color: theme.colorblue }]}>booking description</Text>
                            <Text style={[styles.descript_text_para, { color: COLOURS.grey }]}>{all_bookings?.description}</Text>
                        </View>

                        {/*  */}

                        {/*  */}

                        <View>
                            <View style={styles.see_categorie}>
                                <View>
                                    <Text style={[styles.categories, { color: theme.colorblue }]}>about customer</Text>
                                </View>
                                <TouchableOpacity style={[styles.see_all, { backgroundColor: theme.lightblack }]} onPress={() => navigation.navigate('')}>
                                    <Text style={[styles.see, { color: theme.colorblue }]}>view direction</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={[styles.row_user_data_bg, { backgroundColor: theme.lightblack_card }]}>
                            <TouchableOpacity style={styles.row_user_data} onPress={P_Booked_details_user}>
                                <View>
                                    <Image source={all_bookings?.booking_user_profile} style={styles.user_book_profile} />
                                    {/* <View style={styles.bg_name_1}><Text>{'T'}</Text></View> */}
                                </View>
                                <View style={styles.data_name_email}>
                                    <Text style={[styles.name_user, { color: theme.colorblue }]}>{all_bookings?.username}</Text>
                                    <View style={styles.mail_area}>
                                        <Image source={require('../../../Bold/envelope.png')} style={styles.msg_img} tintColor={theme.colorblue} />
                                        <Text style={styles.msg_text}>{all_bookings?.email}</Text>
                                    </View>
                                    <View style={styles.mail_area}>
                                        <Image source={require('../../../Bold/map-marker.png')} style={styles.msg_img} tintColor={theme.colorblue} />
                                        <Text style={styles.msg_text}>{all_bookings?.city}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <View style={[styles.boderline, { backgroundColor: COLOURS.grey }]}></View>

                            <TouchableOpacity activeOpacity={0.7} style={[styles.call_img_btn, { backgroundColor: theme.lightblack_btn }]}>
                                <Image source={require('../../../images/messenger.png')} style={styles.call_img} tintColor={theme.colorwhite} />
                                <Text style={[styles.call_img_text, { color: theme.colorwhite }]}>Chat</Text>
                            </TouchableOpacity>

                        </View>

                        {/*  */}

                        {/*  */}

                        <View style={styles.more_handyman_one}>
                            <Text style={[styles.more_handyman_text_one, { color: theme.colorwhite }]}>price details</Text>
                        </View>

                        <View style={[styles.price_container_details, { backgroundColor: theme.lightblack_card }]}>
                            <View style={styles.prce_area}>
                                <Text style={styles.prce_text}>price</Text>
                                <Text style={[styles.prce_text_here, { color: theme.colorwhite }]}>{'$' + all_bookings?.price + '.00'}</Text>
                            </View>
                            <View style={styles.prce_area}>
                                <Text style={styles.prce_text}>Subtotal</Text>
                                <Text style={[styles.prce_text_here, { color: theme.colorwhite }]}><Text style={{ color: COLOURS.grey }}>$123.00 * 1  </Text> {'$' + all_bookings?.subtotal + '.00'}</Text>
                            </View>
                            <View style={styles.prce_area}>
                                <Text style={styles.prce_text}>discount <Text style={[styles.off_here, { color: COLOURS.green }]}>{'(1% off)'}</Text></Text>
                                <Text style={[styles.prce_text_here, { color: COLOURS.green }]}>{'-$' + all_bookings?.discount}</Text>
                            </View>
                            <View style={styles.prce_area}>
                                <Text style={styles.prce_text}>total extra charges</Text>
                                <Text style={[styles.prce_text_here, { color: theme.colorwhite }]}>{'$' + all_bookings?.extra + '.00'}</Text>
                            </View>
                            <View style={styles.prce_area_one}>
                                <Text style={styles.prce_text}>total</Text>
                                <Text style={[styles.prce_text_here, { color: theme.colorblue }]}>{'$' + all_bookings?.total + '.00'}</Text>
                            </View>
                        </View>

                    </Animatable.View>

                    {/*  */}

                    {/*  */}


                <View style={styles.more_handyman_one}>
                    <Text style={[styles.more_handyman_text_one, { color: theme.colorwhite }]}>Reviews {`( ${Product_reviews.length} )`}</Text>
                </View>

                <FlatList data={Product_reviews}
                    style={styles.space_down}
                    renderItem={({ item }) => {
                        return (
                            <View style={[styles.review_area, { backgroundColor: theme.lightblack_card }]} key={item.id}>
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

                {/*  */}

            </ScrollView>
            <View style={[styles.btn_up_area, { backgroundColor: theme.lightblack_card }]}>
                {all_bookings?.done == 'pending' ? (
                    <>
                        <TouchableOpacity style={[styles.book_btn, { backgroundColor: COLOURS.blue }]} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                            <Text style={styles.book_btn_text}>accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.book_btn, { backgroundColor: theme.btn }]} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                            <Text style={[styles.book_btn_text, { color: theme.colorwhite }]}>decline</Text>
                        </TouchableOpacity>
                    </>
                )
                    :
                    < TouchableOpacity style={[styles.book_btn_one, { backgroundColor: COLOURS.blue }]} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <Text style={[styles.book_btn_text_one, { color: COLOURS.white }]}>service proof</Text>
                    </TouchableOpacity>
                }
            </View>
        </SafeAreaView >

        </>
    )
}

export default Up_Booking_Details