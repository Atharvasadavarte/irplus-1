import React from "react";
import{View,Text} from 'react-native';
import DrawerNavigator from "../src/Drawer/DrawerNavigator";



const Parent = () =>{
    return (
        <View style={{flex:1}}>
            <DrawerNavigator/>
        </View>
    );
}
export default Parent;