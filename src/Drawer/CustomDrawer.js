// import React from "react";
// import {StyleSheet, View} from 'react-native';
// import {DrawerContentScrollView,
//     DrawerItem

// }from '@react-navigation/drawer'
// import { Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch } from "react-native-paper";



// const CustomDrawer =(props)=>{
//     return(
//         <View style={{flex:1}}>
//        <DrawerContentScrollView {...props}>
//         <View>
//            <View>
//           <Avatar.Image
//           source={{uri:'https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA'}}
//           />
//            </View>
//         </View>
//        </DrawerContentScrollView>
//       <Drawer.Section>
//         <DrawerItem
//         label="Logout"
//         />
//       </Drawer.Section>
//         </View>
//     );
// }
// const styles=StyleSheet.create({

// })
// const Styles = StyleSheet.create({
//   VECTOR: {
//     top: 10,
//     height: 100,
//     width: 142

//   }
// })
// export default CustomDrawer;

// import React from "react";
// import { StyleSheet, View } from 'react-native';
// import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// import { Avatar, Drawer } from "react-native-paper";
// import { images } from "../asset/images/map";
// const CustomDrawer = (props) => {
//     return (
//         <View style={{ flex: 1 }}>
//             <DrawerContentScrollView {...props}>
//                 <View>
//                 <View style={[styles.box]}>
//                     <View>
//                         <Avatar.Image
//                             source={{ uri: 'https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA' }}
//                             size={100} 
//                             style={styles.avatar}
//                         />
//                     </View>
//                     </View>
//                 </View>
//                 <Drawer.Section>
//                 <DrawerItem
//                         label="Home"
//                         onPress={() => {

//                         }}
//                     />
//                      <DrawerItem
//                         label="Change Password"
//                         onPress={() => {

//                         }}
//                     />

//                     <DrawerItem
//                         label="Log Out"
//                         onPress={() => {

//                         }}
//                     />
//                 </Drawer.Section>
//             </DrawerContentScrollView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     box:{
//         top:0,
//         height:180,
//         backgroundColor:'#0B5290',
//     },
//     avatar: {
//         top:60,
//         padding:30,
//         width: 50,
//         height: 50,
//         borderRadius: 50,
//         marginLeft: 30
//     },
// });

// export default CustomDrawer;
// import React from "react";
// import { StyleSheet, View, Text } from 'react-native';
// import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// import { Avatar, Drawer } from "react-native-paper";
// import { images } from "../asset/images/map";

// const CustomDrawer = (props) => {
//     return (
//         <View style={{ flex: 1 }}>
//             <DrawerContentScrollView {...props}>
//                 <View>
//                     <View style={[styles.box]}>
//                         <View style={styles.avatarContainer}>
//                             <Avatar.Image
//                                 source={{ uri: 'https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA' }}
//                                 size={100}
//                                 style={styles.avatar}
//                             />
//                             <View style={styles.textContainer}>
//                                 <Text style={styles.text}>Lorem Ipsum</Text>
//                                 <Text style={styles.text}>+91 12345 67890</Text>
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//                 <Drawer.Section>
//                     <DrawerItem
//                         label="Home"
//                         onPress={() => {

//                         }}
//                     />
//                     <DrawerItem
//                         label="Change Password"
//                         onPress={() => {

//                         }}
//                     />

//                     <DrawerItem
//                         label="Log Out"
//                         onPress={() => {

//                         }}
//                     />
//                 </Drawer.Section>
//             </DrawerContentScrollView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     box: {
//         top: 0,
//         height: 180,
//         backgroundColor: '#0B5290',
//     },
//     avatarContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginLeft: 30
//     },
//     avatar: {
//         top:60,
//         width: 60,
//         height: 60,
//         marginRight: 20
//     },
//     textContainer: {
//         top:60,
//         flexDirection: 'column'
//     },
//     text: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold'
//     }
// });

// export default CustomDrawer;


// import React from "react";
// import { StyleSheet, View, Text, Image } from 'react-native';
// import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// import { Avatar, Drawer } from "react-native-paper";
// import { IconPngImages, images } from "../asset/images/map";
// import { FontFamilyName } from "../styles/Customfonts";

// const CustomDrawer = (props) => {
//     return (
//         <View style={{ flex: 1 }}>
//             <DrawerContentScrollView {...props}>
//                 <View>
//                     <View style={styles.box}>
//                         <View style={styles.avatarContainer}>
//                             <Avatar.Image
//                                 source={{ uri: 'https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA' }}
//                                 size={100}
//                                 style={styles.avatar}
//                             />
//                             <View style={styles.textContainer}>
//                                 <Text style={styles.text}>Lorem Ipsum</Text>
//                                 <Text style={styles.textMobile}>+91 12345 67890</Text>
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//                 <Drawer.Section style={styles.drawerSection}>
//                     <View style={styles.drawerItemContainer}>
//                         <Image source={IconPngImages.DASHBOARDICON} style={styles.drawerItemIcon} />
//                         <DrawerItem
//                             label="Home"
//                             onPress={() => { }}
//                             style={styles.drawerItem}
//                         />
//                     </View>
//                     <View style={styles.separator} />

