import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
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

const ImageSlider = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
            >
                {IMAGES.map((image, index) => (
                    <Image source={image} style={styles.image} key={index} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        width: 340,
        height: 150,
        // elevation: 35,
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: COLOURS.white,
    },
});

export default ImageSlider;
