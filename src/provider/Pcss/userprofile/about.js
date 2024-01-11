import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({

    box_terms: {
        width:responsiveWidth(44),
        marginTop:responsiveWidth(4),
        backgroundColor: COLOURS.grey,
        borderRadius:responsiveWidth(3),
        paddingVertical:responsiveWidth(4),
        paddingHorizontal:responsiveWidth(4),
    },

    box_img: {
        width: responsiveWidth(7),
        height: responsiveWidth(7),
    },

    terms_text: {
        letterSpacing: .8,
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        paddingTop:responsiveWidth(3),
        lineHeight:responsiveHeight(3),
        fontSize: responsiveFontSize(2),
    },

    box_area: {
        flexWrap:'wrap',
        flexDirection:'row',
        alignItems:'center',
        marginTop:responsiveHeight(4),
        justifyContent:'space-between',
        marginHorizontal:responsiveWidth(4),
    },

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
        backgroundColor: COLOURS.blue,
        justifyContent: 'flex-start',
        paddingTop: responsiveHeight(3),
        paddingBottom: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(5),
    },

    name: {
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.blue,
        width: responsiveWidth(11.2),
        padding: responsiveWidth(1.5),
        fontSize: responsiveFontSize(4),
        borderRadius: responsiveWidth(2),
        backgroundColor: COLOURS.Lightgrey,
    },


    /* arrow back */


    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },

})

export default styles