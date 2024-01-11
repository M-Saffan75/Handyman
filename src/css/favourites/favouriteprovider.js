import { StyleSheet } from 'react-native'
import { COLOURS } from '../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const styles = StyleSheet.create({


    bg_here_radius: {
        overflow:'hidden',
        borderTopLeftRadius:responsiveWidth(3),
        borderTopRightRadius:responsiveWidth(3),
    },

    name_here_prvdr: {
        textAlign:'center',
        backgroundColor:'none',
        top:responsiveHeight(1),
        textTransform:'capitalize',
        fontFamily:'Roboto-Medium',
        fontSize:responsiveFontSize(2),
    },

    bg_fav_prvder_img: {
        width:responsiveWidth(45),
        height:responsiveWidth(40),
    },

    fav_area_bg: {
        alignItems:'center',
        justifyContent:'center',
        width:responsiveWidth(10),
        height:responsiveWidth(10),
        backgroundColor:COLOURS.grey,
        borderRadius:responsiveWidth(20),
    },
    
    bg_area_fav_provder: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingTop:responsiveHeight(3),
        paddingBottom:responsiveHeight(1.6),
        marginHorizontal:responsiveWidth(3),
    },

    phone_img: {
        width: responsiveWidth(5),
        height: responsiveWidth(5),
    },

    pressn_btn_fav: {
        alignItems:'center',
        justifyContent:'center',
        width:responsiveWidth(10),
        height:responsiveWidth(10),
        margin: responsiveWidth(2),
        borderRadius: responsiveWidth(20),
        backgroundColor: COLOURS.Lightgrey,
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveHeight(1),
    },

    fav_heart_img: {
        width: responsiveWidth(5),
        height: responsiveWidth(5),
    },

    end_set: {
        alignItems:'flex-end'
    },

    bg_provider_container : {
        elevation:3,
        width:responsiveWidth(45),
        marginBottom:responsiveWidth(4),
        marginHorizontal:responsiveWidth(2.5),
        borderTopLeftRadius:responsiveWidth(3),
        borderTopRightRadius:responsiveWidth(3),
        borderBottomLeftRadius:responsiveWidth(3),
        borderBottomRightRadius:responsiveWidth(3),
    },

    btm_space: {
        marginBottom:responsiveHeight(15)
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
        justifyContent: 'flex-start',
        width: responsiveWidth(100),
        marginTop: responsiveHeight(5),
        paddingBottom: responsiveHeight(3),
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