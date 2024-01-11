import React, { useContext, useState } from 'react';
import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import styles from '../../Pcss/userprofile/serviceaddress';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, StatusBar, Text, Switch, Modal, TouchableOpacity, View, SafeAreaView, TextInput, } from 'react-native';



const Service_Address = () => {

    const navigation = useNavigation()
    const theme = useContext(themeContext);

    const [logoutVisible, setVisible] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };

    const openlogout = () => {
        setVisible(true);
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
                            <Text style={[styles.acc_name, { color: COLOURS.white }]}>service addresses</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.7} onPress={openlogout}>
                            <Image source={require('../../../images/plus.png')} style={styles.menu_img} tintColor={COLOURS.white} />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.location_row_bg, { backgroundColor: theme.lightblack }]}>
                        <View style={styles.location_row}>
                            <Text style={[styles.location_text, { color: theme.colorblue }]}>America, Paris</Text>
                            <Switch
                                trackColor={{ false: COLOURS.grey, true: COLOURS.blue }}
                                thumbColor={isEnabled ? COLOURS.white : COLOURS.grey}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                                value={isEnabled}
                            />
                        </View>
                        <View style={styles.edit_row}>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Text style={[styles.edit_text, { backgroundColor: theme.lightblack_card, color: theme.colorblue }]}>edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Text style={[styles.edit_text, { backgroundColor: theme.lightblack_card, color: theme.colorblue }]}>delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Modal Here To COngratulation start*/}

                    <Modal visible={logoutVisible} animationType="fade" transparent={true}>

                        <View style={[styles.modalContainer]}>
                            <View style={[styles.modal, { backgroundColor: theme.lightblack }]}>
                                <View>
                                    <View style={[styles.add_row, { backgroundColor: COLOURS.blue }]}>
                                        <Text style={styles.add_service_text}>add service address</Text>
                                        <TouchableOpacity activeOpacity={0.7} onPress={() => setVisible(false)}>
                                            <Image source={require('../../../Bold/times-square.png')} style={styles.cross_img} tintColor={COLOURS.white} />
                                        </TouchableOpacity>
                                    </View>
                                    <TextInput placeholder={'Address'} placeholderTextColor={'grey'} style={[styles.inpt_here, { backgroundColor: theme.lightblack_card, color: theme.colorblue }]} />
                                </View>
                                {/* <View style={styles.btn_align}> */}
                                <TouchableOpacity activeOpacity={0.7} style={[styles.add_bg, { backgroundColor: COLOURS.blue }]} onPress={() => setVisible(false)}>
                                    <Text style={styles.add_text}>Add</Text>
                                </TouchableOpacity>
                                {/* </View> */}
                            </View>
                        </View>
                    </Modal>

                    {/* Modal Here To COngratulation start*/}
                </View>
            </SafeAreaView>

        </>
    )
}

export default Service_Address