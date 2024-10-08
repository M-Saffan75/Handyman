import { Checkbox } from 'react-native-paper';
import { COLOURS } from '../../ThemeColour/Theme';
import themeContext from '../../Toggle/themeContext';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState, useContext, useRef } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, Text, View, SafeAreaView } from 'react-native';

const Login = ({ navigation }) => {


    const passwordInputRef = useRef(null);
    const theme = useContext(themeContext);
    const [hidePass, setHidePass] = useState(true);
    const [value_two, setValue_two] = useState(null);

    const data_two = [
        { label: 'User', value: '5' },
        { label: 'Provider', value: '6' },
    ];


    const navigateBasedOnSelection = () => {
        if (value_two === '5') {
            navigation.navigate('BottomNav');
        } else if (value_two === '6') {
            navigation.navigate('P_Main', { screen: 'P_BottomNav', initial: false });
        } else {
            console.log('error');
        }
    };

    const handleSelection = (value) => {
        setValue_two(value);
        console.log(value)
    };

    const handlePasswordVisibility = () => {
        setHidePass(!hidePass);
        if (!hidePass && passwordInputRef.current) {
            passwordInputRef.current.blur();
            setTimeout(() => {
                passwordInputRef.current.focus();
            }, 100);
        }
    };

    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const checkboxColor = isChecked ? 'blue' : 'grey';

    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView>
                <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>

                    <View style={styles.short_container}>
                        <View style={styles.name_line}>
                            <Text style={[styles.login_name, { color: theme.colorwhite }]}>Login Here</Text>
                            <Text style={[styles.login_line, { backgroundColor: theme.colorblue }]}></Text>
                        </View>

                        <View style={styles.login_msg_bg}>
                            <Text style={[styles.login_msg,{color:COLOURS.grey}]}>welcome back you have been missed for a long time !</Text>
                        </View>

                        <Text style={[styles.pswd_name, { color: theme.colorwhite }]}>Email</Text>
                        <View style={[styles.inpt_container, { backgroundColor: theme.lightblack }]}>
                            <FontAwesome5 name='envelope' style={[styles.icon, { color: theme.colorblue }]} />
                            <TextInput
                                placeholder="Your Email"
                                placeholderTextColor={COLOURS.grey}
                                style={[
                                    styles.name_inpt,
                                    { color: theme.colorwhite },
                                ]}
                                defaultValue={
                                    value_two === '5'
                                        ? 'user@gmail.com'
                                        : value_two === '6'
                                            ? 'provider@gmail.com'
                                            : ''
                                }
                            />

                        </View>

                        <Text style={[styles.pswd_name, { color: theme.colorwhite }]}>Password</Text>
                        <View style={[styles.pswd_inpt_container, { backgroundColor: theme.lightblack }]}>
                            <TouchableOpacity activeOpacity={0.6}>
                                <MaterialCommunityIcons name='key-variant' style={[styles.icon, { color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <TextInput
                                ref={passwordInputRef}
                                placeholder='Your Password'
                                placeholderTextColor={COLOURS.grey}
                                secureTextEntry={hidePass}
                                style={[
                                    styles.pswd_inpt,
                                    { color: theme.colorwhite },
                                ]}
                                autoCorrect={false}
                                enablesReturnKeyAutomatically
                                defaultValue={value_two === '5' ? '12345678' : value_two === '6' ? '12345678' : ''}
                            />

                            <TouchableOpacity activeOpacity={0.6} onPress={handlePasswordVisibility}>
                                <FontAwesome5
                                    name={hidePass ? 'eye-slash' : 'eye'}
                                    style={[styles.eye_icon, { color: theme.colorblue }]}
                                />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.check_emember_area}>
                            <View style={styles.remeb_area}>
                                <Checkbox
                                    status={isChecked ? 'checked' : 'unchecked'}
                                    color={theme.colorblue}
                                    onPress={toggleCheckbox}
                                />
                                <TouchableOpacity activeOpacity={0.6} onPress={toggleCheckbox}>
                                    <Text style={[styles.remember_me]}>Remember Me</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Forgot_Password')}>
                                <Text style={[styles.forgot_pswd, { color: theme.colorblue }]}>Forgot Password ?</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.dropdown_two}>
                            <Dropdown
                                style={{
                                    width: responsiveWidth(88),
                                    color: COLOURS.grey,
                                    height: responsiveHeight(7.5),
                                    backgroundColor: theme.lightblack,
                                    borderRadius: responsiveWidth(10),
                                    marginTop: responsiveHeight(4),
                                    paddingHorizontal: responsiveWidth(5),
                                }}
                                itemContainerStyle={{ backgroundColor: theme.lightblack,color: COLOURS.grey }}
                                placeholderStyle={{ backgroundColor: theme.lightgrey, color: theme.lightgrey, fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(2), paddingLeft: 5, }}
                                selectedTextStyle={{ backgroundColor: theme.lightgrey, color: theme.colorwhite, fontSize: responsiveFontSize(2), fontFamily: 'Roboto-Medium' }}
                                inputSearchStyle={{ color: COLOURS.grey, backgroundColor: theme.lightgrey, }}
                                iconStyle={styles.iconStyle}
                                data={data_two}
                                search={false}
                                maxHeight={200}
                                labelField="label"
                                valueField="value"
                                placeholder="who are you..."
                                searchPlaceholder="who are you..."
                                itemTextStyle={{ color: COLOURS.grey, fontFamily: 'Roboto-Medium', }}
                                selectedStyle={{ color: COLOURS.black, fontFamily: 'Roboto-Medium', }}
                                value={value_two}
                                onChange={item => {
                                    handleSelection(item.value);
                                }}

                            />
                        </View>

                        <View style={styles.btn_center}>
                            <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={navigateBasedOnSelection}>
                                <Text style={styles.btn_text}>sign in</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.dont_account}>
                            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Register')}>
                                <Text style={[styles.already_have, { color: COLOURS.grey }]}>Don't Have an account ? </Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Register')} style={styles.signUp_link_bg}>
                                <Text style={[styles.signUp_link, { color: theme.colorblue }]}>signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Login

