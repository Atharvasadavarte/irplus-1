// import React, { useState } from "react";
// import { searchQuery, setSearchQuery, TextInput, Text, View, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';

// import { useNavigation } from '@react-navigation/native'; // Import navigation
// import { FontFamilyName } from "../src/styles/Customfonts";
// import { IconPngImages } from "../src/asset/images/map";
// import { Avatar } from "react-native-paper";


// const RPMSearch = () => {
//     const navigation = useNavigation(); // Initialize navigation
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filteredItems, setFilteredItems] = useState(items);

//     const items = [
//         { id: '1', region: 'Lorem Ipsum', country: 'J123' },
//         { id: '2', region: 'Lorem Ipsum', country: 'J123' },
//         { id: '3', region: 'Lorem Ipsum', country: 'J123' },
//         { id: '4', region: 'Lorem Ipsum', country: 'J123' },
//         { id: '5', region: 'Lorem Ipsum', country: 'J123' },
//         { id: '6', region: 'Lorem Ipsum', country: 'J123' },
//         { id: '7', region: 'Lorem Ipsum', country: 'J123' },
//         { id: '8', region: 'Lorem Ipsum', country: 'J123' },
//         { id: '9', region: 'Lorem Ipsum', country: 'J123' },
//         { id: '10', region: 'Lorem Ipsum', country: 'J123' },
//         { id: '11', region: 'Lorem Ipsum', country: 'J123' },

//     ];
//     const handleSearch = (query) => {
//         setSearchQuery(query);
//         if (query) {
//             const newData = items.filter(item => {
//                 const itemData = `${item.region.toUpperCase()} ${item.country.toUpperCase()}`;
//                 const textData = query.toUpperCase();
//                 return itemData.indexOf(textData) > -1;
//             });
//             setFilteredItems(newData);
//         } else {
//             setFilteredItems(items);
//         }
//     };

//     const renderItem = ({ item }) => (
//         <View style={styles.itemContainer}>
//             <Avatar.Image
//                 source={IconPngImages.PERSON}
//                // size={100}
//                 style={styles.avatar}
//             />
//             <Text style={styles.regionText}>{item.region}</Text>
//             <Text style={styles.countryText}>{item.country}</Text>
//         </View>
//     );

//     return (
//         <View style={[styles.container]}>
//             <View style={styles.appBarContainer}>
//                 <View style={styles.appBar}>
//                     <TouchableOpacity
//                         style={styles.drawerIconContainer}
//                         onPress={() => navigation.goBack()} // Go back to the previous screen
//                     >
//                         <Image
//                             source={IconPngImages.FORMA}
//                             style={styles.drawerIcon}
//                         />
//                     </TouchableOpacity>
//                     <Text style={styles.appBarTitle}>Search RPM</Text>
//                 </View>
//             </View>
//             <View style={styles.searchContainer}>
//                 <Image
//                     source={IconPngImages.SEARCHICON} // Replace with the correct path
//                     style={styles.searchIcon}
//                 />
//                 <TextInput
//                     style={styles.searchBar}
//                     placeholder="Search RPM"
//                     value={searchQuery}
//                     onChangeText={(query) => handleSearch(query)}
//                 />
//             </View>
//             <FlatList
//                 data={items}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id}
//                 contentContainerStyle={styles.listContentContainer}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     searchContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingHorizontal: 16,

//         backgroundColor: '#EAEAEA',
//         borderRadius: 20,

//         margin: 15,

//     },
//     searchIcon: {
//         width: 20,
//         height: 20,
//         marginRight: 10,
//     },
//     container: {
//         flex: 1,
//         backgroundColor: 'white'
//     },
//     appBarContainer: {
//         backgroundColor: '#FFFFFF',
//         shadowColor: '#000000',
//         shadowOffset: { height: 2, width: 0 },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//     },
//     appBar: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingHorizontal: 16,
//         height: 67, // Increased height to match appBarContainer
//     },
//     drawerIconContainer: {
//         marginRight: 15,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     drawerIcon: {
//         width: 9,
//         height: 15, // Adjusted height for better visibility
//     },
//     appBarTitle: {
//         fontSize: 16,
//         color: '#000000',
//         fontWeight: '600',
//         fontFamily: FontFamilyName.INTERSEMIBOLDS,
//     },

//     searchBar: {

