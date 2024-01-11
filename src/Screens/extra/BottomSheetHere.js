import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useMemo } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import * as Animatable from 'react-native-animatable';
// import CustomHandler from './CustomHandler';
// import CustomBackground from './CustomBackground';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const BottomSheetHere = () => {
  const snapPoints = useMemo(() => ['30%', '60%'], []);
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#eee' }}>
    
      <BottomSheet
        index={0}
        snapPoints={snapPoints}>

        <Animatable.View

          animation='zoomIn'
          delay={2000}
          style={{ height: '12%', backgroundColor: '#fff' }}
        >
          <View>
            <Text
              style={{
                color: '#000', marginHorizontal: 30,
                fontWeight: 'bold', fontSize: 20
              }}>
              AUSTRALIA</Text>
            <Text
              style={{
                color: '#000', marginHorizontal: 30,
                fontWeight: 'bold', fontSize: 16
              }}>
              SYDNEY</Text>
          </View>
        </Animatable.View>
        <Animatable.View
          animation='zoomIn'
          delay={1000}
        >
          <Text
            style={{
              color: '#000', marginHorizontal: 30,
              marginTop: 0,
              fontWeight: 'bold', fontSize: 16
            }}>
            In this video, I'll create a detailed trip information screen with a beautiful appearance effect. I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen.</Text>
        </Animatable.View>
      </BottomSheet>
    </GestureHandlerRootView>
  )
}

export default BottomSheetHere

const styles = StyleSheet.create({})