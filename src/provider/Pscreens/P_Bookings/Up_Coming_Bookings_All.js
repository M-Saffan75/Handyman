import React, { useContext } from 'react'
import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import styles from '../../Pcss/pbookings/upcomingbookings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { provider_all_booking, online_handymans } from '../../Pbackend/P_Data';
import { Image, ScrollView, StatusBar, TextInput, Text, FlatList, TouchableOpacity, View, SafeAreaView, ImageBackground } from 'react-native'

const Up_Coming_Bookings_All = () => {


    const navigation = useNavigation()
    const theme = useContext(themeContext);

    const onClickItem = (item) => {
        navigation.navigate('Up_Booking_Details', { id: item.id })
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
                            <Text style={[styles.acc_name, { color: COLOURS.white }]}>all bookings</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Image source={require('../../../images/plus.png')} style={styles.menu_img} tintColor={COLOURS.white} />
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={provider_all_booking}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <Animatable.View duration={1000} animation={'zoomIn'}>
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => onClickItem(item)}>
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
                                </Animatable.View>
                            )
                        }}
                    />
                </View>
            </SafeAreaView>

        </>
    )
}

export default Up_Coming_Bookings_All