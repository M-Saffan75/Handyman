import React from 'react';
import P_BottomNav from './P_BottomNav';
import Taxes from '../Pscreens/profile/Taxes';
import Packages from '../Pscreens/profile/Packages';
import Payments from '../Pscreens/payments/Payments';
import Edit_Package from '../Pscreens/profile/Edit_Package';
import Subscription from '../Pscreens/profile/Subscription';
import P_Dashboard from '../Pscreens/dashboard/P_Dashboard';
import About_Details from '../Pscreens/profile/About_Details';
import P_Edit_Profile from '../Pscreens/profile/P_Edit_Profile';
import P_Service_Add from '../Pscreens/pservices/P_Service_Add';
import P_Service_Edit from '../Pscreens/pservices/P_Service_Edit';
import Service_Address from '../Pscreens/profile/Service_Address';
import Create_Packages from '../Pscreens/profile/Create_Packages';
import P_Booking_User from '../Pscreens/P_Bookings/P_Booking_User';
import Job_Request_All from '../Pscreens/payments/Job_Request_All';
import Create_Handyman from '../Pscreens/dashboard/Create_Handyman';
import Notifications from '../Pscreens/pnotifications/Notifications';
import P_Bookings_Here from '../Pscreens/P_Bookings/P_Bookings_Here';
import P_Change_Password from '../Pscreens/profile/P_Change_Password';
import Online_All_Handy from '../Pscreens/dashboard/Online_All_Handy';
import Job_Request_Details from '../Pscreens/payments/Job_Request_Details';
import Up_Booking_Details from '../Pscreens/P_Bookings/Up_Booking_Details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Online_Handy_Details from '../Pscreens/dashboard/Online_Handy_Details';
import Provider_Service_All from '../Pscreens/pservices/Provider_Service_All';
import P_Bookings_Categorie from '../Pscreens/P_Bookings/P_Bookings_Categorie';
import Up_Coming_Bookings_All from '../Pscreens/P_Bookings/Up_Coming_Bookings_All';
import Provider_Service_Details from '../Pscreens/pservices/Provider_Service_Details';

// import Main from '../../AppNavigator/Main';


const P_Main = () => {

    const Stack = createNativeStackNavigator();

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name="P_BottomNav" component={P_BottomNav} />

                {/* <Stack.Screen name="Main" component={Main} /> */}
                <Stack.Screen name="Taxes" component={Taxes} />
                <Stack.Screen name="Packages" component={Packages} />
                <Stack.Screen name="Payments" component={Payments} />
                <Stack.Screen name="P_Dashboard" component={P_Dashboard} />
                <Stack.Screen name="Edit_Package" component={Edit_Package} />
                <Stack.Screen name="Subscription" component={Subscription} />
                <Stack.Screen name="About_Details" component={About_Details} />
                <Stack.Screen name="P_Service_Add" component={P_Service_Add} />
                <Stack.Screen name="Notifications" component={Notifications} />
                <Stack.Screen name="P_Service_Edit" component={P_Service_Edit} />
                <Stack.Screen name="P_Booking_User" component={P_Booking_User} />
                <Stack.Screen name="P_Edit_Profile" component={P_Edit_Profile} />
                <Stack.Screen name="Create_Packages" component={Create_Packages} />
                <Stack.Screen name="P_Bookings_Here" component={P_Bookings_Here} />
                <Stack.Screen name="Create_Handyman" component={Create_Handyman} />
                <Stack.Screen name="Service_Address" component={Service_Address} />
                <Stack.Screen name="Job_Request_All" component={Job_Request_All} />
                <Stack.Screen name="Online_All_Handy" component={Online_All_Handy} />
                <Stack.Screen name="P_Change_Password" component={P_Change_Password} />
                <Stack.Screen name="Up_Booking_Details" component={Up_Booking_Details} />
                <Stack.Screen name="Job_Request_Details" component={Job_Request_Details} />
                <Stack.Screen name="Provider_Service_All" component={Provider_Service_All} />
                <Stack.Screen name="P_Bookings_Categorie" component={P_Bookings_Categorie} />
                <Stack.Screen name="Online_Handy_Details" component={Online_Handy_Details} />
                <Stack.Screen name="Up_Coming_Bookings_All" component={Up_Coming_Bookings_All} />
                <Stack.Screen name="Provider_Service_Details" component={Provider_Service_Details} />

            </Stack.Navigator>
        </>
    )
}

export default P_Main
