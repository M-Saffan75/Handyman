import React, { useContext } from 'react';
import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../provider/Pcss/payment/payment';
import { provider_all_booking } from '../../Pbackend/P_Data';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View, SafeAreaView, FlatList, } from 'react-native'


const P_All_Payments = () => {

    const navigation = useNavigation();
    const theme = useContext(themeContext);

    const onClickItem = (item) => {
        navigation.navigate('Up_Booking_Details', { id: item.id })
    }

    return (
        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <SafeAreaView>

                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>

                    <View style={styles.book_head_area}>
                        <Text style={[styles.book_head, { color: COLOURS.white }]}>payments</Text>
                    </View>


                    <FlatList
                        data={provider_all_booking}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <>
                                    <Animatable.View duration={1000} animation={'zoomIn'}>
                                        <TouchableOpacity style={[styles.container_pay_area, { backgroundColor: theme.lightblack }]} activeOpacity={0.7} onPress={() => onClickItem(item)}>

                                            <View style={[styles.pay_data_header, { backgroundColor: COLOURS.blackish }]}>
                                                <Text style={[styles.light_text_head, { color: COLOURS.white }]}>user id</Text>
                                                <Text style={[styles.dark_text_head, { color: COLOURS.white }]}>{item.serial}</Text>
                                            </View>
                                            <View style={styles.pay_data_row}>
                                                <Text style={styles.light_text}>name</Text>
                                                <Text style={[styles.dark_text, { color: theme.colorwhite }]}>{item.username}</Text>
                                            </View>
                                            <View style={styles.pay_data_row}>
                                                <Text style={styles.light_text}>address</Text>
                                                <Text style={[styles.dark_text, { color: theme.colorwhite }]}>{item.location}</Text>
                                            </View>
                                            <View style={styles.pay_data_row}>
                                                <Text style={styles.light_text}>payment status</Text>
                                                <Text style={[styles.dark_text, { color: theme.colorwhite }]}>{item.done}</Text>
                                            </View>
                                            <View style={styles.pay_data_row}>
                                                <Text style={styles.light_text}>payment method</Text>
                                                <Text style={[styles.dark_text, { color: theme.colorwhite }]}>{item.book_payment}</Text>
                                            </View>
                                            <View style={styles.pay_data_row_one}>
                                                <Text style={styles.light_text}>amount</Text>
                                                <Text style={[styles.dark_text, { color: theme.colorwhite }]}>{item.total}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </Animatable.View>

                                </>
                            )
                        }}
                    />
                    <View style={styles.bottom_space}></View>
                </View>

            </SafeAreaView >
        </>
    )
}

export default P_All_Payments
