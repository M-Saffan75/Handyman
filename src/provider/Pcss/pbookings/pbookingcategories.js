import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({


    /*  */

    name_heart: {
        color: COLOURS.blue,
        borderRadius: responsiveWidth(20),
        fontSize: responsiveFontSize(2.8),
    },

    name_menu_img: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
    },


    
    btn_align_one: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(11),
        height: responsiveWidth(11),
        borderRadius: responsiveWidth(2),
        backgroundColor: COLOURS.Lightgrey,
    },

    location_bg: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(2),
        marginHorizontal: responsiveWidth(4),
    },

    location_text: {
        textAlign: 'center',
        color: COLOURS.blue,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        height: responsiveWidth(8.5),
        padding: responsiveWidth(1.7),
        fontSize: responsiveFontSize(1.8),
        borderRadius: responsiveWidth(2.5),
        paddingHorizontal: responsiveWidth(3),
    },


    /*  */

    /*  */

    rat_review_img: {
        width: responsiveWidth(3.8),
        height: responsiveWidth(3.8),
        marginRight: responsiveWidth(2)
    },

    rvie_name: {
        fontFamily: 'Roboto-Medium',
        textTransform: "capitalize",
        fontSize: responsiveFontSize(1.8),
    },

    rvie_date: {
        fontFamily: 'Roboto-Medium',
        textTransform: "capitalize",
        fontSize: responsiveFontSize(1.8),
        marginVertical: responsiveHeight(.2)
    },

    review_area: {
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOURS.white,
        justifyContent: 'space-between',
        borderRadius: responsiveWidth(2),
        paddingVertical: responsiveWidth(2),
        marginVertical: responsiveHeight(1),
        marginHorizontal: responsiveWidth(4),
        paddingHorizontal: responsiveWidth(4),
    },

    small_info__reivew_rating: {
        flexDirection: 'row',
    },

    profl_info_review: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    small_info__reivew: {
        marginLeft: responsiveWidth(3),
    },

    rvie_post: {
        color: COLOURS.white,
        width: responsiveWidth(55),
        fontFamily: 'Roboto-Medium',
        textTransform: "capitalize",
        fontSize: responsiveFontSize(1.7),
    },

    /*  */


    space_down: {
        marginBottom: responsiveHeight(10),
    },

    book_btn: {
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 5,
        borderRadius: 5,
        position: 'absolute',
        borderRadius: responsiveWidth(10),
        marginBottom: responsiveHeight(2),
        paddingVertical: responsiveWidth(5),
        marginHorizontal: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(4),
    },

    book_btn_text: {
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.8),
    },

    // 

    prfle_book_here: {
        width: responsiveWidth(20),
        height: responsiveWidth(20),
        borderRadius: responsiveWidth(10)
    },

    prfle_book_here_alert: {
        width: responsiveWidth(5),
        height: responsiveWidth(5),
        marginLeft: responsiveWidth(4),
    },

    rat_prodivder_img: {
        width: responsiveWidth(3.5),
        height: responsiveWidth(3.5),
        marginHorizontal: responsiveWidth(.4),
    },

    provider_prfle_area: {
        elevation: 3,
        marginTop: responsiveHeight(2),
        borderRadius: responsiveWidth(4),
        marginBottom: responsiveHeight(2),
        paddingVertical: responsiveHeight(3),
        marginHorizontal: responsiveWidth(4),
        paddingHorizontal: responsiveHeight(2),
    },

    name_demo_text: {
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2),
    },

    short_profl_name_area: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    rat_area: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    name_icon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: responsiveWidth(2),
    },

    name_icon_area: {
        marginLeft: responsiveWidth(4),
    },
    // 

    /*  */

    descript_text: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        lineHeight: responsiveHeight(2.5),
        fontSize: responsiveFontSize(1.8),
        marginBottom: responsiveHeight(1),
    },

    more_handyman: {
        marginTop: responsiveHeight(1),
        marginHorizontal: responsiveHeight(2.5),
    },

    more_handyman_text: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.3),
        marginBottom: responsiveHeight(1),
    },

    plumber_duration: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
    },

    plumber_rat_text: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
    },

    plumber_rat_check: {
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
    },

    plumber_time: {
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
    },

    time_area: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(1),
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(4),
    },

    plumber: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.9),
    },

    plumber_title: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.1),
        marginVertical: responsiveHeight(.6),
    },

    plumber_money: {
        color: COLOURS.grey,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.9),
    },

    plumber_space: {
        marginHorizontal: responsiveWidth(4),
    },

    bg_info_area: {
        elevation: 3,
        backgroundColor: COLOURS.white,
        borderRadius: responsiveWidth(3),
        marginBottom: responsiveHeight(2),
        marginTop: responsiveHeight(-12),
        paddingVertical: responsiveHeight(2),
        marginHorizontal: responsiveWidth(7),
    },

    star_rat: {
        width: responsiveWidth(4),
        height: responsiveWidth(4),
        marginRight: responsiveWidth(2)
    },

    row_area: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    /*  */

    arrow_back: {
        color: COLOURS.black,
        fontSize: responsiveFontSize(4),
    },

    name: {
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
        width: responsiveWidth(12),
        padding: responsiveWidth(1.5),
        fontSize: responsiveFontSize(4),
        borderRadius: responsiveWidth(3),
        backgroundColor: COLOURS.Lightgrey,
    },

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
        borderRadius: responsiveWidth(3),
        fontSize: responsiveFontSize(2.8),
    },

    /*  */

    categorie_bg_img: {
        width: responsiveWidth(100),
        height: responsiveHeight(50),
    },

    back_fav_area: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: responsiveWidth(6),
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(6),
    },

    container: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        // position:'relative'
    },

})

export default styles