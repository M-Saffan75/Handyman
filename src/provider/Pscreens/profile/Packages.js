import Menu from '../../component/Menu';
import React, { useContext, useState } from 'react';
import styles from '../../Pcss/payment/jobrequest';
import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { provider_all_booking, requestjobs } from '../../Pbackend/P_Data';
import { Image, ScrollView, StatusBar, TextInput, Text, TouchableOpacity, View, SafeAreaView, FlatList } from 'react-native'


const Packages = () => {

    const navigation = useNavigation()
    const theme = useContext(themeContext);

    // const onClick = (item) => {
    //     navigation.navigate('P_Bookings_Categorie', { id: item.id })
    // }

    const onClick = () => {
        navigation.navigate('Edit_Package')
    }

    const [isMenuVisible, setMenuVisible] = useState(false);

    const handlePressOne = () => {
        console.log('one')
    };

    const handlePressTwo = () => {
        console.log('two')
    };

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

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
                            <Text style={[styles.acc_name, { color: COLOURS.white }]}>Packages</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Create_Packages')}>
                            <Image source={require('../../../images/plus.png')} style={styles.menu_img} tintColor={COLOURS.white} />
                        </TouchableOpacity>
                    </View>

                    {/*  */}

                    <FlatList data={provider_all_booking}
                        style={styles.space_down}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <Animatable.View duration={1000} animation={'zoomIn'}>
                                    <TouchableOpacity style={[styles.review_area, { backgroundColor: theme.lightblack_card }]} key={item.id} activeOpacity={0.7} onPress={() => onClick(item)}>
                                        <View style={styles.profl_info_review}>
                                            <View>
                                                <Image source={item.booking_user_profile} style={styles.prfle_book_here_one} />
                                            </View>
                                            <View style={styles.small_info__reivew}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                                    <View style={{ flexDirection: 'column' }}>
                                                        <Text style={[styles.rvie_name, { color: theme.colorblue }]}>{item.service}</Text>
                                                        <Text style={[styles.rvie_name, { color: theme.colorblue }]}>{'$ ' + item.price + '.00'}</Text>
                                                    </View>
                                                    <TouchableOpacity onPress={toggleMenu} activeOpacity={0.6}>
                                                        <Image source={require('../../../images/dots.png')} style={styles.menu_img} tintColor={theme.colorblue} />
                                                        <View style={styles.menu_set}>
                                                            {/* <Menu
                                                                toggleMenu={toggleMenu}
                                                                onPress_one={handlePressOne}
                                                                onPress_two={handlePressTwo}
                                                                isMenuVisible={isMenuVisible}
                                                                setMenuVisible={setMenuVisible}
                                                                label_1={'edit'} label_2={'delete'} label_3={'disabled'}
                                                                label_1_img={require('../../../images/edit_text.png')}
                                                                label_2_img={require('../../../Filled/trash.png')}
                                                                label_3_img={require('../../../images/disabled.png')}
                                                            /> */}
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
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

export default Packages
