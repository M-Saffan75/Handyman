import React, { useContext } from 'react';
import styles from '../../Pcss/userprofile/taxes';
import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View, SafeAreaView, FlatList, } from 'react-native'

const Taxes = () => {

    const navigation = useNavigation();
    const theme = useContext(themeContext);

    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView>

                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
                    <View>
                        <View style={styles.arrow_area}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <Text style={[styles.acc_name, { color: theme.colorwhite }]}>Taxes</Text>
                        </View>
                    </View>

                    <View style={styles.img_here_bg}>
                        <Image source={require('../../../images/taxes4.png')} style={styles.img_here} resizeMode='contain' />
                        <Text style={[styles.texted_text, { color: COLOURS.grey }]}>no taxes found</Text>
                    </View>

                </View>
            </SafeAreaView>
        </>
    )
}

export default Taxes