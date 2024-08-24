import React, { useContext } from 'react';
import { COLOURS } from '../../../ThemeColour/Theme';
import themeContext from '../../Toggle/themeContext';
import * as Animatable from 'react-native-animatable';
import { StyleSheet, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const NameTitle = ({label}) => {

    const theme = useContext(themeContext);


    return (
        <>
            <View>
                <Animatable.Text duration={300} animation={'fadeInUp'} style={styles.label}>{label}</Animatable.Text>
            </View>
        </>
    )
}

export default NameTitle

const styles = StyleSheet.create({
    label: {
        textTransform:'capitalize',
        fontFamily:'Roboto-Medium',
        fontSize: responsiveFontSize(2),
        backgroundColor: 'rgba(0,0,0,0)',
        paddingBottom:responsiveHeight(1),
        paddingHorizontal:responsiveWidth(2),
    },
})