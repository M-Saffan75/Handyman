import React, { useContext } from 'react';
import styles from '../../Pcss/dashboard/dashboard';
import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import { provider_all_booking, online_handymans, requestjobs, Provider_services } from '../../Pbackend/P_Data';
import { Image, ScrollView, StatusBar, TextInput, Text, TouchableOpacity, View, SafeAreaView, ImageBackground } from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    StackedBarChart,
    ContributionGraph,
} from 'react-native-chart-kit';

import { responsiveWidth } from 'react-native-responsive-dimensions';


const P_Dashboard = () => {

    const navigation = useNavigation()
    const theme = useContext(themeContext);

    const onClickItem = (item) => {
        navigation.navigate('Provider_Service_Details', { id: item.id })
    }

    const onClickItemOnline = (item) => {
        navigation.navigate('Online_Handy_Details', { id: item.id })
    }

    const Up_Coming_Booked = (item) => {
        navigation.navigate('Up_Booking_Details', { id: item.id })

    }

    const Onclick = (item) => {
        navigation.navigate('Job_Request_Details', { id: item.id })
    }

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 77, 88],
                color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Blue color for the line
            },
        ],
    };

    return (
        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <SafeAreaView>

                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]} >

                    {/* header area */}

                    <View style={styles.back_fav_area}>
                        <View>
                            <View style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <Text style={[styles.name, { color: COLOURS.white }]}>dashboard</Text>
                            </View>
                        </View>
                        <View style={styles.top_head}>

                            <TouchableOpacity style={styles.btn_align_one} activeOpacity={0.9} onPress={() => navigation.navigate('MessageList')}>
                                <Image source={require('../../../images/chat.png')} style={styles.name_heart} tintColor={COLOURS.white} />
                            </TouchableOpacity>

                            <View style={styles.btn_align_one}>

                                <View style={styles.noti_ground}>
                                    <Text style={[styles.bell_noti, { backgroundColor: COLOURS.white, color: COLOURS.blue }]}>{'1'}</Text>
                                    <TouchableOpacity style={[styles.bar_ground,]} activeOpacity={0.9} onPress={() => navigation.navigate('Notifications')}>
                                        <Image source={require('../../../Bold/bell.png')} style={styles.bar_img} tintColor={COLOURS.white} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>

                    {/* header area */}
                    <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>

                        <View style={styles.space_text}>
                            <Text style={[styles.hellow_text, { color: theme.colorwhite }]}>hello, provider demo</Text>
                            <Text style={[styles.hellow_welcome_text, { color: COLOURS.grey }]}>welcome back !</Text>
                        </View>

                        {/* Total Calculation Area*/}
                        <Animatable.View duration={2000} animation={'fadeInUp'}>

                            <View style={styles.cards_box}>
                                <TouchableOpacity style={styles.total_cards_container_area} activeOpacity={0.6} onPress={() => navigation.navigate('Bookings_Here')}>
                                    <View style={styles.total_cards_bg}>
                                        <View>
                                            <Text style={[styles.total_text, { color: COLOURS.white }]}>112</Text>
                                        </View>
                                        <TouchableOpacity style={styles.total_img_bg} activeOpacity={0.6}>
                                            <Image source={require('../../../Bold/coupon.png')} style={styles.total_img} />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <Text style={[styles.total_booking_text, { color: COLOURS.white }]}>total bookings</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.total_cards_container_area} activeOpacity={0.6} onPress={() => navigation.navigate('Provider_Service_All')}>
                                    <View style={styles.total_cards_bg}>
                                        <View>
                                            <Text style={[styles.total_text, { color: COLOURS.white }]}>12</Text>
                                        </View>
                                        <TouchableOpacity style={styles.total_img_bg} activeOpacity={0.6}>
                                            <Image source={require('../../../Bold/package.png')} style={styles.total_img} />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <Text style={[styles.total_booking_text, { color: COLOURS.white }]}>total services</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.total_cards_container_area} activeOpacity={0.6} onPress={() => navigation.navigate('Online_All_Handy')}>
                                    <View style={styles.total_cards_bg}>
                                        <View>
                                            <Text style={[styles.total_text, { color: COLOURS.white }]}>4</Text>
                                        </View>
                                        <TouchableOpacity style={styles.total_img_bg} activeOpacity={0.6}>
                                            <Image source={require('../../../Bold/users.png')} style={styles.total_img} />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <Text style={[styles.total_booking_text, { color: COLOURS.white }]}>total handyman</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.total_cards_container_area} activeOpacity={0.6} onPress={() => navigation.navigate('Payments')}>
                                    <View style={styles.total_cards_bg}>
                                        <View>
                                            <Text style={[styles.total_text, { color: COLOURS.white }]}>{'$'}30.006.99</Text>
                                        </View>
                                        <TouchableOpacity style={styles.total_img_bg} activeOpacity={0.6}>
                                            <Image source={require('../../../Bold/discount.png')} style={styles.total_img} />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <Text style={[styles.total_booking_text, { color: COLOURS.white }]}>total earning</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>

                            {/* Total Calculation Area*/}


                            {/*  */}
                            <View style={styles.bg_chart}>

                                <LineChart
                                    data={data}
                                    width={responsiveWidth(90)}
                                    height={responsiveWidth(55)}
                                    yAxisLabel="$"
                                    yAxisSuffix="k"
                                    chartConfig={{
                                        backgroundGradientTo: theme.lightblack_card,
                                        backgroundGradientFrom: theme.lightblack_card,
                                        decimalPlaces: 2,
                                        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                                        // labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                        label: theme.colorblue,
                                        propsForDots: {
                                            r: '6',
                                            strokeWidth: '2',
                                            stroke: theme.colorblue,
                                        },
                                    }}
                                    bezier
                                    style={styles.chart}
                                />

                            </View>

                            {/*  */}

                            {/* Total online handyman*/}

                            <View>
                                <Text style={[styles.recenlt_text, { color: theme.colorwhite }]}>recently online handyman</Text>
                            </View>

                            <View style={styles.row_image}>
                                <Image source={require('../../../images/profile-real.jpg')} style={styles.online_img} />
                                <Image source={require('../../../images/22.jpg')} style={styles.online_img_one} />
                                <Image source={require('../../../images/17.jpg')} style={styles.online_img_two} />
                                <Image source={require('../../../images/19.jpg')} style={styles.online_img_three} />
                            </View>

                            {/* Total online handyman*/}


                            {/* All Handymans*/}

                            <View style={[styles.bg_handyman_area, { backgroundColor: theme.lightbox }]}>
                                <View style={styles.see_categorie}>
                                    <View>
                                        <Text style={[styles.categories, { color: theme.colorblue }]}>handyman</Text>
                                        <Text style={[styles.categories_recents, { color: COLOURS.grey }]}>showing only online handyman</Text>
                                    </View>
                                    <TouchableOpacity style={[styles.see_all, { backgroundColor: theme.lightblack }]} onPress={() => navigation.navigate('Online_All_Handy')}>
                                        <Text style={[styles.see, { color: theme.colorblue }]}>View All</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.row_wise_data}>
                                    {online_handymans.slice(0, 4).map((item, index) => (
                                        <Animatable.View key={index} animation={'zoomIn'}>
                                            <TouchableOpacity onPress={() => onClickItemOnline(item)} activeOpacity={0.7}>
                                                <View style={[styles.bg_provider_container, { backgroundColor: theme.lightblack }]}>
                                                    <View style={styles.bg_here_radius}>
                                                        <ImageBackground source={item.provider_profile} style={styles.bg_fav_prvder_img}>
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
                                    ))
                                    }
                                </View>
                            </View>

                            {/* All Handymans*/}


                            {/* upcoming bookings */}

                            <View style={[styles.upcomg_bkngs_area, { backgroundColor: theme.lightbox }]}>

                                <View style={styles.see_categorie}>
                                    <View>
                                        <Text style={[styles.categories, { color: theme.colorblue }]}>upcoming bookings</Text>
                                    </View>
                                    <TouchableOpacity style={[styles.see_all, { backgroundColor: theme.lightblack }]} onPress={() => navigation.navigate('Up_Coming_Bookings_All')}>
                                        <Text style={[styles.see, { color: theme.colorblue }]}>View All</Text>
                                    </TouchableOpacity>
                                </View>


                                {provider_all_booking.slice(0, 3).filter(item => item.done === 'pending').map((item, index) => (
                                    <TouchableOpacity key={index} activeOpacity={0.7} onPress={() => Up_Coming_Booked(item)}>
                                        <View style={[styles.book_underline, { backgroundColor: theme.lightblack }]}>
                                            <View style={styles.date_time_area}>
                                                <View>
                                                    <Image source={item.bg_booking} style={styles.book_image} />
                                                </View>
                                                <View style={styles.spacel_left}>
                                                    <TouchableOpacity style={styles.book_cmpletd_text_area} activeOpacity={0.8}>
                                                        <Text style={[styles.book_cmpletd_text, { backgroundColor: item.done === 'completed' ? COLOURS.blue : item.done === 'pending' ? COLOURS.green : item.done === 'Failed' ? COLOURS.red : '' }]}>{item.done}</Text>
                                                        <Text style={[styles.book_serial_text, { color: theme.colorblue }]}>{item.serial}</Text>
                                                    </TouchableOpacity>
                                                    <Text style={[styles.real_date, { color: theme.colorwhite }]}>{item.service}</Text>
                                                    <Text style={[styles.real_date, { color: theme.colorwhite }]}>{'$' + item.price + '.00 '}<Text style={[styles.book_price_one,]}>{'(1% Off)'}</Text></Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}

                            </View>

                            {/* upcoming bookings */}

                            {/* job request list */}


                            <View>
                                <View style={styles.see_categorie}>
                                    <View>
                                        <Text style={[styles.categories, { color: theme.colorblue }]}>job request list</Text>
                                    </View>
                                    <TouchableOpacity style={[styles.see_all, { backgroundColor: theme.lightblack }]} onPress={() => navigation.navigate('Job_Request_All')}>
                                        <Text style={[styles.see, { color: theme.colorblue }]}>View All</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* job request list */}

                            {/*  */}
                            {requestjobs.slice(0, 3).map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.review_area, { backgroundColor: theme.lightblack_card }]}
                                    activeOpacity={0.7}
                                    onPress={() => Onclick(item)}
                                >
                                    <View style={styles.profl_info_review}>
                                        <View>
                                            <Image source={item.service_profile} style={styles.prfle_book_here} />
                                        </View>
                                        <View style={styles.small_info__reivew}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text style={[styles.rvie_name, { color: theme.colorblue }]}>{item.service_name}</Text>
                                                    <Text style={[styles.rvie_name, { color: theme.colorblue }]}>{'$ ' + item.price + '.00'}</Text>
                                                    <Text style={[styles.rvie_date, { color: COLOURS.grey }]}>{item.date + ' ' + item.time}</Text>
                                                </View>
                                                <Text style={[styles.book_cmpletd_text_one, { backgroundColor: COLOURS.green }]}>{'requested'}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                            }
                            {/*  */}

                            <View>
                                <View style={styles.see_categorie}>
                                    <View>
                                        <Text style={[styles.categories, { color: theme.colorblue }]}>services</Text>
                                    </View>
                                    <TouchableOpacity style={[styles.see_all, { backgroundColor: theme.lightblack }]} onPress={() => navigation.navigate('Provider_Service_All')}>
                                        <Text style={[styles.see, { color: theme.colorblue }]}>View All</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.row_wise_data}>
                                {Provider_services.map((item, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[styles.featur_bg_area_one, { backgroundColor: theme.lightblack }]}
                                        activeOpacity={0.7}
                                        onPress={() => onClickItem(item)}
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
                                                {[...Array(5)].map((_, i) => (
                                                    <Image
                                                        key={i}
                                                        source={require('../../../images/star.png')}
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
                                        </View>
                                    </TouchableOpacity>
                                ))
                                }
                            </View>
                            {/*  */}
                        </Animatable.View>

                    </ScrollView>
                </View>

            </SafeAreaView>
        </>
    )
}

export default P_Dashboard