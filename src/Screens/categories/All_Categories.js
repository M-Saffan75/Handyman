import { categories } from '../../Backend/data';
import { COLOURS } from '../../ThemeColour/Theme';
import themeContext from '../../Toggle/themeContext';
import React, { useContext, useState, } from 'react';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Image, StatusBar, StyleSheet, Text, FlatList, TouchableOpacity, View, SafeAreaView } from 'react-native';

const All_Categories = ({ navigation }) => {

    const theme = useContext(themeContext);

    const onClickItem = (item) => {
        navigation.navigate('Categories_Details', { id: item.id })
    }

    return (

        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView>
                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>

                    <View style={styles.arrow_area}>
                        <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                            <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                        </TouchableOpacity>
                        <Text style={[styles.acc_name, { color: theme.colorwhite }]}>all services</Text>
                    </View>

                    <Animatable.View style={styles.categorie_Container} duration={2000} animation={'fadeInUp'}>
                        <FlatList
                            data={categories.filter(item => item.id !== 6)}
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <>
                                        <TouchableOpacity style={[styles.categorie_box, { backgroundColor: theme.lightblack }]} activeOpacity={0.7} onPress={() => onClickItem(item)}>
                                            <Image source={item.categorie_img} style={styles.categorie_img} />
                                            <Text style={[styles.categorie_name, { color: theme.colorwhite }]}>{item.name}</Text>
                                        </TouchableOpacity>
                                    </>
                                )
                            }}
                        />
                    </Animatable.View>

                </View>
            </SafeAreaView>
        </>
    )
}

export default All_Categories

const styles = StyleSheet.create({

    container: {
        height: '100%',
        backgroundColor: COLOURS.white
    },

    /* arrow back */

    acc_name: {
        letterSpacing: .8,
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.8),
        marginHorizontal: responsiveWidth(5),
    },

    arrow_area: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: responsiveWidth(100),
        marginTop: responsiveHeight(5),
        paddingBottom: responsiveHeight(3),
        marginHorizontal: responsiveWidth(5),
    },

    name: {
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.blue,
        width: responsiveWidth(11),
        fontFamily: 'Roboto-Bold',
        padding: responsiveWidth(1.5),
        fontSize: responsiveFontSize(4),
        borderRadius: responsiveWidth(2),
        backgroundColor: COLOURS.Lightgrey,
    },


    /* arrow back */

    see: {
        padding: 5,
        fontSize: 12,
        fontSize: 13,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
    },

    see_all: {
        height: 30,
        width: 60,
        borderRadius: 10,
        backgroundColor: COLOURS.Lightgrey

    },

    categorie_Container: {
        flexWrap: 'wrap',
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor:'red',
        marginHorizontal: '3%',
        justifyContent: 'center',
    },

    categorie_box: {
        width: 105,
        height: 110,
        marginBottom: 20,
        borderRadius: 10,
        paddingBottom: 2,
        marginHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOURS.Lightgrey,
    },

    categorie_box_separate: {
        width: 110,
        height: 110,
        marginBottom: 20,
        borderRadius: 10,
        paddingBottom: 2,
        marginHorizontal: 3.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOURS.white,
    },

    categorie_img: {
        height: 40,
        width: 40,
    },

    categorie_name: {
        top: 15,
        fontSize: 13,
        letterSpacing: .4,
        textAlign: 'center',
        color: COLOURS.black,
        paddingHorizontal: 5,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
    },
})