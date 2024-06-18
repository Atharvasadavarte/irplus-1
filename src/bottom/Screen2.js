import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Image } from "react-native-animatable";
import { IconPngImages } from "../asset/images/map";
import { FontFamilyName } from "../styles/Customfonts";

const Screen2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.appBarContainer}>
                <View style={styles.appBar}>
                    <TouchableOpacity
                        style={styles.drawerIconContainer}
                        onPress={() => navigation.goBack()} // Go back to the previous screen
                    >
                        <Image
                            source={IconPngImages.FORMA}
                            style={styles.drawerIcon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.appBarTitle}>Notification</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <Image
                    source={IconPngImages.FORME3}
                    style={styles.notificationIcon}
                />
                <Text style={styles.titleText}>
                    Empty notification screen?
                </Text>
                <Text style={styles.subtitleText}>
                    No worries! Dive into your seamless experience and keep exploring without any distractions!
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appBarContainer: {
        elevation: 10,
        shadowColor: '#FFFFFF',
        shadowOffset: { height: 2, width: 0 },
        backgroundColor: '#FFFFFF',
        paddingTop: 8,
    },
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 67, // Increased height to match appBarContainer
    },
    drawerIconContainer: {
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerIcon: {
        width: 9,
        height: 15, // Adjusted height for better visibility'
        color:'black'
    },
    appBarTitle: {
        fontSize: 20,
        color: '#000000',
        fontWeight: '700',
    },
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    notificationIcon: {
        height: 189,
        width: 186,
        marginBottom: 20
    },
    titleText: {
        fontFamily:FontFamilyName.INTERSEMIBOLDS,
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 0,
        fontSize:14,
        color:'#0B5290'
    },
    subtitleText: {
        top:5,
        fontFamily:FontFamilyName.POPPINSREGULAR,
        fontSize: 10,
     
      
        fontSize:12,
        fontWeight:'400',
        color:'#808080',
   
        textAlign:'center'
    }
});

export default Screen2;
