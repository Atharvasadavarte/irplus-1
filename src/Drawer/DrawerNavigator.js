import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import {Text,View} from 'react-native';
import MainScreen from "./main";
import Dashboard from "../bottom/Dashboard";
import CustomDrawer from "./CustomDrawer";


const Drawer=createDrawerNavigator()
const DrawerNavigator=()=>{
    return(
     <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/> }>
        <Drawer.Screen name='MainScreen' component={MainScreen} options={{headerShown:false}}/>
     </Drawer.Navigator>

   
    );
    
}
export default DrawerNavigator;