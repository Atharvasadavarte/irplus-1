// import React, { useState, useEffect } from "react";
// import { TextInput, ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, ScrollView, FlatList, Pressable } from 'react-native';
// import SelectDropdown from "react-native-select-dropdown";
// import { FontFamilyName } from "../src/styles/Customfonts";
// import { IconPngImages, images } from "../src/asset/images/map";
// import DocumentPicker from 'react-native-document-picker';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import LinearGradient from 'react-native-linear-gradient';
// const ProcessControl = ({ navigation }) => {

//     const [modalVisible, setModalVisible] = useState(false);
//     const [secondModalVisible, setSecondModalVisible] = useState(false);
//     const [listData, setListData] = useState([]);
//     const [secondModalData, setSecondModalData] = useState([]);
//     const [selected, setSelected] = React.useState([]);
//     const [selecteSeverity, setSelecteSeverity] = React.useState([]);
//     const [selecteCompliance, setSelecteCompliance] = React.useState([]);
//     const [selecteProduct, setSelecteProduct] = React.useState([]);
//     const [selecteVertical, setSelecteVertical] = React.useState([]);
//     const [isTextInputVisible, setIsTextInputVisible] = React.useState(false);
//     const [noteText, setNoteText] = React.useState('');


//     const [modalVisiblea, setModalVisiblea] = useState(false);
//     const [isBoxVisible, setBoxVisible] = useState(false);
//     const [selectedImage, setSelectedImage] = useState(null);
//     useEffect(() => {
//         const staticData = [
//             { id: 1, name: "Management & Infrastructure", number: "0/16", total: 16 },
//             { id: 2, name: "ID Card Management", number: "0/16", total: 16 },
//             { id: 3, name: "Allocation", number: "0/16", total: 16 },
//             { id: 4, name: "Cash Deposit & PDC Management", number: "0/16", total: 16 },
//             { id: 5, name: "Repossession", number: "0/16", total: 16 },
//             { id: 6, name: "Hygiene", number: "0/16", total: 16 },
//             { id: 7, name: "Collection System", number: "0/16", total: 16 },
//             { id: 8, name: "Call Recording", number: "0/16", total: 16 },
//             { id: 9, name: "HHT Management", number: "0/16", total: 16 },
//             { id: 10, name: "Miscellaneous", number: "0/16", total: 16 },
//             { id: 11, name: "Repossession", number: "0/16", total: 16 }
//         ];
//         setListData(staticData);

//         const secondModalStaticData = [
//             { name: "Region", number: "South" },
//             { name: "State", number: "Tamil Nadu" },
//             { name: "Location", number: "Chennai" },
//             { name: "Review Type", number: "HDB" },
//             { name: "Vendor Type", number: "Collection & Repossession" },
//             { name: "VBMS Code", number: "0987654321" },
//             { name: "Agency Code", number: "098248448" },
//             { name: "Agency Name", number: "HBD Financial Services Ltd." },
//             { name: "Date of Review", number: "31st Nov 2024" },
//             { name: "Promoter", number: "Partnership" },
//         ];
//         setSecondModalData(secondModalStaticData);
//     }, []);

//     const questionAndDropDownData = [
//         {
//             id: "Q 1.1",
//             question: 'Is Vendor\'s current Office Address as per the agreement and contact no & email id as per the bank record?',
//             check: "Agency_Address",
//             typescale: [
//                 'process',
//                 'regulatory'
//             ],
//             severity: [
//                 'high',
//                 'medium',
//                 'low'
//             ],
//             compliance: [
//                 'yes',
//                 'no'
//             ],
//             product: [
//                 'AGRI',
//                 'AUTO_LOANS',
//                 'CONSUMERE_DURABLE',
//                 'CREDIT_CART',
//                 'CTG',
//                 'DLOD',
//                 'GOLD_LOAN',
//                 'HDB',
//                 'LAS',
//                 'MORT',
//                 'RIC_CASES',
//                 'TWO_WHEELER_LOAN',
//                 'UNSECURED_LOAN'
//             ],
//             vertical: [
//                 'pick up',
//                 'flows',
//                 'recovery'
//             ]
//         },
//         {
//             id: "Q 1.2",
//             question: 'Is Vendor\'s current Office Address as per the agreement and contact no & email id as per the bank record?',
//             check: "Agency_Address",
//             typescale: [
//                 'process',
//                 'regulatory'
//             ],
//             severity: [
//                 'high',
//                 'medium',
//                 'low'
//             ],
//             compliance: [
//                 'yes',
//                 'no'
//             ],
//             product: [
//                 'AGRI',
//                 'AUTO_LOANS',
//                 'CONSUMERE_DURABLE',
//                 'CREDIT_CART',
//                 'CTG',
//                 'DLOD',
//                 'GOLD_LOAN',
//                 'HDB',
//                 'LAS',
//                 'MORT',
//                 'RIC_CASES',
//                 'TWO_WHEELER_LOAN',
//                 'UNSECURED_LOAN'
//             ],
//             vertical: [
//                 'pick up',
//                 'flows',
//                 'recovery'
//             ]
//         },];

//     const handleImagePick = (response) => {
//         if (response.didCancel) {
//             console.log('User cancelled image picker');
//         } else if (response.error) {
//             console.log('ImagePicker Error: ', response.error);
//         } else {
//             const uri = response.assets[0].uri;
//             setSelectedImage(uri);
//             console.log(uri);
//         }
//     };

//     const selectImageFromGallery = () => {
//         const options = {
//             mediaType: 'photo',
//             includeBase64: false,
//         };

//         launchImageLibrary(options, handleImagePick);
//         setModalVisiblea(false);
//     };

//     const takePhotoWithCamera = () => {
//         const options = {
//             mediaType: 'photo',
//             includeBase64: false,
//         };

//         launchCamera(options, handleImagePick);
//         setModalVisiblea(false);
//     };

//     const takePhoto = () => {
//         const options = {
//             mediaType: 'photo',
//             includeBase64: false,
//         };

