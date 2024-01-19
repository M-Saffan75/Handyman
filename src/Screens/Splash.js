import themeContext from '../Toggle/themeContext';
import React, { useContext, useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, Image, View, StatusBar } from 'react-native';


const Splash = ({ navigation }) => {

    const theme = useContext(themeContext);

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 1000);
    }, [])

    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView>
                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
                    <Image source={require('../images/splash-4.png')} style={styles.splash_img} resizeMode='contain'/>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Splash

const styles = StyleSheet.create({

    splash_img: {
        height: '40%',
        width: '100%',
    },

    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
})