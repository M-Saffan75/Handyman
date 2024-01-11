import React, { useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Bottom_Sheet = () => {
  const modalizeRef = useRef(null);

  const openBottomSheet = () => {
    modalizeRef.current?.open();
  };

  return (
    <GestureHandlerRootView style={styles.container} snapPoint={180}>
      <TouchableOpacity onPress={openBottomSheet} style={styles.button}>
        <Text>Open BottomSheet</Text>
      </TouchableOpacity>

      <Modalize
          handleStyle={{ display: 'none' }} 
        avoidKeyboardLikeIOS={true}
        ref={modalizeRef}
        snapPoint={180}
        // modalHeight={480}
        >
        <View>
          <Text style={{ color: 'red' }}>Share Options</Text>
        </View>
      </Modalize>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
});

export default Bottom_Sheet;
