import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({

    add_bg: {
        borderRadius: responsiveWidth(4),
        paddingVertical: responsiveWidth(3),
        marginHorizontal: responsiveWidth(4),
        marginBottom: responsiveWidth(5),
        paddingHorizontal: responsiveWidth(3),
    },

    add_text: {
        color: COLOURS.white,
        textAlign:'center',
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize:responsiveFontSize(2),
    },

    /*  */


    inpt_here: {
        borderRadius: responsiveWidth(3),
        marginVertical: responsiveWidth(7),
        backgroundColor: COLOURS.Lightgrey,
        marginHorizontal: responsiveWidth(4),
        paddingHorizontal: responsiveWidth(4),
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
    },

    cross_img: {
        width: responsiveWidth(7),
        height: responsiveWidth(7),
    },

    add_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: responsiveWidth(4),
        paddingHorizontal: responsiveWidth(3),
        borderTopLeftRadius:responsiveWidth(3),
        borderTopRightRadius:responsiveWidth(3),
    },

    add_service_text: {
        color: COLOURS.white,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
    },

    // Modal Here start

    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modal: {
        paddingTop: 0,
        width: '80%',
        elevation: 10,
        backgroundColor: '#fff',
        borderRadius: responsiveWidth(3),
        paddingVertical: responsiveWidth(2),
        // paddingHorizontal: responsiveWidth(6),
    },

    ready_ride: {
        lineHeight: 18,
        textAlign: 'center',
        color: COLOURS.grey,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        paddingTop: responsiveHeight(1),
        fontSize: responsiveFontSize(1.8),
        paddingHorizontal: responsiveWidth(1.8),
    },

    /*  */
    switch_here: {
        height: responsiveWidth(10),
        width: responsiveWidth(10),
    },

    edit_text: {
        letterSpacing: .8,
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        backgroundColor: COLOURS.grey,
        borderRadius: responsiveWidth(1),
        fontSize: responsiveFontSize(1.6),
        paddingVertical: responsiveWidth(.5),
        paddingHorizontal: responsiveWidth(1.5),
    },


    location_text: {
        letterSpacing: .8,
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2),
    },

    location_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    edit_row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: responsiveWidth(27),
        marginTop: responsiveWidth(5),
        justifyContent: 'space-between',
    },


    location_row_bg: {
        borderRadius: responsiveWidth(4),
        marginVertical: responsiveWidth(5),
        paddingVertical: responsiveWidth(5),
        marginHorizontal: responsiveWidth(5),
        paddingHorizontal: responsiveWidth(5),
    },

    /*  */

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

    /*  */

    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },

})

export default styles