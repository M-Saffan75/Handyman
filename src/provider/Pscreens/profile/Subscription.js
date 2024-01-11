import React, { useContext } from 'react';
import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import styles from '../../Pcss/userprofile/subscription';
import { provider_all_booking } from '../../Pbackend/P_Data';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View, SafeAreaView, FlatList, } from 'react-native'

const Subscription = () => {

    const navigation = useNavigation();
    const theme = useContext(themeContext);

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
                            <Text style={[styles.acc_name, { color: theme.colorwhite }]}>subscription history</Text>
                        </View>
                    </View>

                    <View style={styles.pan_row_container}>
                        <Text style={[styles.pan_date, { color: theme.colorblue }]}> 19 jan, 2022 - 16 april, 2023</Text>
                        <View style={styles.pan_row}>
                            <Text style={styles.pan_text}>plan</Text>
                            <Text style={[styles.free_text, { color: theme.colorwhite }]}>free plan</Text>
                        </View>
                        <View style={styles.pan_row}>
                            <Text style={styles.pan_text}>type</Text>
                            <Text style={[styles.free_text, { color: theme.colorwhite }]}>weekly</Text>
                        </View>
                        <View style={styles.btn_center}>
                            <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => navigation.goBack()}>
                                <Text style={styles.btn_text}>cancel plan</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </SafeAreaView>
        </>
    )
}

export default Subscription