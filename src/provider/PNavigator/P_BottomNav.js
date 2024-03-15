import React, { useContext } from 'react';
import { Text, View, Image, } from 'react-native';
import { COLOURS } from '../../ThemeColour/Theme';
import P_Drawer from '../Pscreens/profile/P_Drawer';
import themeContext from '../../Toggle/themeContext';
import Payments from '../Pscreens/payments/Payments';
import P_Dashboard from '../Pscreens/dashboard/P_Dashboard';
import P_All_Payments from '../Pscreens/payments/P_All_Payments';
import P_Bookings_Here from '../Pscreens/P_Bookings/P_Bookings_Here';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const Profile_Here = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }
        } initialRouteName='P_Drawer' >
            <Stack.Screen name="P_Drawer" component={P_Drawer} />
        </Stack.Navigator>
    )
}


const Payment_ways = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }
        } initialRouteName='P_All_Payments'>
            <Stack.Screen name="P_All_Payments" component={P_All_Payments} />
        </Stack.Navigator>
    )
}

const Bookings_Here = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }
        } initialRouteName='P_Bookings_Here' >
            <Stack.Screen name="P_Bookings_Here" component={P_Bookings_Here} />
        </Stack.Navigator>
    )
}

const Dashboard = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }
        } initialRouteName='P_Dashboard' >
            <Stack.Screen name="P_Dashboard" component={P_Dashboard} />
        </Stack.Navigator>
    )
}


const P_BottomNav = () => {

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
                    tabBarStyle: {
                        borderTopWidth: 0,
                        tabBarPosition: 'bottom',
                        keyboardHidesTabBar: true,
                        height: responsiveHeight(8.5),
                        backgroundColor: theme.lightblack,
                    },
                }}>

                <Tab.Screen name="Dashboard" component={Dashboard} options={{
                    tabBarIcon: ({ focused }) => (
                        < View style={{ position: 'absolute', top: '25%', }}>
                            <Image
                                source={focused ? require('../../Filled/home.png') : require('../../Bold/home.png')}
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
                            dashboard
                        </Text>
                    )
                }} />

                <Tab.Screen name="Bookings_Here" component={Bookings_Here} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '25%' }}>
                            <Image
                                source={focused ? require('../../Filled/coupon.png') : require('../../Bold/coupon.png')}
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
                            Bookings
                        </Text>
                    )
                }} />

                <Tab.Screen name="Payment_ways" component={Payment_ways} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '25%' }}>
                            <Image
                                source={focused ? require('../../Filled/credit-card.png') : require('../../Bold/credit-card.png')}
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
                            payment
                        </Text>
                    )
                }} />

                <Tab.Screen name="Profile_Here" component={Profile_Here} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '25%' }}>
                            <Image
                                source={focused ? require('../../Filled/user.png') : require('../../Bold/user.png')}
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
export default P_BottomNav
