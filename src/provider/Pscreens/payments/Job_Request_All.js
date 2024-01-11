import styles from '../../Pcss/payment/jobrequest';
import { requestjobs } from '../../Pbackend/P_Data';
import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useContext, useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView, StatusBar, TextInput, Text, TouchableOpacity, View, SafeAreaView, ImageBackground, TouchableHighlight, FlatList } from 'react-native'

const Job_Request_All = () => {

    const navigation = useNavigation()
    const theme = useContext(themeContext);


    const Onclick = (item) => {
        navigation.navigate('Job_Request_Details', { id: item.id })
    }

    return (

        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <SafeAreaView>


                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>

                    <View style={styles.bg_area_book}>
                        <View style={styles.arrow_area}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <Text style={[styles.acc_name, { color: COLOURS.white }]}>All Bid list</Text>
                        </View>
                    </View>


                    {/*  */}

                    <FlatList data={requestjobs}
                        style={styles.space_down}
                        renderItem={({ item }) => {
                            return (
                                <Animatable.View duration={1000} animation={'zoomIn'}>
                                    <TouchableOpacity style={[styles.review_area, { backgroundColor: theme.lightblack_card }]} key={item.id}
                                        activeOpacity={0.7} onPress={() => Onclick(item)}>
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
                                </Animatable.View>
                            )
                        }}
                    />

                    {/*  */}



                </View>
            </SafeAreaView>

        </>
    )
}

export default Job_Request_All
