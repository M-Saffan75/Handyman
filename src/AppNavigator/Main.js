import React from 'react';
import Otp from '../Screens/Otp';
import Home from '../Screens/Home';
import BottomNav from './BottomNav';
import Table_Here from './Table_Here';
import Splash from '../Screens/Splash';
import Drawer from '../Screens/Drawer';
import Slider from '../Screens/Slider';
import Faq from '../Screens/privacy/Faq';
import Message from '../Screens/chat/Message';
import Login from '../Screens/userauth/Login';
import Edit_Profile from '../Screens/Edit_Profile';
import P_Main from '../provider/PNavigator/P_Main'; // Provider_Main 
import Bookings from '../Screens/bookings/Bookings';
import Register from '../Screens/userauth/Register';
import MessageList from '../Screens/chat/MessageList';
import MessageScreen from '../Screens/chat/MessageScreen';
import Service_All from '../Screens/services/Service_All';
import Booking_User from '../Screens/bookings/Booking_User';
import Featured_All from '../Screens/features/Featured_All';
import Booking_Filter from '../Screens/filter/Booking_Filter';
import Privacy_Policy from '../Screens/privacy/Privacy_Policy';
import MessagesListHere from '../Screens/chat/MassegesListHere';
import Reset_Password from '../Screens/userauth/Reset_Password';
import BookingDetails from '../Screens/bookings/BookingDetails';
import Service_Details from '../Screens/services/Service_Details';
import Forgot_Password from '../Screens/userauth/Forgot_Password';
import Change_Password from '../Screens/userauth/Change_Password';
import All_Categories from '../Screens/categories/All_Categories';
import Terms_Conditions from '../Screens/privacy/Terms_Conditions';
import Featured_Details from '../Screens/features/Featured_Details';
import Booking_Categorie from '../Screens/bookings/Booking_Categorie';
import Categories_Details from '../Screens/categories/Categories_Details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favourites_Services from '../Screens/favourites/Favourites_Services';
import Favourites_Providers from '../Screens/favourites/Favourites_Providers';
import Categories_Details_Here from '../Screens/categories/Categories_Details_Here';
import Favourite_Service_Details from '../Screens/favourites/Favourite_Service_Details';
import Favourites_Providers_Details from '../Screens/favourites/Favourites_Providers_Details';


import Bottom_Sheet from '../Screens/extra/Bottom_Sheet';


const Main = () => {
    
    const Stack = createNativeStackNavigator();

    return (
        <>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>

                    <Stack.Screen name="P_Main" component={P_Main} />
                    <Stack.Screen name="Otp" component={Otp} />
                    <Stack.Screen name="Faq" component={Faq} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Drawer" component={Drawer} />
                    <Stack.Screen name="Slider" component={Slider} />
                    <Stack.Screen name="Message" component={Message} />
                    <Stack.Screen name="Bookings" component={Bookings} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="BottomNav" component={BottomNav} />
                    <Stack.Screen name="Table_Here" component={Table_Here} />
                    <Stack.Screen name="MessageList" component={MessageList} />
                    <Stack.Screen name="Service_All" component={Service_All} />
                    <Stack.Screen name="Bottom_Sheet" component={Bottom_Sheet} />
                    <Stack.Screen name="Booking_User" component={Booking_User} />
                    <Stack.Screen name="Featured_All" component={Featured_All} />
                    <Stack.Screen name="Edit_Profile" component={Edit_Profile} />
                    <Stack.Screen name="MessageScreen" component={MessageScreen} />
                    <Stack.Screen name="Booking_Filter" component={Booking_Filter} />
                    <Stack.Screen name="BookingDetails" component={BookingDetails} />
                    <Stack.Screen name="Privacy_Policy" component={Privacy_Policy} />
                    <Stack.Screen name="All_Categories" component={All_Categories} />
                    <Stack.Screen name="Reset_Password" component={Reset_Password} />
                    <Stack.Screen name="Service_Details" component={Service_Details} />
                    <Stack.Screen name="Change_Password" component={Change_Password} />
                    <Stack.Screen name="Forgot_Password" component={Forgot_Password} />
                    <Stack.Screen name="Terms_Conditions" component={Terms_Conditions} />
                    <Stack.Screen name="MessagesListHere" component={MessagesListHere} />
                    <Stack.Screen name="Featured_Details" component={Featured_Details} />
                    <Stack.Screen name="Booking_Categorie" component={Booking_Categorie} />
                    <Stack.Screen name="Categories_Details" component={Categories_Details} />
                    <Stack.Screen name="Favourites_Services" component={Favourites_Services} />
                    <Stack.Screen name="Favourites_Providers" component={Favourites_Providers} />
                    <Stack.Screen name="Categories_Details_Here" component={Categories_Details_Here} />
                    <Stack.Screen name="Favourite_Service_Details" component={Favourite_Service_Details} />
                    <Stack.Screen name="Favourites_Providers_Details" component={Favourites_Providers_Details} />

                </Stack.Navigator>
        </>
    )
}

export default Main
