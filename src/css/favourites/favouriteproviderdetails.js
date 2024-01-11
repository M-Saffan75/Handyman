
import { StyleSheet } from 'react-native'
import { COLOURS } from '../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const styles = StyleSheet.create({

   
    /* --------- */

    charg_balanc_btn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLOURS.white,
        bottom: responsiveHeight(2.5),
        backgroundColor: COLOURS.blue,
        borderWidth: responsiveWidth(.6),
        borderRadius: responsiveWidth(10),
        paddingVertical: responsiveWidth(2),
        paddingHorizontal: responsiveWidth(4),
    },

    charg_balanc: {
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.5),
    },

    out_line_btn: {
        overflow: 'hidden',
        alignItems: 'flex-start',
    },

    pressn_btn: {
        margin: responsiveWidth(2),
        borderRadius: responsiveWidth(10),
        backgroundColor: COLOURS.Lightgrey,
        paddingVertical: responsiveHeight(.7),
        paddingHorizontal: responsiveHeight(2),
    },

    prfeson_name: {
        fontSize: 14,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
        textTransform: "capitalize",
    },

    rat_prodivder_img: {
        width: responsiveWidth(4),
        height: responsiveWidth(4),
        marginHorizontal: responsiveWidth(.5),
    },

    profile_prodr_area: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(1),
        marginBottom: responsiveWidth(4),
    },

    bg_img_content_area: {
        width: responsiveWidth(94),
        height: responsiveWidth(50),
    },

    space_some_text: {
        marginHorizontal: responsiveWidth(4.5),
    },

    Profeson_title: {
        color: COLOURS.blue,
        textTransform: "capitalize",
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2.1),
    },

    prver_detail_area: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(3.5),
    },

    prvder_rat: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    featur_bg_area: {
        overflow: 'hidden',
        borderRadius: responsiveWidth(3),
        marginBottom: responsiveHeight(4),
        backgroundColor: COLOURS.Lightgrey,
        marginHorizontal: responsiveWidth(3)
    },

    profile_prodr: {
        width: responsiveWidth(12),
        height: responsiveWidth(12),
        marginRight: responsiveWidth(3),
        borderRadius: responsiveWidth(10)
    },

    profile_prodr_name: {
        color: COLOURS.grey,
        textTransform: "capitalize",
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.8),
    },

    /* ------- */

    all_see: {
        marginHorizontal: responsiveWidth(3),
        marginBottom: responsiveWidth(2),
    },

    name_scren_text: {
        fontSize: 18,
        paddingLeft: 10,
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
    },

    provider_box: {
        Width: 180,
        elevation: 3,
        marginLeft: 12,
        marginRight: 10,
        borderRadius: 10,
        marginVertical: 7,
        paddingVertical: 15,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: COLOURS.white,
    },

    insider_box: {
        width: 200,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    provider_number: {
        right: 5,
        width: 115,
        letterSpacing: 1,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    heart_icon: {
        fontSize: 30,
        color: COLOURS.red,
    },

    map_inpt_container: {
        elevation: 4,
        marginTop: -60,
        borderRadius: 10,
        marginBottom: 20,
        paddingVertical: 3,
        marginHorizontal: 20,
        paddingHorizontal: 0,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: COLOURS.white,
        justifyContent: 'space-between',
    },

    location_here: {
        width: '80%',
        fontSize: 12,
        color: COLOURS.grey,
        alignItems: 'flex-start',
        fontFamily: 'Roboto-Medium',
    },

    provider_image: {
        width: 90,
        height: 90,
    },

    provider_name: {
        top: 4,
        fontSize: 16,
        letterSpacing: .2,
        color: COLOURS.black,
        fontFamily: 'Roboto-Bold',
    },

    provider_icon: {
        fontSize: 20,
        color: COLOURS.grey,
    },

    provider_contact: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium'
    },

    provider_profession: {
        fontSize: 13,
        letterSpacing: .3,
        color: COLOURS.red,
        fontFamily: 'Roboto-Bold',
        textTransform: 'uppercase',
    },

    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },

    short_container: {
        marginHorizontal: 12,
    },

    nav_notifi: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    see_categorie: {
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    bar_ground: {
        width: 45,
        height: 45,
        padding: 7,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: COLOURS.Lightgrey,
    },

    bar_img: {
        width: 30,
        height: 30,
    },

    noti_ground: {
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    bell_noti: {
        left: 10,
        width: 20,
        zIndex: 2,
        height: 20,
        bottom: 12,
        fontSize: 15,
        borderRadius: 20,
        textAlign: 'center',
        color: COLOURS.white,
        backgroundColor: COLOURS.blue,
    },

    pswd_name: {
        fontSize: 17,
        marginTop: 30,
        paddingBottom: 10,
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },

    name_inpt: {
        right: 12,
        width: '80%',
        color: COLOURS.black,
        paddingLeft: 20,
    },

    inpt_container: {
        elevation: 4,
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: COLOURS.white,
        backgroundColor: COLOURS.white,
        justifyContent: 'space-between',
    },

    search_bg: {
        width: 40,
        height: 40,
        padding: 10,
        borderRadius: 20,
    },

    icon: {
        height: 20,
        width: 20,
        fontSize: 17,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: COLOURS.Lightgrey,
    },

    categories: {
        fontSize: 20,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
        textTransform: "capitalize",
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

    categorie_Container: {
        height: 250,
        flexWrap: 'wrap',
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },

    categorie_box: {
        width: 105,
        height: 110,
        marginBottom: 20,
        borderRadius: 10,
        marginHorizontal: 3.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOURS.Lightgrey,
    },

    categorie_img: {
        height: 40,
        width: 40,
    },

    categorie_name: {
        top: 15,
        fontSize: 13,
        paddingBottom: 5,
        letterSpacing: .4,
        color: COLOURS.black,
        paddingHorizontal: 5,
        fontFamily: 'Roboto-Regular',
    },

    servce_box_provider: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    srvce_box: {
        width: 150,
        height: 215,
        elevation: 5,
        borderRadius: 10,
        marginBottom: 40,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLOURS.white,
    },

    servce_sec: {
        marginTop: 30,
        marginBottom: 10,
    },

    categorie_serce_img: {
        height: 120,
        width: 150,
        borderRadius: 10,
    },

    categorie_service_btn: {
        top: -10,
        height: 25,
        width: 120,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: COLOURS.red,
    },

    categorie_service_name: {
        fontSize: 12,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
    },

    name_icon: {
        top: -12,
        width: 120,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    icon_sericer: {
        fontSize: 18,
        width: 28,
        color: COLOURS.grey
    },

    service_name: {
        fontSize: 14,
        letterSpacing: .3,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
    },

    service_money: {
        top: -12,
        fontSize: 20,
        marginTop: 10,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold'
    },
    service_percent: {
        top: -12,
        right: 10,
        fontSize: 18,
        marginTop: 10,
        color: COLOURS.red,
        fontFamily: 'Roboto-Bold'
    },
    money_percent: {
        width: 150,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },

    /* ---- card end */

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

    /*  */
    
    bg_area_book: {
        backgroundColor: COLOURS.blue,
        height: responsiveHeight(25),
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