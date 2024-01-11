import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({

    menu_img: {
        width: responsiveWidth(7),
        height: responsiveWidth(7),
        marginRight: responsiveWidth(3)
    },

    bg_area_book: {
        // height: responsiveHeight(15),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOURS.blue,
        paddingTop: responsiveHeight(3),
        justifyContent: 'space-between',
        paddingBottom: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(4),
        borderBottomLeftRadius: responsiveWidth(3),
        borderBottomRightRadius: responsiveWidth(3),
    },

    acc_name: {
        letterSpacing: .8,
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.4),
        marginHorizontal: responsiveWidth(5),
    },

    arrow_back: {
        color: COLOURS.black,
        fontSize: responsiveFontSize(4),
    },

    arrow_here: {
        width: responsiveWidth(10),
    },

    arrow_area: {
        alignItems: 'center',
        flexDirection: 'row',

    },

    btn_align: {
        alignSelf: 'flex-start',
    },

    name: {
        color: COLOURS.blue,
        width: responsiveWidth(11),
        fontFamily: 'Roboto-Bold',
        padding: responsiveWidth(1.5),
        fontSize: responsiveFontSize(4),
        borderRadius: responsiveWidth(2),
    },

    /*  */


    /* handymans here */


    online_image_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: responsiveHeight(1),
    },

    online_dot: {
        height: responsiveWidth(3),
        width: responsiveWidth(3),
        borderRadius: responsiveWidth(20),
    },


    bg_handyman_area: {
        marginTop: responsiveHeight(5),
        backgroundColor: COLOURS.lightblue,
    },

    bg_here_radius: {
        overflow: 'hidden',
        borderTopLeftRadius: responsiveWidth(3),
        borderTopRightRadius: responsiveWidth(3),
    },

    name_here_prvdr: {
        textAlign: 'center',
        backgroundColor: 'none',
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        paddingLeft: responsiveWidth(2),
        fontSize: responsiveFontSize(1.8),
    },

    bg_fav_prvder_img: {
        width: responsiveWidth(45),
        height: responsiveWidth(40),
    },

    fav_area_bg: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(10),
        height: responsiveWidth(10),
        backgroundColor: COLOURS.grey,
        borderRadius: responsiveWidth(20),
    },

    bg_area_fav_provder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: responsiveHeight(3),
        paddingBottom: responsiveHeight(1.6),
        marginHorizontal: responsiveWidth(3),
    },

    phone_img: {
        width: responsiveWidth(5),
        height: responsiveWidth(5),
    },

    pressn_btn_fav: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(10),
        height: responsiveWidth(10),
        margin: responsiveWidth(2),
        borderRadius: responsiveWidth(20),
        backgroundColor: COLOURS.Lightgrey,
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveHeight(1),
    },

    fav_heart_img: {
        width: responsiveWidth(5),
        height: responsiveWidth(5),
    },

    end_set: {
        alignItems: 'flex-end'
    },

    bg_provider_container: {
        elevation: 3,
        width: responsiveWidth(45),
        marginBottom: responsiveWidth(4),
        marginHorizontal: responsiveWidth(2.5),
        borderTopLeftRadius: responsiveWidth(3),
        borderTopRightRadius: responsiveWidth(3),
        borderBottomLeftRadius: responsiveWidth(3),
        borderBottomRightRadius: responsiveWidth(3),
    },

    btm_space: {
        paddingTop: responsiveWidth(2),
    },


    /* handymans here */


    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },

})

export default styles