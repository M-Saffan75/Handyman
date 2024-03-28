import styles from '../../css/bookings/bookings';
import { all_booking } from '../../Backend/data';
import { COLOURS } from '../../ThemeColour/Theme';
import React, { useContext, useState } from 'react';
import themeContext from '../../Toggle/themeContext';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Image, ScrollView, StatusBar, Text, FlatList, TouchableOpacity, View, SafeAreaView } from 'react-native';

const Bookings = () => {

    const navigation = useNavigation()
    const theme = useContext(themeContext);

    const onClickItem = (item) => {
        navigation.navigate('BookingDetails', { id: item.id })
    }


    const [value, setValue] = useState(null);

    const data = [
        { label: 'all', value: '1' },
        { label: 'pending', value: '2' },
        { label: 'accepting', value: '3' },
        { label: 'ongoing', value: '4' },
        { label: 'in progress', value: '5' },
        { label: 'cancelled', value: '6' },
        { label: 'rejected', value: '7' },
        { label: 'completed', value: '8' },
        { label: 'waiting', value: '9' },
    ];


    return (
        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <SafeAreaView>

                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false} >

                    <View style={[styles.book_head_area, { backgroundColor: COLOURS.blue }]}>
                        <Text style={[styles.book_head, { color: COLOURS.white }]}>Bookings</Text>
                    </View>
                    <Animatable.View style={{marginBottom:responsiveWidth(10)}} duration={2000} animation={'fadeInUp'}>

                        <FlatList
                            data={all_booking}
                            showsVerticalScrollIndicator={false}
                            style={styles.space_down}
                            renderItem={({ item, index }) => {
                                if (index === 0) {
                                    return (
                                        <View style={styles.dropdown}>
                                            <Dropdown
                                                style={{
                                                    borderRadius: 6,
                                                    color: COLOURS.grey,
                                                    height: responsiveHeight(7),
                                                    marginVertical: responsiveHeight(3),
                                                    backgroundColor: theme.lightblack,
                                                    paddingHorizontal: responsiveWidth(4),
                                                }}
                                                placeholderStyle={{ backgroundColor: theme.lightblack, color: theme.colorwhite, fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(2), paddingLeft: 5, }}
                                                selectedTextStyle={{ backgroundColor: theme.lightblack, color: theme.colorwhite, fontSize: responsiveFontSize(2), fontFamily: 'Roboto-Medium', textTransform: 'capitalize' }}
                                                inputSearchStyle={{ color: COLOURS.black, backgroundColor: theme.lightgrey, }}
                                                iconStyle={[styles.iconStyle, { color: theme.colorblue }]}
                                                data={data}
                                                search={false}
                                                maxHeight={450}
                                                labelField="label"
                                                valueField="value"
                                                placeholder="All"
                                                searchPlaceholder="Search..."
                                                itemTextStyle={{ color: COLOURS.black, fontFamily: 'Roboto-Medium', }}
                                                selectedStyle={{ color: COLOURS.black, fontFamily: 'Roboto-Medium', }}
                                                value={value}
                                                onChange={item => {
                                                    setValue(item.value);
                                                }}

                                            />
                                        </View>
                                    );
                                } else {
                                    return (
                                        <TouchableOpacity style={[styles.book_area_container, { backgroundColor: theme.lightblack_card }]} activeOpacity={0.7} onPress={() => onClickItem(item)}>
                                            <View style={styles.book_area_top}>

                                                <View style={styles.short_area}>
                                                    <Image source={item.bg_booking} style={styles.book_img} />
                                                    <View style={styles.side_data}>

                                                        <TouchableOpacity style={styles.book_cmpletd_text_area} activeOpacity={0.8}>
                                                            <Text style={[styles.book_cmpletd_text, { backgroundColor: item.done === 'completed' ? COLOURS.blue : item.done === 'pending' ? COLOURS.green : item.done === 'Failed' ? COLOURS.red : '' }]}>{item.done}</Text>
                                                        </TouchableOpacity>

                                                        <Text style={[styles.book_test_text, { color: theme.colorwhite }]}>{item.service}</Text>
                                                        <Text style={[styles.book_price, { color: theme.colorwhite }]}>{'$' + item.price + ' '}<Text style={[styles.book_price_one,]}>{'(1% Off)'}</Text></Text>
                                                    </View>
                                                </View>

                                                <View>
                                                    <Text style={[styles.book_serial_text, { color: theme.colorblue }]}>{item.serial}</Text>
                                                </View>

                                            </View>

                                            <View style={styles.book_bottom_area}>
                                                <View style={styles.book_time}>
                                                    <Text style={styles.light_text}>Date & time</Text>
                                                    <Text style={styles.light_text}>provider</Text>
                                                    <Text style={styles.light_text}>handyman</Text>
                                                    <Text style={styles.light_text}>payment status</Text>
                                                </View>
                                                <View style={styles.book_time}>
                                                    <Text style={[styles.dark_text, { color: theme.colorwhite }]}>{item.service_profilebook_date + ' ' + item.service_profilebook_time}</Text>
                                                    <Text style={[styles.dark_text, { color: theme.colorwhite }]}>{item.handyman}</Text>
                                                    <Text style={[styles.dark_text, { color: theme.colorwhite }]}>provider demo</Text>
                                                    <Text style={styles.dark_text_one}>{item.book_payment}</Text>
                                                </View>
                                            </View>

                                        </TouchableOpacity>
                                    )
                                }
                            }}
                        />
                    </Animatable.View>
                </View>
            </SafeAreaView >
        </>
    )
}

export default Bookings
