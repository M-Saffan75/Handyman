import React from 'react';
import { COLOURS } from '../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, StatusBar } from 'react-native';

const Change_Password = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor={'#eee'} barStyle='dark-content' />

            <ScrollView style={{ height: '100%', backgroundColor: COLOURS.white }}>

                <View style={{ height: '100%', width: '100%', backgroundColor: COLOURS.white }}>

                    <View style={styles.nav_notifi}>
                        <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                            <MaterialIcons name='keyboard-arrow-left' style={styles.name_icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.child_container}>
                        <View>
                            <Text style={styles.frgt_name}>Change Password</Text>
                        </View>

                        <Text style={styles.pswd_name}>New Password</Text>
                        <Animatable.View animation={''} delay={2000} >
                            <View>
                                <TextInput placeholder='New Password' placeholderTextColor={COLOURS.grey}
                                    style={styles.inpt_here}
                                />
                            </View>
                        </Animatable.View>

                        <Text style={styles.cnfrmpswd_name}>Confirm Password</Text>
                        <Animatable.View animation={''} >
                            <View>
                                <TextInput placeholder='Confirm Password' placeholderTextColor={COLOURS.grey}
                                    style={styles.inpt_here}
                                />
                            </View>
                        </Animatable.View>

                        <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
                            <Text style={styles.btn_text}>Change </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </>
    )
}

export default Change_Password

const styles = StyleSheet.create({

    child_container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    nav_notifi: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btn_align: {
        marginHorizontal: 20,
        alignSelf: 'flex-start',
    },

    name_icon: {
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
        backgroundColor: COLOURS.peach,
    },

    frgt_name: {
        fontSize: 25,
        marginTop: 60,
        letterSpacing: .5,
        paddingVertical: 10,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
    },

    pswd_name: {
        width: '100%',
        fontSize: 16,
        marginTop: 40,
        paddingVertical: 10,
        paddingHorizontal: 30,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
    },

    cnfrmpswd_name: {
        width: '100%',
        fontSize: 16,
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
    },

    inpt_here: {
        width: 300,
        borderWidth: 1.2,
        borderRadius: 30,
        letterSpacing: .3,
        marginVertical: 5,
        color: COLOURS.black,
        paddingHorizontal: 15,
        borderColor: COLOURS.blue,
        fontFamily: 'Roboto-Regular',
    },

    btn: {
        width: 300,
        marginTop: 30,
        borderRadius: 30,
        borderColor: COLOURS.blue,
        backgroundColor: COLOURS.blue,
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