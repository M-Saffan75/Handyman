import React, { useContext, useState } from 'react';
import { COLOURS } from '../../../ThemeColour/Theme';
import themeContext from '../../Toggle/themeContext';
import * as Animatable from 'react-native-animatable';
import { Image, ScrollView, StatusBar, View, } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const InputFileds = ({ onFocus, onBlur, placeholder }) => {

  const theme = useContext(themeContext);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus && onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur && onBlur();
  };


  return (
    <View>
      <Animatable.View duration={300} animation={'fadeInUp'}>
        <TextInput placeholder={placeholder} style={[styles.inpt_name, { backgroundColor: theme.lightblack }]}
          onFocus={handleFocus}
          onBlur={handleBlur} />
      </Animatable.View>
    </View>
  )
}

export default InputFileds

const styles = StyleSheet.create({
  filed_around: {
    // borderColor:COLOURS.white,
    marginTop: responsiveHeight(4),
    borderRadius: responsiveWidth(3),
    marginHorizontal: responsiveWidth(4),
  },

  inpt_name: {
    fontFamily: 'Roboto-Medium',
    borderRadius: responsiveWidth(3),
    letterSpacing: responsiveWidth(.1),
    paddingHorizontal: responsiveWidth(4),
  },

})