//         backgroundColor: '#EAEAEA',
//         borderRadius: 20,

//         // paddingLeft: 10,
//     },
//     listContentContainer: {
//         padding: 16,
//     },


//     itemContainer: {
//         flexDirection: 'row',

//         alignItems: 'center', // Vertically center items
//         backgroundColor: '#FFFFFF',
//         borderRadius: 20,
//         padding: 16,
//         marginBottom: 16,
//         // Adding elevation and shadow for Android and iOS
//         elevation: 5,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 }, // Only at the bottom
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//     },

//     regionText: {
//         fontSize: 14,
//         fontWeight: '400',
//         color: '#000000',
//         fontFamily: FontFamilyName.INTERSEMIBOLDS
//     },
//     countryText: {
//         marginLeft: '45%',
//         fontSize: 12,
//         color: '#0B5290',
//         fontFamily: FontFamilyName.POPPINSBOLD,
//         fontWeight: '700'
//     },
//     avatar: {
//         // top:60,
//         width: 35,
//         height: 35,
//         marginRight: 15,
//         backgroundColor:'#DFF2FE'
//     },
//     iconperson:{
//         height:10,
//         width:20
//     }
// });

// export default RPMSearch;

import React, { useState } from "react";
import { TextInput, Text, View, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native'; // Import navigation
import { FontFamilyName } from "../src/styles/Customfonts";
import { IconPngImages } from "../src/asset/images/map";
import { Avatar } from "react-native-paper";


const RPMSearch = () => {
    const navigation = useNavigation(); // Initialize navigation
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);

    const items = [
        { id: '1', region: 'Lorem Ipsum', country: 'J123' },
        { id: '2', region: 'Lorem Ipsum', country: 'J123' },
        { id: '3', region: 'Lorem Ipsum', country: 'J123' },
        { id: '4', region: 'Lorem Ipsum', country: 'J123' },
        { id: '5', region: 'Lorem Ipsum', country: 'J123' },
        { id: '6', region: 'Lorem Ipsum', country: 'J123' },
        { id: '7', region: 'Lorem Ipsum', country: 'J123' },
        { id: '8', region: 'Lorem Ipsum', country: 'J123' },
        { id: '9', region: 'Lorem Ipsum', country: 'J123' },
        { id: '10', region: 'Lorem Ipsum', country: 'J123' },
        { id: '11', region: 'Lorem Ipsum', country: 'J123' },
    ];
    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query) {
            const newData = items.filter(item => {
                const itemData = `${item.region.toUpperCase()} ${item.country.toUpperCase()}`;
                const textData = query.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredItems(newData);
        } else {
            setFilteredItems(items);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.avatarContainer}>
                <Image
                    source={IconPngImages.PERSON}
                    style={styles.iconperson}
                />
            </View>
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
                    <Text style={styles.appBarTitle}>Search RPM</Text>
                </View>
            </View>
            <View style={styles.searchContainer}>
                <Image
                    source={IconPngImages.SEARCHICON} // Replace with the correct path
                    style={styles.searchIcon}
                />
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search RPM"
                    value={searchQuery}
                    onChangeText={(query) => handleSearch(query)}
                />
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,

        backgroundColor: '#EAEAEA',
        borderRadius: 20,

        margin: 15,

    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
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
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
    },

    searchBar: {

        backgroundColor: '#EAEAEA',
        borderRadius: 20,

        // paddingLeft: 10,
    },
    listContentContainer: {
        padding: 16,
    },


    itemContainer: {
        flexDirection: 'row',

        alignItems: 'center', // Vertically center items
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 13,
        marginBottom: 16,
        // Adding elevation and shadow for Android and iOS
        elevation: 5,
        //shadowColor: '#000',
       // shadowOffset: { width: 0, height: 2 }, // Only at the bottom
        //shadowOpacity: 0.25,
        //shadowRadius: 3.84,
    },

    regionText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000000',
        fontFamily: FontFamilyName.INTERSEMIBOLDS
    },
    countryText: {
        marginLeft: '45%',
        fontSize: 12,
        color: '#0B5290',
        fontFamily: FontFamilyName.POPPINSBOLD,
        fontWeight: '700'
    },
    avatarContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFF2FE', // Light blue background
        marginRight: 10, // Adjust as needed
    },
    iconperson: {
        width: 15,
        height: 15,
    }
});

export default RPMSearch;
