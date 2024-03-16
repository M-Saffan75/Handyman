import { COLOURS } from '../../ThemeColour/Theme';
import React, { useContext, useState } from 'react';
import themeContext from '../../Toggle/themeContext';
import * as Animatable from 'react-native-animatable';
import { Image, ScrollView, StatusBar, Text, StyleSheet, TouchableOpacity, View, } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Menu = ({
    onPress_one, onPress_two,
    isMenuVisible, setMenuVisible,
    label_1, label_2, label_3,
    label_1_img, label_2_img, label_3_img,
}) => {

    const theme = useContext(themeContext);

    return (
        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <View style={styles.container}>
                <Animatable.View duration={200} animation={isMenuVisible ? 'zoomIn' : 'zoomOut'} style={[styles.menu_bg, { backgroundColor: theme.lightblack }]}>
                    <TouchableOpacity activeOpacity={0.5} style={styles.bg_options} onPress={onPress_one}>
                        <Text style={[styles.option_text, { color: theme.colorblue }]}>{label_1}</Text>
                        <Image source={label_1_img} style={styles.edit_icons} tintColor={theme.colorblue} />
                    </TouchableOpacity>

                    {label_2 ?
                        <TouchableOpacity activeOpacity={0.5} style={[styles.bg_options, { borderBottomWidth: label_3 ? responsiveWidth(.2) : responsiveWidth(0) }]} onPress={onPress_two}>
                            <Text style={[styles.option_text, { color: theme.colorblue }]}>{label_2}</Text>
                            <Image source={label_2_img} style={styles.edit_icons} tintColor={theme.colorblue} />
                        </TouchableOpacity> : ''}

                    {label_3 ? <TouchableOpacity activeOpacity={10} style={[styles.bg_options_one]} onPress={() => setMenuVisible(false)}>
                        <Text style={[styles.option_text, { color: '#999' }]}>{label_3}</Text>
                        <Image source={label_3_img} style={styles.edit_icons} tintColor={'#999'} />
                    </TouchableOpacity> : ''}
                </Animatable.View>
            </View>
        </>
    )
}

export default Menu

const styles = StyleSheet.create({


    /*  */

    edit_icons: {
        width: responsiveWidth(4),
        height: responsiveWidth(4),
    },

    bg_options: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: COLOURS.grey,
        borderRadius: responsiveWidth(2),
        paddingVertical: responsiveWidth(3),
        paddingHorizontal: responsiveWidth(3),
        borderBottomWidth: responsiveWidth(.1),
    },

    bg_options_one: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: responsiveWidth(2),
        paddingVertical: responsiveWidth(3),
        paddingHorizontal: responsiveWidth(3),
    },

    option_text: {
        color: COLOURS.white,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2),
        paddingHorizontal: responsiveWidth(2)
    },

    menu_bg: {
        position: 'absolute',
        zIndex: 2,
        top: responsiveHeight(-.2),
        right: responsiveWidth(5),
        width: responsiveWidth(32),
        backgroundColor: COLOURS.black,
        borderRadius: responsiveWidth(2),
    },

    /*  */


    btn_align_one: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(11),
        height: responsiveWidth(11),
        borderRadius: responsiveWidth(2),
        backgroundColor: COLOURS.Lightgrey,
    },

    name_heart: {
        color: COLOURS.blue,
        borderRadius: responsiveWidth(20),
        fontSize: responsiveFontSize(2.8),
    },

    name_menu_img: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
    },

    container: {
        zIndex: 10,
    },

    /*  */
})