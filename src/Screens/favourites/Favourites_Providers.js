import React, { useContext } from 'react';
import { fav_providers } from '../../Backend/data';
import themeContext from '../../Toggle/themeContext';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import styles from '../../css/favourites/favouriteprovider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, StatusBar, Text, TouchableOpacity, View, SafeAreaView, FlatList, ImageBackground } from 'react-native';


const Favourites_Providers = () => {

    const navigation = useNavigation();
    const theme = useContext(themeContext);

    const onClickItem = (item) => {
        navigation.navigate('Favourites_Providers_Details', { id: item.id })
    }

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
                            <Text style={[styles.acc_name, { color: theme.colorwhite }]}>Favourite providers</Text>
                        </View>

                    </View>

                    <View style={styles.space_manage}></View>

                    <View>
                        <FlatList data={fav_providers}
                            numColumns={2}
                            style={styles.btm_space}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <Animatable.View animation={'zoomIn'}>
                                        <TouchableOpacity onPress={() => onClickItem(item)} activeOpacity={0.7}>
                                            <View style={[styles.bg_provider_container, { backgroundColor: theme.lightblack_card }]} key={item.id} >
                                                <View style={styles.bg_here_radius}>
                                                    <ImageBackground source={item.provider_profile} style={styles.bg_fav_prvder_img} >
                                                        <View style={styles.end_set}>
                                                            <TouchableOpacity activeOpacity={0.7} style={[styles.pressn_btn_fav, { backgroundColor: theme.lightblack }]}>
                                                                <Image source={require('../../images/love.png')} style={styles.fav_heart_img} />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </ImageBackground>
                                                </View>

                                                <View>
                                                    <Text style={[styles.name_here_prvdr, { color: theme.colorwhite }]}>{item.provider_name}</Text>
                                                </View>

                                                <View style={styles.bg_area_fav_provder}>
                                                    <TouchableOpacity activeOpacity={0.7} style={[styles.fav_area_bg, { backgroundColor: theme.lightblack_btn }]}>
                                                        <Image source={require('../../images/phone-call.png')} style={styles.phone_img} tintColor={theme.colorblue} />
                                                    </TouchableOpacity>

                                                    <TouchableOpacity activeOpacity={0.7} style={[styles.fav_area_bg, { backgroundColor: theme.lightblack_btn }]}>
                                                        <Image source={require('../../Bold/envelope.png')} style={styles.phone_img} tintColor={theme.colorblue} />
                                                    </TouchableOpacity>
                                                </View>

                                            </View>
                                        </TouchableOpacity>
                                    </Animatable.View>
                                )
                            }}
                        />

                    </View>

                </View>
            </SafeAreaView>
        </>
    )
}

export default Favourites_Providers