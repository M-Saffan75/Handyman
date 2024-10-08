import { StyleSheet } from 'react-native'
import { COLOURS } from '../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const styles = StyleSheet.create({



    /* ----- one start  */

    space_manage: {
        marginBottom:responsiveHeight(3)
    },

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

    fav_heart_img: {
        width: responsiveWidth(5),
        height: responsiveWidth(5),
    },

    out_line_btn_one: {
        overflow: 'hidden',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },

    pressn_btn_one: {
        margin: responsiveWidth(2),
        borderRadius: responsiveWidth(10),
        backgroundColor: COLOURS.Lightgrey,
        paddingVertical: responsiveHeight(.7),
        paddingHorizontal: responsiveHeight(1),
    },

    pressn_btn_fav: {
        alignItems:'center',
        justifyContent:'center',
        margin: responsiveWidth(2),
        borderRadius: responsiveWidth(10),
        backgroundColor: COLOURS.Lightgrey,
        paddingVertical: responsiveHeight(1),
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


    /* arrow back */

    acc_name: {
        letterSpacing: .8,
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.4),
        marginHorizontal: responsiveWidth(5),
    },

    arrow_area: {
        alignItems: 'center',
        flexDirection: 'row',
        width: responsiveWidth(100),
        justifyContent: 'flex-start',
        marginTop: responsiveHeight(5),
        marginHorizontal: responsiveWidth(5),
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


    /* arrow back */

    container: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
    },
})

export default styles