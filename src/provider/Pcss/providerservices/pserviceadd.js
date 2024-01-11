import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({


    /*  */
    
    categor_corss: {

        width: responsiveWidth(3),
        height: responsiveWidth(3),
    },

    categor_img: {
        width: responsiveWidth(27),
        height: responsiveWidth(27),
        borderRadius: responsiveWidth(4),
    },

    bg_cross_img: {
        alignItems: 'center',
        justifyContent: 'center',
        right: responsiveWidth(4),
        bottom: responsiveWidth(2),
        borderRadius: responsiveWidth(2),
        paddingVertical: responsiveWidth(1.7),
        paddingHorizontal: responsiveWidth(1.7),
    },

    catego_img_bg: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginVertical: responsiveHeight(3),
    },

    row_edit: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    select_servic_area: {
        borderRadius: responsiveWidth(3),
        marginVertical: responsiveWidth(4),
        paddingVertical: responsiveWidth(4),
        marginHorizontal: responsiveWidth(4),
        paddingHorizontal: responsiveWidth(6),
    },

    slct_edit: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.9),
    },

    slct_srvc: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.9),
    },

    /*  */


    /*  */

    btn_up_area: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: responsiveHeight(2),
        paddingVertical: responsiveWidth(2),
    },


    book_btn: {
        zIndex: 10,
        width: responsiveWidth(90),
        borderRadius: responsiveWidth(10),
        paddingVertical: responsiveWidth(5),
        paddingHorizontal: responsiveWidth(4),
        marginHorizontal: responsiveHeight(2),
    },

    book_btn_text: {
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.8),
    },

    /*  */


    /*  */

    row_feature: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveWidth(5),
        justifyContent: 'space-between',
        borderRadius: responsiveWidth(4),
        paddingVertical: responsiveWidth(5),
        marginHorizontal: responsiveWidth(3),
        paddingHorizontal: responsiveWidth(4),
    },

    featu_text: {
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
    },

    /*  */


    /*  */

    textAreaContainer: {
        borderColor: COLOURS.blue,
        padding: responsiveWidth(1),
        marginTop: responsiveHeight(3),
        borderWidth: responsiveWidth(.3),
        borderRadius: responsiveWidth(3),
        marginHorizontal: responsiveWidth(2.5),
    },

    textarea: {
        letterSpacing: .1,
        color: COLOURS.black,
        textAlignVertical: 'top',
        fontFamily: 'Roboto-Medium',
        height: responsiveHeight(15),
        lineHeight: responsiveHeight(3),
    },


    /*  */


    /*  */

    inpt_row_each: {
        width: responsiveWidth(43),
        height: responsiveWidth(14),
        fontFamily: 'Roboto-Medium',
        borderRadius: responsiveWidth(10),
        fontSize: responsiveFontSize(1.8),
        paddingHorizontal: responsiveWidth(4),
    },

    row_dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    /*  */

    pswd_inpt_container: {
        marginTop: responsiveHeight(2),
        borderRadius: responsiveWidth(10),
        marginBottom: responsiveHeight(1.7),
        paddingHorizontal: responsiveWidth(6),

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    inpt_rows_one: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: responsiveWidth(2),
    },

    inpt_rows: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: responsiveWidth(3),
    },


    srvce_here: {
        letterSpacing: .5,
        color: COLOURS.white,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Bold',
    },

    pswd_inpt: {
        width: '75%',
        letterSpacing: .5,
        color: COLOURS.black,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        // paddingHorizontal: responsiveWidth(2),
    },

    inpt_here_container: {
        // marginBottom: responsiveHeight(10),
        paddingVertical: responsiveWidth(7),
        marginVertical: responsiveHeight(4),
        paddingHorizontal: responsiveWidth(4),
    },
    /*  */


    /*  */

    image_text_note: {
        letterSpacing: .9,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        lineHeight: responsiveHeight(2.8),
        fontSize: responsiveFontSize(1.7),
        marginHorizontal: responsiveWidth(3),
    },

    image_choose: {
        letterSpacing: .8,
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2),
        marginBottom: responsiveHeight(1),
    },

    image_fake: {
        width: responsiveWidth(12),
        height: responsiveWidth(12),
        marginTop: responsiveHeight(3),
        marginBottom: responsiveHeight(1),
    },

    image_area_here: {
        alignItems: 'center',
        borderStyle: 'dotted',
        borderColor: COLOURS.grey,
        borderWidth: responsiveWidth(.2),
        borderRadius: responsiveWidth(4),
        marginVertical: responsiveWidth(5),
        paddingVertical: responsiveWidth(4),
        marginHorizontal: responsiveWidth(5),
        paddingHorizontal: responsiveWidth(4),
    },

    /*  */


    /*  */

    bg_area_book: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: COLOURS.blue,
        paddingTop: responsiveHeight(3),
        // justifyContent: 'space-between',
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

    /*  */

    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },

})

export default styles