//         // Show camera to take a photo
//         launchCamera(options, (response) => {
//             if (response.didCancel) {
//                 console.log('User cancelled camera');
//             } else if (response.error) {
//                 console.log('Camera Error: ', response.error);
//             } else {
//                 const uri = response.assets[0].uri;
//                 setSelectedImage(uri);
//                 console.log(uri);
//             }
//         });
//     };
//     const removeImage = () => {
//         setSelectedImage(null);
//     };
//     const renderQuestion = ({ item }) => (
//         <View style={styles.questionBox}>
//             <Text style={styles.questionText}>{item.id}</Text>
//             <Text style={styles.textItem}>{item.question}</Text>
//             <Text style={styles.check}>Check: {item.check}</Text>
//             <View style={styles.selectrow}>
//                 <SelectDropdown
//                     data={item.typescale}
//                     onSelect={(selectedItem, index) => {
//                         setSelected(selectedItem); // Update selected item
//                     }}
//                     renderButton={(selectedItem) => {
//                         return (
//                             <View style={styles.dropdownButtonStyle}>
//                                 <View style={{ flexDirection: 'row' }}>
//                                     <Text style={styles.textColor}>Types of lapse: </Text>
//                                     <Image style={styles.iconImg} source={IconPngImages.ICON} />
//                                 </View>
//                                 {selected && ( // Render selected item if it exists
//                                     <Text style={[styles.TextColorDropdown]}>{selected}</Text>
//                                 )}
//                             </View>

//                         );
//                     }}
//                     renderItem={(isSelected) => {
//                         return (
//                             <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
//                                 <Text style={styles.dropdownItemTxtStyle}>{item.typescale}</Text>
//                             </View>
//                         );
//                     }}
//                     showsVerticalScrollIndicator={false}
//                     dropdownStyle={styles.dropdownMenuStyle}
//                 />
//                 <SelectDropdown
//                     data={item.severity}
//                     onSelect={(selectedItemSeverity, index) => {
//                         setSelecteSeverity(selectedItemSeverity); // Update selected item
//                     }}
//                     renderButton={(selectedItemSeverity) => {
//                         return (
//                             <View style={styles.dropdownButtonStyle}>
//                                 <View style={{ flexDirection: 'row' }}>
//                                     <Text style={styles.textColor}>Severity </Text>
//                                     <Image style={styles.iconImg} source={IconPngImages.ICON} />
//                                 </View>
//                                 {selecteSeverity && ( // Render selected item if it exists
//                                     <Text style={[styles.TextColorDropdown]}>{selecteSeverity}</Text>
//                                 )}
//                             </View>
//                         );
//                     }}
//                     renderItem={(isSelected) => {
//                         return (
//                             <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
//                                 <Text style={styles.dropdownItemTxtStyle}>{item.severity}</Text>
//                             </View>
//                         );
//                     }}
//                     showsVerticalScrollIndicator={false}
//                     dropdownStyle={styles.dropdownMenuStyle}
//                 />
//                 <SelectDropdown
//                     data={item.compliance}
//                     onSelect={(selectedItemCompliance, index) => {
//                         setSelecteCompliance(selectedItemCompliance); // Update selected item
//                     }}
//                     renderButton={(selectedItemCompliance) => {
//                         return (
//                             <View style={styles.dropdownButtonStyle}>
//                                 <View style={{ flexDirection: 'row' }}>
//                                     <Text style={styles.textColor}>Compliance </Text>
//                                     <Image style={styles.iconImg} source={IconPngImages.ICON} />
//                                 </View>
//                                 {selecteCompliance && ( // Render selected item if it exists
//                                     <Text style={[styles.TextColorDropdown]}>{selecteCompliance}</Text>
//                                 )}
//                             </View>
//                         );
//                     }}
//                     renderItem={(isSelected) => {
//                         return (
//                             <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
//                                 <Text style={styles.dropdownItemTxtStyle}>{item.compliance}</Text>
//                             </View>
//                         );
//                     }}
//                     showsVerticalScrollIndicator={false}
//                     dropdownStyle={styles.dropdownMenuStyle}
//                 />

//             </View>

//             <View style={styles.selectrow}>
//                 <SelectDropdown
//                     data={item.product}
//                     onSelect={(selectedItemProduct, index) => {
//                         setSelecteProduct(selectedItemProduct); // Update selected item
//                     }}
//                     renderButton={(selectedItemProduct) => {
//                         return (
//                             <View style={styles.dropdownButtonStyle}>
//                                 <View style={{ flexDirection: 'row', }}>
//                                     <Text style={[styles.textColor, styles.productcontainer]}>Product</Text>
//                                     <Image style={styles.iconImg} source={IconPngImages.ICON} />
//                                 </View>
//                                 {selecteProduct && (
//                                     <Text style={[styles.TextColorDropdown]}>{selecteProduct}</Text>
//                                 )}
//                             </View>
//                         );
//                     }}
//                     renderItem={(isSelected) => {
//                         return (
//                             <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
//                                 <Text style={styles.dropdownItemTxtStyle}>{item.product}</Text>
//                             </View>
//                         );
//                     }}
//                     showsVerticalScrollIndicator={false}
//                     dropdownStyle={styles.dropdownMenuStyle}
//                 />
//                 <SelectDropdown
//                     data={item.vertical}
//                     onSelect={(selectedItemVertical, index) => {
//                         setSelecteVertical(selectedItemVertical); // Update selected item
//                     }}
//                     renderButton={(selectedItemVertical) => {
//                         return (
//                             <View style={styles.dropdownButtonStyle}>
//                                 <View style={{ flexDirection: 'row' }}>
//                                     <Text style={styles.textColor}>Vertical </Text>
//                                     <Image style={styles.iconImg} source={IconPngImages.ICON} />
//                                 </View>
//                                 {selecteVertical && ( // Render selected item if it exists
//                                     <Text style={[styles.TextColorDropdown]}>{selecteVertical}</Text>
//                                 )}
//                             </View>
//                         );
//                     }}
//                     renderItem={(isSelected) => {
//                         return (
//                             <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
//                                 <Text style={styles.dropdownItemTxtStyle}>{item.typescale}</Text>
//                             </View>
//                         );
//                     }}
//                     showsVerticalScrollIndicator={false}
//                     dropdownStyle={styles.dropdownMenuStyle}
//                 />
//                 <Pressable style={[styles.prescale]} onPress={() => setIsTextInputVisible(!isTextInputVisible)}>
//                     <View style={[styles.notebox]}>
//                         <Image style={[styles.NoteImage]} source={IconPngImages.NOTEICON} />
//                     </View>
//                 </Pressable>
//             </View>
//             {isTextInputVisible && (
//                 <View style={styles.textInputContainer}>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder="Test Step"
//                         value={noteText}
//                         onChangeText={setNoteText}
//                         onSubmitEditing={() => setIsTextInputVisible(false)} // Close the TextInput when submit button is pressed
//                     />
//                     {/* <TouchableOpacity onPress={() => setIsTextInputVisible(false)}>
//                         <Text style={styles.closeTextInput}>Close</Text>
//                     </TouchableOpacity> */}

//                 </View>
//             )}

