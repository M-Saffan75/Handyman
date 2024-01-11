import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({

    /*  */

    btn: {
        width: '100%',
        borderColor: COLOURS.blue,
        padding: responsiveWidth(1),
        marginTop: responsiveWidth(7),
        backgroundColor: COLOURS.blue,
        borderRadius: responsiveWidth(20),
    },

    btn_text: {
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.6),
        paddingVertical: responsiveWidth(3.5),
    },

    btn_center: {
        alignItems: 'center',
        marginBottom: responsiveHeight(1),
        marginHorizontal: responsiveWidth(2),
    },

    /*  */

    /*  */

    pan_row_container: {
        borderColor: COLOURS.grey,
        marginTop: responsiveWidth(10),
        borderWidth: responsiveWidth(.3),
        borderWidth: responsiveWidth(.2),
        borderRadius: responsiveWidth(4),
        paddingVertical: responsiveWidth(4),
        marginHorizontal: responsiveWidth(4),
        paddingHorizontal: responsiveWidth(4),
    },

    pan_row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(2),
        justifyContent: 'space-between',
    },

    pan_text: {
        letterSpacing: .8,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2),
    },

    free_text: {
        letterSpacing: .8,
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2),
    },

    pan_date: {
        textAlign: 'center',
        letterSpacing: .8,
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2),
        marginVertical: responsiveHeight(1),
    },

    /*  */

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
        marginTop: responsiveHeight(5),
        marginHorizontal: responsiveWidth(5),
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
        paddingBottom: responsiveHeight(.1),
    },

    /* handymans here */

    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },

})

export default styles