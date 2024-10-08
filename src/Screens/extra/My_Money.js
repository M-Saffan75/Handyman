import { COLOURS } from '../../ThemeColour/Theme'
import themeContext from '../../Toggle/themeContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import React, { useContext, useEffect, useState, useRef } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native'

const My_Money = ({ navigation }) => {

    const theme = useContext(themeContext);

    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />

            <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>
                <View style={styles.nav_notifi}>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={[styles.help, { color: theme.colorwhite }]}>My Wallet</Text>
                    <Text style={[styles.amount, { color: theme.colorwhite }]}>$ 240.00</Text>
                </View>

                <View style={styles.btn_center}>
                    <TouchableOpacity style={styles.btn} activeOpacity={10}>
                        <Text style={styles.btn_text}>Available </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </>
    )
}

export default My_Money

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

    categories: {
        fontSize: 20,
        right: 15,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
    },

    help: {
        fontSize: 25,
        marginTop: 5,
        marginBottom: 20,
        letterSpacing: .5,
        color: COLOURS.blue,
        marginHorizontal: 20,
        fontFamily: 'Roboto-Bold',
    },

    amount: {
        fontSize: 40,
        marginTop: 50,
        marginBottom: 5,
        textAlign: 'center',
        color: COLOURS.black,
        fontFamily: 'Roboto-Bold',
    },

    btn_center: {
        marginTop: 50,
        marginHorizontal: 20,
    },

    btn: {
        width: '100%',
        marginTop: 30,
        borderRadius: 10,
        borderColor: COLOURS.blue,
        backgroundColor: COLOURS.blue,
    },

    btn_text: {
        color: COLOURS.white,
        fontSize: 12,
        letterSpacing: .8,
        paddingVertical: 15,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
    },

})