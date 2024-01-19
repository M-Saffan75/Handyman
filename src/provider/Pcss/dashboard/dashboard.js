import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({


    /* chart */
    bg_chart: {
        alignItems: 'center',
        justifyContent:'center',
        marginVertical:responsiveWidth(5),
        marginBottom:responsiveWidth(1),
        marginHorizontal:responsiveWidth(5),
    },
    
    chart: {
        elevation:2,
        borderRadius:responsiveWidth(4),
    },

    /*  chart */

    /* ----- one start  */


    charg_balanc_btn_one: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLOURS.white,
        bottom: responsiveHeight(2.5),
        backgroundColor: COLOURS.blue,
        borderWidth: responsiveWidth(.6),
        borderRadius: responsiveWidth(10),
        paddingVertical: responsiveWidth(1.5),
        paddingHorizontal: responsiveWidth(2.5),
    },

    charg_balanc_one: {
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.4),
    },

    out_line_btn_one: {
        overflow: 'hidden',
        alignItems: 'flex-start',
    },

    pressn_btn_one: {
        margin: responsiveWidth(2),
        borderRadius: responsiveWidth(10),
        backgroundColor: COLOURS.Lightgrey,
        paddingVertical: responsiveHeight(.3),
        paddingHorizontal: responsiveHeight(1),
    },

    prfeson_name_one: {
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
        textTransform: "capitalize",
        fontSize: responsiveFontSize(1.7),
    },

    rat_prodivder_img_one: {
        width: responsiveWidth(3.5),
        height: responsiveWidth(3.5),
        marginHorizontal: responsiveWidth(.1),
    },


    bg_img_content_area_one: {
        width: responsiveWidth(44.5),
        height: responsiveWidth(50),
    },

    space_some_text_one: {
        paddingTop: responsiveHeight(1),
        paddingBottom: responsiveHeight(2),
        marginHorizontal: responsiveWidth(4.5),
    },

    Profeson_title_one: {
        color: COLOURS.blue,
        textTransform: "capitalize",
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.9),
    },

    prver_detail_area_one: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(2),
    },

    prvder_rat_one: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    row_wise_data : {
        flexDirection: 'row',
        flexWrap:'wrap',
        alignItems: 'center',
        justifyContent:'space-around',
    },

    featur_bg_area_one: {
        overflow: 'hidden',
        width: responsiveWidth(44.5),
        borderRadius: responsiveWidth(3),
        marginBottom: responsiveHeight(4),
        backgroundColor: COLOURS.Lightgrey,
        marginHorizontal: responsiveWidth(2)
    },

    profile_prodr_one: {
        width: responsiveWidth(9),
        height: responsiveWidth(9),
        marginRight: responsiveWidth(3),
        borderRadius: responsiveWidth(10)
    },

    space_around: {
        marginHorizontal: responsiveWidth(1.5),
    },


    /* ---- one end */



    /*  */

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
        marginLeft: responsiveWidth(3),
    },

    rvie_post: {
        color: COLOURS.white,
        width: responsiveWidth(55),
        fontFamily: 'Roboto-Medium',
        textTransform: "capitalize",
        fontSize: responsiveFontSize(1.7),
    },


    book_cmpletd_text_one: {
        textAlign: 'center',
        color: COLOURS.white,
        left: responsiveWidth(3),
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        bottom: responsiveHeight(2),
        borderRadius: responsiveWidth(1),
        letterSpacing: responsiveWidth(.2),
        fontSize: responsiveFontSize(1.4),
        paddingVertical: responsiveWidth(.5),
        paddingHorizontal: responsiveWidth(1),
    },

    /*  */


    book_cmpletd_text: {
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        borderRadius: responsiveWidth(1),
        marginTop: responsiveHeight(.7),
        marginBottom: responsiveHeight(.7),
        letterSpacing: responsiveWidth(.2),
        fontSize: responsiveFontSize(1.4),
        paddingVertical: responsiveWidth(.5),
        paddingHorizontal: responsiveWidth(1),
    },


    book_cmpletd_text_area: {
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        width: responsiveWidth(50),
        justifyContent: 'space-between',
    },


    book_price_one: {
        color: '#3d8c40',
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        marginTop: responsiveHeight(.3),
        fontSize: responsiveFontSize(2),
    },


    book_image: {
        height: responsiveWidth(25),
        width: responsiveWidth(25),
        borderRadius: responsiveWidth(2)
    },

    all_container_info_booking: {
        marginTop: responsiveHeight(4),
        marginHorizontal: responsiveWidth(3),
    },

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

    spacel_left: {
        paddingLeft: responsiveWidth(7)
    },

    book_underline: {
        borderColor: COLOURS.grey,
        elevation: 4,
        borderRadius: responsiveWidth(3),
        // borderWidth:responsiveWidth(.2),
        marginVertical: responsiveHeight(1),
        marginHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(3.5),
    },

    date_time_area: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    name_test: {
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        marginBottom: responsiveHeight(1),
        fontSize: responsiveFontSize(2.5),
    },

    date: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Regular',
        fontSize: responsiveFontSize(1.9),
    },

    real_date: {
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.9),
        marginVertical: responsiveHeight(.7),
    },

    /*  */


    upcomg_bkngs_area: {
        backgroundColor: COLOURS.grey,
        marginTop: responsiveHeight(7),
        paddingBottom: responsiveHeight(7),
    },


    /* online image */

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

    /* online image */


    /* handymans here */

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
        marginBottom: responsiveHeight(4)
    },


    /* handymans here */


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

    row_image: {
        flexDirection: 'row',
        alignItems: 'center',
        width: responsiveWidth(50),
        marginTop: responsiveHeight(3),
        marginHorizontal: responsiveHeight(2),
    },

    online_img: {
        borderColor: COLOURS.white,
        width: responsiveWidth(14),
        height: responsiveWidth(14),
        borderWidth: responsiveWidth(.5),
        borderRadius: responsiveWidth(20),
    },

    online_img_one: {
        right: responsiveWidth(8),
        borderColor: COLOURS.white,
        width: responsiveWidth(14),
        height: responsiveWidth(14),
        borderWidth: responsiveWidth(.5),
        borderRadius: responsiveWidth(20),
    },

    online_img_two: {
        right: responsiveWidth(16),
        borderColor: COLOURS.white,
        width: responsiveWidth(14),
        height: responsiveWidth(14),
        borderWidth: responsiveWidth(.5),
        borderRadius: responsiveWidth(20),
    },

    online_img_three: {
        right: responsiveWidth(24),
        borderColor: COLOURS.white,
        width: responsiveWidth(14),
        height: responsiveWidth(14),
        borderWidth: responsiveWidth(.5),
        borderRadius: responsiveWidth(20),
    },

    /*  */

    /*  */

    recenlt_text: {
        letterSpacing: .5,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        marginTop: responsiveHeight(2.5),
        fontSize: responsiveFontSize(2.2),
        paddingHorizontal: responsiveWidth(5),
    },


    /*  */

    /* cards_area */


    total_text: {
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.3),
    },

    total_booking_text: {
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        paddingTop: responsiveHeight(3),
        fontSize: responsiveFontSize(1.8),
        letterSpacing: responsiveWidth(.3),
    },

    cards_box: {
        marginTop: responsiveHeight(3),
        marginHorizontal: responsiveWidth(5),
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    total_cards_container_area: {
        width: responsiveWidth(43),
        padding: responsiveWidth(3),

        backgroundColor: COLOURS.blue,
        borderRadius: responsiveWidth(4),
        marginVertical: responsiveWidth(2),
        paddingVertical: responsiveWidth(4),
    },

    total_cards_bg: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    total_img: {
        width: responsiveWidth(5),
        height: responsiveWidth(5),
    },

    total_img_bg: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(9),
        height: responsiveWidth(9),
        backgroundColor: COLOURS.white,
        borderRadius: responsiveWidth(20),
    },

    /* cards_area */

    /* name text start */

    hellow_text: {
        letterSpacing: .5,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.5),
        paddingHorizontal: responsiveWidth(1.5),
    },

    hellow_welcome_text: {
        letterSpacing: .5,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.8),
        paddingVertical: responsiveWidth(.6),
        paddingHorizontal: responsiveWidth(1.5),
    },

    space_text: {
        marginTop: responsiveHeight(2),
        marginHorizontal: responsiveWidth(3),
    },

    /*  */

    bar_img: {
        width: responsiveWidth(8),
        height: responsiveWidth(8),
    },

    noti_ground: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    bell_noti: {
        zIndex: 2,
        textAlign: 'center',
        color: COLOURS.white,
        left: responsiveWidth(3),
        width: responsiveWidth(5),
        height: responsiveWidth(5),
        bottom: responsiveWidth(3),
        backgroundColor: COLOURS.blue,
        fontSize: responsiveFontSize(1.7),
        borderRadius: responsiveWidth(10),
    },

    top_head: {
        flexDirection: 'row',
        width: responsiveWidth(20),
        justifyContent: 'space-between'
    },

    arrow_back: {
        color: COLOURS.black,
        fontSize: responsiveFontSize(4),
    },

    name: {
        letterSpacing: .5,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.8),
    },

    btn_align_one: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(11),
        height: responsiveWidth(11),
        borderRadius: responsiveWidth(2),
    },

    name_heart: {
        color: COLOURS.blue,
        width: responsiveWidth(7),
        height: responsiveWidth(7),
        borderRadius: responsiveWidth(3),
    },


    categorie_bg_img: {
        width: responsiveWidth(100),
        height: responsiveHeight(50),
    },

    back_fav_area: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: COLOURS.blue,
        paddingTop: responsiveWidth(6),
        justifyContent: 'space-between',
        paddingBottom: responsiveWidth(6),
        paddingHorizontal: responsiveWidth(6),
    },

    /*  */
    
    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },
})

export default styles