//             <View style={styles.container}>
//                 <TouchableOpacity onPress={() => setBoxVisible(true)} style={styles.uploadFileButton}>
//                     <Text style={styles.uploadFileButtonText}>Upload Image</Text>
//                 </TouchableOpacity>
//                 {isBoxVisible && (
//                     <View style={styles.optionsBox}>
//                         <View></View>
//                         <Image style={styles.GalleryIcon} source={IconPngImages.GALLERYICON} />
//                         <View style={styles.rowContainer}>
//                             <TouchableOpacity onPress={takePhotoWithCamera} style={styles.optionButton}>
//                                 <Text style={styles.optionButtonCamera}>Camera</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity onPress={selectImageFromGallery} style={styles.optionButton}>
//                                 <Text style={styles.optionButtonGallery}>Gallery</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <TouchableOpacity onPress={() => setBoxVisible(false)} style={styles.optionButton}>
//                             <Text style={styles.optionButtonText}>Cancel</Text>
//                         </TouchableOpacity>
//                     </View>
//                 )}

//                 {selectedImage && (
//                     <View style={styles.imageContainer}>
//                         <Image source={{ uri: selectedImage }} style={styles.uploadedImage} />
//                         <TouchableOpacity onPress={removeImage} style={styles.removeButton}>
//                             <View style={styles.removeButtonInner}>
//                                 <Image source={IconPngImages.DELETE} style={styles.deleteIcon} />
//                                 <Text style={styles.removeButtonText}>Remove</Text>
//                             </View>
//                         </TouchableOpacity>
//                     </View>
//                 )}
//             </View>



//         </View>
//     );
//     return (
//         <View style={styles.container}>
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
//                     <Text style={styles.appBarTitle}>Process Control</Text>
//                 </View>
//             </View>
//             <View style={styles.contentContainer}>
//                 <View style={styles.managementRow}>
//                     <TouchableOpacity
//                         style={styles.managementSection}
//                         onPress={() => setModalVisible(true)} // Show the modal
//                     >
//                         <Text style={styles.managementText}>Management & Infrastructure</Text>
//                         <Image
//                             source={IconPngImages.TRAILINGICON}
//                             style={styles.trailingIcon}
//                         />
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         style={styles.integerText}
//                         onPress={() => setSecondModalVisible(true)} // Show the second modal
//                     >
//                         <Text style={styles.integerColor}>
//                             1/16
//                         </Text>
//                         <View style={styles.characterICircle}>
//                             <Text style={styles.characterText}>
//                                 i
//                             </Text>
//                         </View>
//                     </TouchableOpacity>

//                 </View>
//                 <FlatList
//                     data={questionAndDropDownData}
//                     renderItem={renderQuestion}
//                     keyExtractor={(item) => item.id}
//                     contentContainerStyle={{ paddingBottom: 20 }} // Adjust padding if necessary
//                 />
//             </View>

//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => setModalVisible(false)}
//             >
//                 <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
//                     <View style={styles.modalOverlay}>
//                         <View style={styles.modalContainer}>
//                             <View style={styles.modalContent}>
//                                 <Text style={styles.horizontalLine}></Text>
//                                 <Text style={styles.modalTitle}>Process Controls</Text>
//                                 <Text style={styles.horizontalLineComplete}></Text>

//                                 <ScrollView style={styles.listContainer}>
//                                     {listData.map((item) => (
//                                         <View key={item.id} style={styles.listItem}>
//                                             <Text style={styles.listItemName}>{item.name}</Text>
//                                             <Text style={styles.listItemnumber}>{item.number}</Text>
//                                             <Text style={styles.listItemtotal}>total {item.total}</Text>
//                                         </View>
//                                     ))}
//                                 </ScrollView>

//                                 <TouchableOpacity
//                                     style={styles.closeButton}
//                                     onPress={() => setModalVisible(false)}
//                                 >
//                                     <Text style={styles.closeButtonText}>Close</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 </TouchableWithoutFeedback>
//             </Modal>

//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={secondModalVisible}
//                 onRequestClose={() => setSecondModalVisible(false)}
//             >
//                 <TouchableWithoutFeedback onPress={() => setSecondModalVisible(false)}>
//                     <View style={styles.modalOverlay}>
//                         <View style={styles.modalContainer}>
//                             <View style={styles.modalContent}>

//                                 <ImageBackground style={styles.rectangleImage} source={images.RECTANGLE}>
//                                     <View style={styles.textContainer}>
//                                         <View style={styles.auditTextContainer}>
//                                             <Text style={styles.auditText}>Audit Of</Text>
//                                         </View>
//                                         <Text style={styles.solutionText}>Solution & Services</Text>
//                                     </View>
//                                 </ImageBackground>


//                                 <ScrollView style={styles.listContainer}>
//                                     {secondModalData.map((item, index) => (
//                                         <View key={index} style={styles.listItem}>
//                                             <Text style={styles.listItemName}>{item.name}</Text>
//                                             <Text style={styles.listItemnumberSecondModal}>{item.number}</Text>
//                                         </View>
//                                     ))}
//                                 </ScrollView>

//                                 <TouchableOpacity
//                                     style={styles.closeButton}
//                                     onPress={() => setSecondModalVisible(false)}
//                                 >
//                                     <Text style={styles.closeButtonText}>Close</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 </TouchableWithoutFeedback>
//             </Modal>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     horizontalLine: {
//         top: 5,
//         height: 5.78,
//         width: '15%',
//         backgroundColor: '#BEBBBB',
//         borderRadius: 10,
//     },
//     productcontainer: {
//         width: 123
//     },
//     textColor: {
//         color: '#0B5290',
//         fontFamily: FontFamilyName.POPPINSREGULAR,
//         fontSize: 10,
//         fontWeight: '400'
//     },

//     iconImg: {
//         height: 5, width: 14,
//         marginLeft: 10,
//         top: 5
//     },
//     selectrow: {
//         flexDirection: 'row',

//     },

