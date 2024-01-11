import styles from '../../Pcss/userprofile/profile'
import ModalBox from '../../../ThemeColour/ModalBox'
import React, { useContext, useState, } from 'react'
import { COLOURS } from '../../../ThemeColour/Theme'
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext'
import { useNavigation } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Image, Linking, Modal, ScrollView, StatusBar, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'

const P_Drawer = () => {

  const theme = useContext(themeContext);
  const navigation = useNavigation()
  const [logoutVisible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const openlogout = () => {
    setVisible(true);
  }


  return (
    <>
      <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />

      <SafeAreaView>

        <View style={[styles.top_header, { backgroundColor: COLOURS.blue }]}>
          <View style={styles.vrsn_name_accnt_box}>
            <Text style={[styles.accnt_name, { color: COLOURS.white }]}>My Account</Text>
          </View>

          <View style={styles.profle_versn}>
            <Text style={[styles.prfl_setng, { color: COLOURS.white }]}>Profile Setting & more</Text>
          </View>
        </View>

        <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>

          <Animatable.View style={styles.profile_container} duration={1000} animation={'slideInUp'}>

            <View style={[styles.profile_box]}>

              <View style={[styles.profile_all_in_one, { borderColor: theme.colorblue }]}>
                <Image source={require('../../../images/star.png')} style={styles.star} />
                <Image source={require('../../../images/22.jpg')}
                  style={styles.profile_image} resizeMode='contain' />
                <TouchableOpacity activeOpacity={0.6} style={[styles.plus_icon_one_bg, { backgroundColor: COLOURS.blue, borderColor: COLOURS.white }]} onPress={() => navigation.navigate('P_Edit_Profile')}>
                  <Image source={require('../../../images/edit_text.png')} style={[styles.plus_icon_one,]} tintColor={COLOURS.white} />
                </TouchableOpacity>
              </View>

            </View>

            <View style={styles.name_email_text_bg}>
              <Text style={[styles.provder_name_text, { color: theme.colorblue }]}>provider demo</Text>
              <Text style={styles.provder_email_text}>demo@gmail.com</Text>
            </View>

            <View style={[styles.plan_area_bg, { backgroundColor: theme.lightblack }]}>
              <View style={styles.row_plan_card}>
                <Text style={styles.plan_text}>current plan</Text>
                <Text style={[styles.valid_text, { color: COLOURS.grey }]}>valid till</Text>
              </View>
              <View style={styles.row_plan_card}>
                <Text style={[styles.plan_text, { color: theme.colorwhite }]}>free plan</Text>
                <Text style={[styles.valid_text, { color: COLOURS.blue }]}>21 june 2022 </Text>
              </View>
            </View>

            <View style={[styles.menu_one, { backgroundColor: theme.lightblack }]}>

              <View style={[styles.information_here,]}>
                <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Subscription')}>
                  <View style={styles.user_here_box}>
                    <Image source={require('../../../images/menu.png')} style={[styles.user_icon_img_one,]} tintColor={theme.colorblue} />
                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>subscription history</Text>
                  </View>
                  <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Favourites_Services')}>
                  <View style={styles.user_here_box}>
                    <Image source={require('../../../Bold/inbox.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>verify your id</Text>
                  </View>
                  <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Provider_Service_All')}>
                  <View style={styles.user_here_box}>
                    <Image source={require('../../../Bold/sort-descending.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>services</Text>
                  </View>
                  <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                </TouchableOpacity>


                {/*  */}

                <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Online_All_Handy')}>
                  <View style={styles.user_here_box}>
                    <Image source={require('../../../Bold/users.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>handyman list</Text>
                  </View>
                  <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                </TouchableOpacity>

                {/*  */}

                {/*  */}

                <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Packages')}>
                  <View style={styles.user_here_box}>
                    <Image source={require('../../../Bold/package.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>packages</Text>
                  </View>
                  <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                </TouchableOpacity>

                {/*  */}
                <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={openModal}>
                  <View style={styles.user_here_box}>
                    <FontAwesome5 name='exchange-alt' style={[styles.user_icon, { color: theme.colorblue }]} />
                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>App Theme</Text>
                  </View>
                  <Image
                    source={
                      theme.theme === 'dark'
                        ? require('../../../images/dark-moon.png')
                        : require('../../../images/sun.png')
                    }
                    style={styles.prifile_arrow_icon} tintColor={theme.colorblue} />
                </TouchableOpacity>
                {/*  */}

                <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => Linking.openURL("http://play.google.com/store/apps/details?id=<com.MagichianHub>")}>
                  <View style={styles.user_here_box}>
                    <Image source={require('../../../images/star.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>Rate us</Text>
                  </View>
                  <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                </TouchableOpacity>
                {/*  */}

                {/*  */}
                <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Service_Address')}>
                  <View style={styles.user_here_box}>
                    <Image source={require('../../../Bold/map-marker.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>services addresses</Text>
                  </View>
                  <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                </TouchableOpacity>
                {/*  */}
                {/*  */}
                <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate("Job_Request_All")}>
                  <View style={styles.user_here_box}>
                    <Image source={require('../../../Bold/chart-pie.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>bid list</Text>
                  </View>
                  <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate("Taxes")}>
                  <View style={styles.user_here_box}>
                    <Image source={require('../../../Bold/discount.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>taxes</Text>
                  </View>
                  <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate("P_Change_Password")}>
                  <View style={styles.user_here_box}>
                    <Image source={require('../../../Bold/lock.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>change password</Text>
                  </View>
                  <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate("About_Details")}>
                  <View style={styles.user_here_box}>
                    <Image source={require('../../../Bold/info-circle.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>about</Text>
                  </View>
                  <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={[styles.user_detail, { borderBottomWidth: 0 }]}>
                  <View style={styles.user_here_box}>
                    <Image source={require('../../../images/shopping-cart.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>purchase full source code</Text>
                  </View>
                  <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                </TouchableOpacity>
                {/*  */}

              </View>


              {/*  */}
              <View>


              </View>
            </View>

            <View style={styles.danger_zone_bg_area}>
              <Text style={styles.help_one}>danger zone</Text>
            </View>

            <View style={[styles.side_space, { backgroundColor: theme.lightblack }]} >
              <TouchableOpacity activeOpacity={0.7} style={[styles.user_detail, { borderBottomWidth: 0, }]}>
                <View style={styles.user_here_box}>
                  <Image source={require('../../../images/disabled.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                  <Text style={[styles.user_name, { color: theme.colorwhite }]}>delete account</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.logout_bg}>
              <TouchableOpacity activeOpacity={0.4} onPress={openlogout}>
                <Text style={[styles.logout_text_here,{color:theme.colorblue}]}>Logout</Text>
              </TouchableOpacity>
              <Text style={[styles.version, { color: COLOURS.grey }]}>Version V.2.9.20</Text>
            </View>
          </Animatable.View>

          <ModalBox modalVisible={modalVisible} setModalVisible={setModalVisible} />
          {/* Modal Here To COngratulation start*/}

          <Modal visible={logoutVisible} animationType="fade" transparent={true}>

            <View style={[styles.modalContainer]}>
              <View style={[styles.modal, { backgroundColor: theme.lightblack }]}>
                <View>
                  <View style={styles.imag_lock}>
                    <Image source={require('../../../images/logout_logo.png')} style={styles.congrats_done} resizeMode='cover' />
                  </View>
                  <Text style={[styles.congrat_text, { color: theme.colorwhite }]}>oh no, you are leaving!</Text>
                  <Text style={[styles.ready_ride, { color: COLOURS.grey }]}>do you want to logout ?</Text>
                  <View style={styles.btn_up_area}>
                    <TouchableOpacity style={[styles.book_btn, { backgroundColor: theme.lightblack_card }]} activeOpacity={0.6} onPress={() => setVisible(false)}>
                      <Text style={[styles.book_btn_text, { color: theme.colorwhite }]}>no</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.book_btn, { backgroundColor: COLOURS.blue }]} activeOpacity={0.6} onPress={() => navigation.navigate('Login')}>
                      <Text style={[styles.book_btn_text, { color: COLOURS.white }]}>yes</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>

          {/* Modal Here To COngratulation start*/}

        </ScrollView>
      </SafeAreaView >
    </>
  )
}

export default P_Drawer