
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground, LayoutAnimation } from 'react-native';
import { IconPngImages, images } from "../src/asset/images/map";
import { FontFamilyName } from "../src/styles/Customfonts";

const dataOfTable = [
    {
        name: "KV Rama Mohan Rao",
        address: "Kolkata, West Bengal, East",
        code: "124335",
        collection: 'Collection',
        Assignedto: 'Lorem Ipsum',
        Timeelapsed: '00:00',
    },
    {
        name: "Solution & Services",
        address: "Plot No 12, Magh Sector, Badhe Nagar, Opp- Water Tank, CIDCO, Nashik- 422402",
        code: "1W3243",
        collection: 'HBD',
        Assignedto: 'Lorem Ipsum',
        Timeelapsed: '00:00',
    },
    {
        name: "KV Rama Mohan Rao",
        address: "Kolkata, West Bengal, East",
        code: "124335",
        collection: 'Collection',
        Assignedto: 'Lorem Ipsum',
        Timeelapsed: '00:00',
    },
    {
        name: "Solution & Services",
        address: "Plot No 12, Magh Sector, Badhe Nagar, Opp- Water Tank, CIDCO, Nashik- 422402",
        code: "1W3243",
        collection: 'HBD',
        Assignedto: 'Lorem Ipsum',
        Timeelapsed: '00:00',
    },
    {
        name: "KV Rama Mohan Rao",
        address: "Kolkata, West Bengal, East",
        code: "124335",
        collection: 'Collection',
        Assignedto: 'Lorem Ipsum',
        Timeelapsed: '00:00',
    },
    {
        name: "KV Rama Mohan Rao",
        address: "Kolkata, West Bengal, East",
        code: "124335",
        collection: 'Collection',
        Assignedto: 'Lorem Ipsum',
        Timeelapsed: '00:00',
    },
    {
        name: "KV Rama Mohan Rao",
        address: "Kolkata, West Bengal, East",
        code: "124335",
        collection: 'Collection',
        Assignedto: 'Lorem Ipsum',
        Timeelapsed: '00:00',
    },
];

