import { COLOURS } from '../../ThemeColour/Theme';
import { privacypolicy } from '../../Backend/data';
import themeContext from '../../Toggle/themeContext';
import React, { useState, useContext } from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import styles from '../../css/privacypolicy/privacypolicy';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StatusBar, SafeAreaView, Text, TouchableOpacity, View, FlatList } from 'react-native';


const Privacy_Policy = () => {

    const navigation = useNavigation()
    const theme = useContext(themeContext)

    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            {/* <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} /> */}
            <SafeAreaView>

                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={styles.arrow_area}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <Text style={[styles.acc_name, { color: COLOURS.white }]}>Privacy policy</Text>
                        </View>
                    </View>

                    <FlatList
                        data={privacypolicy}
                        alwaysBounceVertical={true}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <View>
                                <Text style={[styles.heading, { color: theme.colorwhite }]}>{`${index + 1}. ${item.heading}`}</Text>
                                <Text style={[styles.paragraph, { color: theme.colorwhite }]}>{item.paragraph_policy}</Text>
                            </View>
                        )}
                    />

                </View>

                {/* <View style={styles.space_down} /> */}

            </SafeAreaView>
        </>
    )
}

export default Privacy_Policy