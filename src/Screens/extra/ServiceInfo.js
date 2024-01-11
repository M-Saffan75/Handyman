import React, { useRef, useState, useMemo } from 'react'
import { COLOURS } from '../../ThemeColour/Theme'
import BottomSheet from '@gorhom/bottom-sheet'
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Image, ScrollView, StatusBar, Animated, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native'
import BottomSheetHere from './BottomSheetHere';


const IMAGES = [
    require('../images/plumberboy.jpg'),
    require('../images/electricboy.jpg'),
    require('../images/barberboy.jpg'),
];

const ACTIVE_DOT_SIZE = 3;
const ACTIVE_DOT_WIDTH = 10;
const INACTIVE_DOT_SIZE = 5;
const ACTIVE_DOT_PADDING = 5;
const ACTIVE_DOT_HEIGHT = 10;
const INACTIVE_DOT_WIDTH = 10;
const INACTIVE_DOT_HEIGHT = 10;
const INACTIVE_DOT_PADDING = 5;
const ACTIVE_DOT_COLOR = COLOURS.white;
const INACTIVE_DOT_COLOR = COLOURS.grey;

const ServiceInfo = ({ navigation }) => {

    const snapPoints = useMemo(() => ['50%', '100%'], []);
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
            <StatusBar backgroundColor={COLOURS.backgroundLight} barStyle={'dark-content'} />

            <ScrollView styles={styles.container}>

                {/* <View style={""}> */}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false, listener: handleSlideChange }
                    )} scrollEventThrottle={16}>
                    {IMAGES.map((image, index) => (
                        <Image source={image} style={styles.image} key={index} />
                    ))}
                </ScrollView>
                <View style={styles.noti_ground}>
                    <View style={{}}>
                        <TouchableOpacity style={styles.bar_ground} activeOpacity={0.8} onPress={() => navigation.goBack()}>
                            <MaterialIcons name='keyboard-arrow-left' style={styles.name} tintColor={COLOURS.white} />
                        </TouchableOpacity>
                    </View>
                    <View style={{}}>
                        <TouchableOpacity style={styles.bar_ground} activeOpacity={0.8}>
                            <MaterialCommunityIcons name='cards-heart-outline' style={styles.bar_img} />
                        </TouchableOpacity>
                    </View>

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
            </ScrollView>
            <>
                <GestureHandlerRootView style={{ backgroundColor: COLOURS.white, height: '65%', paddingVertical: 10, }}>
                    <BottomSheet
                        index={0}
                        snapPoints={snapPoints}>

                        <Animatable.View

                            animation='zoomIn'
                            delay={2000}
                            style={{ backgroundColor: '#fff' }}
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
                        <ScrollView backgroundColor={COLOURS.blue}>
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
                                    In this video, I'll create a detailed trip information screen with a beautiful appearance effect.
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen

                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements on the screen
                                    I also used the Bottom Sheet and Reanimated 2 packages to animate the appearance of elements
                                    .</Text>
                            </Animatable.View>
                        </ScrollView>
                    </BottomSheet>
                </GestureHandlerRootView>
            </>

        </>
    )
}

export default ServiceInfo

const styles = StyleSheet.create({

    container: {
        // height: '100%',
        backgroundColor: COLOURS.white,
    },
    image: {
        width: 350,
        height: 250,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    dotContainer: {
        bottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        width: INACTIVE_DOT_SIZE,
        height: INACTIVE_DOT_SIZE,
        width: ACTIVE_DOT_WIDTH,
        height: ACTIVE_DOT_HEIGHT,
        paddingHorizontal: ACTIVE_DOT_PADDING,
    },

    noti_ground: {
        top: 10,
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'space-between',
    },

    bar_ground: {
        width: 40,
        height: 40,
        padding: 7,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOURS.blue,
    },

    name: {
        fontSize: 25,
        color: COLOURS.white,
    },

    bar_img: {
        fontSize: 25,
        color: COLOURS.white,
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
