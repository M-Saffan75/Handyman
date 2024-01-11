import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({


    /*  */

    space_down: {
        // backgroundColor:'red',
    },
    
    book_cmpletd_text_one: {
        textAlign: 'center',
        color: COLOURS.grey,
        width: responsiveWidth(22),
        bottom: responsiveHeight(2),
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        borderRadius: responsiveWidth(1),
        letterSpacing: responsiveWidth(.2),
        fontSize: responsiveFontSize(1.4),
        paddingVertical: responsiveWidth(.5),
    },

    prfle_book_here: {
        width: responsiveWidth(22),
        height: responsiveWidth(22),
        borderRadius: responsiveWidth(20)
    },

    rat_review_img: {
        width: responsiveWidth(3.8),
        height: responsiveWidth(3.8),
        marginRight: responsiveWidth(2)
    },

    rvie_name: {
        width:responsiveWidth(30),
        fontFamily: 'Roboto-Medium',
        textTransform: "capitalize",
        fontSize: responsiveFontSize(1.8),
    },

    rvie_date: {
        fontFamily: 'Roboto-Medium',
        width:responsiveWidth(38),
        textTransform: "capitalize",
        fontSize: responsiveFontSize(1.8),
        marginVertical: responsiveHeight(.2),
    },

    review_area: {
        elevation: 3,
        alignItems: 'center',
        flexDirection: 'row',
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
        flexDirection:'row',
        alignItems:'center',
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



    /*  */

    see_categorie: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(4),
        justifyContent: 'space-between',
        marginBottom: responsiveHeight(5),
        marginHorizontal: responsiveWidth(4),
    },

    categories: {
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
        textTransform: "capitalize",
        fontSize: responsiveFontSize(2.5),
    },

    categories_recents: {
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
        textTransform: "capitalize",
        fontSize: responsiveFontSize(1.7),
    },

    see_all: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(19),
        width: responsiveWidth(19),
        height: responsiveWidth(8.5),
        borderRadius: responsiveWidth(2.5),
        backgroundColor: COLOURS.Lightgrey
    },

    see: {
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
        padding: responsiveWidth(1.7),
        fontSize: responsiveFontSize(1.8),
    },

    /*  */

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


    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },

})

export default styles