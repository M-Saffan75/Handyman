import { all_booking } from '../../Backend/data';
import { COLOURS } from '../../ThemeColour/Theme';
import themeContext from '../../Toggle/themeContext';
import * as Animatable from 'react-native-animatable';
import styles from '../../css/bookings/bookingdetails';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View, SafeAreaView, Modal, TextInput, } from 'react-native';


const BookingDetails = ({ route }) => {

  const { id } = route.params
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [booking_data, setBooking_data] = useState(null);
  const selectedItem = all_booking.find(item => item.id === id);

  useEffect(() => {
    setBooking_data(selectedItem);
  }, [selectedItem]);

  const go_to_categigorie_view = () => {
    navigation.navigate('Booking_Categorie', { id: id })
  }

  const Booked_details_user = () => {
    navigation.navigate("Booking_User", { id: id })
  }

  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };


  return (
    <>
      <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
      <SafeAreaView>
        <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>

          <View>
            <View style={styles.arrow_area}>
              <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
              </TouchableOpacity>
              <Text style={[styles.acc_name, { color: booking_data?.done === 'Failed' ? COLOURS.red : booking_data?.done === 'pending' ? theme.colorwhite : theme.colorwhite, }]}>{booking_data?.done}</Text>

              {booking_data?.done === 'Failed' ? (
                <MaterialIcons name='error-outline' style={[styles.name, { backgroundColor: theme.backgroundColor, color: COLOURS.red, right: 10 }]} />
              ) : ''
              }
            </View>

            <Animatable.View duration={2000} animation={'fadeInUp'}>

              <View style={styles.all_container_info_booking}>

                <View style={styles.book_data}>
                  <Text style={styles.book_id}>Booking ID</Text>
                  <Text style={styles.book_no}>{booking_data?.serial}</Text>
                </View>

                <TouchableOpacity activeOpacity={0.7} onPress={go_to_categigorie_view}>
                  <View style={[styles.book_underline, { backgroundColor: theme.lightblack }]}></View>
                  <View style={styles.date_time_area}>
                    <View>
                      <Text style={[styles.name_test, { color: theme.colorwhite }]}>{booking_data?.service}</Text>
                      <Text style={[styles.real_date, { color: theme.colorwhite }]}><Text style={styles.date}>Date :  </Text>{booking_data?.service_profilebook_date}</Text>
                      <Text style={[styles.real_date, { color: theme.colorwhite }]}><Text style={styles.date}>Time :  </Text>{booking_data?.service_profilebook_time}</Text>
                    </View>
                    <View>
                      <Image source={booking_data?.bg_booking} style={styles.book_image} />
                    </View>
                  </View>

                  <View style={[styles.book_underline, { backgroundColor: theme.lightblack }]}></View>
                </TouchableOpacity>

              </View>

              <>
                <View style={styles.more_handyman}>
                  <Text style={[styles.more_handyman_text, { color: theme.colorwhite }]}>About Handyman</Text>
                </View>


                <View style={[styles.provider_prfle_area, { backgroundColor: theme.lightblack_card }]}>
                  <View style={styles.short_profl_name_area}>
                    <View>
                      <Image source={require('../../images/four.jpg')} style={styles.prfle_book_here} />
                    </View>

                    <View style={styles.name_icon_area}>
                      <View style={styles.name_icon}>
                        <Text style={[styles.name_demo_text, { color: theme.colorwhite }]}>Provider Handyman</Text>
                        <Image source={require('../../images/letter-i.png')} style={styles.prfle_book_here_alert} tintColor={COLOURS.grey} />
                      </View>

                      <View style={styles.rat_area}>
                        <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                        <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                        <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                        <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                        <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                      </View>
                    </View>
                  </View>

                  <View style={styles.btn_area_group}>

                    <TouchableOpacity activeOpacity={0.7} style={styles.call_img_btn}>
                      <Image source={require('../../images/phone-call.png')} style={styles.call_img} tintColor={COLOURS.white} />
                      <Text style={styles.call_img_text}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={[styles.call_img_btn, { backgroundColor: theme.lightblack_btn }]}>
                      <Image source={require('../../images/messenger.png')} style={styles.call_img} tintColor={theme.colorwhite} />
                      <Text style={[styles.call_img_text, { color: theme.colorwhite }]}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={[styles.call_img_btn, { backgroundColor: theme.lightblack_btn }]}>
                      <Image source={require('../../images/whatsapp.png')} style={styles.call_img} />
                    </TouchableOpacity>

                  </View>

                  <View style={styles.rate_area_container}>
                    <TouchableOpacity style={styles.rate_area} activeOpacity={0.7} onPress={handleOpenModal} >
                      <Text style={[styles.rate_area_text, { color: theme.colorblue }]}>Rate Handyman</Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </>

              <View style={styles.more_handyman}>
                <Text style={[styles.more_handyman_text, { color: theme.colorwhite }]}>About Provider</Text>
              </View>

              <TouchableOpacity activeOpacity={0.8} onPress={Booked_details_user}>
                <View style={[styles.provider_prfle_area, { backgroundColor: theme.lightblack_card }]}>
                  <View style={styles.short_profl_name_area}>
                    <View>
                      <Image source={booking_data?.booking_user_profile} style={styles.prfle_book_here} />
                    </View>

                    <View style={styles.name_icon_area}>
                      <View style={styles.name_icon}>
                        <Text style={[styles.name_demo_text, { color: theme.colorwhite }]}>{booking_data?.handyman}</Text>
                        <Image source={require('../../images/letter-i.png')} style={styles.prfle_book_here_alert} tintColor={COLOURS.grey} />
                      </View>

                      <View style={styles.rat_area}>
                        <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                        <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                        <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                        <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                        <Image source={require('../../images/star.png')} style={styles.rat_prodivder_img} />
                      </View>
                    </View>
                  </View>

                  <View style={styles.mail_area_container}>
                    <View style={styles.mail_area}>
                      <Image source={require('../../Bold/envelope.png')} style={styles.msg_img} tintColor={theme.colorblue} />
                      <Text style={styles.msg_text}>{booking_data?.email}</Text>
                    </View>
                    <View style={styles.mail_area}>
                      <Image source={require('../../Bold/map-marker.png')} style={styles.msg_img} tintColor={theme.colorblue} />
                      <Text style={styles.msg_text}>{booking_data?.city}</Text>
                    </View>
                    <View style={styles.mail_area}>
                      <Image source={require('../../images/phone-call.png')} style={styles.msg_img} tintColor={theme.colorblue} />
                      <Text style={styles.msg_text}>{booking_data?.phone}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <View style={styles.more_handyman}>
                <Text style={[styles.more_handyman_text, { color: theme.colorwhite }]}>price details</Text>
              </View>

              <View style={[styles.price_container_details, { backgroundColor: theme.lightblack_card }]}>
                <View style={styles.prce_area}>
                  <Text style={styles.prce_text}>price</Text>
                  <Text style={[styles.prce_text_here, { color: theme.colorwhite }]}>{'$' + booking_data?.price + '.00'}</Text>
                </View>
                <View style={styles.prce_area}>
                  <Text style={styles.prce_text}>Subtotal</Text>
                  <Text style={[styles.prce_text_here, { color: theme.colorwhite }]}><Text style={{ color: COLOURS.grey }}>$123.00 * 1  </Text> {'$' + booking_data?.subtotal + '.00'}</Text>
                </View>
                <View style={styles.prce_area}>
                  <Text style={styles.prce_text}>discount <Text style={[styles.off_here, { color: COLOURS.green }]}>{'(1% off)'}</Text></Text>
                  <Text style={[styles.prce_text_here, { color: COLOURS.green }]}>{'-$' + booking_data?.discount}</Text>
                </View>
                <View style={styles.prce_area}>
                  <Text style={styles.prce_text}>total extra charges</Text>
                  <Text style={[styles.prce_text_here, { color: theme.colorwhite }]}>{'$' + booking_data?.extra + '.00'}</Text>
                </View>
                <View style={styles.prce_area_one}>
                  <Text style={styles.prce_text}>total</Text>
                  <Text style={[styles.prce_text_here, { color: theme.colorblue }]}>{'$' + booking_data?.total + '.00'}</Text>
                </View>
              </View>


              <View style={styles.more_handyman}>
                <Text style={[styles.more_handyman_text, { color: theme.colorwhite }]}>payment details</Text>
              </View>

              <View style={[styles.price_container_details, { backgroundColor: theme.lightblack_card }]}>
                <View style={styles.prce_area}>
                  <Text style={styles.prce_text}>id</Text>
                  <Text style={[styles.prce_text_here, { color: theme.colorwhite }]}>{booking_data?.serial}</Text>
                </View>
                <View style={styles.prce_area}>
                  <Text style={styles.prce_text}>method</Text>
                  <Text style={[styles.prce_text_here, { color: COLOURS.red }]}>{booking_data?.book_payment}</Text>
                </View>
                <View style={styles.prce_area_one}>
                  <Text style={styles.prce_text}>status</Text>
                  <Text style={[styles.prce_text_here, { color: theme.colorwhite }]}>{booking_data?.status}</Text>
                </View>
              </View>

              <View style={styles.rate_text_here}>
                <Text style={[styles.rating_text, { color: theme.colorblue }]}>you haven't rated yet</Text>
              </View>
              <View style={styles.btn_group}>
                <TouchableOpacity activeOpacity={0.8} style={[styles.acc_btn, { backgroundColor: booking_data?.done === 'Failed' ? '#ced4da' : COLOURS.blue, },]} disabled={booking_data?.done === 'Failed'} onPress={handleOpenModal} >
                  <Text style={styles.sign_text}>provider rate now</Text>
                </TouchableOpacity>
              </View>
              </Animatable.View>
          </View>
        
      </ScrollView>

      {/*  */}
      {/* Modal Here To COngratulation start*/}

      <Modal onRequestClose={handleOpenModal} animationType="fade" transparent={true} visible={isModalVisible}>
        <View style={[styles.modalContainer]}>
          <View style={[styles.modal, { backgroundColor: theme.lightblack_card }]}>
            <View>

              <View style={[styles.imag_lock, { borderColor: theme.lightblack }]}>
                <View style={styles.row_cross_text}>
                  <View>
                    <Text style={[styles.here, { color: theme.colorblue }]}>your review</Text>
                  </View>
                  <TouchableOpacity activeOpacity={0.5} onPress={handleCloseModal} >
                    <Image source={require('../../images/cross.png')} style={styles.congrats_done} resizeMode='cover' tintColor={theme.colorblue} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.row_data_rating}>
                <TextInput maxLength={1} style={[styles.rat_inpt, { borderColor: theme.colorwhite, color: theme.colorwhite }]} keyboardType='number-pad' defaultValue='0' />
                <Text style={[styles.dot_gap, { backgroundColor: theme.colorwhite }]}> </Text>
                <TextInput maxLength={1} style={[styles.rat_inpt, { borderColor: theme.colorwhite, color: theme.colorwhite }]} keyboardType='number-pad' defaultValue='0' />
                <Text style={[styles.dot_gap, { backgroundColor: theme.colorwhite }]}> </Text>
                <Image source={require('../../images/star.png')} style={styles.rat_hnady_img} />
              </View>

              <View style={[styles.textAreaContainer, { borderColor: theme.colorblue, }]} >
                <TextInput
                  multiline={true}
                  placeholder={'Enter Your Review (optional)'}
                  placeholderTextColor={COLOURS.grey}
                  numberOfLines={6}
                  style={[styles.textarea, { color: theme.colorwhite }]} />
              </View>

              <View style={styles.btn_bottom_here_area}>
                <TouchableOpacity activeOpacity={0.8} style={[styles.canel_btn_here, { backgroundColor: COLOURS.Lightgrey }]} onPress={handleCloseModal} >
                  <Text style={[styles.canel_btn_text, { color: COLOURS.black }]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={[styles.canel_btn_here, { backgroundColor: COLOURS.blue }]}>
                  <Text style={[styles.canel_btn_text, { color: COLOURS.white }]}>Submit</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      </Modal>

      {/* Modal Here To COngratulation start*/}

      {/*  */}
    </SafeAreaView>
    </>
  )
}

export default BookingDetails