import { StyleSheet } from 'react-native'
import { COLOURS } from '../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const styles = StyleSheet.create({

    /* msges start */

    msges_here_bg: {
        alignSelf: 'flex-end',
    },

    msges_here_text: {
        padding: responsiveWidth(3),
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        backgroundColor: COLOURS.lightblue,
        marginVertical: responsiveHeight(.5),

        marginHorizontal: responsiveWidth(3),
        borderTopLeftRadius: responsiveWidth(5),
        borderBottomLeftRadius: responsiveWidth(5),
        borderBottomRightRadius: responsiveWidth(5),
    },

    /*  */

    msges_here_bg_one: {
        alignSelf: 'flex-start',
    },

    msges_here_text_one: {
        padding: responsiveWidth(3),
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        backgroundColor: COLOURS.blue,
        marginVertical: responsiveHeight(.5),

        marginHorizontal: responsiveWidth(3),
        borderTopRightRadius: responsiveWidth(5),
        borderBottomLeftRadius: responsiveWidth(5),
        borderBottomRightRadius: responsiveWidth(5),
    },

    /* msgs end */


    /* input field start */

    all_inpt_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveWidth(5),
        justifyContent: 'space-between',
        marginBottom: responsiveWidth(3),
        marginHorizontal: responsiveWidth(3),
    },

    micro_bg: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(12),
        height: responsiveWidth(12),
        backgroundColor: COLOURS.grey,
        borderRadius: responsiveWidth(10),
    },

    row_data_inpt: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(5)
    },

    row_data_inpt_one: {
        flexDirection: 'row',
        alignItems: 'center',
        width: responsiveWidth(15),
        justifyContent: 'space-between',
        marginRight: responsiveWidth(8),
    },

    chat_inpt_here: {
        width: responsiveWidth(46),
        fontFamily: "Roboto-Medium",
        paddingLeft: responsiveWidth(4),
        paddingHorizontal: responsiveWidth(3),
    },

    inpt_area_color: {
        flexDirection: 'row',
        alignItems: 'center',
        width: responsiveWidth(80),
        height: responsiveWidth(14),
        justifyContent: 'space-between',
        borderRadius: responsiveWidth(10),
        backgroundColor: COLOURS.lightblue,

    },

    select_img: {
        width: responsiveWidth(5.5),
        height: responsiveWidth(5.5),
    },

    /* input field end */


    space_manage: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOURS.blue,
        justifyContent: "space-between",
    },

    chat_herader_area: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: responsiveHeight(2),
        paddingBottom: responsiveHeight(2),
        // borderRadius:responsiveWidth(10),
        // backgroundColor:COLOURS.lightblue,
        paddingHorizontal: responsiveWidth(2),
    },

    name_status_area: {
        paddingLeft: responsiveWidth(3),
    },

    name_here: {
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2),
    },

    name_status: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
    },

    name_icon: {
        fontSize: responsiveFontSize(4)
    },

    menu_img: {
        width: responsiveWidth(7),
        height: responsiveWidth(7),
        marginRight: responsiveWidth(3)
    },

    chat_profile: {
        height: responsiveWidth(11),
        width: responsiveWidth(11),
        borderRadius: responsiveWidth(10),
    },

    container: {
        // flex:1,
        // alignItems:'center',
        justifyContent: 'space-between',
        height: responsiveHeight(100),
    }

})

export default styles