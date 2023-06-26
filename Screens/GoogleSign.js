import React, { useEffect } from 'react';
import { COLOURS } from '../ThemeColour/Theme';
import auth from '@react-native-firebase/auth';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const GoogleSign = () => {

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '411355818622-51pn8j1kt2pepfm15alhmdu4q38rjgse.apps.googleusercontent.com',
        })
    }, [])

    // 

    const onGoogleButtonPress = async () => {
        // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(googleCredential);
    }


    const signout = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await auth().signout();
            console.log('sign out success') 
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: COLOURS.light }}>
            <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={() => onGoogleButtonPress().then(res => { console.log(res.user) }).catch(error => { console.log(error) })}>
                <Text style={styles.btn_text}>GoogleSign</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={signout}>
                <Text style={styles.btn_text}>signout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GoogleSign

const styles = StyleSheet.create({
    btn: {
        width: '30%',
        marginVertical: 10,
        paddingVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 14,
        backgroundColor: COLOURS.black
    },

    btn_text: {
        color: COLOURS.white
    },
})