//                     <View style={styles.drawerItemContainer}>
//                         <Image source={IconPngImages.CHANGEPASSWORD} style={styles.drawerItemIcon} />
//                         <DrawerItem
//                             label="Change Password"
//                             onPress={() => { }}
//                             style={styles.drawerItem}
//                         />
//                     </View>
//                     <View style={styles.separator} />

//                     <View style={styles.drawerItemContainer}>
//                         <Image source={IconPngImages.FRAME2} style={styles.drawerItemIcon} />
//                         <DrawerItem
//                             label="Log Out"
//                             onPress={() => { }}
//                             style={styles.drawerItem}
//                         />
//                     </View>
//                 </Drawer.Section>
//             </DrawerContentScrollView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     box: {
//         height: 180,
//         backgroundColor: '#0B5290',
//     },
//     avatarContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginLeft: 30
//     },
//     avatar: {
//         top: 60,
//         width: 55,
//         height: 55,
//         marginRight: 20
//     },
//     textContainer: {
//         top: 60,
//         flexDirection: 'column'
//     },
//     text: {
//         fontFamily: FontFamilyName.INTERSEMIBOLDS,
//         fontWeight: '600',
//         color: '#FFFFFF',
//         fontSize: 17,
//     },
//     textMobile: {
//         fontFamily: FontFamilyName.INTERSEMIBOLDS,
//         fontWeight: '400',
//         color: '#FFFFFF',
//         fontSize: 12.4,
//     },
//     drawerSection: {
//         // marginTop: 15,
//     },
//     drawerItemContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingLeft: 20,
//         // paddingVertical: 10,
//     },
//     drawerItemIcon: {
//         width: 24,
//         height: 24,
//         // marginRight: 10,
//     },
//     drawerItem: {
//         flex: 1,
//         color: '#000000',
//         margin: 0,
//         padding: 0,
//     },
//     separator: {
//         height: 1,
//         backgroundColor: '#6992C6',
//         // marginHorizontal: 20,
//         // marginVertical: 0,
//     },
// });

// export default CustomDrawer;

import React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Drawer } from "react-native-paper";
import { IconPngImages, images } from "../asset/images/map";
import { FontFamilyName } from "../styles/Customfonts";

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View>
                    <View style={styles.box}>
                        <View style={styles.avatarContainer}>
                            <Avatar.Image
                                source={{ uri: 'https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA' }}
                                size={100}
                                style={styles.avatar}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>Lorem Ipsum</Text>
                                <Text style={styles.textMobile}>+91 12345 67890</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Drawer.Section >
                    <View style={styles.drawerItemContainer}>
                        <Image source={IconPngImages.DASHBOARD2} style={styles.drawerItemIcon} />
                        <DrawerItem
                            label="Home"
                            labelStyle={styles.drawerItemLabel} // Added labelStyle
                            onPress={() => { }}
                            style={styles.drawerItem}
                        />
                          <Image source={IconPngImages.CHEVRONLEFT} style={styles.chevronleft} />
                    </View>
                    <View style={styles.separator} />

                    <View style={styles.drawerItemContainer}>
                        <Image source={IconPngImages.CHANGEPASSWORD} style={styles.drawerItemIcon} />
                        <DrawerItem
                            label="Change Password"
                            labelStyle={styles.drawerItemLabel} // Added labelStyle
                            onPress={() => { }}
                            style={styles.drawerItem}
                        />
                         <Image source={IconPngImages.CHEVRONLEFT} style={styles.chevronleft} />
                    </View>
                    <View style={styles.separator} />

                    <View style={styles.drawerItemContainer}>
                        <Image source={IconPngImages.LOGOUT2} style={styles.drawerItemIcon} />
                        <DrawerItem
                            label="Log Out"
                            labelStyle={styles.drawerItemLabel} // Added labelStyle
                            onPress={() => { }}
                            style={styles.drawerItem}
                        />
                         <Image source={IconPngImages.CHEVRONLEFT} style={styles.chevronleft} />
                    </View>
                </Drawer.Section>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height: 180,
        backgroundColor: '#0B5290',
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30
    },
    avatar: {
        top: 60,
        width: 55,
        height: 55,
        marginRight: 20
    },
    textContainer: {
        top: 60,
        flexDirection: 'column'
    },
    text: {
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
        fontWeight: '600',
        color: '#FFFFFF',
        fontSize: 17,
    },
    textMobile: {
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
        fontWeight: '400',
        color: '#FFFFFF',
        fontSize: 12.4,
    },

    drawerItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,

    },
    drawerItemIcon: {

        width: 24,
        height: 24,

    },
    drawerItem: {
        flex: 1,
        color: '#000000'

    },
    drawerItemLabel: {
        color: '#000000',
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
        fontSize: 13,
        fontWeight: '400'
    },
    separator: {
        height: 1,
        backgroundColor: '#6992C6',
       
    },
    chevronleft:{
        marginEnd:20,
        height:15,
        width:9
    }
});

export default CustomDrawer;