const styles = StyleSheet.create({


    login_msg_bg: {
        alignItems:'center',
        justifyContent:'center',
        marginTop:responsiveHeight(3),
    },

    login_msg : {
        textAlign: 'center',
        color: COLOURS.black,
        textTransform:'capitalize',
        width:responsiveWidth(60),
        fontFamily: 'Roboto-Medium',
        lineHeight:responsiveWidth(5),
        fontSize: responsiveFontSize(1.7),
    },

    dropdown_two: {
        marginTop: responsiveHeight(2),
    },

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    },

    short_container: {
        marginTop: responsiveWidth(14.2),
        marginHorizontal: responsiveWidth(5.5),
    },

    login_name: {
        textAlign: 'center',
        color: COLOURS.black,
        fontFamily: 'Roboto-Bold',
        marginTop: responsiveWidth(12),
        fontSize: responsiveFontSize(3.1),
    },

    name_line: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    login_line: {
        height: responsiveWidth(1.2),
        right: responsiveWidth(8.4),
        width: responsiveWidth(14),
        top: responsiveWidth(1.3),
        backgroundColor: COLOURS.blue,
        borderRadius: responsiveWidth(10),
    },

    your_name: {
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveWidth(10),
        paddingBottom: responsiveWidth(2.8),
    },

    pswd_name: {
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveWidth(5.5),
        paddingBottom: responsiveWidth(2.8),
    },

    inpt_container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: responsiveWidth(10),
        paddingHorizontal: responsiveWidth(5.5),
    },

    pswd_inpt_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: responsiveWidth(10),
        paddingHorizontal: responsiveWidth(6.9),
    },

    icon: {
        color: COLOURS.blue,
        width: responsiveWidth(5.5),
        fontSize: responsiveFontSize(2.3),
    },

    eye_icon: {
        color: COLOURS.blue,
        width: responsiveWidth(7),
        fontSize: responsiveFontSize(2.5),
    },

    name_inpt: {
        width: '100%',
        letterSpacing: .5,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        paddingHorizontal: responsiveWidth(3),
    },

    pswd_inpt: {
        width: '100%',
        letterSpacing: .5,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        paddingHorizontal: responsiveWidth(6)
    },

    forgot_pswd: {
        color: COLOURS.blue,
        fontStyle: 'italic',
        alignSelf: 'flex-end',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.8),
        paddingHorizontal: responsiveWidth(2),
    },

    already_have: {
        letterSpacing: .2,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.7),
    },

    remember_me: {
        letterSpacing: .2,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        marginLeft: responsiveWidth(1),
        fontSize: responsiveFontSize(1.6),
    },

    btn: {
        width: '100%',
        borderColor: COLOURS.blue,
        padding: responsiveWidth(1),
        marginTop: responsiveWidth(7),
        backgroundColor: COLOURS.blue,
        borderRadius: responsiveWidth(20),
    },

    btn_text: {
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.6),
        paddingVertical: responsiveWidth(3.5),
    },

    btn_center: {
        alignItems: 'center',
        marginBottom: responsiveHeight(3),
    },

    dont_account: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    signUp_link_bg: {
        marginLeft: responsiveWidth(1),
    },

    signUp_link: {
        fontStyle: 'italic',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.8),
    },

    check_emember_area: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveWidth(5),
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(3)
    },

    remeb_area: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

})