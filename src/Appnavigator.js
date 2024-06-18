import React from "react";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../screens/SplachScreen";
import Parent from "../screens/Parent";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import ForgotPassword from "../screens/ForgotPassword";
import OtpScreen from "../screens/OtpScreen";
import SetPasswordScreen from "../screens/SetPasswordScreen";
import CreatePasswordScreen from "../screens/CreatePassword";
import DashboardDetails from "./bottom/dashboardDetails";
import DraftAuditList from "../screens/DraftAuditList";
import SubmittedAuditList from "../screens/SubmittedAuditList";
import CompletedAuditList from "../screens/CompletedAuditList";
import ProcessControl from "../screens/ProcessControl";
import RPMSearch from "../screens/RPMSearch";
import ModalScreenLogOut from "../screens/ModalScreenLogOut";



const Stack = createNativeStackNavigator();

const Appnavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Parent" component={Parent} options={{ headerShown: false }} />
                <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
                <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SetPasswordScreen" component={SetPasswordScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CreatePasswordScreen" component={CreatePasswordScreen} options={{ headerShown: false }} />
                <Stack.Screen name="DashboardDetails" component={DashboardDetails} options={{ headerShown: false }} />
                <Stack.Screen name="DraftAuditList" component={DraftAuditList} options={{ headerShown: false }} />
                <Stack.Screen name="SubmittedAuditList" component={SubmittedAuditList} options={{ headerShown: false }} />
                <Stack.Screen name="CompletedAuditList" component={CompletedAuditList} options={{ headerShown: false ,}} />
                <Stack.Screen name="ProcessControl" component={ProcessControl} options={{ headerShown: false ,}} />
                <Stack.Screen name="RPMSearch" component={RPMSearch} options={{ headerShown: false ,}} />
                <Stack.Screen name="ModalScreenLogOut" component={ModalScreenLogOut} options={{ headerShown: false ,}} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Appnavigator;
