import styles from '../../Pcss/payment/jobrequest';
import { requestjobs } from '../../Pbackend/P_Data';
import { COLOURS } from '../../../ThemeColour/Theme';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useContext, useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView, StatusBar, TextInput, Text, TouchableOpacity, Modal, View, SafeAreaView } from 'react-native'

const Job_Request_Details = ({ route }) => {


    const { id } = route.params
    const navigation = useNavigation()
    const theme = useContext(themeContext);
    const [requestdetails, setRequestDetails] = useState(null)
    const selectedItem = requestjobs.find(item => item.id === id);

    useEffect(() => {
        setRequestDetails(selectedItem);
        console.log(selectedItem)
    }, [selectedItem]);


    const [isModalVisible, setIsModalVisible] = useState(false);


    const handleOpenModal = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
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
                            <Text style={[styles.acc_name, { color: COLOURS.white }]}>{requestdetails?.service_name}</Text>
                        </View>
                    </View>

                    <View style={[styles.request_card, { backgroundColor: theme.lightblack }]}>
                        <Text style={styles.title}>post job title</Text>
                        <Text style={[styles.title_text, { color: theme.colorwhite }]}>{requestdetails?.service_name}</Text>
                        <Text style={styles.title}>post job description</Text>
                        <Text style={[styles.title_text, { color: theme.colorwhite }]}>{requestdetails?.description}</Text>
                        <Text style={styles.title}>post estimated price</Text>
                        <Text style={[styles.title_text, { color: theme.colorwhite }]}>{'$' + requestdetails?.price + '.00'}</Text>
                    </View>

                    <View style={styles.see_categorie}>
                        <View>
                            <Text style={[styles.categories, { color: theme.colorblue }]}>service</Text>
                        </View>
                    </View>

                    <View style={[styles.bg_service, { backgroundColor: theme.lightblack }]}>
                        <Image source={requestdetails?.service_profile} style={styles.srvce_request_img} />
                        <Text style={[styles.name_service, { color: theme.colorwhite }]}>{requestdetails?.service_name}</Text>
                    </View>
                    <View style={styles.btn_center}>
                        <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={handleOpenModal}>
                            <Text style={styles.btn_text}>bid</Text>
                        </TouchableOpacity>
                    </View>
                
                {/*  */}
                    
                {/*  */}

                </View>



                {/*  */}
                <Modal onRequestClose={handleOpenModal} animationType="fade" transparent={true} visible={isModalVisible}>
                    <View style={[styles.modalContainer]}>
                        <View style={[styles.modal, { backgroundColor: theme.lightblack_card }]}>
                            <View>
                                <Text style={styles.estimated_price}>give your estimated price here !</Text>
                                <TextInput
                                    placeholder={'Enter Bid Price'}
                                    placeholderTextColor={COLOURS.grey}
                                    style={[styles.textarea, { color: theme.colorwhite }]} keyboardType='phone-pad' maxLength={5}/>

                                <View style={styles.btn_bottom_here_area}>
                                    <TouchableOpacity activeOpacity={0.8} style={[styles.canel_btn_here, { backgroundColor: COLOURS.Lightgrey }]} onPress={handleCloseModal} >
                                        <Text style={[styles.canel_btn_text, { color: COLOURS.black }]}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8} style={[styles.canel_btn_here, { backgroundColor: COLOURS.blue }]} onPress={handleCloseModal} >
                                        <Text style={[styles.canel_btn_text, { color: COLOURS.white }]}>confirm</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </Modal>

                {/*  */}
            </SafeAreaView>
        </>
    )
}

export default Job_Request_Details