//     horizontalLineComplete: {
//         top: 8,
//         height: 2,
//         width: '100%',
//         backgroundColor: '#6992C6', // Adjust color for better contrast
//         borderRadius: 10,
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
//         height: 67,
//     },
//     drawerIconContainer: {
//         marginRight: 15,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     drawerIcon: {
//         width: 9,
//         height: 15,
//         color: 'black'
//     },
//     appBarTitle: {
//         fontSize: 20,
//         color: '#000000',
//         fontSize: 16,
//         fontWeight: '700',
//     },
//     contentContainer: {
//         margin: 20,
//     },
//     managementRow: {
//         flexDirection: 'row',
//         //  alignItems: 'center', // Align items in the row vertically
//     },
//     managementSection: {
//         height: 40,
//         width: 240,
//         backgroundColor: 'white',
//         borderRadius: 10,
//         justifyContent: 'center',
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingHorizontal: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 1, height: 1 },
//         shadowOpacity: 0.4,
//         shadowRadius: 3,
//         elevation: 5,
//     },
//     managementText: {
//         fontSize: 12,
//         color: '#000',
//         // flex: 1, // Take up remaining space
//         fontFamily: FontFamilyName.POPPINSREGULAR,
//         fontWeight: '600'
//     },
//     trailingIcon: {
//         width: 25,
//         height: 25,
//     },
//     integerText: {

//         // height: 40,
//         width: 70,

//         marginLeft: 10, // Adjust spacing as needed

//         fontSize: 16,
//         backgroundColor: '#DFF2FE',
//         borderRadius: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'row',

//     },
//     integerColor: {
//         color: '#000000',
//         fontFamily: FontFamilyName.POPPINSREGULAR,
//         fontSize: 10,
//         fontWeight: '400'
//     },
//     characterICircle: {
//         width: 20,
//         height: 20,
//         borderRadius: 15, // Make it circular
//         backgroundColor: '#ffffff', // Background color
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderWidth: 2, // Border width
//         borderColor: '#ED232A', // Border color
//         marginLeft: 10
//     },
//     characterText: {
//         fontSize: 12,
//         color: '#ED232A',
//         fontFamily: FontFamilyName.POPPINSREGULAR,
//         fontWeight: '400'
//     },
//     modalOverlay: {
//         flex: 1,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         justifyContent: 'flex-end',
//     },
//     modalContainer: {
//         height: '75%',
//         backgroundColor: 'white',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         overflow: 'hidden',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: -2 },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//     },
//     modalContent: {
//         backgroundColor: 'white',
//         margin: 0,
//         alignItems: 'center',
//     },
//     modalTitle: {
//         top: 10,

//         fontWeight: '500',
//         color: '#000000',
//         marginBottom: 13,
//         fontFamily: FontFamilyName.POPPINSBOLD,
//         fontSize: 16
//     },
//     listContainer: {
//         width: '100%',

//     },
//     listItem: {
//         top: 10,
//         padding: 16,

//         borderBottomWidth: 1,
//         borderBottomColor: '#EEEEEE',
//         flexDirection: 'row',
//     },
//     listItemnumber: {
//         fontSize: 13,
//         color: '#4BAE4F',
//         marginLeft: 'auto',
//         marginRight: 15,
//         fontFamily: FontFamilyName.POPPINSREGULAR,
//         fontWeight: '500'
//     },
//     listItemnumberSecondModal: {
//         fontFamily: FontFamilyName.POPPINSREGULAR,
//         fontWeight: '500',
//         fontSize: 13,
//         color: '#0B5290',
//         marginLeft: 'auto',
//         marginRight: 15
//     },
//     listItemtotal: {
//         fontFamily: FontFamilyName.POPPINSREGULAR,
//         fontWeight: '600',
//         fontSize: 13,
//         color: '#000000',
//         borderRadius: 20,
//         overflow: 'hidden',
//         paddingHorizontal: 8,
//         backgroundColor: '#DFF2FE',
//     },
//     listItemName: {
//         fontSize: 13,
//         color: '#333333',
//         fontFamily: FontFamilyName.POPPINSREGULAR,
//         fontWeight: '400'
//     },
//     closeButton: {
//         alignSelf: 'center',
//         padding: 10,
//         backgroundColor: '#ED232A',
//         borderRadius: 10,
//         marginTop: 20,
//     },
//     closeButtonText: {
//         color: 'white',
//         fontSize: 16,
//     },
//     rectangleImage: {
//         height: 120,
//         width: "100%",
//         backgroundColor: '#0B5290',
//         borderTopLeftRadius: 10,
//         borderTopRightRadius: 10,
//     },
//     textContainer: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 15,
//     },
//     auditTextContainer: {
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 3,
//         marginBottom: 10,
//     },
//     auditText: {
//         color: '#ED232A',
//         fontSize: 16,
//         fontFamily: FontFamilyName.INTERREGULAR,
//         fontWeight: '400'
//     },
//     solutionText: {
//         fontFamily: FontFamilyName.INTERSEMIBOLDS,
//         color: '#FFFFFF',
//         fontSize: 18,
//         fontWeight: '600',
//         marginBottom: 5,
//     },

//     questionText: {
//         position: 'absolute', // Position absolute for absolute positioning
//         top: -20, // Top margin
//         left: 11, // Left margin
//         fontSize: 16,
//         fontWeight: "bold",
//         backgroundColor: '#E7F7EF',
//         padding: 8,
//         color: '#4BAE4F',
//         marginBottom: 10,
//         verticalAlign: 'middle',
//         borderRadius: 10,
//         fontFamily: FontFamilyName.INTERREGULAR,
//         fontSize: 12,
//         fontWeight: '500'
//     },
//     textItem: {
//         margin: 8,
//         fontFamily: FontFamilyName.POPPINSSEMIBOLD,
//         fontSize: 15,
//         fontWeight: '500',
//         color: '#000000'
//     },
//     questionBox: {
//         top: 35,
//         marginBottom: 30,
//         padding: 8,
//         backgroundColor: '#FFFFFF',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 2,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//     },
//     check: {
//         marginLeft: 10,
//         fontFamily: FontFamilyName.POPPINSREGULAR,
//         fontSize: 12,
//         fontWeight: '600', color: '#0B5290'
//     },
//     TextColorDropdown: {
//         fontFamily: FontFamilyName.POPPINSREGULAR,
//         fontWeight: '400',
//         fontSize: 13,
//         color: '#000000'
//     },
//     dropdownButtonStyle: {
//         backgroundColor: '#DFF2FE',
//         borderRadius: 5,
//         paddingHorizontal: 4,
//         paddingVertical: 2,
//         margin: 5,
//         padding: 18
//     },
//     dropdownButtonTxtStyle: {
//         flex: 1,
//         fontSize: 18,
//         fontWeight: '500',
//         color: '#151E26',
//     },

//     dropdownMenuStyle: {
//         backgroundColor: '#E9ECEF',
//         borderRadius: 8,
//     },
//     dropdownItemStyle: {
//         width: '100%',
//         paddingHorizontal: 12,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingVertical: 8,
//     },
//     dropdownItemTxtStyle: {
//         flex: 1,
//         fontSize: 18,
//         fontWeight: '500',
//         color: '#000000',
//         fontFamily: FontFamilyName.POPPINSREGULAR, fontSize: 10, fontWeight: '400'
//     },
//     dropdownItemIconStyle: {
//         fontSize: 28,
//         marginRight: 8,
//     },
//     prescale: {
//         // marginLeft: 87,
//         margin: 5,

