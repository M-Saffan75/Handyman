import React, { useContext } from 'react'
import { COLOURS } from '../../ThemeColour/Theme'
import themeContext from '../../Toggle/themeContext';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Image, ScrollView, StatusBar, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native'

const Admin_Support = ({ navigation }) => {

    const theme = useContext(themeContext);

    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />

            <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>
                <View style={styles.nav_notifi}>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                    <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                    </TouchableOpacity>
                </View>

                <Text style={[styles.see, { color: theme.colorblue }]}>
                    How Can we Help ?
                </Text>
                <Text style={[styles.issue, { color: theme.colorwhite }]}>
                    IF You Face Any Issue Regarding Our Application Then you can Freely Contact us we will Improve that thing !
                </Text>

                <View style={[styles.textAreaContainer, {borderColor:theme.colorblue,}]} >
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        style={[styles.textarea,{color:theme.colorwhite}]} />
                </View>

                <View style={styles.Contact_here}>
                    <TouchableOpacity activeOpacity={10} style={styles.cntc_nmber}>
                        <FontAwesome5 name={'phone-alt'} style={styles.icon} />
                        <Text style={[styles.cntc_text, { color: theme.colorgrey }]}>0000-1111-2222</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={10} style={styles.cntc_nmber}>
                        <FontAwesome5 name={'envelope'} style={styles.icon} />
                        <Text style={[styles.cntc_text, { color: theme.colorgrey }]}>xyz@gmail.com</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={10} style={styles.cntc_nmber}>
                        <FontAwesome5 name={'map-marked-alt'} style={styles.icon} />
                        <Text style={[styles.cntc_text, { color: theme.colorgrey }]}> {'41 street New York'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.btn_here}>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
                        <Text style={styles.btn_text}>Message Send </Text>
                    </TouchableOpacity>
                </View>



            </ScrollView>

        </>
    )
}

export default Admin_Support

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: COLOURS.white
    },

    btn_align: {
        marginHorizontal: 20,
        alignSelf: 'flex-start',
    },

    name: {
        width: 40,
        padding: 5,
        fontSize: 30,
        marginTop: 30,
        borderRadius: 7,
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
        backgroundColor: COLOURS.Lightgrey,
    },

    issue: {
        fontSize: 12,
        marginTop: 20,
        lineHeight: 20,
        color: COLOURS.black,
        marginHorizontal: 20,
        fontFamily: 'Roboto-Medium',
    },

    nav_notifi: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    categories: {
        fontSize: 20,
        right: 15,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
    },

    see: {
        padding: 5,
        fontSize: 12,
        fontSize: 20,
        textAlign: 'left',
        color: COLOURS.blue,
        marginHorizontal: 20,
        fontFamily: 'Roboto-Bold',
    },

    textAreaContainer: {
        padding: 5,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        borderColor: COLOURS.blue,
    },

    textarea: {
        height: 100,
        letterSpacing: .1,
        color: COLOURS.black,
        textAlignVertical: 'top',
        fontFamily: 'Roboto-Medium',
    },

    btn_here: {
        alignItems: 'center',
    },

    btn: {
        width: '90%',
        marginTop: 30,
        borderRadius: 30,
        borderColor: COLOURS.blue,
        backgroundColor: COLOURS.blue,
    },

    cntc_nmber: {
        padding: 10,
        width: '50%',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        justifyContent: 'space-around',
    },

    Contact_here: {
        marginTop: 20,
        marginHorizontal: 20,

    },

    cntc_text: {
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium'
    },

    icon: {
        fontSize: 16,
        width: 40,
        color: COLOURS.grey,
    },

    btn_text: {
        color: COLOURS.white,
        fontSize: 12,
        letterSpacing: .5,
        paddingVertical: 15,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
    },

})