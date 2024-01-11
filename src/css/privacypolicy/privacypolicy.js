import { StyleSheet } from 'react-native'
import { COLOURS } from '../../ThemeColour/Theme'
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'


const styles = StyleSheet.create({

    space_down: {
        marginBottom:responsiveHeight(4)
    },

    /* arrow back */

    acc_name: {
        letterSpacing: .8,
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.4),
        marginHorizontal: responsiveWidth(5),
    },

    arrow_area: {
        alignItems: 'center',
        flexDirection: 'row',
        width: responsiveWidth(100),
        justifyContent: 'flex-start',
        // backgroundColor: COLOURS.blue,
        paddingTop: responsiveHeight(3),
        paddingBottom: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(5),
    },

    name: {
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.blue,
        width: responsiveWidth(11.2),
        padding: responsiveWidth(1.5),
        fontSize: responsiveFontSize(4),
        borderRadius: responsiveWidth(2),
        backgroundColor: COLOURS.Lightgrey,
    },


    /* arrow back */

    /*  */

    nav_notifi: {
        letterSpacing: .4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    btn_align: {
        alignSelf: 'flex-start',
    },


    /*  */

    handyman_date: {
        fontFamily: "Roboto-Bold",
        textTransform: 'capitalize',
        marginTop: responsiveHeight(2),
        fontSize: responsiveFontSize(1.8),
        marginHorizontal: responsiveWidth(2),
    },

    heading: {
        fontFamily: "Roboto-Bold",
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.4),
        marginHorizontal:responsiveWidth(4),
        marginVertical: responsiveHeight(2),
    },

    paragraph: {
        lineHeight: 18,
        fontFamily: 'Roboto-Regular',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.8),
        marginHorizontal:responsiveWidth(6),
        paddingHorizontal: responsiveWidth(1.5)
    },

    paragraph_one: {
        lineHeight: 18,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.8),
        marginVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(2)
    },

    handyman: {
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        marginTop: responsiveHeight(3),
        fontSize: responsiveFontSize(2),
        marginBottom: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(2),
    },

    // 

    arrow_name_area: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    wishlist_name: {
        letterSpacing: .5,
        color: COLOURS.white,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Bold',
        paddingLeft: responsiveWidth(2),
        fontSize: responsiveFontSize(2.7),
    },
    arrow_back: {
        color: COLOURS.black,
        fontSize: responsiveFontSize(3.5),
    },

    arrow_here: {
        width: responsiveWidth(10),
    },

    moon_theme: {
        width: responsiveWidth(8),
        height: responsiveHeight(4),
    },

    space_btm: {
        marginHorizontal: responsiveWidth(5)
    },


    container: {
        height: responsiveHeight(100),
        backgroundColor: COLOURS.white,
    },

})

export default styles