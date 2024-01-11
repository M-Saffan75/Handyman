import Menu from '../../component/Menu';
import { COLOURS } from '../../../ThemeColour/Theme';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../../Pcss/providerservices/providerserviceall';
import { Product_reviews, Provider_services } from '../../Pbackend/P_Data';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View, SafeAreaView, FlatList, ImageBackground, TouchableWithoutFeedback, } from 'react-native'


const Provider_Service_Details = ({ route }) => {

  const { id } = route.params
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [categorie_data, setCategorie_data] = useState(null)
  const selectedItem = Provider_services.find(item => item.id === id);

  useEffect(() => {
    setCategorie_data(selectedItem);
  }, [selectedItem]);

  /*  */

  const [isMenuVisible, setMenuVisible] = useState(false);

  const handlePressOne = () => {
    navigation.navigate('P_Service_Edit')
    setMenuVisible(false)
  };

  const handlePressTwo = () => {
    console.log('two')
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
      <SafeAreaView>
        <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>
          <View>
            <TouchableWithoutFeedback onPressIn={() => setMenuVisible(false)}>
              <ImageBackground source={categorie_data?.bg_service} style={styles.categorie_bg_img}>
                <View style={styles.back_fav_area}>
                  <View>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                      <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity style={[styles.btn_align_one, { backgroundColor: theme.lightblack }]} activeOpacity={0.9}
                      onPress={toggleMenu}>
                      <Image source={require('../../../images/dots.png')} style={[styles.name_menu_img,]} tintColor={theme.colorblue} />
                    </TouchableOpacity>
                    <View style={styles.menu_set}>
                      <Menu
                        toggleMenu={toggleMenu}
                        onPress_one={handlePressOne}
                        onPress_two={handlePressTwo}
                        isMenuVisible={isMenuVisible}
                        setMenuVisible={setMenuVisible}
                        label_1={'edit'} label_2={'delete'} label_3={'disabled'}
                        label_1_img={require('../../../images/edit_text.png')}
                        label_2_img={require('../../../Filled/trash.png')}
                        label_3_img={require('../../../images/disabled.png')}
                      />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableWithoutFeedback>


            <View style={[styles.bg_info_area, { backgroundColor: theme.lightblack_card }]}>
              <View style={styles.plumber_space}>
                <Text style={styles.plumber}>{categorie_data?.categorie} {'>'}  <Text style={{ color: theme.colorblue }}>{categorie_data?.full_title}</Text></Text>
                <Text style={[styles.plumber_title, { color: theme.colorwhite }]}>{categorie_data?.full_title}</Text>
                <Text style={[styles.plumber_money, { color: theme.colorblue }]}>{'$'}{categorie_data?.price}{'.00'}<Text style={{ color: COLOURS.green }}>{'  (1% off) '}</Text></Text>
              </View>
              <View style={styles.time_area}>
                <Text style={styles.plumber_duration}>duration</Text>
                <Text style={[styles.plumber_time, { color: theme.colorblue }]}>{categorie_data?.duration}</Text>
              </View>
              <View style={styles.time_area}>
                <Text style={styles.plumber_rat_text}>rating</Text>
                <View style={styles.row_area}>
                  <Image source={require('../../../images/star.png')} style={styles.star_rat} />
                  <Text style={[styles.plumber_rat_check, { color: theme.colorwhite }]}>{categorie_data?.rating}</Text>
                </View>
              </View>
            </View>

            <View style={styles.more_handyman}>
              <Text style={[styles.more_handyman_text, { color: theme.colorwhite }]}>description</Text>
              <Text style={[styles.descript_text, { color: COLOURS.grey }]}>
                {categorie_data?.description}
              </Text>
            </View>

            <View style={styles.more_handyman}>
              <Text style={[styles.more_handyman_text, { color: theme.colorwhite }]}>available at</Text>
            </View>

            <TouchableOpacity style={styles.location_bg} activeOpacity={0.9}>
              <Text style={[styles.location_text, { color: theme.colorblue, backgroundColor: theme.lightblack }]}>{categorie_data?.location}</Text>
            </TouchableOpacity>

            <View style={styles.more_handyman}>
              <Text style={[styles.more_handyman_text, { color: theme.colorwhite }]}>reviews ( {Product_reviews.length} )</Text>
            </View>

            <View>
              <FlatList
                data={Product_reviews.slice(0, 4)}
                renderItem={({ item }) => {
                  return (
                    <View style={[styles.review_area, { backgroundColor: theme.lightblack_card }]} key={item.id}>
                      <View style={styles.profl_info_review}>
                        <View>
                          <Image source={item.review_profile} style={styles.prfle_book_here} />
                        </View>
                        <View style={styles.small_info__reivew}>
                          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'column' }}>
                              <Text style={[styles.rvie_name, { color: theme.colorblue }]}>{item.name}</Text>
                              <Text style={[styles.rvie_date, { color: COLOURS.grey }]}>{item.date}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                              <Image source={require('../../../images/star.png')} style={styles.rat_review_img}
                                tintColor={item.rating >= 1.0 && item.rating <= 2.1 ? COLOURS.red : ''} />
                              <Text style={[styles.rvie_date, { color: COLOURS.grey }]}>{item.rating}</Text>
                            </View>
                          </View>

                          <Text style={[styles.rvie_post, { color: theme.colorwhite }]}>
                            {item.review_post.length > 55
                              ? `${item.review_post.slice(0, 50)} ...`
                              : item.review_post}
                          </Text>
                        </View>
                      </View>
                    </View>
                  )
                }}
              />
            </View>
            <View style={styles.space_down}></View>
          </View>
        </ScrollView>

      </SafeAreaView>
    </>
  )
}

export default Provider_Service_Details