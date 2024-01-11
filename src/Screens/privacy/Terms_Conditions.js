import { COLOURS } from '../../ThemeColour/Theme';
import themeContext from '../../Toggle/themeContext';
import * as Animatable from 'react-native-animatable';
import { terms_conditions } from '../../Backend/data';
import { useNavigation } from '@react-navigation/native';
import styles from '../../css/privacypolicy/privacypolicy';
import React, { useEffect, useState, useContext } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StatusBar, SafeAreaView, Text, Image, TouchableOpacity, View, FlatList, ScrollView } from 'react-native';

const Terms_Conditions = () => {

    const navigation = useNavigation()
    const theme = useContext(themeContext)

    const [datehere, setDateHere] = useState('')

    useEffect(() => {
        getCurrentDate()
    }, [])

    function getCurrentDate() {
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString(undefined, options);
        setDateHere(formattedDate)
        return `Last updated: ${formattedDate}`;
    }

    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            {/* <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} /> */}

            <SafeAreaView>
                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={styles.arrow_area}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <Text style={[styles.acc_name, { color: theme.colorwhite }]}>terms & condition</Text>
                        </View>
                    </View>


                    <Text style={[styles.heading, { color: theme.colorwhite }]}>
                        Welcome to Handman! These terms and conditions outline the rules and regulations for the use of our mobile application.
                    </Text>

                    <FlatList
                        scrollEnabled={true}
                        data={terms_conditions}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    <Text style={[styles.paragraph_one, { color: theme.colorwhite }]} key={item.id}>
                                        {`${index + 1}. ${item.line}`}
                                    </Text>
                                </>
                            )
                        }}
                    />

                    {/* <View style={styles.space_btm}>
                        <Text style={[styles.handyman_date, { color: COLOURS.grey }]}>Last updated : {datehere}</Text>
                        <Text style={[styles.handyman, { color: theme.colorblue }]}>
                            Thank you for choosing Handman!
                        </Text>
                    </View> */}

                </View>
            </SafeAreaView>
        </>
    )
}

export default Terms_Conditions