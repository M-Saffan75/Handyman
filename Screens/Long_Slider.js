import React, { useRef, useState } from 'react';
import { View, ScrollView, Image, StyleSheet, Animated } from 'react-native';

const IMAGES = [
    require('../images/camera.jpg'),
    require('../images/camera.jpg'),
    require('../images/camera.jpg'),
    require('../images/camera.jpg'),
    require('../images/camera.jpg'),
];

const ACTIVE_DOT_SIZE = 20;
const ACTIVE_DOT_COLOR = '#333';
const INACTIVE_DOT_SIZE = 8;
const INACTIVE_DOT_COLOR = '#999';

const LongSlider = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleSlideChange = ({ nativeEvent }) => {
    const slideIndex = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slideIndex !== activeIndex) {
      setActiveIndex(slideIndex);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false, listener: handleSlideChange }
        )}
        scrollEventThrottle={16}
      >
        {IMAGES.map((image, index) => (
          <Image source={image} style={styles.image} key={index} />
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {IMAGES.map((_, index) => {
          const dotSize = index === activeIndex ? ACTIVE_DOT_SIZE : INACTIVE_DOT_SIZE;
          const dotColor = index === activeIndex ? ACTIVE_DOT_COLOR : INACTIVE_DOT_COLOR;
          const dotLength = index === activeIndex ? 2 * ACTIVE_DOT_SIZE : INACTIVE_DOT_SIZE;
          return (
            <View
              style={[
                styles.dot,
                {
                  width: dotSize,
                  height: dotSize,
                  borderRadius: dotSize / 2,
                  backgroundColor: dotColor,
                  marginRight: index === IMAGES.length - 1 ? 0 : 10,
                },
              ]}
              key={index}
            >
              <View
                style={[
                  styles.dotLine,
                  {
                    backgroundColor: dotColor,
                    height: dotLength,
                    opacity: index === activeIndex ? 1 : 0,
                  },
                ]}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
  },
  dot: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotLine: {
    width: 2,
    position: 'absolute',
    bottom: -ACTIVE_DOT_SIZE / 2,
  },
});

export default LongSlider
