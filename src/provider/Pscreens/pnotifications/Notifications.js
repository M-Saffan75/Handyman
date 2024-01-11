import { COLOURS } from '../../../ThemeColour/Theme';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import { Provider_services, read_notifications, requestjobs, unread_notifications } from '../../Pbackend/P_Data';
import styles from '../../Pcss/notifications/pnotifications';
import React, { useContext, useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, StatusBar, Text, TouchableOpacity, View, SafeAreaView, FlatList, ScrollView } from 'react-native'

const Notifications = () => {

    const navigation = useNavigation()
    const theme = useContext(themeContext);

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
                            <Text style={[styles.acc_name, { color: COLOURS.white }]}>Notifications</Text>
                        </View>
                    </View>

                    {/*  */}


                    <View style={styles.see_categorie}>
                        <View>
                            <Text style={[styles.categories, { color: theme.colorblue }]}>unread notifications</Text>
                        </View>
                    </View>

                    <FlatList data={unread_notifications}
                        style={styles.space_down}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={[styles.review_area, { backgroundColor: theme.lightblack_card }]} key={item.id} activeOpacity={0.7}>
                                    <View style={styles.profl_info_review}>
                                        <View>
                                            <Image source={item.notification_profile} style={styles.prfle_book_here} />
                                        </View>
                                        <View style={styles.small_info__reivew}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text style={[styles.rvie_name, { color: theme.colorblue }]}>
                                                        {item.name.length < 14 ? item.name : item.name.slice(0, 14) + "..."}
                                                    </Text>
                                                    <Text style={[styles.rvie_date, { color: COLOURS.grey }]}>
                                                        {item.description.length <= 35
                                                            ? item.description
                                                            : item.description.slice(0, 35) + "..."}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={styles.book_cmpletd_text_one}>{item.date}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />

                    {/*  */}

                    {/*  */}

                    <View style={styles.see_categorie}>
                        <View>
                            <Text style={[styles.categories, { color: theme.colorblue }]}>notifications</Text>
                        </View>
                    </View>
                    <FlatList data={read_notifications}
                        style={styles.space_down}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={[styles.review_area, { backgroundColor: theme.lightblack_card }]} key={item.id} activeOpacity={0.7}>
                                    <View style={styles.profl_info_review}>
                                        <View>
                                            <Image source={item.notification_profile} style={styles.prfle_book_here} />
                                        </View>
                                        <View style={styles.small_info__reivew}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text style={[styles.rvie_name, { color: theme.colorblue }]}>
                                                        {item.name.length < 14 ? item.name : item.name.slice(0, 14) + "..."}
                                                    </Text>
                                                    <Text style={[styles.rvie_date, { color: COLOURS.grey }]}>
                                                        {item.description.length <= 35
                                                            ? item.description
                                                            : item.description.slice(0, 35) + "..."}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={styles.book_cmpletd_text_one}>{item.date}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                    {/*  */}

                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Notifications
