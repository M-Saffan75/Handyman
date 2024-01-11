import { StyleSheet } from 'react-native'
import { COLOURS } from '../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const styles = StyleSheet.create({

    row_cross_text: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:responsiveWidth(5)
    },

    here: {
        letterSpacing: .1,
        color: COLOURS.black,
        textTransform:'capitalize',
        fontFamily: 'Roboto-Medium',
    },


    /*  */

    
    textAreaContainer: {
        borderWidth: 1,
        borderColor: COLOURS.blue,
        padding: responsiveWidth(2),
        marginTop: responsiveHeight(3),
        borderRadius: responsiveWidth(4),
        marginHorizontal: responsiveWidth(5),
    },

    textarea: {
        letterSpacing: .1,
        color: COLOURS.black,
        textAlignVertical: 'top',
        fontFamily: 'Roboto-Medium',
        height: responsiveHeight(11),
    },



    rat_hnady_img: {
        width:responsiveWidth(8),
        height:responsiveWidth(8),
    },

    row_data_rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(5)
    },

    rat_inpt: {
        textAlign:'center',
        color:COLOURS.black,
        fontFamily:'Roboto-Medium',
        borderColor: COLOURS.black,
        width: responsiveWidth(10),
        height: responsiveHeight(6),
        fontSize:responsiveFontSize(2.5),
        borderRadius: responsiveWidth(2),
        borderWidth: responsiveWidth(.4),
    },

    dot_gap: {
        width:responsiveHeight(1),
        height:responsiveHeight(1),
        backgroundColor:COLOURS.black,
        borderRadius:responsiveWidth(10)
    },


    // Modal Here Start
    /*  */

    btn_bottom_here_area: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal:responsiveWidth(2)
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


    /*  */

    rate_text_here: {
        marginTop: responsiveWidth(3),
        marginHorizontal: responsiveWidth(5),
    },

    rating_text: {
        color: COLOURS.white,
        fontFamily: 'Roboto-Regular',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.1),
    },

    /*  */
    sign_text: {
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.8),
    },

    acc_btn: {
        width: '100%',
        backgroundColor: COLOURS.red,
        borderRadius: responsiveWidth(10),
        paddingVertical: responsiveHeight(2.2),
    },

    btn_group: {
        alignItems: 'center',
        marginTop: responsiveHeight(3),
        marginBottom: responsiveHeight(3),
        marginHorizontal: responsiveWidth(5),
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

    rate_area_container: {
        alignItems: 'center',
    },

    rate_area: {
        alignItems: 'center',
        width: responsiveWidth(40),
        marginTop: responsiveHeight(4),
    },

    rate_area_text: {
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2.3),
        marginBottom: responsiveHeight(.5),
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
    },

    call_img_btn: {
        flexDirection: 'row',
        alignItems: 'center',
        width: responsiveWidth(25),
        justifyContent: 'space-around',
        backgroundColor: COLOURS.blue,
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

    /*  */
    /*  */
    provider_prfle_area: {
        elevation: 4,
        borderRadius: responsiveWidth(4),
        marginVertical: responsiveHeight(3),
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

    short_profl_name_area: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    rat_area: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    name_icon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: responsiveWidth(2),
    },

    name_icon_area: {
        marginLeft: responsiveWidth(4),
    },

    /*  */
    /*  */

    prfle_book_here: {
        width: responsiveWidth(20),
        height: responsiveWidth(20),
        borderRadius: responsiveWidth(10)
    },

    prfle_book_here_alert: {
        width: responsiveWidth(5),
        height: responsiveWidth(5),
        marginLeft: responsiveWidth(4),
    },

    rat_prodivder_img: {
        width: responsiveWidth(3.5),
        height: responsiveWidth(3.5),
        marginHorizontal: responsiveWidth(.4),
    },

    /*  */
    /*  */

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

    book_underline: {
        height: responsiveHeight(.3),
        backgroundColor: COLOURS.grey,
        marginVertical: responsiveHeight(3)
    },

    date_time_area: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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

    /*  */

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

    /*  */

    book_image: {
        height: responsiveWidth(25),
        width: responsiveWidth(25),
        borderRadius: responsiveWidth(2)
    },

    all_container_info_booking: {
        marginTop: responsiveHeight(4),
        marginHorizontal: responsiveWidth(3),
    },

    /*  */
    acc_name: {
        letterSpacing: .8,
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.8),
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
        marginBottom: responsiveHeight(10),
    },

    book_head_area: {
        paddingBottom: responsiveHeight(2),
    },

    container: {
        // width: responsiveWidth(100),
        // height: responsiveHeight(100),
    },
})

export default styles