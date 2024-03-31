import { all_Chats } from '../../Backend/data';
import { COLOURS } from '../../ThemeColour/Theme';
import styles from '../../css/chat/messagescreen';
import themeContext from '../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View, SafeAreaView, TextInput } from 'react-native';



const MessageScreen = ({ route }) => {

    const theme = useContext(themeContext);

    const { id } = route.params
    const navigation = useNavigation();
    const [message_data, setMessage_data] = useState(null)
    const selectedItem = all_Chats.find(item => item.id === id);


    useEffect(() => {
        setMessage_data(selectedItem);
    }, [selectedItem]);


    return (
        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <SafeAreaView>

                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>

                    <View style={styles.space_manage}>
                        <View style={styles.chat_herader_area}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                                <MaterialIcons name='keyboard-arrow-left' style={[styles.name_icon, { color: COLOURS.white }]} />
                            </TouchableOpacity>
                            <Image source={message_data?.chat_img} style={styles.chat_profile} />
                            <View style={styles.name_status_area}>
                                <Text style={[styles.name_here, { color: COLOURS.white }]}>{message_data?.name}</Text>
                                <Text style={styles.name_status}>{message_data?.status}</Text>
                            </View>
                        </View>

                        <TouchableOpacity activeOpacity={0.7}>
                            <Image source={require('../../images/dots.png')} style={styles.menu_img} tintColor={COLOURS.white} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <>
                            <ScrollView showsVerticalScrollIndicator={false} vertical>
                                <View style={styles.msges_here_bg}>
                                    <Text style={[styles.msges_here_text, { backgroundColor: theme.lightblack ,color:theme.colorblue}]}>hey !</Text>
                                </View>

                                <View style={styles.msges_here_bg}>
                                    <Text style={[styles.msges_here_text, { backgroundColor: theme.lightblack ,color:theme.colorblue}]}>hey ! men where are you </Text>
                                </View>

                                <View style={styles.msges_here_bg_one}>
                                    <Text style={[styles.msges_here_text_one, { color: COLOURS.white }]}>i am just here </Text>
                                </View>

                                <View style={styles.msges_here_bg}>
                                    <Text style={[styles.msges_here_text, { backgroundColor: theme.lightblack ,color:theme.colorblue}]}>hey where are you ?</Text>
                                </View>

                                <View style={styles.msges_here_bg_one}>
                                    <Text style={[styles.msges_here_text_one, { color: COLOURS.white }]}>how can i help you ?</Text>
                                </View>

                                <View style={styles.msges_here_bg}>
                                    <Text style={[styles.msges_here_text, { backgroundColor: theme.lightblack ,color:theme.colorblue}]}>i need you for doing work </Text>
                                </View>

                                <View style={styles.msges_here_bg_one}>
                                    <Text style={[styles.msges_here_text_one, { color: COLOURS.white }]}>ok! i am just coming </Text>
                                </View>

                                <View style={styles.msges_here_bg}>
                                    <Text style={[styles.msges_here_text, { backgroundColor: theme.lightblack ,color:theme.colorblue}]}>this is my address ?</Text>
                                </View>

                                <View style={styles.msges_here_bg_one}>
                                    <Text style={[styles.msges_here_text_one, { color: COLOURS.white }]}>i got it </Text>
                                </View>
                                <View style={styles.msges_here_bg}>
                                    <Text style={[styles.msges_here_text, { backgroundColor: theme.lightblack ,color:theme.colorblue}]}>ok </Text>
                                </View>

                                <View style={styles.msges_here_bg_one}>
                                    <Text style={[styles.msges_here_text_one, { color: COLOURS.white }]}>thanks for choosing handyman </Text>
                                </View>
                            </ScrollView>
                        </>
                        <View style={styles.all_inpt_container}>
                            <View style={[styles.inpt_area_color, { backgroundColor: theme.lightblack }]}>
                                <View style={styles.row_data_inpt}>
                                    <TouchableOpacity activeOpacity={0.7}>
                                        <Image source={require('../../images/smile.png')} style={styles.select_img} tintColor={COLOURS.grey} />
                                    </TouchableOpacity>
                                    <TextInput placeholder='Type something...' style={styles.chat_inpt_here} placeholderTextColor={'grey'} />
                                </View>
                                <View style={styles.row_data_inpt_one}>
                                    <TouchableOpacity activeOpacity={0.7}>
                                        <Image source={require('../../Bold/paperclip.png')} style={styles.select_img} tintColor={COLOURS.grey} />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.7}>
                                        <Image source={require('../../Bold/camera.png')} style={styles.select_img} tintColor={COLOURS.grey} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity activeOpacity={0.7} style={[styles.micro_bg, { backgroundColor: COLOURS.blue }]}>
                                    <Image source={require('../../Bold/microphone.png')} style={styles.select_img} tintColor={COLOURS.white} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* </View> */}

            </SafeAreaView >
        </>
    )
}

export default MessageScreen

