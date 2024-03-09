import { COLOURS } from '../ThemeColour/Theme';
import themeContext from '../Toggle/themeContext';
import React, { useContext, useState, useRef } from 'react';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { View, ScrollView, Image, StyleSheet, Animated, TouchableOpacity, Text, StatusBar } from 'react-native';

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

const Slider = ({ navigation }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const theme = useContext(themeContext);
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
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />

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
                    <TouchableOpacity style={[styles.bar_ground,{backgroundColor:theme.lightblack}]} activeOpacity={0.8} onPress={() => navigation.navigate('Login')}>
                        <Image source={require('../Bold/bell.png')} style={styles.bar_img} tintColor={theme.colorblue} />
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
        width:responsiveWidth(97),
        height:responsiveWidth(50),
        borderRadius: responsiveWidth(3),
        marginHorizontal: responsiveWidth(1.5),
    },
    dotContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        bottom:responsiveWidth(12.5),
    },
    dot: {
        width: INACTIVE_DOT_SIZE,
        height: INACTIVE_DOT_SIZE,
        width: ACTIVE_DOT_WIDTH,
        height: ACTIVE_DOT_HEIGHT,
        paddingHorizontal: ACTIVE_DOT_PADDING,
    },

    noti_ground: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top:responsiveWidth(3),
        right: responsiveWidth(5),
    },

     /*  */

    bar_ground: {
        width:responsiveWidth(11),
        height:responsiveWidth(11),
        padding: responsiveWidth(2),
        borderRadius: responsiveWidth(10),
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: COLOURS.Lightgrey,
    },

    bar_img: {
        width:responsiveWidth(6),
        height: responsiveWidth(6),
    },

    bell_noti: {
        zIndex: 2,
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center',
        left:responsiveWidth(3),
        width: responsiveWidth(5),
        height:responsiveWidth(5),
        bottom: responsiveWidth(4),
        fontFamily:'Roboto-Bold',
        backgroundColor: COLOURS.blue,
        fontSize:responsiveFontSize(1.6),
        borderRadius:responsiveWidth(10),
    },

});

export default Slider;
