import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { IconPngImages } from "../asset/images/map";
import { useNavigation } from '@react-navigation/native'; // Import navigation
import { FontFamilyName } from "../styles/Customfonts";

const Notification = () => {
    const navigation = useNavigation(); // Initialize navigation

    const items = [
        { id: '1', region: 'Welcome Back!', country: 'Guess what? We ve been busy making improvements and fixing new issues! Its time to update and start... ' },
        { id: '2', region: 'Welcome Back!', country: 'Guess what? We ve been busy making improvements and fixing new issues! Its time to update and start...' },
        { id: '3', region: 'Welcome Back!', country: 'Guess what? We ve been busy making improvements and fixing new issues! Its time to update and start...' },
        { id: '4', region: 'Welcome Back!', country: 'Guess what? We ve been busy making improvements and fixing new issues! Its time to update and start...' },
        { id: '5', region: 'Welcome Back!', country: 'Guess what? We ve been busy making improvements and fixing new issues! Its time to update and start...' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.regionText}>{item.region}</Text>
            <Text style={styles.countryText}>{item.country}</Text>
        </View>
    );

    return (
        <View style={[styles.container]}>
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
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContentContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    appBarContainer: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
        height: 15, // Adjusted height for better visibility
    },
    appBarTitle: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '600',
        fontFamily:FontFamilyName.INTERSEMIBOLDS
    },
    listContentContainer: {
        padding: 16,
    },
    itemContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        marginBottom: 16,
        // Adding elevation and shadow for Android and iOS
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, // Only at the bottom
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    regionText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#024886',
        marginBottom: 8,
        fontFamily:FontFamilyName.INTERSEMIBOLDS
    },
    countryText: {
        fontSize: 12,
        color: '#808080',
        fontFamily:FontFamilyName.POPPINSREGULAR,
        fontWeight:'400'
    },
});

export default Notification;
