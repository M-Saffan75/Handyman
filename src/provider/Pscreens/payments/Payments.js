import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import { provider_wallet } from '../../Pbackend/P_Data';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../provider/Pcss/payment/payment';
import React, { useContext, useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View, SafeAreaView, FlatList, ImageBackground } from 'react-native'

const Payments = () => {

  const navigation = useNavigation();
  const theme = useContext(themeContext);

  return (
    <>
      <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
      <SafeAreaView>


        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>


          <View style={styles.bg_area_book}>
            <View style={styles.arrow_area}>
              <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
              </TouchableOpacity>
              <Text style={[styles.acc_name, { color: COLOURS.white }]}>earning list</Text>
            </View>
          </View>

          {/*  */}
          <FlatList data={provider_wallet}
          showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.payment_ouline_bg} key={index.id}>
                  <View style={styles.payment_check}>
                    <Text style={styles.payment_text}>payment method</Text>
                    <Text style={styles.wallet_text}>{item.method}</Text>
                  </View>

                  <View style={[styles.payment_ouline_area, { backgroundColor: theme.lightblack }]}>
                    <View style={styles.payment_date}>
                      <Text style={styles.amount_text}>amount</Text>
                      <Text style={styles.amount_here}>{'$' + item.amount + '.00'}</Text>
                    </View>
                    <View style={styles.payment_date}>
                      <Text style={styles.amount_text}>date</Text>
                      <Text style={[styles.date_here, { color: theme.colorblue }]}>{item.date}</Text>
                    </View>
                  </View>
                </View>
              )
            }}
          />
          {/*  */}

        </View>
      </SafeAreaView>
    </>
  )
}

export default Payments
