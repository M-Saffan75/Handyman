import { StyleSheet } from 'react-native'
import { COLOURS } from '../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({


    /* post requirements */

    post_require_area: {
        alignItems:'center',
        backgroundColor:COLOURS.blue,
        paddingTop:responsiveHeight(4),
        paddingVertical:responsiveHeight(2),
        borderTopLeftRadius:responsiveWidth(5),
        borderTopRightRadius:responsiveWidth(5),
    },

    post_require_text: {
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.white,
        textTransform:'capitalize',
        fontFamily: 'Roboto-Medium',
        lineHeight:responsiveHeight(3.8),
        fontSize: responsiveFontSize(2.4),
        marginHorizontal: responsiveWidth(5),
    },

    plus_img: {
        width:responsiveWidth(4),
        height:responsiveWidth(4),
    },

    post_btn: {
        flexDirection:'row',
        alignItems:'center',
        width:responsiveWidth(50),
        justifyContent:'space-around',
        backgroundColor:COLOURS.white,
        borderRadius:responsiveWidth(2),
        marginVertical:responsiveHeight(2),
        paddingVertical:responsiveWidth(4),
        marginHorizontal:responsiveWidth(5),
        paddingHorizontal:responsiveWidth(2),
    },

    text_text: {
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.white,
        textTransform:'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.6),
    },

    /* post requirements */


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

    profile_prodr_area_one: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(1),
        marginBottom: responsiveWidth(4),
    },

    bg_img_content_area_one: {
        width: responsiveWidth(44.5),
        height: responsiveWidth(50),
    },

    space_some_text_one: {
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

    profile_prodr_name_one: {
        color: COLOURS.grey,
        textTransform: "capitalize",
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.5),
    },

    space_around: {
        marginHorizontal: responsiveWidth(1.5),
    },


    /* ---- one end */


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
    /*  */
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


    map_inpt_container: {
        elevation: 4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 0,
        marginTop: responsiveHeight(-8),
        backgroundColor: COLOURS.white,
        justifyContent: 'space-between',
        borderRadius: responsiveWidth(2),
        marginBottom: responsiveHeight(3),
        marginHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(.4),
        paddingHorizontal: responsiveWidth(5.6),
    },

    location_here: {
        width: '80%',
        color: COLOURS.grey,
        alignItems: 'flex-start',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.7),
    },
    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },

    short_container: {
        marginHorizontal: responsiveWidth(3.4),
    },

    /* End of Era */

    nav_notifi: {
        flexDirection: 'row',
        alignItems: 'center',
        height: responsiveHeight(12),
        justifyContent: 'space-between',
    },

    see_categorie: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:  responsiveHeight(2),
        marginBottom:  responsiveHeight(2),
        marginHorizontal: responsiveWidth(1),
    },

    row_wise_data : {
        flexDirection: 'row',
        flexWrap:'wrap',
        alignItems: 'center',
        justifyContent:'space-around',
    },


    bar_ground: {
        // width: 45,
        padding: 7,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width:responsiveWidth(13),
        height: responsiveWidth(12),
        borderRadius: responsiveWidth(2),
        backgroundColor: COLOURS.Lightgrey,
    },

    bar_img: {
        width: responsiveWidth(8),
        height: responsiveWidth(8),
    },

    noti_ground: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    bell_noti: {
        zIndex:2,
        textAlign: 'center',
        color: COLOURS.white,
        left: responsiveWidth(3),
        width: responsiveWidth(6),
        bottom: responsiveWidth(4),
        backgroundColor: COLOURS.blue,
        fontSize: responsiveFontSize(2),
        borderRadius: responsiveWidth(10),
    },

    search_bg: {
        width:responsiveWidth(11),
        width:responsiveWidth(11.5),
        padding: responsiveWidth(3),
        height: responsiveWidth(11.5),
    },

    icon: {
        textAlign: 'center',
        width:responsiveWidth(5),
        color: COLOURS.Lightgrey,
        height:responsiveWidth(5.5),
        textAlignVertical: 'center',
        fontSize: responsiveFontSize(2.2),
    },

    categories: {
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
        textTransform: "capitalize",
        fontSize:responsiveFontSize(2.7),
    },

    see: {
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
        padding: responsiveWidth(1.7),
        fontSize: responsiveFontSize(1.8),
    },

    see_all: {
        alignItems:'center',
        justifyContent:'center',
        width:responsiveWidth(19),
        width: responsiveWidth(19),
        height: responsiveWidth(8.5),
        borderRadius: responsiveWidth(2.5),
        backgroundColor: COLOURS.Lightgrey
    },

    categorie_Container: {
        // marginVertical: 10,
        // backgroundColor:'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop:responsiveHeight(1),
        // height: responsiveHeight(35),
    },

    categorie_box: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(29),
        height:responsiveWidth(30.5),
        marginBottom: responsiveWidth(3),
        borderRadius: responsiveWidth(3),
        backgroundColor: COLOURS.Lightgrey,
        marginHorizontal: responsiveWidth(1),
    },

    categorie_img: {
        height:responsiveWidth(14),
        width: responsiveWidth(14),
    },

    categorie_name: {
        letterSpacing: .4,
        textAlign:'center',
        color: COLOURS.black,
        top: responsiveHeight(1.4),
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.8),
        paddingHorizontal:responsiveWidth(1),
    },

    servce_box_provider: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    
})
export default styles