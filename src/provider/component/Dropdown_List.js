import { COLOURS } from '../../ThemeColour/Theme';
import Collapsible from 'react-native-collapsible';
import React, { useContext, useState } from 'react';
import themeContext from '../../Toggle/themeContext';
import * as Animatable from 'react-native-animatable';
import { Image, ScrollView, StatusBar, Text, StyleSheet, TouchableOpacity, View, } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const Dropdown_List = ({ isCollapsed, setIsCollapsed, toggleCollapse }) => {

    const theme = useContext(themeContext);


    // const toggleCollapse = () => {
    //     setIsCollapsed(!isCollapsed);
    // };

    return (
        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <View style={styles.container}>
                <Animatable.View animation={'flipInX'}>
                    <TouchableOpacity onPress={toggleCollapse} activeOpacity={0.7} style={[styles.questn_ans_area, { backgroundColor: theme.lightblack, }]}>
                        <View style={styles.questn_ans} >
                            <Text style={[styles.questn, { color: theme.colorwhite }]}>address</Text>
                            <TouchableOpacity activeOpacity={0.6} style={styles.sml_arr_bg}>
                                <Image
                                    source={
                                        isCollapsed ? require('../../Bold/chevron-up.png')
                                            : require('../../Bold/chevron-down.png')
                                    }
                                    style={styles.sml_arrw} tintColor={theme.colorwhite} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    {/* <View style={{ flex: 1, backgroundColor:'red' }}> */}
                        <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical>
                            <Animatable.View duration={200} animation={isCollapsed ? 'zoomOut' : 'zoomIn'}
                                style={[styles.btm_area_list, { backgroundColor: theme.lightblack_card, marginBottom: isCollapsed ? responsiveHeight(0) : responsiveHeight(3) }]}>
                                <Collapsible collapsed={isCollapsed}>
                                    <TouchableOpacity activeOpacity={0.5} style={[styles.bg_options, { backgroundColor: theme.lightblack }]}>
                                        <Text style={[styles.option_text, { color: theme.colorblue }]}>India delhi</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.5} style={[styles.bg_options, { backgroundColor: theme.lightblack }]}>
                                        <Text style={[styles.option_text, { color: theme.colorblue }]}>United states</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.5} style={[styles.bg_options, { backgroundColor: theme.lightblack }]}>
                                        <Text style={[styles.option_text, { color: theme.colorblue }]}>canada united kingdom </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.5} style={[styles.bg_options, { backgroundColor: theme.lightblack }]}>
                                        <Text style={[styles.option_text, { color: theme.colorblue }]}>canada united kingdom </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.5} style={[styles.bg_options, { backgroundColor: theme.lightblack }]}>
                                        <Text style={[styles.option_text, { color: theme.colorblue }]}>canada united kingdom </Text>
                                    </TouchableOpacity>
                                </Collapsible>
                            </Animatable.View>
                        </ScrollView>
                    {/* </View> */}
                </Animatable.View>
            </View>
        </>
    )
}

export default Dropdown_List

const styles = StyleSheet.create({


    /*  */

    btm_area_list: {
        elevation: 1,
        top: responsiveHeight(4),
        // height: responsiveHeight(25),
        backgroundColor: COLOURS.grey,
        borderRadius: responsiveWidth(3),
        paddingVertical: responsiveHeight(2),
        marginHorizontal: responsiveWidth(2),
    },

    sml_arr_bg: {
        alignItems: 'center',
        justifyContent: 'center',
        height: responsiveHeight(4),
        width: responsiveHeight(3),
    },

    questn_ans_area: {
        marginTop: responsiveHeight(3),
        borderRadius: responsiveWidth(20),
        marginBottom: responsiveHeight(-4),
        marginHorizontal: responsiveWidth(1),
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1.5),
    },

    questn_ans: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    questn: {
        letterSpacing: .8,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2),
        paddingHorizontal: responsiveWidth(2),
    },

    sml_arrw: {
        width: responsiveWidth(4),
        height: responsiveWidth(4),
    },


    /*  */

    bg_options: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: responsiveWidth(20),
        marginHorizontal: responsiveWidth(3),
        marginVertical: responsiveHeight(.2),
        paddingVertical: responsiveWidth(3.5),
        paddingHorizontal: responsiveWidth(3),
    },

    bg_options_one: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: responsiveHeight(.2),
        justifyContent: 'space-between',
        borderRadius: responsiveWidth(20),
        paddingVertical: responsiveWidth(4),
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
        width: responsiveWidth(90),
        borderRadius: responsiveWidth(2),
        backgroundColor: COLOURS.lightblue,
        paddingVertical: responsiveWidth(2),
        marginHorizontal: responsiveWidth(1),
        paddingHorizontal: responsiveWidth(2),
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
        // backgroundColor:'red',
        // zIndex: 3,
    },

    /*  */
})