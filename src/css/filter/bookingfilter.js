import { StyleSheet } from 'react-native'
import { COLOURS } from '../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const styles = StyleSheet.create({


    /* filter range */

    fliter_bg: {
        alignItems: 'center',
        marginTop:responsiveHeight(1),
    },

    marker: {
        width: responsiveWidth(7),
        borderColor: COLOURS.blue,
        height: responsiveWidth(7),
        backgroundColor: COLOURS.blue,
        borderRadius: responsiveWidth(10),
        borderWidth: responsiveWidth(.8),
    },

    track : {
        height: 3,
        backgroundColor: 'grey',
    },

    selected_raw : { 
        backgroundColor:COLOURS.blue
    },


    /* filter range */


    /* btn text */

    btn: {
        width: '100%',
        borderColor: COLOURS.blue,
        padding: responsiveWidth(1),
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
        marginTop: responsiveHeight(10),
        marginBottom: responsiveHeight(4),
        marginHorizontal: responsiveWidth(5),
    },

    /* btn text  */

    /*  */

    filter_area: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: responsiveWidth(4)
    },

    line_here_bg: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(3),
    },

    line_here: {
        width: responsiveWidth(90),
        height: responsiveHeight(.3),
        backgroundColor: COLOURS.grey,
    },

    betwn_text: {
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: "capitalize",
        fontSize: responsiveFontSize(2.1),
    },

    min_bg: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(15),
        height: responsiveWidth(10),
        backgroundColor: COLOURS.blue,
        borderRadius: responsiveWidth(2),
        marginHorizontal: responsiveWidth(5),
    },

    min_and_max: {
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: "capitalize",
        fontSize: responsiveFontSize(2.1),
    },

    min_text: {
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
    },

    rating_min_area_container: {
        marginTop: responsiveHeight(3),
    },

    /*  */


    /*  */

    categorie_name: {
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: "capitalize",
        fontSize: responsiveFontSize(2.1),
        marginHorizontal: responsiveWidth(4)
    },


    prvder_rat_one: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: responsiveWidth(4)
    },


    rat_prodivder_img_one: {
        width: responsiveWidth(3.5),
        height: responsiveWidth(3.5),
        marginHorizontal: responsiveWidth(.8),
    },

    /*  */


    /* name reset */

    see_categorie: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(2),
        marginHorizontal: responsiveWidth(4),
    },



    categories: {
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
        textTransform: "capitalize",
        fontSize: responsiveFontSize(2.1),
    },

    see: {
        textAlign: 'center',
        color: COLOURS.blue,
        textTransform: "capitalize",
        fontFamily: 'Roboto-Medium',
        padding: responsiveWidth(1.7),
        fontSize: responsiveFontSize(1.5),
    },

    see_all: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(19),
        width: responsiveWidth(17),
        height: responsiveWidth(8),
        borderRadius: responsiveWidth(2.5),
        backgroundColor: COLOURS.Lightgrey
    },


    /* name reset */


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
        backgroundColor: COLOURS.blue,
        paddingTop: responsiveHeight(5),
        paddingBottom: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(5),
    },

    name: {
        letterSpacing: .5,
        color: COLOURS.blue,
        width: responsiveWidth(11),
        padding: responsiveWidth(1.2),
        fontSize: responsiveFontSize(4),
        borderRadius: responsiveWidth(2),
        backgroundColor: COLOURS.Lightgrey,
    },


    /* arrow back */

    container: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
    },
})

export default styles