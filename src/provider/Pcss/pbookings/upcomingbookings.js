import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({

    /*  */
    btn_up_area: {
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 5,
        flexDirection:'row',
        alignItems:'center',
        position: 'absolute',
        justifyContent:'space-around',
        backgroundColor:COLOURS.lightblue,
        paddingVertical: responsiveWidth(5),
    },
    space_down: {
        marginBottom: responsiveHeight(15),
    },

    book_btn: {
        zIndex:10,
        width:responsiveWidth(45),
        borderRadius: responsiveWidth(3),
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

    book_btn_one: {
        zIndex:10,
        width:responsiveWidth(90),
        borderRadius: responsiveWidth(3),
        paddingVertical: responsiveWidth(5),
        paddingHorizontal: responsiveWidth(4),
        marginHorizontal: responsiveHeight(2),
    },

    book_btn_text_one: {
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.8),
    },

    /*  */

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

    /*  */

    /*  */
    prce_area: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: COLOURS.black,
        paddingVertical: responsiveWidth(5.5),
        paddingHorizontal: responsiveWidth(5),
        borderBottomWidth: responsiveWidth(.1),
    },

    prce_area_one: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: responsiveWidth(5.5),
        paddingHorizontal: responsiveWidth(5),
    },

    prce_text: {
        color: COLOURS.grey,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2),
    },

    prce_text_here: {
        color: COLOURS.white,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2),
    },

    price_container_details: {
        elevation: 4,
        marginTop: responsiveHeight(2),
        borderRadius: responsiveWidth(3),
        marginBottom: responsiveHeight(2),
        marginHorizontal: responsiveWidth(4),
    },

    /*  */

    more_handyman_one: {
        marginTop: responsiveHeight(5),
        marginHorizontal: responsiveHeight(2.5),
    },

    more_handyman_text_one: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        letterSpacing: responsiveWidth(.2),
        fontSize: responsiveFontSize(2.3),
        marginBottom: responsiveHeight(1),
    },


    /*  */

    /*  */

    see_categorie: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(4),
        justifyContent: 'space-between',
        // marginBottom: responsiveHeight(4),
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
        // width: responsiveWidth(19),
        height: responsiveWidth(8.5),
        borderRadius: responsiveWidth(2.5),
        backgroundColor: COLOURS.Lightgrey
    },

    see: {
        textAlign: 'center',
        color: COLOURS.blue,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        padding: responsiveWidth(1.7),
        fontSize: responsiveFontSize(1.8),
    },

    /*  */

    /*  */

    call_img: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
    },

    call_img_text: {
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2),
        paddingHorizontal: responsiveWidth(3),
    },

    call_img_btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(80),
        backgroundColor: COLOURS.blue,
        marginTop: responsiveHeight(4),
        borderRadius: responsiveWidth(2),
        paddingHorizontal: responsiveWidth(2),
        paddingVertical: responsiveHeight(1.9),
    },

    btn_area_group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: responsiveHeight(3),
    },

    boderline: {
        height: responsiveHeight(.1),
        backgroundColor: COLOURS.black,
        marginTop: responsiveHeight(3),
    },

    row_user_data: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    name_user: {
        color: COLOURS.grey,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2.2),
    },

    data_name_email: {
        paddingHorizontal: responsiveWidth(5),
    },

    row_user_data_bg: {
        backgroundColor: COLOURS.grey,
        shadowColor: 'rgba(0, 0, 0, 2)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 4,
        shadowOpacity: 1,
        shadowRadius: 4,
        marginTop: responsiveHeight(4),
        borderRadius: responsiveWidth(3),
        paddingVertical: responsiveWidth(5),
        marginHorizontal: responsiveWidth(5),
        paddingHorizontal: responsiveWidth(5),
    },

    bg_name_1: {
        alignItems: 'center',
        top: responsiveHeight(1),
        justifyContent: 'center',
        width: responsiveWidth(20),
        height: responsiveWidth(20),
        backgroundColor: COLOURS.green,
        borderRadius: responsiveWidth(20),
    },

    user_book_profile: {
        top: responsiveHeight(1),
        width: responsiveWidth(20),
        height: responsiveWidth(20),
        borderRadius: responsiveWidth(20),
    },

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
        marginTop: responsiveHeight(1.5),
    },

    msg_img: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
    },

    mail_area_container: {
        marginTop: responsiveHeight(2),
    },

    /*  */


    /*  */

    descript_bg: {
        marginHorizontal: responsiveWidth(5)
    },

    descript_text_para: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        lineHeight: responsiveHeight(2.5),
        fontSize: responsiveFontSize(1.8),
    },

    descript_text: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        marginBottom: responsiveHeight(1),
        fontSize: responsiveFontSize(2.3),
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

    book_underline_one: {
        height: responsiveHeight(.3),
        backgroundColor: COLOURS.grey,
        marginVertical: responsiveHeight(3)
    },

    date_time_area_one: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
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
        marginVertical: responsiveHeight(1),
    },

    book_data: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(2),
    },

    book_id: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2.2)
    },

    book_no: {
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2),
        color: COLOURS.red
    },

    book_image: {
        height: responsiveWidth(25),
        width: responsiveWidth(25),
        borderRadius: responsiveWidth(2)
    },

    all_container_info_booking_one: {
        marginTop: responsiveHeight(4),
        marginHorizontal: responsiveWidth(3),
    },


    /*  */


    /*  */

    book_cmpletd_text: {
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        // backgroundColor:COLOURS.blue,
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