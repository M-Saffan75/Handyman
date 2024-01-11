import { all_Chats } from '../../Backend/data';
import styles from '../../css/chat/messagelist';
import { COLOURS } from '../../ThemeColour/Theme';
import themeContext from '../../Toggle/themeContext';
import * as Animatable from 'react-native-animatable';
import React, { useContext, useState, } from 'react';
import { Image, StatusBar, Text, FlatList, TouchableOpacity, View, SafeAreaView } from 'react-native';

const MessageList = ({ navigation }) => {

    const theme = useContext(themeContext);

    const onClickItem = (item) => {
        navigation.navigate('MessageScreen', { id: item.id })
    }

    return (

        <>
            {/* <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} /> */}
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <SafeAreaView>

                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>

                    <View style={[styles.categori_area]}>
                        <Text style={[styles.categori_chat_text, { color: COLOURS.white }]}>chat</Text>
                    </View>

                    <Animatable.View duration={2000} animation={'fadeInUp'}>

                        <FlatList
                            data={all_Chats}
                            showsVerticalScrollIndicator={false}
                            style={styles.btoom_space}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.chat_person_area_container}>
                                        <TouchableOpacity activeOpacity={0.7} key={item.id} onPress={() => onClickItem(item)}>
                                            <View style={styles.chat_person_area}>
                                                <View style={styles.profile_area}>
                                                    <Image source={item.chat_img} style={styles.chat_img_profile} />
                                                    <View style={styles.space_left}>
                                                        <Text style={[styles.chat_name, { color: theme.colorwhite }]}>{item.name}</Text>
                                                        <Text style={[styles.chat_last_msg, { color: COLOURS.grey }]}>
                                                            {item.last_msg.length > 15 ? `${item.last_msg.slice(0, 15)}...` : item.last_msg}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View style={styles.date_time_area}>
                                                    <Text style={[styles.time_text, { color: COLOURS.grey }]}>{item.date} </Text>
                                                    <Text style={[styles.time_text, { color: COLOURS.grey }]}>{item.time}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />
                    </Animatable.View>
                </View>

            </SafeAreaView>
        </>
    )
}

export default MessageList