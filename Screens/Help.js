import React from 'react'
import { COLOURS } from '../ThemeColour/Theme'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Image, ScrollView, StatusBar, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native'

const Help = ({navigation}) => {
    return (
        <>
            <StatusBar backgroundColor={COLOURS.backgroundLight} barStyle={'dark-content'} />

            <ScrollView style={styles.container}>
                <View style={styles.nav_notifi}>

                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <MaterialIcons name='keyboard-arrow-left' style={styles.name} />
                    </TouchableOpacity>
                    <View style={styles.nav_notifi}>
                        <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                            <MaterialIcons name='keyboard-arrow-left' style={styles.name_icon} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.help_box}>
                    <Text style={styles.help}>HELP</Text>
                    <Text style={styles.help_paragraph}>
                        An application letter, also known as a cover letter, is sent with your resume during the job application process.
                        An effective letter can add a personal touch to your application by providing more details about your background
                        and your specific interest in the position. In this article, we explain how to write an effective and engaging
                        job application letter and we provide a template, example and tips.
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}

export default Help

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: COLOURS.white
    },

    btn_align: {
        marginHorizontal: 20,
        alignSelf: 'flex-start',
    },

    name: {
        width: 40,
        padding: 5,
        fontSize: 30,
        marginTop: 30,
        borderRadius: 7,
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
        backgroundColor: COLOURS.Lightgrey,
    },

    nav_notifi: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    help_box: {
        marginHorizontal: 20
    },

    help: {
        fontSize: 30,
        marginTop: 5,
        marginBottom: 20,
        letterSpacing: 1,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
    },
    
    help_paragraph: {
        fontSize: 17,
        lineHeight: 25,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
    }

})