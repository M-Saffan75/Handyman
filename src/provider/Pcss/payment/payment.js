import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({

    /*  */
    book_img: {
        width: responsiveWidth(20),
        height: responsiveWidth(20),
        borderRadius: responsiveWidth(2)
    },

    book_head: {
        letterSpacing: .8,
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        marginTop: responsiveHeight(5),
        fontSize: responsiveFontSize(2.8),
        marginHorizontal: responsiveWidth(5),
    },

    space_down: {
        marginBottom: responsiveHeight(8),
    },

    book_head_area: {
        backgroundColor: COLOURS.blue,
        paddingBottom: responsiveHeight(3),
    },

    bottom_space: {
        paddingBottom:responsiveHeight(.1),
    },

    pay_data_header: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:responsiveWidth(5),
        paddingHorizontal:responsiveWidth(4),
        borderTopLeftRadius:responsiveWidth(3),
        borderTopRightRadius:responsiveWidth(3),
    },

    light_text_head: {
        letterSpacing: .2,
        color: COLOURS.white,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Bold',
        fontSize: responsiveFontSize(2),
    },

    dark_text_head : {
        letterSpacing: .2,
        color: COLOURS.white,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2),
    },

    light_text: {
        letterSpacing: .2,
        color: COLOURS.grey,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2),
        paddingVertical:responsiveWidth(3),
    },

    dark_text: {
        letterSpacing: .2,
        color: COLOURS.white,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2),
    },

    pay_data_row: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:COLOURS.grey,
        justifyContent:'space-between',
        marginVertical:responsiveWidth(3),
        paddingHorizontal:responsiveWidth(4),
        borderBottomWidth:responsiveWidth(.2),
    },
    pay_data_row_one: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        justifyContent:'space-between',
        paddingHorizontal:responsiveWidth(4),
    },

    container_pay_area: {
        marginTop: responsiveHeight(3),
        justifyContent: 'space-between',
        borderRadius: responsiveWidth(3),
        // paddingVertical: responsiveWidth(3),
        paddingBottom: responsiveWidth(3),
        marginHorizontal: responsiveWidth(3),
    },

    /*  */

    /*  */

    amount_text: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
    },

    amount_here: {
        color: COLOURS.green,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
    },

    date_here: {
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
    },

    payment_date: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: responsiveHeight(1.5),
    },

    payment_ouline_area: {
        borderRadius: responsiveWidth(3),
        paddingVertical: responsiveWidth(3),
        paddingHorizontal: responsiveWidth(3),
    },

    payment_text: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
    },

    wallet_text: {
        color: COLOURS.grey,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
    },

    /*  */


    payment_ouline_bg: {
        borderColor: COLOURS.grey,
        borderWidth: responsiveWidth(.4),
        borderRadius: responsiveWidth(3),
        marginVertical: responsiveWidth(5),
        paddingVertical: responsiveWidth(3),
        marginHorizontal: responsiveWidth(3),
        paddingHorizontal: responsiveWidth(3),
    },

    payment_check: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: responsiveWidth(3),
    },

    bg_area_book: {
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

        width: responsiveWidth(11),
        padding: responsiveWidth(1.5),
        fontSize: responsiveFontSize(4),
        borderRadius: responsiveWidth(2),
    },

    /*  */

    /* handymans here */

    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },

})

export default styles