const CompletedAuditList = ({ navigation }) => {
    const [openIndex, setOpenIndex] = useState(null); // State to track which item is open
    const [readStatus, setReadStatus] = useState(Array(dataOfTable.length).fill(false)); // State to track read status of each item

    const items = [
        { region: 'Region', country: 'South' },
        { region: 'Location', country: 'Chennai' },
        { region: 'Collection', country: 'Collection & Repossession' },
        { region: 'Agency Code', country: '098248448' },
        { region: 'Date of Review', country: '31st Nov 2024' },
    ];

    const items1 = [
        { region: 'State', country: 'Tamil Nadu' },
        { region: 'Review Type', country: 'HDB' },
        { region: 'VBMS Code', country: '0987654321' },
        { region: 'Agency Name', country: 'HBD Financial Services Ltd.' },
        { region: 'VBMS Code', country: '0987654321' },
    ];

    const handlePress = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleMarkAsRead = (index) => {
        const updatedReadStatus = [...readStatus];
        updatedReadStatus[index] = true;
        setReadStatus(updatedReadStatus);
    };

    return (
        <View >
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
                    <Text style={styles.appBarTitle}>Completed Audit List</Text>
                </View>
            </View>
            <View style={styles.colorback}></View>
            <ScrollView style={styles.backgroundColors}>
                <View style={styles.content}>
                    {dataOfTable.map((item, index) => (
                        <View key={index}>
                            {openIndex !== index && (
                                <TouchableOpacity
                                    style={styles.tableRow}
                                    onPress={() => handlePress(index)} // Toggle the box
                                >
                                    <View style={styles.rowContainer}>
                                        <View style={styles.verticalLineInRow} />
                                        <View style={styles.rowContent}>
                                            <Text style={[styles.tableCell, styles.tableCellTextName]}>{item.name}</Text>
                                            <View style={styles.addressContainer}>
                                                <Image
                                                    source={IconPngImages.LOCATION}
                                                    style={styles.locationIcon}
                                                />
                                                <Text style={[styles.tableCell, styles.tableCellTextAdress]}>{item.address}</Text>
                                            </View>
                                            <View style={styles.codeCollectionContainer}>
                                            <Text style={styles.containerText}>
                                                    <Text style={styles.colorText}>Code: </Text>
                                                    <Text style={styles.colorTextTO}>{item.code}</Text>
                                                </Text>
                                                <View style={styles.collectionContainer}>
                                                    <Image
                                                        source={IconPngImages.ISOLATION}
                                                        style={styles.isolationIcon}
                                                    />
                                                    <Text style={styles.collection}>{item.collection}</Text>
                                                </View>
                                            </View>
                                            <Text style={styles.containerText}>
                                                <Text style={styles.colorText}>Assigned to: </Text>
                                                <Text style={styles.colorTextTO}>{item.Assignedto}</Text>
                                            </Text>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                            {openIndex === index && (
                                <View style={[styles.square1,]}>
                                    <TouchableOpacity onPress={() => handlePress(index)}>
                                        <ImageBackground style={styles.rectangleImage} source={images.RECTANGLE}>
                                            <View style={styles.textContainer}>
                                                <View style={styles.auditTextContainer}>
                                                    <Text style={styles.auditText}>Audit Of</Text>
                                                </View>
                                                <Text style={styles.solutionText}>Solution & Services</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={[styles.square2,]}>
                                            <View style={styles.verticalLine} />
                                            <View style={styles.itemsContainer}>
                                                {items.map((item, index) => (
                                                    <View key={index} style={styles.itemContainer}>
                                                        <View style={styles.rowText}>
                                                            <View style={styles.dot} />
                                                            <View style={styles.textColumn}>
                                                                <Text style={styles.regionText}>{item.region}:</Text>
                                                                <Text style={styles.countryText}>{item.country}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                ))}
                                            </View>
                                            <View style={styles.verticalLine} />
                                            <View style={styles.itemsContainer}>
                                                {items1.map((item, index) => (
                                                    <View key={index} style={styles.itemContainer}>
                                                        <View style={styles.rowText}>
                                                            <View style={styles.dot} />
                                                            <View style={styles.textColumn}>
                                                                <Text style={styles.regionText}>{item.region}:</Text>
                                                                <Text style={styles.countryText}>{item.country}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                ))}
                                            </View>
                                        </View>

                                        <TouchableOpacity style={[styles.button, styles.cancelButton, styles.buttonContainer]}>
                                            <Text style={[styles.buttonText, styles.cancelButtonText]}>Cancel</Text>
                                        </TouchableOpacity>




                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    appBar: {
        elevation: 12,
        //shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        shadowColor: '#FFFFFF',
        shadowOffset: { height: 2, width: 0 },
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingTop: 8,
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
        fontSize: 20,
        color: '#000000',
        fontSize: 16,
        fontWeight: '700',
    },
    colorback: {
        height: 0.50,
        elevation: 9,
    },
    backgroundColors: {
        backgroundColor: '#FBFBFB',
    },
    content: {
        paddingVertical: 10,
        paddingHorizontal: 18,
    },

    tableRow: {
        top: 15,
        flexDirection: 'column',
        borderRadius: 10,
        padding: 8,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
    },
    rowContainer: {
        flexDirection: 'row',
    },
    verticalLineInRow: {
        width: 2,
        backgroundColor: '#4BAE4F',
        marginRight: 12,
        height: '100%',
    },
    rowContent: {
        flexDirection: 'column',
        flex: 1,
    },
    tableCell: {
        color: '#0B5290',
        flex: 1,
        fontSize: 16,
    },
    tableCellTextName: {
        color: '#0B5290',
        fontWeight: '600',
       // fontSize: 14,
        padding: 5,
    },
    addressContainer: {
        flexDirection: 'row',

    },

    locationIcon: {
        top: 5,
        height: 16,
        width: 11,
        marginRight: 15,
        marginEnd: 10
    },
    collection: {
        fontSize: 16,
        color: '#000000',
    },
    tableCellTextAdress: {
        color: '#808080',
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontWeight: '600',
       // fontSize: 15
    },
    codeCollectionContainer: {
        flexDirection: 'row',
        textAlign: 'right',
        justifyContent: 'space-between',
    },
    containerText: {
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontWeight: '400',
        fontSize: 13,
        padding: 2,
    },
    colorText: {
        color: '#808080',
        fontFamily: FontFamilyName.POPPINSSEMIBOLD,
        fontWeight: '400',
        fontSize: 15,

    },
    colorTextTO: {
        fontFamily: FontFamilyName.POPPINSSEMIBOLD,
        fontWeight: '400',
        fontSize: 15,
        color: '#000000',
    },
    code: {
        fontSize: 14,
        color: '#000000',
        padding: 2,
    },
    collectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    isolationIcon: {
        height: 11,
        width: 13,
        marginRight: 4,
    },
    timeElapsedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    square1: {
        height: 430,
        //  width: 354,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    square2: {
        height: 280,
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        paddingLeft: 25,
        paddingEnd: 25,
        marginTop: -35,
    },
    rectangleImage: {
        height: 120,
         width: 325,
        backgroundColor: '#0B5290',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
       // marginLeft: 15,
        //marginEnd: 15
        // alignContent:'center',
        // justifyContent:'center',

    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    // auditTextContainer: {
    //     backgroundColor: 'white',
    //     borderRadius: 20,
    //     padding: 3,
    //     marginBottom: 10,
    // },
    auditTextContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 8,
        marginBottom: 9,
    },
    auditText: {
        color: '#ED232A',
        fontSize: 13,
        fontFamily: FontFamilyName.INTERREGULAR,
        fontWeight: '400',
    },
    solutionText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    verticalLine: {
        width: 1,
        backgroundColor: '#BEBBBB',
        marginRight: -4,
    },
    itemsContainer: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'column',
        marginBottom: 4,
    },
    rowText: {
        top: 30,
        flexDirection: 'row',
        marginBottom: 10,
    },
    dot: {
        width: 8,
        height: 8,
        backgroundColor: '#BEBBBB',
        borderRadius: 4,
        marginRight: 10,
    },
    textColumn: {
        flexDirection: 'column',
    },
    regionText: {
        fontWeight: 'bold',
        marginRight: 5,
        bottom: 4,
        fontSize: 11,
        color: '#5A5A5A',
    },
    countryText: {
        color: '#024886',
        fontSize: 13,
    },
    buttonContainer: {

        marginTop: 15,

    },
    button: {
        // top:18,
        height: 35,
        //width: 320,
        marginHorizontal: 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    cancelButton: {
        backgroundColor: '#DFF2FE',
    },
    cancelButtonText: {
        color: '#0B5290',
        fontSize: 16,
    },


});

export default CompletedAuditList;
