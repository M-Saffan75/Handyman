import { COLOURS } from '../ThemeColour/Theme';
import React, { useContext, useState } from 'react'
import { EventRegister } from 'react-native-event-listeners';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'
import themeContext from '../Toggle.js/themeContext';


const DarkTheme = ({ navigation }) => {

    const [darkmode, setDarkMode] = useState(false);

    const theme = useContext(themeContext)

    return (
        <View style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor:theme.backgroundColor }}>


            <Switch value={darkmode} onValueChange={(value) => {
                setDarkMode(value)
                EventRegister.emit('changeTheme' , value)
                }} />


            <Text style={{ color: COLOURS.black }}>DarkTheme Here</Text>
            <TouchableOpacity activeOpacity={0.6} style={styles.login_here_btn} onPress={() => navigation.navigate('ServiceInfo')}>
                <Text style={styles.login_here}>Login </Text>
            </TouchableOpacity>
        </View>
    )
}

export default DarkTheme

const styles = StyleSheet.create({

    login_here_btn: {
        height: 50,
        padding: 15,
        marginTop: 50,
        width: '100%',
        borderRadius: 30,
        backgroundColor: COLOURS.blue,
    },

    login_here: {
        fontSize: 13,
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
    },
})