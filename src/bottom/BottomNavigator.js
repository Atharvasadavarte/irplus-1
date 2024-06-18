import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet } from "react-native";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Dashboard from "./Dashboard";
import { IconPngImages } from "../asset/images/map";
import Notification from "./NotificationScreen";

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen 
                name="Home" 
                component={Dashboard} 
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Image 
                            source={IconPngImages.DASHBOARDICON} 
                            style={Styles.iconsStyles} // Adjust width and height as needed
                        />
                    )
                }} 
            />
            {/* <Bottom.Screen 
                name="Notification" 
                component={Screen2} 
                options={{ headerShown: false,
                  tabBarIcon: () => (
                    <Image 
                        source={IconPngImages.FRAME1} 
                        style={Styles.iconsStyles} // Adjust width and height as needed
                    />
                )
                 }}
            /> */}
             <Bottom.Screen 
                name="Notification" 
                component={Notification} 
                options={{ headerShown: false,
                  tabBarIcon: () => (
                    <Image 
                        source={IconPngImages.FRAME1} 
                        style={Styles.iconsStyles} // Adjust width and height as needed
                    />
                )
                 }}
            />
            <Bottom.Screen 
                name="Log Out" 
                component={Screen3} 
                options={{ headerShown: false,
                  tabBarIcon: () => (
                    <Image 
                        source={IconPngImages.FRAME2} 
                        style={Styles.iconsStyles} // Adjust width and height as needed
                    />
                )
                 }}
            />
            
        </Bottom.Navigator>
    );
}


const Styles=StyleSheet.create({
iconsStyles:{
  height:25,
  width:25,

}
})
export default BottomNavigator;