//     },
//     notebox: {
//         flex: 1,
//         height: 45,
//         width: 49,
//         justifyContent: 'center', alignItems: 'center',
//         borderRadius: 10, backgroundColor: '#DFF2FE',
//     },
//     NoteImage: {
//         height: 26,
//         width: 23,


//     },
//     textInputContainer: {
//         marginTop: 10,
//     },
//     textInput: {
//         backgroundColor: '#F3F3F3',
//         borderRadius: 5,
//         paddingLeft: 10,
//         marginBottom: 10,

//     },
//     closeTextInput: {
//         color: 'blue',
//         textAlign: 'right',
//     },

//     uploadFileButton: {
//         // top:3,
//         marginHorizontal: 3,
//         backgroundColor: '#DFF2FE',
//         padding: 10,
//         borderRadius: 5,
//         alignItems: 'center',
//         marginBottom: 5,
//     },
//     uploadFileButtonText: {
//         color: '#0B5290',
//         fontFamily: FontFamilyName.POPPINSSEMIBOLD,
//         fontSize: 15,
//         fontWeight: '700',
//     },
//     optionsBox: {
//         width: 300,
//         backgroundColor: '#F3F3F3',
//         borderRadius: 10,
//         padding: 20,
//         marginTop: 10,
//         alignItems: 'center',
//     },
//     GalleryIcon: {
//         height: 70,
//         width: 75
//     },
//     rowContainer: {
//         flexDirection: 'row',
//         width: '100%',
//         justifyContent: 'center',
//     },

//     optionButtonGallery: {
//         color: '#FFFFFF',
//         fontFamily: FontFamilyName.POPPINSSEMIBOLD,
//         fontWeight: '700',
//         fontSize: 15,
//         backgroundColor: '#0B5290',
//         padding: 10,
//         borderRadius: 5,
//         marginVertical: 10,
//         marginHorizontal: 5,
//         alignItems: 'center',

//     },
//     optionButtonCamera: {
//         color: '#0B5290',
//         backgroundColor: '#DFF2FE',
//         fontFamily: FontFamilyName.POPPINSSEMIBOLD,
//         fontWeight: '700',
//         fontSize: 15,
//         padding: 10,
//         borderRadius: 5,
//         marginVertical: 10,
//         marginHorizontal: 5,
//         alignItems: 'center',
//     },
//     optionButtonText: {
//         color: '#fff',
//         fontSize: 16,
//     },
//     imageContainer: {
//         alignItems: 'center',
//         backgroundColor: 'black',
//         borderRadius: 10,
//         alignItems: 'center'
//     },
//     uploadedImage: {
//         width: 200,
//         height: 200,
//         marginTop: 10,
//         borderRadius: 10,
//         marginBottom: 10,
//     },
//     removeButton: {
//         position: 'absolute',
//         bottom: 15,
//         padding: 5,
//         borderRadius: 5,
//         borderWidth: 1,
//         borderColor: 'grey',
//     },
//     removeButtonInner: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     removeButtonText: {
//         color: '#FFFFFF',
//         fontSize: 12,
//         fontFamily: 'Poppins-SemiBold',
//         fontWeight: '700',
//         marginLeft: 15,
//     },
//     deleteIcon: {
//         width: 16,
//         height: 21,
//     },

// });

// export default ProcessControl;


