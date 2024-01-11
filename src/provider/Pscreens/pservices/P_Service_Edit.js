import { COLOURS } from '../../../ThemeColour/Theme';
import themeContext from '../../../Toggle/themeContext';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import styles from '../../Pcss/providerservices/pserviceadd';
import React, { useContext, useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, TextInput, Switch, View, SafeAreaView, FlatList } from 'react-native'


const P_Service_Edit = () => {

    const navigation = useNavigation();
    const theme = useContext(themeContext);

    const [value, setValue] = useState(null);
    const [value_four, setFour] = useState(null);
    const [value_three, setThree] = useState(null);
    const [value_one, setValue_one] = useState(null);
    const [value_two, setValue_two] = useState(null);

    const [isEnabled, setIsEnabled] = useState(false);

    const data = [
        { label: 'California City', value: '2' },
        { label: 'New York City', value: '1' },
    ];
    const data_one = [
        { label: 'house cleaning', value: '3' },
        { label: 'room cleaning', value: '4' },
    ];
    const data_two = [
        { label: 'Pakistan', value: '5' },
        { label: 'Sri Lanka', value: '6' },
    ];
    const data_three = [
        { label: 'Fixed', value: '7' },
        { label: 'Negotiable', value: '8' },
    ];
    const data_four = [
        { label: 'Active', value: '10' },
        { label: 'Pending', value: '11' },
    ];


    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };



    return (
        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <SafeAreaView>

                <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>

                    <View style={[styles.bg_area_book, { backgroundColor: COLOURS.blue }]}>
                        <View style={styles.arrow_area}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <Text style={[styles.acc_name, { color: COLOURS.white }]}>edit service</Text>
                        </View>
                    </View>

                    <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>

                        <View>
                            <TouchableOpacity activeOpacity={0.7} style={styles.image_area_here}>
                                <Image source={require('../../../images/upload.png')} style={styles.image_fake} tintColor={COLOURS.grey} />
                                <Text style={[styles.image_choose, { color: COLOURS.grey }]}>Choose Image </Text>
                            </TouchableOpacity>
                            <Text style={[styles.image_text_note]}>Note : you can upload jpg,png,jpeg, extensions file & you can select multiple images.</Text>
                        </View>

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
                        </View>
                        {/*  */}
                        <View style={[styles.inpt_here_container, { backgroundColor: theme.lightbox }]}>
                            <View style={[styles.pswd_inpt_container, { backgroundColor: theme.lightblack }]}>
                                <TextInput placeholder='Service Name' placeholderTextColor={COLOURS.grey} style={[styles.pswd_inpt, { color: theme.colorwhite }]} />
                            </View>

                            <View>
                                <View style={styles.dropdown}>
                                    <Dropdown
                                        style={{
                                            color: COLOURS.grey,
                                            height: responsiveHeight(7),
                                            backgroundColor: theme.lightblack,
                                            borderRadius: responsiveWidth(10),
                                            marginTop: responsiveHeight(1),
                                            paddingHorizontal: responsiveWidth(5),
                                        }}
                                        itemContainerStyle={{ backgroundColor: theme.lightblack }}
                                        placeholderStyle={{ backgroundColor: theme.lightgrey, color: theme.colorwhite, fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(2), paddingLeft: 5, }}
                                        selectedTextStyle={{ backgroundColor: theme.lightgrey, color: theme.colorwhite, fontSize: responsiveFontSize(2), fontFamily: 'Roboto-Medium' }}
                                        inputSearchStyle={{ color: COLOURS.grey, backgroundColor: theme.lightgrey, }}
                                        iconStyle={styles.iconStyle}
                                        data={data}
                                        search={false}
                                        maxHeight={200}
                                        labelField="label"
                                        valueField="value"
                                        placeholder="Select Category"
                                        searchPlaceholder="Search..."
                                        itemTextStyle={{ color: COLOURS.grey, fontFamily: 'Roboto-Medium', }}
                                        selectedStyle={{ color: COLOURS.black, fontFamily: 'Roboto-Medium', }}
                                        value={value}
                                        onChange={item => {
                                            setValue(item.value);
                                        }}

                                    />
                                </View>

                                <View style={styles.dropdown}>
                                    <Dropdown
                                        style={{
                                            color: COLOURS.grey,
                                            height: responsiveHeight(7),
                                            backgroundColor: theme.lightblack,
                                            borderRadius: responsiveWidth(10),
                                            marginTop: responsiveHeight(3),
                                            paddingHorizontal: responsiveWidth(5),
                                        }}
                                        itemContainerStyle={{ backgroundColor: theme.lightblack }}
                                        placeholderStyle={{ backgroundColor: theme.lightgrey, color: theme.colorwhite, fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(2), paddingLeft: 5, }}
                                        selectedTextStyle={{ backgroundColor: theme.lightgrey, color: theme.colorwhite, fontSize: responsiveFontSize(2), fontFamily: 'Roboto-Medium' }}
                                        inputSearchStyle={{ color: COLOURS.black, backgroundColor: theme.lightgrey, }}
                                        iconStyle={styles.iconStyle}
                                        data={data_one}
                                        search={false}
                                        maxHeight={200}
                                        labelField="label"
                                        valueField="value"
                                        placeholder="First Select Category"
                                        searchPlaceholder="Search..."
                                        itemTextStyle={{ color: COLOURS.grey, fontFamily: 'Roboto-Medium', }}
                                        selectedStyle={{ color: COLOURS.black, fontFamily: 'Roboto-Medium', }}
                                        value={value_one}
                                        onChange={item => {
                                            setValue_one(item.value);
                                        }}

                                    />
                                </View>

                                <View style={styles.dropdown}>
                                    <Dropdown
                                        style={{
                                            color: COLOURS.grey,
                                            height: responsiveHeight(7),
                                            backgroundColor: theme.lightblack,
                                            borderRadius: responsiveWidth(10),
                                            marginTop: responsiveHeight(3),
                                            paddingHorizontal: responsiveWidth(5),
                                        }}
                                        itemContainerStyle={{ backgroundColor: theme.lightblack }}
                                        placeholderStyle={{ backgroundColor: theme.lightgrey, color: theme.colorwhite, fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(2), paddingLeft: 5, }}
                                        selectedTextStyle={{ backgroundColor: theme.lightgrey, color: theme.colorwhite, fontSize: responsiveFontSize(2), fontFamily: 'Roboto-Medium' }}
                                        inputSearchStyle={{ color: COLOURS.black, backgroundColor: theme.lightgrey, }}
                                        iconStyle={styles.iconStyle}
                                        data={data_two}
                                        search={false}
                                        maxHeight={200}
                                        labelField="label"
                                        valueField="value"
                                        placeholder="Select Service Address"
                                        searchPlaceholder="Search..."
                                        itemTextStyle={{ color: COLOURS.grey, fontFamily: 'Roboto-Medium', }}
                                        selectedStyle={{ color: COLOURS.black, fontFamily: 'Roboto-Medium', }}
                                        value={value_two}
                                        onChange={item => {
                                            setValue_two(item.value);
                                        }}

                                    />
                                </View>

                                <View style={styles.row_dropdown}>

                                    <View style={styles.dropdown_one}>
                                        <Dropdown
                                            style={{
                                                color: COLOURS.grey,
                                                width: responsiveWidth(44),
                                                height: responsiveHeight(7),
                                                backgroundColor: theme.lightblack,
                                                borderRadius: responsiveWidth(10),
                                                marginVertical: responsiveHeight(3),
                                                paddingHorizontal: responsiveWidth(5),
                                            }}
                                            itemContainerStyle={{ backgroundColor: theme.lightblack }}
                                            placeholderStyle={{ backgroundColor: theme.lightgrey, color: theme.colorwhite, fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.9), paddingLeft: 5, }}
                                            selectedTextStyle={{ backgroundColor: theme.lightgrey, color: theme.colorwhite, fontSize: responsiveFontSize(2), fontFamily: 'Roboto-Medium' }}
                                            inputSearchStyle={{ color: COLOURS.black, backgroundColor: theme.lightgrey, }}
                                            iconStyle={styles.iconStyle}
                                            data={data_three}
                                            search={false}
                                            maxHeight={200}
                                            labelField="label"
                                            valueField="value"
                                            placeholder="Type"
                                            searchPlaceholder="Search..."
                                            itemTextStyle={{ color: COLOURS.grey, fontFamily: 'Roboto-Medium', }}
                                            selectedStyle={{ color: COLOURS.black, fontFamily: 'Roboto-Medium', }}
                                            value={value_three}
                                            onChange={item => {
                                                setThree(item.value);
                                            }}

                                        />
                                    </View>

                                    <View style={styles.dropdown_two}>
                                        <Dropdown
                                            style={{
                                                width: responsiveWidth(44),
                                                color: COLOURS.grey,
                                                height: responsiveHeight(7),
                                                backgroundColor: theme.lightblack,
                                                borderRadius: responsiveWidth(10),
                                                marginVertical: responsiveHeight(3),
                                                paddingHorizontal: responsiveWidth(5),
                                            }}
                                            itemContainerStyle={{ backgroundColor: theme.lightblack }}
                                            placeholderStyle={{ backgroundColor: theme.lightgrey, color: theme.colorwhite, fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.9), paddingLeft: 5, }}
                                            selectedTextStyle={{ backgroundColor: theme.lightgrey, color: theme.colorwhite, fontSize: responsiveFontSize(2), fontFamily: 'Roboto-Medium' }}
                                            inputSearchStyle={{ color: COLOURS.black, backgroundColor: theme.lightgrey, }}
                                            iconStyle={styles.iconStyle}
                                            data={data_four}
                                            search={false}
                                            maxHeight={200}
                                            labelField="label"
                                            valueField="value"
                                            placeholder="Status"
                                            searchPlaceholder="Search..."
                                            itemTextStyle={{ color: COLOURS.grey, fontFamily: 'Roboto-Medium', }}
                                            selectedStyle={{ color: COLOURS.black, fontFamily: 'Roboto-Medium', }}
                                            value={value_four}
                                            onChange={item => {
                                                setFour(item.value);
                                            }}
                                        />
                                    </View>

                                </View>

                                <View style={styles.inpt_rows_one}>
                                    <TextInput placeholder='Start Date' placeholderTextColor={'grey'} style={[styles.inpt_row_each, { backgroundColor: theme.lightblack }]} />
                                    <TextInput placeholder='End Date' placeholderTextColor={'grey'} style={[styles.inpt_row_each, { backgroundColor: theme.lightblack }]} />
                                </View>
                                <View style={styles.inpt_rows}>
                                    <TextInput placeholder='Duration: Hours' placeholderTextColor={'grey'} style={[styles.inpt_row_each, { backgroundColor: theme.lightblack }]} />
                                    <TextInput placeholder='Duration: Minutes' placeholderTextColor={'grey'} style={[styles.inpt_row_each, { backgroundColor: theme.lightblack }]} />
                                </View>
                            </View>

                            <View style={[styles.textAreaContainer, { borderColor: COLOURS.grey, }]}>
                                <TextInput
                                    placeholder='Description'
                                    placeholderTextColor={'grey'}
                                    defaultValue='demoparaareahereparticuleruser  💐 🌷'
                                    multiline={true}
                                    numberOfLines={10}
                                    style={[styles.textarea, { color: theme.colorwhite }]} />
                            </View>

                            <View style={[styles.row_feature, { backgroundColor: theme.lightblack }]}>
                                <Text style={[styles.featu_text, { color: theme.colorblue }]}>set as feature</Text>
                                <Switch
                                    trackColor={{ false: COLOURS.grey, true: COLOURS.blue }}
                                    thumbColor={isEnabled ? COLOURS.white : COLOURS.grey}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>

                        <View style={styles.btn_up_area}>
                            <TouchableOpacity style={[styles.book_btn, { backgroundColor: COLOURS.blue }]} activeOpacity={0.9}>
                                <Text style={[styles.book_btn_text,]}>update </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

            </SafeAreaView>
        </>
    )
}

export default P_Service_Edit
