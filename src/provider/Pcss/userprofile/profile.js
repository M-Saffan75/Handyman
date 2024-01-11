import { StyleSheet } from 'react-native'
import { COLOURS } from "../../../ThemeColour/Theme";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";

const styles = StyleSheet.create({


    /*  */

    logout_bg: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(5),
        marginBottom: responsiveHeight(13),
    },

    logout_text_here: {
        letterSpacing:.4,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2),
    },

    /*  */

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
        borderRadius: responsiveWidth(5),
        paddingVertical: responsiveWidth(2),
        paddingHorizontal: responsiveWidth(6),
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

    load_modal_img: {
        alignItems: 'center',
        marginTop: responsiveHeight(2),
    },

    load_img: {
        width: responsiveWidth(20),
        height: responsiveHeight(10),
    },

    imag_lock: {
        alignItems: 'center',
    },

    congrats_done: {
        width: responsiveWidth(65),
        height: responsiveHeight(30),
    },

    congrat_text: {
        textAlign: 'center',
        color: COLOURS.black,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        paddingTop: responsiveHeight(2),
        fontSize: responsiveFontSize(2.6),
    },

    // Modal Here End 

    /*  */

    btn_up_area: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: responsiveWidth(5),
    },

    space_down: {
        marginBottom: responsiveHeight(15),
    },

    book_btn: {
        zIndex: 10,
        width: responsiveWidth(32),
        borderRadius: responsiveWidth(3),
        paddingVertical: responsiveWidth(5),
    },

    book_btn_text: {
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.8),
    },

    book_btn_one: {
        zIndex: 10,
        width: responsiveWidth(90),
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

    plan_text: {
        letterSpacing: .3,
        color: COLOURS.grey,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2),
    },

    valid_text: {
        letterSpacing: .3,
        color: COLOURS.grey,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2),
    },

    plan_area_bg: {
        borderRadius: responsiveWidth(3),
        marginBottom: responsiveWidth(5),
        backgroundColor: COLOURS.Lightgrey,
        paddingVertical: responsiveWidth(3),
        marginHorizontal: responsiveWidth(4),
        paddingHorizontal: responsiveWidth(4),
    },

    row_plan_card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: responsiveHeight(1),
    },
    /*  */

    /*  */

    provder_name_text: {
        letterSpacing: .3,
        color: COLOURS.blue,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Bold',
        fontSize: responsiveFontSize(2),
    },

    provder_email_text: {
        letterSpacing: .7,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        marginBottom: responsiveWidth(1),
        fontSize: responsiveFontSize(2),
    },

    name_email_text_bg: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: responsiveWidth(5),
    },

    /*  */

    /*  */

    top_header: {
        backgroundColor: COLOURS.lightblue,
        paddingVertical: responsiveWidth(5),
    },


    vrsn_name_accnt_box: {
        marginHorizontal: responsiveWidth(5),
    },

    accnt_name: {
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(3.3),
    },

    profle_versn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(4.5),
    },

    prfl_setng: {
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.5),
        marginHorizontal: responsiveWidth(1.4),
    },

    version: {
        letterSpacing: .3,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        paddingTop:responsiveHeight(2),
        fontSize: responsiveFontSize(1.5),
    },


    /*  */

    /*  */

    plus_icon: {
        zIndex: 2,
        right: responsiveWidth(1),
        width: responsiveWidth(8),
        height: responsiveWidth(8),
        bottom: responsiveWidth(.1),
        fontSize: responsiveFontSize(1.8),
        borderRadius: responsiveWidth(20),
        position: 'absolute',
        textAlign: 'center',
        color: COLOURS.white,
        textAlignVertical: 'center',
        backgroundColor: COLOURS.black,
    },

    plus_icon_one_bg: {
        zIndex: 2,
        right: responsiveWidth(1),
        width: responsiveWidth(8),
        height: responsiveWidth(8),
        bottom: responsiveWidth(1.5),
        borderWidth: responsiveWidth(.4),
        borderRadius: responsiveWidth(20),

        position: 'absolute',
        alignItems: 'center',
        color: COLOURS.white,
        justifyContent: 'center',
        backgroundColor: COLOURS.black,
    },

    plus_icon_one: {
        width: responsiveWidth(4),
        height: responsiveWidth(4),
    },

    prifile_arrow_icon: {
        width: responsiveWidth(5.5),
        height: responsiveWidth(5.6),
    },

    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },


    /*  profile image area */

    menu_one: {
        borderRadius: responsiveWidth(5),
    },

    side_space: {
        backgroundColor: COLOURS.grey,
        borderRadius: responsiveWidth(10),
    },

    profile_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: responsiveWidth(4),
        paddingVertical: responsiveWidth(5.5),
    },

    profile_all_in_one: {
        flexDirection: 'column',
        borderColor: COLOURS.white,
        borderWidth: responsiveWidth(.3),
        borderRadius: responsiveWidth(20),
        paddingVertical: responsiveWidth(2.2),
        paddingHorizontal: responsiveWidth(2.2),
    },


    danger_zone_bg_area: {
        marginHorizontal: 0,
        backgroundColor: '#FF000033',
        marginVertical: responsiveHeight(2),
        paddingVertical: responsiveHeight(.5)
    },


    star: {
        top: 2,
        right: 3,
        zIndex: 2,
        width: 25,
        height: 25,
        position: 'absolute',
        display: 'none',
        color: COLOURS.orange,
    },

    profile_image: {
        width: 120,
        height: 120,
        elevation: 41,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    profile_container: {
        marginVertical: 20,
    },

    /*  profile image area */


    information_here: {
        // marginHorizontal: responsiveWidth(5.5),
        // marginHorizontal: responsiveWidth(5.5),
    },

    user_detail: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: COLOURS.grey,
        justifyContent: 'space-between',
        marginVertical: responsiveWidth(1.4),
        paddingVertical: responsiveWidth(3),
        borderBottomWidth: responsiveWidth(.2),
        paddingHorizontal: responsiveWidth(4),
    },

    user_here_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    user_icon: {
        fontSize: responsiveFontSize(2.8),
        paddingRight: responsiveWidth(5.7),
        color: COLOURS.blue,
    },

    user_icon_img: {
        marginRight: responsiveWidth(5.3),
        height: responsiveWidth(6),
        width: responsiveWidth(6),
    },

    user_icon_img_one: {
        marginRight: responsiveWidth(5.5),
        right: responsiveWidth(-.2),
        height: responsiveWidth(5),
        width: responsiveWidth(5),
    },

    user_name: {
        letterSpacing: .2,
        color: COLOURS.black,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Bold',
        fontSize: responsiveFontSize(2),
    },

    user_arrow: {
        fontSize: 25,
        color: COLOURS.grey,
    },

    help_one: {
        letterSpacing: 1,
        color: COLOURS.red,
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2.2),
        paddingVertical: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(5.5),
    },

    user_logout: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(2.1),
        paddingVertical: responsiveHeight(1),
    },

    logout_image: {
        color: COLOURS.blue,
        width: responsiveWidth(6),
        height: responsiveWidth(6),
        marginRight: responsiveWidth(5),
    },

    logout_name: {
        letterSpacing: .2,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.9),
    },


    // modalBackGround: {
    //     flex: 1,
    //     backgroundColor: 'rgba(0,0,0,.3)',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },

    // modalContainer: {
    //     width: '80%',
    //     elevation: 20,
    //     borderWidth: .4,
    //     borderRadius: 20,
    //     paddingVertical: 30,
    //     paddingHorizontal: 20,
    //     borderColor: COLOURS.white,
    //     backgroundColor: COLOURS.white,
    // },

    // header: {
    //     width: '100%',
    //     height: 40,
    //     alignItems: 'flex-end',
    //     justifyContent: 'center',
    // },

    // modal_box: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },

    // modalpop: {
    //     borderWidth: 4,
    //     borderColor: COLOURS.white,
    // },

    // modal_text: {
    //     fontSize: 14,
    //     paddingLeft: 9,
    //     marginBottom: 10,
    //     letterSpacing: .2,
    //     textAlign: 'center',
    //     color: COLOURS.black,
    //     fontFamily: 'Roboto-Bold',
    // },

    // modal_email: {
    //     paddingBottom: 10,
    //     color: COLOURS.black,
    //     textAlign: 'center',
    //     fontFamily: 'Roboto-Medium',
    // },

    // modal_cancel_more: {
    //     borderTopWidth: .4,
    //     flexDirection: 'row',
    //     borderTopColor: COLOURS.grey,
    //     justifyContent: 'space-between',
    // },

    // cancel: {
    //     paddingTop: 20,
    //     paddingLeft: 40,
    //     color: COLOURS.black,
    //     textAlign: 'center',
    //     fontFamily: 'Inter-Medium',
    // },

    // border_line: {
    //     borderLeftWidth: .4,
    //     paddingVertical: 2,
    //     borderLeftColor: COLOURS.grey,
    // },

    // modal_logout: {
    //     paddingTop: 20,
    //     paddingRight: 40,
    //     color: COLOURS.red,
    //     textAlign: 'center',
    //     fontFamily: 'Roboto-Medium',
    // },

    // Modal Here Start

})

export default styles