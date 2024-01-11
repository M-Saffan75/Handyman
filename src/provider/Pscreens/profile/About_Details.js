import React, { useContext } from 'react';
import styles from '../../Pcss/userprofile/about';
import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View, SafeAreaView, FlatList, Linking, } from 'react-native'

const About_Details = () => {


    const navigation = useNavigation();
    const theme = useContext(themeContext);

    return (
        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={ 'light-content'} />
            <SafeAreaView>

                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
                    <View>
                        <View style={styles.arrow_area}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <Text style={[styles.acc_name, { color: COLOURS.white }]}>About</Text>
                        </View>
                    </View>

                    <View style={styles.box_area}>
                        <TouchableOpacity style={[styles.box_terms, { backgroundColor: theme.lightblack }]} activeOpacity={0.7} onPress={() => navigation.navigate("Terms_Conditions")}>
                            <Image source={require('../../../images/document.png')} style={styles.box_img} tintColor={theme.colorblue} />
                            <Text style={[styles.terms_text,{color:theme.colorblue}]}>Terms & COnditions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.box_terms, { backgroundColor: theme.lightblack }]} activeOpacity={0.7} onPress={() => navigation.navigate("Privacy_Policy")}>
                            <Image source={require('../../../Bold/shield.png')} style={styles.box_img} tintColor={theme.colorblue} />
                            <Text style={[styles.terms_text,{color:theme.colorblue}]}>privacy policy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.box_terms, { backgroundColor: theme.lightblack }]} activeOpacity={0.7} onPress={() => navigation.navigate("Faq")}>
                            <Image source={require('../../../images/document.png')} style={styles.box_img} tintColor={theme.colorblue} />
                            <Text style={[styles.terms_text,{color:theme.colorblue}]}>helps & support</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.box_terms, { backgroundColor: theme.lightblack }]} activeOpacity={0.7} onPress={() => Linking.openURL("http://play.google.com/store/apps/details?id=<com.MagichianHub>")}>
                            <Image source={require('../../../Bold/headphones.png')} style={styles.box_img} tintColor={theme.colorblue} />
                            <Text style={[styles.terms_text,{color:theme.colorblue}]}>helpline & number</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.box_terms, { backgroundColor: theme.lightblack }]} activeOpacity={0.7} onPress={() => Linking.openURL("http://play.google.com/store/apps/details?id=<com.MagichianHub>")}>
                            <Image source={require('../../../Bold/star.png')} style={styles.box_img} tintColor={theme.colorblue} />
                            <Text style={[styles.terms_text,{color:theme.colorblue}]}>rate us</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        </>
    )
}

export default About_Details