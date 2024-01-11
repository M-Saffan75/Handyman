import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({

    menu_set : {
        zIndex:10,
    },


    menu_img: {
        width:responsiveWidth(4),
        height:responsiveWidth(4),
    },


    // Modal Here Start

    estimated_price: {
        textAlign:'center',
        fontFamily:'Roboto-Medium',
        textTransform:'capitalize',
        fontSize:responsiveFontSize(2),
        marginVertical:responsiveWidth(4),
    },

    textarea : {
        borderColor:COLOURS.grey,
        fontFamily:'Roboto-Medium',
        marginTop:responsiveWidth(4),
        borderRadius:responsiveWidth(3),
        borderWidth:responsiveWidth(.2),
        marginHorizontal:responsiveWidth(4),
        paddingHorizontal:responsiveWidth(2),
    },

    btn_bottom_here_area: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: responsiveWidth(2)
    },

    canel_btn_here: {
        alignItems: 'center',
        width: responsiveWidth(32),
        marginTop: responsiveHeight(4),
        backgroundColor: COLOURS.grey,
        borderRadius: responsiveWidth(10),
        paddingVertical: responsiveWidth(3),
        // paddingHorizontal: responsiveWidth(3),
    },

    canel_btn_text: {
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        textTransform: 'uppercase',
        fontSize: responsiveFontSize(1.7),
    },


    bottom_cart_text: {
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.7),
    },

    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modal: {
        width: '75%',
        paddingTop: 0,
        elevation: 10,
        backgroundColor: '#fff',
        borderRadius: responsiveWidth(5),
        paddingVertical: responsiveHeight(3),
    },

    imag_lock: {
        borderBottomColor: COLOURS.black,
        paddingBottom: responsiveHeight(2),
        marginVertical: responsiveHeight(2),
        borderBottomWidth: responsiveWidth(.1),
    },

    congrats_done: {
        width: responsiveWidth(4.5),
        height: responsiveWidth(4.5),
    },

    congrat_text: {
        textAlign: 'center',
        color: COLOURS.black,
        fontFamily: 'Roboto-Bold',
        fontSize: responsiveFontSize(3),
    },

    // Modal Here End 



    /* btn */

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
        marginTop: responsiveHeight(10),
        marginBottom: responsiveHeight(4),
        marginHorizontal: responsiveWidth(5),
    },


    /* btn */


    /*  */
    srvce_request_img: {
        width: responsiveWidth(20),
        height: responsiveWidth(20),
        borderRadius: responsiveWidth(4),
    },

    name_service: {
        color: COLOURS.black,
        fontFamily: 'Roboto-Bold',
        textTransform: "capitalize",
        fontSize: responsiveFontSize(2.2),
        paddingHorizontal: responsiveWidth(4),
    },

    bg_service: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: responsiveWidth(4),
        marginHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(5),
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


    /* request card post */

    request_card: {
        marginTop: responsiveHeight(4),
        borderRadius: responsiveWidth(4),
        paddingVertical: responsiveHeight(1),
        marginHorizontal: responsiveWidth(5),
        paddingHorizontal: responsiveWidth(4),
    },

    title: {
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        color: COLOURS.grey,
        paddingTop: responsiveHeight(1),
        fontSize: responsiveFontSize(1.8),
    },

    title_text: {
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.2),
        paddingVertical: responsiveHeight(1.5),
    },

    /* request card post */


    /*  */

    book_cmpletd_text_one: {
        textAlign: 'center',
        color: COLOURS.white,
        // left: responsiveWidth(3),
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        bottom: responsiveHeight(2),
        borderRadius: responsiveWidth(1),
        fontSize: responsiveFontSize(1.4),
        letterSpacing: responsiveWidth(.2),
        paddingVertical: responsiveWidth(.5),
        paddingHorizontal: responsiveWidth(1),
    },

    space_down: {
        marginTop: responsiveHeight(2)
    },


    prfle_book_here: {
        width: responsiveWidth(22),
        height: responsiveWidth(22),
        borderRadius: responsiveWidth(20)
    },

    prfle_book_here_one: {
        width: responsiveWidth(22),
        height: responsiveWidth(22),
        borderRadius: responsiveWidth(2)
    },

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
        zIndex:-10,
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
        zIndex:-10,
        width:responsiveWidth(60),
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