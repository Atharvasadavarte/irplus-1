import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground, Animated, Easing, LayoutAnimation, UIManager, Platform } from 'react-native';
import { IconPngImages, images } from "../asset/images/map";
import Collapsible from 'react-native-collapsible';
import { FontFamilyName } from "../styles/Customfonts";

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Dashboard = ({ navigation }) => {
    const handleDraftAuditPress = () => {
        navigation.navigate('DraftAuditList');
    }; const handleCancleForRPMSearch = () => {
        navigation.navigate('RPMSearch');
    };
    const handleSubmittedAuditPress = () => {
        navigation.navigate('SubmittedAuditList');
    };
    const handleCompletedPress = () => {
        navigation.navigate('CompletedAuditList');
    };
    const [openIndex, setOpenIndex] = useState(null); // State to track which item is open
    // const [boxHeight] = useState(new Animated.Value(0)); // Animated value for the box height

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

    const dataOfTable = [
        {
            name: "KV Rama Mohan Rao",
            address: "Kolkata, West Bengal, East",
            code: "124335",
            collection: 'Collection'
        },
        {
            name: "Solution & Services",
            address: "Plot No 12, Magh Sector, Badhe Nagar, Opp- Water Tank, CIDCO, Nashik- 422402",
            code: "1W3243",
            collection: 'HBD'
        },
    ];

    const handlePress = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <View style={styles.container}>
            {/* App bar */}
            <View style={styles.appBar}>
                <TouchableOpacity
                    style={styles.drawerIconContainer}
                    onPress={() => navigation.openDrawer()}
                >
                    <Image
                        source={images.MENUICON}
                        style={styles.drawerIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.appBarTitle}>Dashboard</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View>
                    <Image style={[styles.banner]} source={images.BANNER} />
                    <View style={styles.newCasesContainer}>
                        <Text style={styles.newCasesText}>New Cases</Text>
                        <View style={styles.underline}></View>
                    </View>
                </View>

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
                                            <Text style={[styles.tableCellTextName]}>{item.name}</Text>
                                            <View style={styles.addressContainer}>
                                                <Image
                                                    source={IconPngImages.LOCATION}
                                                    style={styles.locationIcon}
                                                />
                                                <Text style={[styles.tableCellTextaddress]}>{item.address}</Text>
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
                                        <View style={styles.buttonContainer}>
                                            <TouchableOpacity onPress={handleCancleForRPMSearch} style={[styles.button, styles.cancelButton]}>
                                                <Text style={[styles.buttonText, styles.cancelButtonText]}>Cancel</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[styles.button, styles.continueButton]}>
                                                <Text style={[styles.buttonText, styles.continueButtonText]}>Continue</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    ))}
                </View>

                {/* View More Cases Button */}
                <TouchableOpacity style={styles.viewMoreButton}>
                    <Text style={styles.viewMoreButtonText}>View More Cases</Text>
                </TouchableOpacity>

                <View style={styles.otherCasesContainer}>
                    <Text style={styles.otherCasesText}>Other Cases</Text>
                    <View style={styles.underline}></View>
                </View>

                <View style={styles.boxContainer}>
                    <TouchableOpacity style={styles.box} onPress={handleDraftAuditPress}>
                        <View style={styles.smallBox}>
                            <Image style={styles.layer1Image} source={images.LAYER1} />
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>1</Text>
                            </View>
                        </View>
                        <Text style={styles.draft}>Draft</Text>
                        <Text style={styles.docs}>Doc for payments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={handleSubmittedAuditPress}>
                        <View style={styles.smallBox}>
                            <Image style={styles.layer1Image} source={images.LAYER2} />
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>10</Text>
                            </View>
                        </View>
                        <Text style={styles.draft}>Submitted</Text>
                        <Text style={styles.docs}>Pending for review</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={handleCompletedPress}>
                        <View style={styles.smallBox}>
                            <Image style={styles.layer1Image} source={images.CLIPPATHGROUP} />
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>3</Text>
                            </View>
                        </View>
                        <Text style={styles.draft}>Completed</Text>
                        <Text style={styles.docs}>Work has completed</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingTop: 8,
        height: 60,
        elevation: 12,
    },
    appBarTitle: {
        fontSize: 16,
        color: '#000000',
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
        fontWeight: '600'
    },
    content: {
        paddingVertical: 10,
        paddingHorizontal: 18,
    },
    drawerIconContainer: {
        marginRight: 15,
    },
    drawerIcon: {
        width: 18,
        height: 13,
    },
    banner: {

        top: 40,
        alignSelf: 'center',
        height: 120,
        width: '91%',
        borderRadius: 10,

    },
    newCasesContainer: {
        marginTop: 60,
        // alignItems: 'center',
        marginLeft: 18
    },
    rowContent: {
        flexDirection: 'column',
        flex: 1,
    },
    otherCasesContainer: {
        top: 10,
        fontSize: 16,
        marginLeft: 18,


    },
    underline: {
        width: "25%",
        height: 2,
        backgroundColor: '#ED232A',
        marginTop: 2,
        marginBottom: 10,
    },
    newCasesText: {
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
    },
    otherCasesText: {
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
    },
    tableRow: {
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

    tableCellTextName: {
        color: '#0B5290',
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
        fontWeight: '600',
        fontSize: 15,
        padding: 4
    },
    tableCellTextaddress: {
        color: '#808080',
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontWeight: '600',
        fontSize: 15

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
    collection: {
        fontSize: 16,
        //  flex: 1,
        // textAlign: 'right',
        color: '#000000',
    },
    verticleLine: {
        margin: 5,
        height: '10%',
        width: 2,
        backgroundColor: '#909090',
    },
    viewMoreButton: {
        alignItems: 'center',
        marginTop: 0,
    },
    viewMoreButtonText: {
        fontSize: 16,
        color: '#0B5290',
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
        margin: 12
    },
    box: {
        width: 105,
        height: 125,
        backgroundColor: '#DFF2FE',
        borderRadius: 10,
        padding: 15
    },
    boxText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    smallBox: {
        width: 40,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        position: 'relative'
    },
    layer1Image: {
        height: 20,
        width: 20,
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    },

    badge: {
        position: 'absolute',
        top: -6.5,
        right: -6.5,
        backgroundColor: '#FF0000',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    badgeText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: 'bold',
    },
    draft: {
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontWeight: '700',
        top: 30,
        fontSize: 12,
        color: "#0B5290",
    },
    docs: {
        fontFamily: FontFamilyName.INTERREGULAR,
        top: 30,
        fontSize: 8,
        color: "#5C5B5B",
        fontWeight: '500'
    },
    square1: {
        height: 440,
        // width: 354,
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
        // marginLeft: 18,
        // marginRight: 18,
        marginBottom: 20,

    },
    square2: {
        height: 280,
        //  width: '90%',
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
        margin: 10
    },
    rectangleImage: {
        height: 120,
        // width: 325,
        backgroundColor: '#0B5290',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
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
        color: '#FFFFFF',
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    itemsContainer: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'column',
        marginBottom: 4,
    },
    dot: {
        width: 8,
        height: 8,
        backgroundColor: '#BEBBBB',
        borderRadius: 4,
        marginRight: 10,
    },
    verticalLine: {
        width: 1,
        backgroundColor: '#BEBBBB',
        marginRight: -4,
    },
    regionText: {
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontSize: 8,
        fontWeight: '400',
        marginRight: 5,
        bottom: 4,
        fontSize: 11,
        color: '#5A5A5A',
    },
    rowText: {
        top: 30,
        flexDirection: 'row',
        marginBottom: 10,
    },
    textColumn: {
        flexDirection: 'column',
    },
    countryText: {
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontWeight: '700',
        color: '#024886',
        fontSize: 11.5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10

    },
    button: {
        height: 35,
        width: 100,
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    cancelButton: {
        backgroundColor: '#DFF2FE',
    },
    continueButton: {
        backgroundColor: '#0B5290',
    },
    cancelButtonText: {
        top: 5,
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
        fontWeight: '600',
        color: '#0B5290',
        fontSize: 15,
    },
    continueButtonText: {
        top: 5,
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
        fontWeight: '600',
        color: '#FFFFFF',
        fontSize: 15,
    },
    verticalLineInRow: {
        width: 2,
        backgroundColor: '#0B5290',
        marginRight: 12,
        height: '100%',
    },
    rowContainer: {
        flexDirection: 'row',
        //  alignItems: 'center',
    },
    addressContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
    },
    locationIcon: {
        top: 5,
        height: 16,
        width: 11
        , marginRight: 15,
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

});

export default Dashboard;