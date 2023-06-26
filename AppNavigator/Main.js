import React from 'react';
import Otp from '../Screens/Otp';
import Home from '../Screens/Home';
import Help from '../Screens/Help';
import Login from '../Screens/Login';
import Table_Here from './Table_Here';
import Drawer from '../Screens/Drawer';
import Slider from '../Screens/Slider';
import My_Money from '../Screens/My_Money';
import Register from '../Screens/Register';
import GoogleSign from '../Screens/GoogleSign';
import BottomTabs from '../Screens/BottomTabs';
import ServiceInfo from '../Screens/ServiceInfo';
import FacebookSign from '../Screens/FacebookSign';
import Edit_Profile from '../Screens/Edit_Profile';
import Search_Engine from '../Screens/Search_Engine';
import Admin_Support from '../Screens/Admin_Support';
import Reset_Password from '../Screens/Reset_Password';
import All_Categories from '../Screens/All_Categories';
import Forgot_Password from '../Screens/Forgot_Password';
import BottomSheetHere from '../Screens/BottomSheetHere';
import Change_Password from '../Screens/Change_Password';
import { createStackNavigator } from '@react-navigation/stack';


const Main = () => {

    const Stack = createStackNavigator();

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
                
                <Stack.Screen name="Otp" component={Otp} />
                <Stack.Screen name="Help" component={Help} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Drawer" component={Drawer} />
                <Stack.Screen name="Slider" component={Slider} />
                <Stack.Screen name="My_Money" component={My_Money} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Table_Here" component={Table_Here} />
                <Stack.Screen name="GoogleSign" component={GoogleSign} />
                <Stack.Screen name="BottomTabs" component={BottomTabs} />
                <Stack.Screen name="ServiceInfo" component={ServiceInfo} />
                <Stack.Screen name="FacebookSign" component={FacebookSign} />
                <Stack.Screen name="Edit_Profile" component={Edit_Profile} />
                <Stack.Screen name="Search_Engine" component={Search_Engine} />
                <Stack.Screen name="Admin_Support" component={Admin_Support} />
                <Stack.Screen name="All_Categories" component={All_Categories} />
                <Stack.Screen name="Reset_Password" component={Reset_Password} />
                <Stack.Screen name="BottomSheetHere" component={BottomSheetHere} />
                <Stack.Screen name="Change_Password" component={Change_Password} />
                <Stack.Screen name="Forgot_Password" component={Forgot_Password} />

            </Stack.Navigator>
        </>
    )
}

export default Main
