import { StyleSheet } from 'react-native'
import { COLOURS } from '../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const styles = StyleSheet.create({


    date_time_area: {
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'red',
        top:responsiveHeight(2),
        justifyContent:'space-between',
    },

    time_text: {
        fontFamily: 'Roboto-Bold',
        // textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.4),
        letterSpacing: responsiveWidth(.1),
        paddingHorizontal:responsiveWidth(.2)
    },

    chat_name: {
        fontFamily: 'Roboto-Medium',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2),
        letterSpacing: responsiveWidth(.1),
    },

    chat_last_msg: {
        top:responsiveHeight(.6),
        fontFamily: 'Roboto-Light',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.5),
        letterSpacing: responsiveWidth(.1),
    },

    chat_person_area: {
        flexDirection: 'row',
        borderBottomWidth:.3,
        alignItems: 'center',
        borderBottomColor:COLOURS.grey,
        justifyContent: 'space-between',
        paddingBottom:responsiveHeight(1.8),
        paddingHorizontal:responsiveWidth(3),
    },

    profile_area: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    space_left: {
        marginLeft: responsiveWidth(4),
    },


    chat_img_profile: {
        width: responsiveWidth(18),
        height: responsiveWidth(18),
        borderRadius: responsiveWidth(20),
    },

    categori_area: {
        backgroundColor: COLOURS.blue,
        paddingBottom: responsiveHeight(4),
        paddingVertical: responsiveWidth(6),
        paddingHorizontal: responsiveWidth(6),
    },

    chat_person_area_container: {
        marginTop:responsiveHeight(3),
    },

    btoom_space: {
        marginBottom:responsiveHeight(8)
    },

    categori_chat_text: {
        backgroundColor: 'none',
        top: responsiveHeight(1),
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.5),
        letterSpacing: responsiveWidth(.7),
    },

    container: {
        // height: '100%',
        backgroundColor: COLOURS.white
    },

})

export default styles