import { StyleSheet } from 'react-native'
import { COLOURS } from '../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({

    // 
 
    /*  */

    rat_review_img: {
        width: responsiveWidth(3.8),
        height: responsiveWidth(3.8),
        marginRight:responsiveWidth(2)
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
        marginVertical:responsiveHeight(.2)
    },

    review_area: {
        elevation:3,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:COLOURS.white,
        justifyContent:'space-between',
        borderRadius:responsiveWidth(2),
        paddingVertical:responsiveWidth(2),
        marginVertical:responsiveHeight(1),
        marginHorizontal:responsiveWidth(4),
        paddingHorizontal:responsiveWidth(4),
    },

    small_info__reivew_rating: {
        flexDirection:'row',
    },

    profl_info_review: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },

    small_info__reivew: {
        marginLeft:responsiveWidth(3),
    },

    rvie_post: {
        color: COLOURS.white,
        width:responsiveWidth(55),
        fontFamily: 'Roboto-Medium',
        textTransform: "capitalize",
        fontSize: responsiveFontSize(1.7),
    },

    /*  */

    /*  */

    all_see: {
        marginBottom: responsiveWidth(2),
        marginHorizontal: responsiveWidth(3),
    },

    categories: {
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
        textTransform: "capitalize",
        fontSize: responsiveFontSize(2.2),
    },

    see_categorie: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(4),
        justifyContent: 'space-between',
        marginBottom: responsiveHeight(2),
        marginHorizontal: responsiveWidth(1),
    },

    see: {
        padding: 5,
        fontSize: 12,
        fontSize: 13,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
    },

    see_all: {
        height: 30,
        width: 60,
        borderRadius: 10,
        backgroundColor: COLOURS.Lightgrey
    },

    /*  */

    /*  */

    msg_text: {
        color: COLOURS.grey,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        marginLeft: responsiveHeight(1.5),
        fontSize: responsiveFontSize(1.8),
        marginBottom: responsiveHeight(.5),
    },

    mail_area: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(2.4),
    },

    msg_img: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
    },

    mail_area_container: {
        marginTop: responsiveHeight(-1),
        marginHorizontal: responsiveWidth(4),
    },

    /*  */

    /*  */

    row_lang_here: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: responsiveWidth(7),
        marginVertical: responsiveHeight(2),
        marginHorizontal: responsiveWidth(3),
    },

    lang_1: {
        letterSpacing: (.2),
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        backgroundColor: COLOURS.grey,
        borderRadius: responsiveWidth(1),
        fontSize: responsiveFontSize(1.5),
        paddingVertical: responsiveWidth(.7),
        marginHorizontal: responsiveWidth(2),
        paddingHorizontal: responsiveWidth(1.5),
    },

    /*  */

    // 

    more_handyman: {
        marginHorizontal: responsiveHeight(2.5),
    },

    more_handyman_text: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        marginBottom: responsiveHeight(1),
        fontSize: responsiveFontSize(2.3),
    },


    booK_user_favourite: {
        width: responsiveWidth(8),
        height: responsiveWidth(8),
        marginRight: responsiveWidth(1),
    },

    prfle_book_here: {
        width: responsiveWidth(22),
        height: responsiveWidth(22),
        borderRadius: responsiveWidth(20)
    },

    prfle_book_here_alert: {
        width: responsiveWidth(5),
        height: responsiveWidth(5),
        marginLeft: responsiveWidth(4),
    },

    rat_prodivder_img: {
        width: responsiveWidth(3.8),
        height: responsiveWidth(3.8),
        marginHorizontal: responsiveWidth(.3),
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

    row_area: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    short_profl_name_area: {
        shadowColor: 'rgba(0, 0, 0, 2)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 3,
        shadowOpacity: 1,
        shadowRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(-7),
        borderRadius: responsiveWidth(5),
        marginBottom: responsiveHeight(3),
        paddingVertical: responsiveWidth(4),
        marginHorizontal: responsiveWidth(5),
        paddingHorizontal: responsiveWidth(5),
    },


    rat_area: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    name_icon: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    name_icon_area: {
        marginLeft: responsiveWidth(4),
    },

    member_sinc_text: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.7),
        paddingVertical: responsiveHeight(.8)
    },

    // 

    // 

    bg_area_book: {
        backgroundColor: COLOURS.blue,
        height: responsiveHeight(25),
        borderBottomLeftRadius: responsiveWidth(3),
        borderBottomRightRadius: responsiveWidth(3),
    },

    /*  */
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
        justifyContent: 'flex-start',
        width: responsiveWidth(100),
        marginTop: responsiveHeight(5),
        marginHorizontal: responsiveWidth(5),
    },

    btn_align: {
        alignSelf: 'flex-start',
    },

    name: {
        width: 40,
        padding: 5,
        fontSize: 30,
        borderRadius: 7,
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
        backgroundColor: COLOURS.Lightgrey,
    },

    /*  */

    container: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
    },

})

export default styles