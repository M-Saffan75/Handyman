import React from 'react';
import { COLOURS } from '../../ThemeColour/Theme';
import auth, { firebase } from '@react-native-firebase/auth';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';


const FacebookSign = () => {

    // 
    const onFacebookButtonPress = async () => {

        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        return auth().signInWithCredential(facebookCredential);
    }


    const signout = async () => {
        firebase.auth().signOut().then(() => {
            // `removeToken`();
            // navigation.replace('Facebook');
            console.log('logout successfully')
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: COLOURS.light }}>
            <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={() => onFacebookButtonPress().then(res => { console.log(res.user) }).catch(error => { console.log(error) })}>
                <Text style={styles.btn_text}>FacebookLogin</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={signout}>
                <Text style={styles.btn_text}>signout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FacebookSign

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