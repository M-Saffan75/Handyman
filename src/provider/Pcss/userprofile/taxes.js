import { StyleSheet } from 'react-native'
import { COLOURS } from '../../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({

    img_here_bg: {
        alignItems:'center',
        marginTop:responsiveHeight(15),
    },

    img_here: {
        height:responsiveWidth(60),
        width:responsiveWidth(60),
    },

    texted_text: {
        letterSpacing: .8,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Bold',
        textTransform: 'uppercase',
        marginTop:responsiveHeight(2),
        fontSize: responsiveFontSize(1.8),
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
        height: '100%',
        backgroundColor: COLOURS.white,
    },

})

export default styles