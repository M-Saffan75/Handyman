import Menu from '../../component/Menu';
import { COLOURS } from '../../../ThemeColour/Theme';
import * as Animatable from 'react-native-animatable';
import themeContext from '../../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import { online_handymans } from '../../Pbackend/P_Data';
import Dropdown_List from '../../component/Dropdown_List';
import styles from '../../Pcss/dashboard/onlinehandydetails';
import React, { useContext, useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, TextInput, View, SafeAreaView, TouchableWithoutFeedback } from 'react-native'

const Create_Handyman = ({ route }) => {

    const navigation = useNavigation();
    const theme = useContext(themeContext);

    const inputFields = [
        { label: 'name', placeholder: 'Name', icon: require('../../../Bold/user.png') },
        { label: 'lastname', placeholder: 'Lastname', icon: require('../../../Bold/shield.png') },
        { label: 'username', placeholder: 'Username', icon: require('../../../Bold/user.png'), keyboardType: 'username' },
        { label: 'email', placeholder: 'Email', icon: require('../../../Bold/envelope.png'), keyboardType: 'email-address' },
        { label: 'contact', placeholder: 'Contact', icon: require('../../../Bold/phone.png'), keyboardType: 'numeric' },
        { label: 'designation', placeholder: 'Designation' },
        { label: 'password', placeholder: 'Password', icon: require('../../../Bold/eye-slash.png'), secureTextEntry: true },
    ];

    const [focusedInputs, setFocusedInputs] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false)

    const handleFocus = (label) => {
        setFocusedInputs({ ...focusedInputs, [label]: true });
    };

    const handleBlur = (label) => {
        setFocusedInputs({ ...focusedInputs, [label]: false });
    };

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const [isMenuVisible, setMenuVisible] = useState(false);

    const handlePressOne = () => {
        console.log('one')
    };

    const handlePressTwo = () => {
        console.log('two')
        navigation.goBack()
    };

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <>
            <StatusBar backgroundColor={COLOURS.blue} barStyle={'light-content'} />
            <SafeAreaView>

                <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>
                    <View>

                        <View style={styles.bg_area_book}>
                            <View style={styles.arrow_area}>
                                <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                    <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                                </TouchableOpacity>
                                <Text style={[styles.acc_name, { color: COLOURS.white }]}>add handyman</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.7} onPress={toggleMenu}>
                                <Image source={require('../../../images/dots.png')} style={styles.menu_img} tintColor={COLOURS.white} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menu_set}>
                            <Menu
                                navigation={navigation}
                                toggleMenu={toggleMenu}
                                onPress_one={handlePressOne}
                                onPress_two={handlePressTwo}
                                isMenuVisible={isMenuVisible}
                                setMenuVisible={setMenuVisible}
                                label_1={'delete'} label_2={'restore'}
                                label_1_img={require('../../../Filled/trash.png')}
                                label_2_img={require('../../../Filled/copy.png')}
                            />
                        </View>

                        <TouchableWithoutFeedback onPressIn={() => setMenuVisible(false)}>
                            <View style={styles.profile_handy_bg}>
                                <Image source={require('../../../images/profile-real.jpg')} style={styles.profile_handy} />
                            </View>
                        </TouchableWithoutFeedback>

                        <>
                            <View style={styles.container_input}>

                                {/* <TextInput
                                label="Username"
                                // mode={'outlined'}
                                placeholder="Enter your username"
                                placeholderTextColor={'grey'}
                                onChangeText={(text) => console.log(text)}
                                style={[styles.textInput, { backgroundColor: theme.lightblack }]}
                                underlineColor="transparent"
                                activeOutline='black'
                                theme={{
                                    colors: {
                                        ...DefaultTheme.colors,
                                    },
                                    outlineColor: "green",
                                    roundness: 50,
                                    fonts: {
                                        bodyLarge:
                                        {
                                            fontFamily: "Roboto-Medium"
                                        }
                                    },
                                }}
                            /> */}

                            </View>
                        </>

                        {inputFields.map((field, index) => (
                            <View style={[styles.filed_around]} key={index}>
                                {field.label === 'designation' && (
                                    <>
                                        <Dropdown_List
                                            isCollapsed={isCollapsed}
                                            setIsCollapsed={setIsCollapsed}
                                            toggleCollapse={toggleCollapse}
                                        />
                                    </>
                                )}
                                <Animatable.Text
                                    style={[
                                        styles.label,
                                        focusedInputs[field.label] && styles.zoomIn,
                                    ]}
                                    duration={500}
                                    animation={focusedInputs[field.label] ? 'zoomIn' : 'zoomOut'}
                                >
                                    {focusedInputs[field.label] ? field.label : ''}
                                </Animatable.Text>


                                <View style={[styles.inpt_Filed_bg, { backgroundColor: theme.lightblack }]}>
                                    <TextInput
                                        onFocus={() => handleFocus(field.label)}
                                        onBlur={() => handleBlur(field.label)}
                                        placeholder={field.placeholder}
                                        placeholderTextColor={'grey'}
                                        style={[styles.inpt_name, { color: theme.colorwhite }]}
                                        keyboardType={field.keyboardType}
                                        secureTextEntry={field.secureTextEntry && !passwordVisible}
                                    />
                                    {field.secureTextEntry && (
                                        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                                            <Image
                                                source={
                                                    passwordVisible
                                                        ? require('../../../Bold/eye.png')
                                                        : require('../../../Bold/eye-slash.png')
                                                }
                                                style={styles.inpt_icon}
                                                tintColor={theme.colorblue}
                                            />
                                        </TouchableOpacity>
                                    )}
                                    {!field.secureTextEntry && (
                                        <Image source={field.icon} style={styles.inpt_icon} tintColor={theme.colorblue} />
                                    )}
                                </View>
                            </View>
                        ))}

                        <View>
                            <View style={styles.btn_center}>
                                <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => navigation.goBack()}>
                                    <Text style={styles.btn_text}>save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </ScrollView>

            </SafeAreaView>

        </>

    )
}

export default Create_Handyman
