import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({

    /*  */
    menu_set: { 
        right:responsiveWidth(5),
        bottom:responsiveHeight(3),
    },
    /*  */

    /*  */

    down_arrow_list: {
        width: responsiveWidth(4),
        height: responsiveWidth(4),
    },

    down_arrow_list_bg : {
        alignItems:'center',
        justifyContent:'center',
        width: responsiveWidth(7),
        height: responsiveWidth(7),
    },

    select_value: {
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.8),
    },

    row_drop_list: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:responsiveWidth(6),
        borderRadius:responsiveWidth(20),
        paddingVertical:responsiveWidth(4),
        paddingHorizontal:responsiveWidth(4),
    },

    /*  */

    /* Input Area */

    inpt_icon: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
    },

    label: {
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Medium',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: responsiveFontSize(1.5),
        paddingVertical: responsiveHeight(.5),
        paddingHorizontal: responsiveWidth(2),
    },

    filed_around: {
        borderRadius: responsiveWidth(3),
        marginHorizontal: responsiveWidth(4),
    },

    inpt_Filed_bg: {
        flexDirection: 'row',
        alignItems: 'center',
        width:responsiveWidth(90),
        height:responsiveHeight(6.8),
        justifyContent: 'space-between',
        borderRadius: responsiveWidth(20),
        // marginHorizontal:responsiveWidth(5),
        paddingHorizontal: responsiveWidth(4),
    },

    inpt_name: {
        width: responsiveWidth(70),
        fontFamily: 'Roboto-Medium',
        borderRadius: responsiveWidth(3),
        letterSpacing: responsiveWidth(.1),
    },

    /* Input Area */

    /* btn area */

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
        marginBottom: responsiveHeight(4),
        marginHorizontal: responsiveWidth(5),
    },
    /* btn area */


    /* online details */

    profile_handy: {
        width: responsiveWidth(30),
        height: responsiveWidth(30),
        borderRadius: responsiveWidth(20),
    },

    profile_handy_bg: {
        zIndex: -10,
        alignItems: 'center',
        marginTop: responsiveHeight(5),
    },

    /* online details */


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