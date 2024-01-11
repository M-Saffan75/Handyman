import Home from '../Screens/Home';
import Drawer from '../Screens/Drawer'
import React, { useContext } from 'react';
import { COLOURS } from '../ThemeColour/Theme';
import My_Money from '../Screens/extra/My_Money';
import { Text, View, Image, } from 'react-native';
import themeContext from '../Toggle/themeContext';
import Edit_Profile from '../Screens/Edit_Profile';
import Bookings from '../Screens/bookings/Bookings';
import MessageList from '../Screens/chat/MessageList';
import All_Categories from '../Screens/categories/All_Categories';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const Profile_Here = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }
        } initialRouteName='Drawer' >
            <Stack.Screen name="Drawer" component={Drawer} />
            <Stack.Screen name="My_Money" component={My_Money} />
            <Stack.Screen name="Edit_Profile" component={Edit_Profile} />
        </Stack.Navigator>
    )
}


const Chat_Here = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }
        } initialRouteName='MessageList'>
            <Stack.Screen name="MessageList" component={MessageList} />
        </Stack.Navigator>
    )
}

const Bookings_Here = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }
        } initialRouteName='All_Categories' >
            <Stack.Screen name="Bookings" component={Bookings} />
        </Stack.Navigator>
    )
}

const Categories_Here = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }
        } initialRouteName='All_Categories' >
            <Stack.Screen name="All_Categories" component={All_Categories} />
        </Stack.Navigator>
    )
}


const BottomNav = () => {

    const theme = useContext(themeContext);
    const Tab = createBottomTabNavigator();

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarActiveTintColor: COLOURS.red,
                    tabBarInactiveTintColor: COLOURS.blue,
                    // tabBarLabelStyle: { display: 'none' },
                    tabBarStyle: {
                        borderTopWidth: 0,
                        tabBarPosition: 'bottom',
                        keyboardHidesTabBar: true,
                        height: responsiveHeight(8.5),
                        backgroundColor: theme.lightblack,

                        // marginBottom:responseWidth(5),
                        // borderRadius:responsiveWidth(10),
                        // marginVertical:responsiveWidth(3),
                        // marginHorizontal:responsiveWidth(2),
                        // paddingHorizontal:responsiveWidth(4),
                    },
                }}>

                <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        < View style={{ position: 'absolute', top: '25%', }}>
                            <Image
                                source={focused ? require('../Filled/home.png') : require('../Bold/home.png')}
                                style={{ height: responsiveWidth(7), width: responsiveWidth(7) }}
                                tintColor={focused ? theme.colorblue : COLOURS.grey}
                            />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontFamily: 'Roboto-Bold',
                                textTransform: 'capitalize',
                                letterSpacing: responsiveWidth(.2),
                                paddingBottom: responsiveWidth(3),
                                fontSize: responsiveFontSize(1.4),
                                color: focused ? theme.colorblue : COLOURS.grey,
                            }}
                        >
                            Home
                        </Text>
                    )
                }} />

                <Tab.Screen name="Bookings_Here" component={Bookings_Here} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '25%' }}>
                            <Image
                                source={focused ? require('../images/booking-filled.png') : require('../images/booking.png')}
                                style={{ height: responsiveWidth(7), width: responsiveWidth(7) }}
                                tintColor={focused ? theme.colorblue : COLOURS.grey}
                            />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontFamily: 'Roboto-Bold',
                                textTransform: 'capitalize',
                                letterSpacing: responsiveWidth(.2),
                                paddingBottom: responsiveWidth(3),
                                fontSize: responsiveFontSize(1.4),
                                color: focused ? theme.colorblue : COLOURS.grey
                            }}
                        >
                            Booking
                        </Text>
                    )
                }} />

                <Tab.Screen name="Categories_Here" component={Categories_Here} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '25%' }}>
                            <Image
                                source={focused ? require('../images/open-menu.png') : require('../images/menu.png')}
                                style={{ height: responsiveWidth(7), width: responsiveWidth(7) }}
                                tintColor={focused ? theme.colorblue : COLOURS.grey}
                            />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontFamily: 'Roboto-Bold',
                                textTransform: 'capitalize',
                                letterSpacing: responsiveWidth(.2),
                                paddingBottom: responsiveWidth(3),
                                fontSize: responsiveFontSize(1.4),
                                color: focused ? theme.colorblue : COLOURS.grey
                            }}
                        >
                            categories
                        </Text>
                    )
                }} />

                <Tab.Screen name="Chat_Here" component={Chat_Here} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '25%' }}>
                            <Image
                                source={focused ? require('../images/chat-filled.png') : require('../images/chat.png')}
                                style={{ height: responsiveWidth(7), width: responsiveWidth(7) }}
                                tintColor={focused ? theme.colorblue : COLOURS.grey}
                            />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontFamily: 'Roboto-Bold',
                                textTransform: 'capitalize',
                                letterSpacing: responsiveWidth(.2),
                                paddingBottom: responsiveWidth(3),
                                fontSize: responsiveFontSize(1.4),
                                color: focused ? theme.colorblue : COLOURS.grey
                            }}
                        >
                            chat
                        </Text>
                    )
                }} />
                <Tab.Screen name="Profile_Here" component={Profile_Here} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '25%' }}>
                            <Image
                                source={focused ? require('../Filled/user.png') : require('../Bold/user.png')}
                                style={{ height: responsiveWidth(7), width: responsiveWidth(7) }}
                                tintColor={focused ? theme.colorblue : COLOURS.grey}
                            />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontFamily: 'Roboto-Bold',
                                textTransform: 'capitalize',
                                letterSpacing: responsiveWidth(.2),
                                paddingBottom: responsiveWidth(3),
                                fontSize: responsiveFontSize(1.4),
                                color: focused ? theme.colorblue : COLOURS.grey
                            }}
                        >
                            profile
                        </Text>
                    )
                }} />

            </Tab.Navigator>
        </>

    )
}
export default BottomNav
