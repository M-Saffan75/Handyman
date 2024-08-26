import React, { useContext } from 'react';
import { featued_items } from '../../Backend/data';
import themeContext from '../../Toggle/themeContext';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import styles from '../../css/favourites/favouriteservice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, StatusBar, Text, TouchableOpacity, View, SafeAreaView, FlatList, ImageBackground } from 'react-native';


const Featured_All = () => {

    const navigation = useNavigation();
    const theme = useContext(themeContext);

    const onClickItem = (item) => {
        navigation.navigate('Featured_Details', { id: item.id })
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
                            <Text style={[styles.acc_name, { color: theme.colorwhite }]}>All Features</Text>
                        </View>
                    </View>

                    <View style={styles.space_manage}></View>
                    <FlatList
                        data={featued_items}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        style={styles.space_around}
                        renderItem={({ item }) => {
                            return (
                                <Animatable.View animation={'zoomIn'}>
                                    <TouchableOpacity style={[styles.featur_bg_area_one, { backgroundColor: theme.lightblack }]} activeOpacity={0.8} onPress={() => onClickItem(item)}>
                                        <ImageBackground source={item.bg_service} style={styles.bg_img_content_area_one} resizeMode='cover'>
                                            <View style={styles.out_line_btn_one}>
                                                <TouchableOpacity activeOpacity={10} style={[styles.pressn_btn_one, { backgroundColor: theme.lightblack }]}>
                                                    <Text style={[styles.prfeson_name_one, { color: theme.colorblue }]}>
                                                        {item.title.length > 12 ? `${item.title.slice(0, 12)}...` : item.title}
                                                    </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity activeOpacity={0.9} style={[styles.pressn_btn_fav, { backgroundColor: theme.lightblack }]}>
                                                    <Image source={require('../../Bold/heart.png')} style={styles.fav_heart_img} tintColor={theme.colorblue} />
                                                </TouchableOpacity>
                                            </View>
                                        </ImageBackground>
                                        <View style={styles.prver_detail_area_one}>
                                            <View style={styles.prvder_rat_one}>
                                                <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img_one} />
                                                <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img_one} />
                                                <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img_one} />
                                                <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img_one} />
                                                <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img_one} />
                                            </View>
                                            <TouchableOpacity activeOpacity={0.9} style={styles.charg_balanc_btn_one}>
                                                <Text style={styles.charg_balanc_one}>{'$' + item.price + '.00'}</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={styles.space_some_text_one}>
                                            <Text style={[styles.Profeson_title_one, { color: theme.colorblue }]}>{item.full_title}</Text>
                                            <View style={styles.profile_prodr_area_one}>
                                                <Image source={item.service_profile} style={styles.profile_prodr_one} />
                                                <Text style={styles.profile_prodr_name_one}>{item.handyman}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </Animatable.View>
                            )
                        }}
                    />

                </View>
            </SafeAreaView>
        </>
    )
}

export default Featured_All