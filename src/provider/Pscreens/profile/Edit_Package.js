import React, { useContext, useState } from 'react';
import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import styles from '../../Pcss/userprofile/createpackages';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Image, ScrollView, StatusBar, TextInput, Text, Switch, TouchableOpacity, View, SafeAreaView } from 'react-native'


const Edit_Package = () => {

    const navigation = useNavigation()
    const theme = useContext(themeContext);

    const [isEnabled, setIsEnabled] = useState(true);

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };

    const [value_two, setValue_two] = useState(null);

    const data_two = [
        { label: 'Pending', value: '5' },
        { label: 'Later', value: '6' },
    ];

    return (
        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <SafeAreaView>

                <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>

                    <View style={[styles.bg_area_book, ]}>
                        <View style={styles.arrow_area}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <Text style={[styles.acc_name, { color: theme.colorblue }]}>update Package</Text>
                        </View>
                    </View>

                    <View style={[styles.inpt_here_container,]}>
                        <View style={[styles.pswd_inpt_container, { backgroundColor: theme.lightblack }]}>
                            <TextInput placeholder='Package Name' placeholderTextColor={COLOURS.grey} style={[styles.pswd_inpt, { color: theme.colorwhite }]} />
                        </View>

                        {/*  */}

                        <View style={[styles.select_servic_area, { backgroundColor: theme.lightblack }]}>
                            <View style={styles.row_edit}>
                                <Text style={styles.slct_srvc}>select service </Text>
                                <Text style={[styles.slct_edit, { color: theme.colorblue }]}>edit</Text>
                            </View>
                            <View style={styles.catego_img_bg}>
                                <Image source={require('../../../images/electric.jpg')} style={styles.categor_img} />
                                <TouchableOpacity style={[styles.bg_cross_img, { backgroundColor: COLOURS.blue }]} activeOpacity={0.6}>
                                    <Image source={require('../../../images/cross.png')} style={styles.categor_corss} tintColor={COLOURS.white} />
                                </TouchableOpacity>
                            </View>
                            <Text style={[styles.slct_edit, { color: theme.colorblue }]}>electronic </Text>
                        </View>

                        {/*  */}

                        <View style={[styles.textAreaContainer, { backgroundColor: theme.lightblack }]}>
                            <TextInput
                                placeholder='Package Description'
                                placeholderTextColor={'grey'}
                                multiline={true}
                                numberOfLines={4}
                                style={[styles.textarea, { color: theme.colorwhite }]} />
                        </View>

                        <View style={styles.inpt_rows}>
                            <TextInput placeholder='Package price' placeholderTextColor={'grey'} style={[styles.inpt_row_each, { backgroundColor: theme.lightblack }]} />
                            {/* <TextInput placeholder='Active' placeholderTextColor={'grey'} style={[styles.inpt_row_each, { backgroundColor: theme.lightblack }]} /> */}
                            <View style={styles.dropdown_two}>
                                <Dropdown
                                    style={{
                                        width: responsiveWidth(40),
                                        color: COLOURS.grey,
                                        height: responsiveHeight(7),
                                        backgroundColor: theme.lightblack,
                                        borderRadius: responsiveWidth(10),
                                        marginVertical: responsiveHeight(3),
                                        paddingHorizontal: responsiveWidth(5),
                                    }}
                                    placeholderStyle={{ backgroundColor: theme.lightgrey, color: theme.colorwhite, fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.9), paddingLeft: 5, }}
                                    selectedTextStyle={{ backgroundColor: theme.lightgrey, color: theme.colorwhite, fontSize: responsiveFontSize(2), fontFamily: 'Roboto-Medium' }}
                                    inputSearchStyle={{ color: COLOURS.black, backgroundColor: theme.lightgrey, }}
                                    iconStyle={styles.iconStyle}
                                    data={data_two}
                                    search={false}
                                    maxHeight={200}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Active"
                                    searchPlaceholder="Search..."
                                    itemTextStyle={{ color: COLOURS.black, fontFamily: 'Roboto-Medium', }}
                                    selectedStyle={{ color: COLOURS.black, fontFamily: 'Roboto-Medium', }}
                                    value={value_two}
                                    onChange={item => {
                                        setValue_two(item.value);
                                    }}

                                />
                            </View>
                        </View>

                        <View style={styles.inpt_rows_one}>
                            <TextInput placeholder='Start Date' placeholderTextColor={'grey'} style={[styles.inpt_row_each, { backgroundColor: theme.lightblack }]} />
                            <TextInput placeholder='End Date' placeholderTextColor={'grey'} style={[styles.inpt_row_each, { backgroundColor: theme.lightblack }]} />
                        </View>

                        <View style={[styles.row_feature, { backgroundColor: theme.lightblack }]}>
                            <Text style={[styles.featu_text, { color: theme.colorblue }]}>set as feature</Text>
                            <Switch
                                trackColor={{ false: COLOURS.grey, true: COLOURS.blue }}
                                thumbColor={isEnabled ? COLOURS.white : COLOURS.grey}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                // style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                </ScrollView>

                <View style={[styles.btn_up_area, { backgroundColor: theme.backgroundColor }]}>
                    <TouchableOpacity style={[styles.book_btn, { backgroundColor: COLOURS.blue }]} activeOpacity={0.9}>
                        <Text style={[styles.book_btn_text,]}>save </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        </>
    )
}

export default Edit_Package