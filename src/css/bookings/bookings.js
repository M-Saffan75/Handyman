import { StyleSheet } from 'react-native'
import { COLOURS } from '../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const styles = StyleSheet.create({

    book_serial_text: {
        color: COLOURS.black,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        marginTop: responsiveHeight(1),
        marginRight: responsiveWidth(3),
        fontSize: responsiveFontSize(2),
    },


    side_data: {
        marginLeft: responsiveWidth(3),
    },

    book_cmpletd_text_area: {
        overflow:'hidden',
        alignItems:'flex-start',
        justifyContent:'center',
        // maxWidth:responsiveWidth(18),
    },

    book_cmpletd_text: {
        textAlign:'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        // backgroundColor:COLOURS.blue,
        borderRadius:responsiveWidth(1),
        marginTop: responsiveHeight(.7),
        letterSpacing:responsiveWidth(.2),
        fontSize: responsiveFontSize(1.4),
        paddingVertical:responsiveWidth(.5),
        paddingHorizontal:responsiveWidth(1),
    },

    book_test_text: {
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        marginTop: responsiveHeight(.3),
        fontSize: responsiveFontSize(2),
    },

    book_price_one: {
        color: '#3d8c40',
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        marginTop: responsiveHeight(.3),
        fontSize: responsiveFontSize(2),
    },

    book_price: {
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        marginTop: responsiveHeight(.3),
        fontSize: responsiveFontSize(2),
    },



    light_text: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        marginTop: responsiveHeight(2),
        fontSize: responsiveFontSize(1.8),
    },

    dropdown: {
        marginHorizontal:responsiveWidth(4),
    },


    dark_text: {
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        marginTop: responsiveHeight(2),
        fontSize: responsiveFontSize(1.8),
    },

    dark_text_one: {
        color: COLOURS.red,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Bold',
        marginTop: responsiveHeight(2),
        fontSize: responsiveFontSize(1.8),
    },

    book_time: {
        lineHeight: responsiveHeight(4)
    },

    book_bottom_area: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(3),
        justifyContent: 'space-between',
    },

    book_area_top: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    short_area: {
        flexDirection: 'row',
    },

    book_area_container: {
        elevation:10,
        borderColor: COLOURS.grey,
        marginTop: responsiveHeight(1),
        borderColor: COLOURS.lightblack,
        borderRadius: responsiveWidth(2),
        marginBottom: responsiveHeight(2),
        paddingVertical: responsiveHeight(3),
        marginHorizontal: responsiveWidth(4),
        paddingHorizontal: responsiveWidth(4),

    },

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
        marginTop: responsiveHeight(4),
        fontSize: responsiveFontSize(2.8),
        marginHorizontal: responsiveWidth(5),
    },

    space_down: {
        marginBottom:responsiveHeight(8),
    },

    book_head_area: { 
        paddingBottom:responsiveHeight(4),
    }, 

    container: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
    },
})

export default styles