import React, { useState, useEffect } from "react";
import { TextInput, ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, ScrollView, FlatList, Pressable } from 'react-native';
import SelectDropdown from "react-native-select-dropdown";
import { FontFamilyName } from "../src/styles/Customfonts";
import { IconPngImages, images } from "../src/asset/images/map";
import DocumentPicker from 'react-native-document-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import FlashMessage, { showMessage } from "react-native-flash-message";
const ProcessControl = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [secondModalVisible, setSecondModalVisible] = useState(false);
    const [listData, setListData] = useState([]);
    const [secondModalData, setSecondModalData] = useState([]);
    const [selected, setSelected] = React.useState([]);
    const [selecteSeverity, setSelecteSeverity] = React.useState([]);
    const [selecteCompliance, setSelecteCompliance] = React.useState([]);
    const [selecteProduct, setSelecteProduct] = React.useState([]);
    const [selecteVertical, setSelecteVertical] = React.useState([]);
    const [isTextInputVisible, setIsTextInputVisible] = React.useState(false);
    const [noteText, setNoteText] = React.useState('');


    const [modalVisiblea, setModalVisiblea] = useState(false);
    const [isBoxVisible, setBoxVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    useEffect(() => {
        const staticData = [
            { id: 1, name: "Management & Infrastructure", number: "0/16", total: 16 },
            { id: 2, name: "ID Card Management", number: "0/16", total: 16 },
            { id: 3, name: "Allocation", number: "0/16", total: 16 },
            { id: 4, name: "Cash Deposit & PDC Management", number: "0/16", total: 16 },
            { id: 5, name: "Repossession", number: "0/16", total: 16 },
            { id: 6, name: "Hygiene", number: "0/16", total: 16 },
            { id: 7, name: "Collection System", number: "0/16", total: 16 },
            { id: 8, name: "Call Recording", number: "0/16", total: 16 },
            { id: 9, name: "HHT Management", number: "0/16", total: 16 },
            { id: 10, name: "Miscellaneous", number: "0/16", total: 16 },
            { id: 11, name: "Repossession", number: "0/16", total: 16 }
        ];
        setListData(staticData);

        const secondModalStaticData = [
            { name: "Region", number: "South" },
            { name: "State", number: "Tamil Nadu" },
            { name: "Location", number: "Chennai" },
            { name: "Review Type", number: "HDB" },
            { name: "Vendor Type", number: "Collection & Repossession" },
            { name: "VBMS Code", number: "0987654321" },
            { name: "Agency Code", number: "098248448" },
            { name: "Agency Name", number: "HBD Financial Services Ltd." },
            { name: "Date of Review", number: "31st Nov 2024" },
            { name: "Promoter", number: "Partnership" },
        ];
        setSecondModalData(secondModalStaticData);
    }, []);

    const questionAndDropDownData = [
        {
            id: "Q 1.1",
            question: 'Is Vendor\'s current Office Address as per the agreement and contact no & email id as per the bank record?',
            check: "Agency_Address",
            typescale: [
                'process',
                'regulatory'
            ],
            severity: [
                'high',
                'medium',
                'low'
            ],
            compliance: [
                'yes',
                'no'
            ],
            product: [
                'AGRI',
                'AUTO_LOANS',
                'CONSUMERE_DURABLE',
                'CREDIT_CART',
                'CTG',
                'DLOD',
                'GOLD_LOAN',
                'HDB',
                'LAS',
                'MORT',
                'RIC_CASES',
                'TWO_WHEELER_LOAN',
                'UNSECURED_LOAN'
            ],
            vertical: [
                'pick up',
                'flows',
                'recovery'
            ]
        },
        {
            id: "Q 1.2",
            question: 'Is Vendor\'s current Office Address as per the agreement and contact no & email id as per the bank record?',
            check: "Agency_Address",
            typescale: [
                'process',
                'regulatory'
            ],
            severity: [
                'high',
                'medium',
                'low'
            ],
            compliance: [
                'yes',
                'no'
            ],
            product: [
                'AGRI',
                'AUTO_LOANS',
                'CONSUMERE_DURABLE',
                'CREDIT_CART',
                'CTG',
                'DLOD',
                'GOLD_LOAN',
                'HDB',
                'LAS',
                'MORT',
                'RIC_CASES',
                'TWO_WHEELER_LOAN',
                'UNSECURED_LOAN'
            ],
            vertical: [
                'pick up',
                'flows',
                'recovery'
            ]
        },];

    // const handleImagePick = (response) => {
    //     if (response.didCancel) {
    //         console.log('User cancelled image picker');
    //     } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //     } else {
    //         const uri = response.assets[0].uri;
    //         setSelectedImage(uri);
    //         console.log(uri);
    //     }
    // };
    const handleImagePick = (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else {
            const uri = response.assets[0].uri;
            setSelectedImage(uri);
            uploadImage(uri); // Call the function to display the message
            console.log(uri);
        }
    };
    const selectImageFromGallery = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };

        launchImageLibrary(options, handleImagePick);
        setModalVisiblea(false);
    };

    const takePhotoWithCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };

        launchCamera(options, handleImagePick);
        setModalVisiblea(false);
    };

    const takePhoto = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };

        // Show camera to take a photo
        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.error) {
                console.log('Camera Error: ', response.error);
            } else {
                const uri = response.assets[0].uri;
                setSelectedImage(uri);
                console.log(uri);
            }
        });
    };
    const removeImage = () => {
        setSelectedImage(null);
    };
    // const uploadImage = (uri) => {
    //     // Logic to upload image...
    //     showMessage({
    //         message: "Successful",
    //         description: "Your image has been successfully uploaded.",
    //         type: "success",
    //     });
    // };
    const uploadImage = (uri) => {
        // Logic to upload image...
        showMessage({
            message: "Successful",
            description: "Your image has been successfully uploaded.",
            type: "success",
            duration: 50000, // Adjust the duration if needed
            icon: { icon: "success", position: "left" }, // Optionally, you can add an icon
        });
    };

    const renderQuestion = ({ item }) => (
        <View style={styles.questionBox}>
            <Text style={styles.questionText}>{item.id}</Text>
            <Text style={styles.textItem}>{item.question}</Text>
            <Text style={styles.check}>Check: {item.check}</Text>
            <View style={styles.selectrow}>
                <SelectDropdown
                    data={item.typescale}
                    onSelect={(selectedItem, index) => {
                        setSelected(selectedItem); // Update selected item
                    }}
                    renderButton={(selectedItem) => {
                        return (
                            <View style={styles.dropdownButtonStyle}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textColor}>Types of lapse: </Text>
                                    <Image style={styles.iconImg} source={IconPngImages.ICON} />
                                </View>
                                {selected && ( // Render selected item if it exists
                                    <Text style={[styles.TextColorDropdown]}>{selected}</Text>
                                )}
                            </View>

                        );
                    }}
                    renderItem={(isSelected) => {
                        return (
                            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                <Text style={styles.dropdownItemTxtStyle}>{item.typescale}</Text>
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />
                <SelectDropdown
                    data={item.severity}
                    onSelect={(selectedItemSeverity, index) => {
                        setSelecteSeverity(selectedItemSeverity); // Update selected item
                    }}
                    renderButton={(selectedItemSeverity) => {
                        return (
                            <View style={styles.dropdownButtonStyle}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textColor}>Severity </Text>
                                    <Image style={styles.iconImg} source={IconPngImages.ICON} />
                                </View>
                                {selecteSeverity && ( // Render selected item if it exists
                                    <Text style={[styles.TextColorDropdown]}>{selecteSeverity}</Text>
                                )}
                            </View>
                        );
                    }}
                    renderItem={(isSelected) => {
                        return (
                            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                <Text style={styles.dropdownItemTxtStyle}>{item.severity}</Text>
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />
                <SelectDropdown
                    data={item.compliance}
                    onSelect={(selectedItemCompliance, index) => {
                        setSelecteCompliance(selectedItemCompliance); // Update selected item
                    }}
                    renderButton={(selectedItemCompliance) => {
                        return (
                            <View style={styles.dropdownButtonStyle}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textColor}>Compliance </Text>
                                    <Image style={styles.iconImg} source={IconPngImages.ICON} />
                                </View>
                                {selecteCompliance && ( // Render selected item if it exists
                                    <Text style={[styles.TextColorDropdown]}>{selecteCompliance}</Text>
                                )}
                            </View>
                        );
                    }}
                    renderItem={(isSelected) => {
                        return (
                            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                <Text style={styles.dropdownItemTxtStyle}>{item.compliance}</Text>
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />

            </View>

            <View style={styles.selectrow}>
                <SelectDropdown
                    data={item.product}
                    onSelect={(selectedItemProduct, index) => {
                        setSelecteProduct(selectedItemProduct); // Update selected item
                    }}
                    renderButton={(selectedItemProduct) => {
                        return (
                            <View style={styles.dropdownButtonStyle}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={[styles.textColor, styles.productcontainer]}>Product</Text>
                                    <Image style={styles.iconImg} source={IconPngImages.ICON} />
                                </View>
                                {selecteProduct && (
                                    <Text style={[styles.TextColorDropdown]}>{selecteProduct}</Text>
                                )}
                            </View>
                        );
                    }}
                    renderItem={(isSelected) => {
                        return (
                            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                <Text style={styles.dropdownItemTxtStyle}>{item.product}</Text>
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />
                <SelectDropdown
                    data={item.vertical}
                    onSelect={(selectedItemVertical, index) => {
                        setSelecteVertical(selectedItemVertical); // Update selected item
                    }}
                    renderButton={(selectedItemVertical) => {
                        return (
                            <View style={styles.dropdownButtonStyle}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textColor}>Vertical </Text>
                                    <Image style={styles.iconImg} source={IconPngImages.ICON} />
                                </View>
                                {selecteVertical && ( // Render selected item if it exists
                                    <Text style={[styles.TextColorDropdown]}>{selecteVertical}</Text>
                                )}
                            </View>
                        );
                    }}
                    renderItem={(isSelected) => {
                        return (
                            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                <Text style={styles.dropdownItemTxtStyle}>{item.typescale}</Text>
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />
                <Pressable style={[styles.prescale]} onPress={() => setIsTextInputVisible(!isTextInputVisible)}>
                    <View style={[styles.notebox]}>
                        <Image style={[styles.NoteImage]} source={IconPngImages.NOTEICON} />
                    </View>
                </Pressable>
            </View>
            {isTextInputVisible && (
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Test Step"
                        value={noteText}
                        onChangeText={setNoteText}
                        onSubmitEditing={() => setIsTextInputVisible(false)} // Close the TextInput when submit button is pressed
                    />
                    {/* <TouchableOpacity onPress={() => setIsTextInputVisible(false)}>
                        <Text style={styles.closeTextInput}>Close</Text>
                    </TouchableOpacity> */}

                </View>
            )}

            {/* <View style={styles.container}>
                <TouchableOpacity onPress={() => setBoxVisible(true)} style={styles.uploadFileButton}>
                    <Text style={styles.uploadFileButtonText}>Upload Image</Text>
                </TouchableOpacity>
                {isBoxVisible && (
                    <View style={styles.optionsBox}>
                        <View></View>
                        <Image style={styles.GalleryIcon} source={IconPngImages.GALLERYICON} />
                        <View style={styles.rowContainer}>
                            <TouchableOpacity onPress={takePhotoWithCamera} style={styles.optionButton}>
                                <Text style={styles.optionButtonCamera}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={selectImageFromGallery} style={styles.optionButton}>
                                <Text style={styles.optionButtonGallery}>Gallery</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => setBoxVisible(false)} style={styles.optionButton}>
                            <Text style={styles.optionButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {selectedImage && (
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: selectedImage }} style={styles.uploadedImage} />
                        <TouchableOpacity onPress={removeImage} style={styles.removeButton}>
                            <View style={styles.removeButtonInner}>
                                <Image source={IconPngImages.DELETE} style={styles.deleteIcon} />
                                <Text style={styles.removeButtonText}>Remove</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </View> */}

            <View style={styles.container}>
                <TouchableOpacity onPress={() => setBoxVisible(true)} style={styles.uploadFileButton}>
                    <Text style={styles.uploadFileButtonText}>Upload Image</Text>
                </TouchableOpacity>
                {isBoxVisible && (
                    <View style={styles.optionsBox}>
                        <View></View>
                        <Image style={styles.GalleryIcon} source={IconPngImages.GALLERYICON} />
                        <View style={styles.rowContainer}>
                            <TouchableOpacity onPress={takePhotoWithCamera} style={styles.optionButton}>
                                <Text style={styles.optionButtonCamera}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={selectImageFromGallery} style={styles.optionButton}>
                                <Text style={styles.optionButtonGallery}>Gallery</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => setBoxVisible(false)} style={styles.optionButton}>
                            <Text style={styles.optionButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {selectedImage && (
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: selectedImage }} style={styles.uploadedImage} />
                        <TouchableOpacity onPress={removeImage} style={styles.removeButton}>
                            <View style={styles.removeButtonInner}>
                                <Image source={IconPngImages.DELETE} style={styles.deleteIcon} />
                                <Text style={styles.removeButtonText}>Remove</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}

                <FlashMessage position="top" />
            </View>



        </View>
    );
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
                    <Text style={styles.appBarTitle}>Process Control</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.managementRow}>
                    <TouchableOpacity
                        style={styles.managementSection}
                        onPress={() => setModalVisible(true)} // Show the modal
                    >
                        <Text style={styles.managementText}>Management & Infrastructure</Text>
                        <Image
                            source={IconPngImages.TRAILINGICON}
                            style={styles.trailingIcon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.integerText}
                        onPress={() => setSecondModalVisible(true)} // Show the second modal
                    >
                        <Text style={styles.integerColor}>
                            1/16
                        </Text>
                        <View style={styles.characterICircle}>
                            <Text style={styles.characterText}>
                                i
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <FlatList
                    data={questionAndDropDownData}
                    renderItem={renderQuestion}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingBottom: 20 }} // Adjust padding if necessary
                />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.horizontalLine}></Text>
                                <Text style={styles.modalTitle}>Process Controls</Text>
                                <Text style={styles.horizontalLineComplete}></Text>

                                <ScrollView style={styles.listContainer}>
                                    {listData.map((item) => (
                                        <View key={item.id} style={styles.listItem}>
                                            <Text style={styles.listItemName}>{item.name}</Text>
                                            <Text style={styles.listItemnumber}>{item.number}</Text>
                                            <Text style={styles.listItemtotal}>total {item.total}</Text>
                                        </View>
                                    ))}
                                </ScrollView>

                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.closeButtonText}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={secondModalVisible}
                onRequestClose={() => setSecondModalVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setSecondModalVisible(false)}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>

                                <ImageBackground style={styles.rectangleImage} source={images.RECTANGLE}>
                                    <View style={styles.textContainer}>
                                        <View style={styles.auditTextContainer}>
                                            <Text style={styles.auditText}>Audit Of</Text>
                                        </View>
                                        <Text style={styles.solutionText}>Solution & Services</Text>
                                    </View>
                                </ImageBackground>


                                <ScrollView style={styles.listContainer}>
                                    {secondModalData.map((item, index) => (
                                        <View key={index} style={styles.listItem}>
                                            <Text style={styles.listItemName}>{item.name}</Text>
                                            <Text style={styles.listItemnumberSecondModal}>{item.number}</Text>
                                        </View>
                                    ))}
                                </ScrollView>

                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={() => setSecondModalVisible(false)}
                                >
                                    <Text style={styles.closeButtonText}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    horizontalLine: {
        top: 5,
        height: 5.78,
        width: '15%',
        backgroundColor: '#BEBBBB',
        borderRadius: 10,
    },
    productcontainer: {
        width: 123
    },
    textColor: {
        color: '#0B5290',
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontSize: 10,
        fontWeight: '400'
    },

    iconImg: {
        height: 5, width: 14,
        marginLeft: 10,
        top: 5
    },
    selectrow: {
        flexDirection: 'row',

    },

    horizontalLineComplete: {
        top: 8,
        height: 2,
        width: '100%',
        backgroundColor: '#6992C6', // Adjust color for better contrast
        borderRadius: 10,
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
        height: 67,
    },
    drawerIconContainer: {
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerIcon: {
        width: 9,
        height: 15,
        color: 'black'
    },
    appBarTitle: {
        fontSize: 20,
        color: '#000000',
        fontSize: 16,
        fontWeight: '700',
    },
    contentContainer: {
        margin: 20,
    },
    managementRow: {
        flexDirection: 'row',
        //  alignItems: 'center', // Align items in the row vertically
    },
    managementSection: {
        height: 40,
        width: 240,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    managementText: {
        fontSize: 12,
        color: '#000',
        // flex: 1, // Take up remaining space
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontWeight: '600'
    },
    trailingIcon: {
        width: 25,
        height: 25,
    },
    integerText: {

        // height: 40,
        width: 70,

        marginLeft: 10, // Adjust spacing as needed

        fontSize: 16,
        backgroundColor: '#DFF2FE',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    integerColor: {
        color: '#000000',
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontSize: 10,
        fontWeight: '400'
    },
    characterICircle: {
        width: 20,
        height: 20,
        borderRadius: 15, // Make it circular
        backgroundColor: '#ffffff', // Background color
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2, // Border width
        borderColor: '#ED232A', // Border color
        marginLeft: 10
    },
    characterText: {
        fontSize: 12,
        color: '#ED232A',
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontWeight: '400'
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        height: '75%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalContent: {
        backgroundColor: 'white',
        margin: 0,
        alignItems: 'center',
    },
    modalTitle: {
        top: 10,

        fontWeight: '500',
        color: '#000000',
        marginBottom: 13,
        fontFamily: FontFamilyName.POPPINSBOLD,
        fontSize: 16
    },
    listContainer: {
        width: '100%',

    },
    listItem: {
        top: 10,
        padding: 16,

        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        flexDirection: 'row',
    },
    listItemnumber: {
        fontSize: 13,
        color: '#4BAE4F',
        marginLeft: 'auto',
        marginRight: 15,
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontWeight: '500'
    },
    listItemnumberSecondModal: {
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontWeight: '500',
        fontSize: 13,
        color: '#0B5290',
        marginLeft: 'auto',
        marginRight: 15
    },
    listItemtotal: {
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontWeight: '600',
        fontSize: 13,
        color: '#000000',
        borderRadius: 20,
        overflow: 'hidden',
        paddingHorizontal: 8,
        backgroundColor: '#DFF2FE',
    },
    listItemName: {
        fontSize: 13,
        color: '#333333',
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontWeight: '400'
    },
    closeButton: {
        alignSelf: 'center',
        padding: 10,
        backgroundColor: '#ED232A',
        borderRadius: 10,
        marginTop: 20,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
    rectangleImage: {
        height: 120,
        width: "100%",
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
        padding: 3,
        marginBottom: 10,
    },
    auditText: {
        color: '#ED232A',
        fontSize: 16,
        fontFamily: FontFamilyName.INTERREGULAR,
        fontWeight: '400'
    },
    solutionText: {
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },

    questionText: {
        position: 'absolute',
        top: -20,
        left: 11, // Left margin
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: '#E7F7EF',
        padding: 8,
        color: '#4BAE4F',
        marginBottom: 10,
        verticalAlign: 'middle',
        borderRadius: 10,
        fontFamily: FontFamilyName.INTERREGULAR,
        fontSize: 12,
        fontWeight: '500'
    },
    textItem: {
        margin: 8,
        fontFamily: FontFamilyName.POPPINSSEMIBOLD,
        fontSize: 15,
        fontWeight: '500',
        color: '#000000'
    },
    questionBox: {
        top: 35,
        marginBottom: 30,
        padding: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    check: {
        marginLeft: 10,
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontSize: 12,
        fontWeight: '600', color: '#0B5290'
    },
    TextColorDropdown: {
        fontFamily: FontFamilyName.POPPINSREGULAR,
        fontWeight: '400',
        fontSize: 13,
        color: '#000000'
    },
    dropdownButtonStyle: {
        backgroundColor: '#DFF2FE',
        borderRadius: 5,
        paddingHorizontal: 4,
        paddingVertical: 2,
        margin: 5,
        padding: 18
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },

    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: '100%',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#000000',
        fontFamily: FontFamilyName.POPPINSREGULAR, fontSize: 10, fontWeight: '400'
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    prescale: {
        // marginLeft: 87,
        margin: 5,

    },
    notebox: {
        flex: 1,
        height: 45,
        width: 49,
        justifyContent: 'center', alignItems: 'center',
        borderRadius: 10, backgroundColor: '#DFF2FE',
    },
    NoteImage: {
        height: 26,
        width: 23,


    },
    textInputContainer: {
        marginTop: 10,
    },
    textInput: {
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,

    },
    closeTextInput: {
        color: 'blue',
        textAlign: 'right',
    },

    uploadFileButton: {
        // top:3,
        marginHorizontal: 3,
        backgroundColor: '#DFF2FE',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 5,
    },
    uploadFileButtonText: {
        color: '#0B5290',
        fontFamily: FontFamilyName.POPPINSSEMIBOLD,
        fontSize: 15,
        fontWeight: '700',
    },
    optionsBox: {
        width: 300,
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        padding: 20,
        marginTop: 10,
        alignItems: 'center',
    },
    GalleryIcon: {
        height: 70,
        width: 75
    },
    rowContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },

    optionButtonGallery: {
        color: '#FFFFFF',
        fontFamily: FontFamilyName.POPPINSSEMIBOLD,
        fontWeight: '700',
        fontSize: 15,
        backgroundColor: '#0B5290',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        alignItems: 'center',

    },
    optionButtonCamera: {
        color: '#0B5290',
        backgroundColor: '#DFF2FE',
        fontFamily: FontFamilyName.POPPINSSEMIBOLD,
        fontWeight: '700',
        fontSize: 15,
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    optionButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    imageContainer: {
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        alignItems: 'center'
    },
    uploadedImage: {
        width: 200,
        height: 200,
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    removeButton: {
        position: 'absolute',
        bottom: 15,
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
    },
    removeButtonInner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    removeButtonText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '700',
        marginLeft: 15,
    },
    deleteIcon: {
        width: 16,
        height: 21,
    },

});

export default ProcessControl;
