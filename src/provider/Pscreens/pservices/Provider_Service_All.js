import React, { useContext } from 'react';
import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import { Provider_services } from '../../Pbackend/P_Data';
import styles from '../../Pcss/providerservices/providerserviceall';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, StatusBar, Text, TouchableOpacity, View, SafeAreaView, ImageBackground, FlatList } from 'react-native';


const Provider_Service_All = () => {

    const navigation = useNavigation()
    const theme = useContext(themeContext);


    const onClickItem = (item) => {
        navigation.navigate('Provider_Service_Details', { id: item.id })
    }


    return (
        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <SafeAreaView>

                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>

                    <View style={styles.bg_area_book}>
                        <View style={styles.arrow_area}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <Text style={[styles.acc_name, { color: COLOURS.white }]}>all services</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('P_Service_Add')}>
                            <Image source={require('../../../images/plus.png')} style={styles.menu_img} tintColor={COLOURS.white} />
                        </TouchableOpacity>
                    </View>
                    {/*  */}

                    <FlatList
                        data={Provider_services}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        style={styles.space_around}
                        renderItem={({ item }) => {
                            return (
                                <Animatable.View duration={1000} animation={'zoomIn'}>
                                    <TouchableOpacity style={[styles.featur_bg_area_one, { backgroundColor: theme.lightblack }]} activeOpacity={0.7} onPress={() => onClickItem(item)}>
                                        <ImageBackground source={item.bg_service} style={styles.bg_img_content_area_one} resizeMode='cover'>
                                            <View style={styles.out_line_btn_one}>
                                                <TouchableOpacity activeOpacity={0.7} style={[styles.pressn_btn_one, { backgroundColor: theme.lightblack }]}>
                                                    <Text style={[styles.prfeson_name_one, { color: theme.colorblue }]}>{item.title}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </ImageBackground>
                                        <View style={styles.prver_detail_area_one}>
                                            <View style={styles.prvder_rat_one}>
                                                <Image source={require('../../../images/star.png')} style={styles.rat_prodivder_img_one} />
                                                <Image source={require('../../../images/star.png')} style={styles.rat_prodivder_img_one} />
                                                <Image source={require('../../../images/star.png')} style={styles.rat_prodivder_img_one} />
                                                <Image source={require('../../../images/star.png')} style={styles.rat_prodivder_img_one} />
                                                <Image source={require('../../../images/star.png')} style={styles.rat_prodivder_img_one} />
                                            </View>
                                            <TouchableOpacity activeOpacity={0.7} style={styles.charg_balanc_btn_one}>
                                                <Text style={styles.charg_balanc_one}>{'$' + item.price + '.00'}</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={styles.space_some_text_one}>
                                            <Text style={[styles.Profeson_title_one, { color: theme.colorblue }]}>{item.full_title}</Text>
                                        </View>

                                    </TouchableOpacity>
                                </Animatable.View>
                            )
                        }}
                    />
                    {/*  */}
                </View>
            </SafeAreaView>

        </>
    )
}

export default Provider_Service_All