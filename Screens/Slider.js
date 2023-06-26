import React, { useRef, useState } from 'react';
import { View, ScrollView, Image, StyleSheet, Animated, TouchableOpacity, Text, StatusBar } from 'react-native';
import { COLOURS } from '../ThemeColour/Theme';

const IMAGES = [
    require('../images/plumberboy.jpg'),
    require('../images/electricboy.jpg'),
    require('../images/barberboy.jpg'),
    require('../images/shifting.jpg'),
    require('../images/painter.jpg'),
    require('../images/repairing.jpg'),
    require('../images/camera.jpg'),
];

const ACTIVE_DOT_SIZE = 3;
const ACTIVE_DOT_WIDTH = 50;
const INACTIVE_DOT_SIZE = 4;
const ACTIVE_DOT_PADDING = 8;
const ACTIVE_DOT_HEIGHT = 20;
const INACTIVE_DOT_WIDTH = 2;
const INACTIVE_DOT_HEIGHT = 2;
const INACTIVE_DOT_PADDING = 4;
const ACTIVE_DOT_COLOR = COLOURS.white;
const INACTIVE_DOT_COLOR = COLOURS.grey;

const Slider = ({navigation}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleSlideChange = ({ nativeEvent }) => {
        const slideIndex = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slideIndex !== activeIndex) {
            setActiveIndex(slideIndex);
        }
    };

    return (
        <>
            <View style={styles.container}>
            <StatusBar backgroundColor={'#eee'} barStyle={'dark-content'} />

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
                <View style={styles.noti_ground}>
                    <Text style={styles.bell_noti}>{'1'}</Text>
                    <TouchableOpacity style={styles.bar_ground} activeOpacity={0.8} >
                        <Image source={require('../Bold/bell.png')} style={styles.bar_img} tintColor={COLOURS.blue} />
                    </TouchableOpacity>
                </View>


                <View style={styles.dotContainer}>
                    {IMAGES.map((_, index) => {
                        const dotSize = index === activeIndex ? ACTIVE_DOT_SIZE && ACTIVE_DOT_WIDTH && ACTIVE_DOT_HEIGHT && ACTIVE_DOT_PADDING :
                            INACTIVE_DOT_HEIGHT && INACTIVE_DOT_SIZE && INACTIVE_DOT_WIDTH && INACTIVE_DOT_PADDING;
                        const dotColor = index === activeIndex ? ACTIVE_DOT_COLOR : INACTIVE_DOT_COLOR;
                        return (
                            <View
                                style={[
                                    styles.dot,
                                    {
                                        width: dotSize,
                                        height: dotSize,
                                        borderRadius: dotSize / 2,
                                        backgroundColor: dotColor,
                                        marginRight: index === IMAGES.length - 1 ? 0 : 8,
                                    },
                                ]}
                                key={index}
                            />
                        );
                    })}
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 350,
        height: 250,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 45,
    },
    dot: {
        width: INACTIVE_DOT_SIZE,
        height: INACTIVE_DOT_SIZE,
        width: ACTIVE_DOT_WIDTH,
        height: ACTIVE_DOT_HEIGHT,
        paddingHorizontal: ACTIVE_DOT_PADDING,
    },

    noti_ground: {
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        right: 20,
    },

    bar_ground: {
        width: 40,
        height: 40,
        padding: 7,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: COLOURS.Lightgrey,
    },

    bar_img: {
        width: 25,
        height: 25,
    },

    bell_noti: {
        left: 10,
        width: 20,
        zIndex: 2,
        height: 20,
        bottom: 12,
        fontSize: 15,
        borderRadius: 20,
        textAlign: 'center',
        color: COLOURS.white,
        backgroundColor: COLOURS.blue,
    },
});

export default Slider;
