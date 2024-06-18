// import React from "react";
// import { StyleSheet, Text, View, Image } from 'react-native';
// import { images } from "../asset/images/map";

// const DashboardDetails = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.openbox}>
//                 <Image style={styles.imageStyle} source={images.RECTANGLE} />
//                 <View style={styles.textContainer}>
//                     <Text style={styles.auditText}>Audit Of</Text>
//                     <Text style={styles.solutionText}>Solution & Services</Text>
//                 </View>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: '#fff',
//     },
//     openbox: {
//         margin: 30,
//         backgroundColor: '#024886',
//         borderRadius: 10,
//         height: 450,

//     },
//     imageStyle: {
//         height: 113,
//         width: 353,
//     },
//     textContainer: {
//         top: 30,
//         position: 'absolute',
//         transform: [{ translateY: -20 }], // Adjust for text height
//         width: '100%',
//         alignItems: 'center',
//     },
//     auditText: {
//         backgroundColor: '#fff',
//         borderRadius: 30,
//         padding: 5,
//         color: '#ED232A',
//     },
//     solutionText: {
//         top: 10,
//         color: '#fff',
//         fontSize: 16,
//     }
// });

// export default DashboardDetails;
// import React from "react";
// import { StyleSheet, Text, View, Image } from 'react-native';
// import { images } from "../asset/images/map";

// const DashboardDetails = () => {

//     return (
//         <View style={styles.container}>
//             <View style={styles.square1}>
//                 <Image style={styles.rectangleImage} source={images.RECTANGLE} />
//             </View>
//             <View style={styles.textContainer}>
//                      <Text style={styles.auditText}>Audit Of</Text>
//                     <Text style={styles.solutionText}>Solution & Services</Text>
//                 </View>
//             <View style={styles.square2} />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     square1: {
//         height: 294,
//         width: 353,
//         borderRadius: 10,
//         marginLeft: 18,
//         marginEnd: 18,
//         backgroundColor: '#FFFFFF',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         justifyContent: 'flex-start', // Ensures that the image is at the top
//         alignItems: 'center' // Centers the image horizontally
//     },
//     square2: {
//         height: 40,
//         width: 40,
//         backgroundColor: 'blue',
//         marginTop: 20, // Adjust the spacing between the squares as needed
//     },
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     rectangleImage: {
//         height: 113,
//         width: 353,
//         backgroundColor: '#0B5290',
//         borderTopLeftRadius: 10, // Ensures the image fits nicely within the square
//         borderTopRightRadius: 10,
//         alignSelf:'center',
//         justifyContent:'center'

//     },

// });

// export default DashboardDetails;

// import React from "react";
// import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// import { images } from "../asset/images/map";

// const DashboardDetails = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.square1}>
//                 <ImageBackground style={styles.rectangleImage} source={images.RECTANGLE}>
//                     <View style={styles.textContainer}>
//                         <View style={styles.auditTextContainer}>
//                             <Text style={styles.auditText}>Audit Of</Text>
//                         </View>
//                         <Text style={styles.solutionText}>Solution & Services</Text>
//                     </View>
//                 </ImageBackground>
//             </View>
//             <View style={styles.square2} />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     square1: {
//         height: 294,
//         width: 353,
//         borderRadius: 10,
//         marginLeft: 18,
//         marginEnd: 18,
//         backgroundColor: '#FFFFFF',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//     },
//     square2: {
//         height: 40,
//         width: 40,
//         backgroundColor: 'blue',
//         marginTop: 20,
//     },
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     rectangleImage: {
//         height: 113,
//         width: 353,
//         backgroundColor: '#0B5290',
//         borderTopLeftRadius: 10,
//         borderTopRightRadius: 10,
//         // alignItems: 'center',
//         // justifyContent: 'center',
//     },
//     textContainer: {
//        position: 'absolute',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100%',
//         width: '100%',
//     },
//     auditTextContainer: {
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 5,

//     },
//     auditText: {
//         color: '#000',
//         fontSize: 16,
//     },
//     solutionText: {
//         color: '#FFF',
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
// });

// export default DashboardDetails;

// import React from "react";
// import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// import { images } from "../asset/images/map";

// const DashboardDetails = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.square1}>
//                 <ImageBackground style={styles.rectangleImage} source={images.RECTANGLE}>
//                     <View style={styles.textContainer}>
//                         <View style={styles.auditTextContainer}>
//                             <Text style={styles.auditText}>Audit Of</Text>
//                         </View>
//                         <Text style={styles.solutionText}>Solution & Services</Text>
//                     </View>
//                 </ImageBackground>
//             </View>
//             <View style={styles.square2} />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     square1: {
//         height: 294,
//         width: 353,
//         borderRadius: 10,
//         marginLeft: 18,
//         marginEnd: 18,
//         backgroundColor: '#FFFFFF',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//     },
//     square2: {
//         height: 40,
//         width: 40,
//         backgroundColor: 'blue',
//         marginTop: 20,
//     },
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     rectangleImage: {
//         height: 113,
//         width: 353,
//         backgroundColor: '#0B5290',
//         borderTopLeftRadius: 10,
//         borderTopRightRadius: 10,
//     },
//     textContainer: {

//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100%',
//         width: '100%',
//     },
//     auditTextContainer: {
//         backgroundColor: 'white',
//         borderRadius: 20, // Changed back to 20 for rounded corners
//         padding: 5,

//     },
//     auditText: {
//         color: '#000',
//         fontSize: 16,
//     },
//     solutionText: {
//         color: '#FFF',
//         fontSize: 20,
//         fontWeight: 'bold',

//     },
// });

// export default DashboardDetails;



/// correct dot in single line and dot
// import React from "react";
// import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// import { images } from "../asset/images/map";

// const DashboardDetails = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.square1}>
//                 <ImageBackground style={styles.rectangleImage} source={images.RECTANGLE}>
//                     <View style={styles.textContainer}>
//                         <View style={styles.auditTextContainer}>
//                             <Text style={styles.auditText}>Audit Of</Text>
//                         </View>
//                         <Text style={styles.solutionText}>Solution & Services</Text>
//                     </View>

//                     <View style={styles.square2}>
//                         <View style={styles.verticalLineContainer}>

//                             <View style={styles.verticalLine} />
//  <View style={styles.textWithDot}>
//                                 <View style={styles.dot} />
//                                 <Text>Region</Text>
//                             </View>


//                             <View style={styles.verticalLine} />
//                             <View style={styles.textWithDot}>
//                                 <View style={styles.dot} />
//                                 <Text>Location</Text>
//                             </View>


//                             <View style={styles.verticalLine} />
//                             <View style={styles.textWithDot}>
//                                 <View style={styles.dot} />
//                                 <Text>Vendor Type</Text>
//                             </View>


//                             <View style={styles.verticalLine} />
//                             <View style={styles.textWithDot}>
//                                 <View style={styles.dot} />
//                                 <Text>Agency Code</Text>
//                             </View>


//                             <View style={styles.verticalLine} />
//                             <View style={styles.textWithDot}>
//                                 <View style={styles.dot} />
//                                 <Text>Date of Review</Text>
//                             </View>


//                             <View style={styles.verticalLine} />

//                         </View>
//                     </View>
//                 </ImageBackground>


//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     square1: {
//         height: 400,
//         width: 353,
//         borderRadius: 10,
//         backgroundColor: '#FFFFFF',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//     },
//     square2: {
//         height: 295,
//         width: 310,
//         borderRadius: 10,
//         backgroundColor: '#FFFFFF',
//         alignSelf: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,

//     },
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     rectangleImage: {
//         height: 120,
//         width: 353,
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
//         color: '#000',
//         fontSize: 16,
//     },
//     solutionText: {
//         color: '#FFF',
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 5
//     },
//     verticalLineContainer: {
//         flexDirection: 'column',
//         marginLeft: 20

//     },
//     verticalLine: {
//         width: 2,
//         height: 32,
//         backgroundColor: '#BEBBBB',

//     },
//     textWithDot: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     dot: {
//         width: 9,
//         height: 9,
//         backgroundColor: '#BEBBBB',
//         borderRadius: 5,
//         marginRight:10, // Adjusted margin here for dot and text
//         marginHorizontal: -3, //margin for dot only
//     },

// });

// export default DashboardDetails;



// import React from "react";
// import { StyleSheet, Text, View, ImageBackground } from 'react-native';
// import { images } from "../asset/images/map";

// const DashboardDetails = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.square1}>
//                 <ImageBackground style={styles.rectangleImage} source={images.RECTANGLE}>
//                     <View style={styles.textContainer}>
//                         <View style={styles.auditTextContainer}>
//                             <Text style={styles.auditText}>Audit Of</Text>
//                         </View>
//                         <Text style={styles.solutionText}>Solution & Services</Text>
//                     </View>

//                     <View style={styles.square2}>
//                         <View style={styles.verticalLineContainer}>
//                         <View style={styles.verticalLine} />
//                             <View style={styles.textWithDot}>

//                                 <View style={styles.dot} />

//                                 <View>
//                                     <Text>Region</Text>
//                                     <Text>Region</Text>
//                                 </View>

//                             </View>

//                             <View style={styles.verticalLine} />

//                             <View style={styles.textWithDot}>
//                                 <View style={styles.dot} />
//                                 <View>
//                                     <Text>Region</Text>
//                                     <Text>Region</Text>
//                                 </View>
//                             </View>
//                             <View style={styles.verticalLine} />

//                             <View style={styles.textWithDot}>
//                                 <View style={styles.dot} />
//                                 <View>
//                                     <Text>Region</Text>
//                                     <Text>Region</Text>
//                                 </View>
//                             </View>
//                             <View style={styles.verticalLine} />

//                             <View style={styles.textWithDot}>
//                                 <View style={styles.dot} />
//                                 <View>
//                                     <Text>Region</Text>
//                                     <Text>Region</Text>
//                                 </View>
//                             </View>
//                             <View style={styles.verticalLine} />

//                             <View style={styles.textWithDot}>
//                                 <View style={styles.dot} />
//                                 <View>
//                                     <Text>Region</Text>
//                                     <Text>Region</Text>
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                 </ImageBackground>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     square1: {
//         height: 500,
//         width: 353,
//         borderRadius: 10,
//         backgroundColor: '#FFFFFF',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//     },
//     square2: {
//         height: 320,
//         width: 310,
//         borderRadius: 10,
//         backgroundColor: '#FFFFFF',
//         alignSelf: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//     },
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     rectangleImage: {
//         height: 120,
//         width: 353,
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
//         color: '#000',
//         fontSize: 16,
//     },
//     solutionText: {
//         color: '#FFF',
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 5
//     },
//     verticalLineContainer: {
//         flexDirection: 'column',
//         marginLeft: 25
//     },
//     verticalLine: {
//         width: 2,
//         height: 20,
//         backgroundColor: '#BEBBBB',
//     },
//     textWithDot: {
//         flexDirection: 'row',
//     },
//     dot: {
//         width: 9,
//         height: 9,
//         backgroundColor: '#BEBBBB',
//         borderRadius: 5,
//         marginRight: 10, // Adjusted margin here for dot and text
//         marginHorizontal: -3, // margin for dot only
//     },
// });

// export default DashboardDetails;



// import React from "react";
// import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
// import { images } from "../asset/images/map";

// const DashboardDetails = () => {
//     const items = [
//         { region: 'Region',  country: 'South'},
//         { region: 'Location', country: 'Chennai'},
//         { region: 'Collection', country: 'Collection & Repossession' },
//         { region: 'Agency Code', country: '098248448'},
//         { region: 'Date of Review', country: '31st Nov 2024'},
//     ];
//     const items1 = [
//         { region: 'State',country: 'Tamil Nadu' },
//         { region: 'Review Type',country: 'HDB' },
//         { region: 'VBMS Code', country: '0987654321'},
//         { region: 'Agency Name',country: 'HBD Financial Services Ltd.' },
//         { region: 'VBMS Code', country: '0987654321'},
//     ];
//     return (
//         <View style={styles.container}>
//             <View style={styles.square1}>
//                 {/* <ImageBackground style={styles.rectangleImage} source={require('./images/Rectangle.png')}> */}
//                 <ImageBackground style={styles.rectangleImage} source={images.RECTANGLE}>
//                     <View style={styles.textContainer}>
//                         <View style={styles.auditTextContainer}>
//                             <Text style={styles.auditText}>Audit Of</Text>
//                         </View>
//                         <Text style={styles.solutionText}>Solution & Services</Text>
//                     </View>
//                 </ImageBackground>
//                 <View style={styles.square2}>
//                     <View style={styles.verticalLine} />
//                     <View style={styles.itemsContainer}>
//                         {items.map((item, index) => (
//                             <View key={index} style={styles.itemContainer}>
//                                 <View style={styles.rowText}>
//                                     <View style={styles.dot} />
//                                     <View style={styles.textColumn}>
//                                         <Text style={styles.regionText}>{item.region}:</Text>
//                                         <Text style={styles.countryText}>{item.country}</Text>
//                                     </View>
//                                 </View>
//                             </View>
//                         ))}
//                     </View>
//                     <View style={styles.verticalLine} />
//                     <View style={styles.itemsContainer}>
//                         {items1.map((item, index) => (
//                             <View key={index} style={styles.itemContainer}>
//                                 <View style={styles.rowText}>
//                                     <View style={styles.dot} />
//                                     <View style={styles.textColumn}>
//                                         <Text style={styles.regionText}>{item.region}:</Text>
//                                         <Text style={styles.countryText}>{item.country}</Text>
//                                     </View>
//                                 </View>
//                             </View>
//                         ))}
//                     </View>
//                 </View>
//                 <View style={styles.buttonContainer}>
//                     <TouchableOpacity style={styles.button}>
//                         <Text style={styles.buttonText}>Cancle</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.button}>
//                         <Text style={styles.buttonText}>Continue</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     square1: {
//         height: 500,
//         width: 353,
//         borderRadius: 10,
//         backgroundColor: '#FFFFFF',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//     },
//     square2: {
//         height: 250,
//         width: 310,
//         borderRadius: 10,
//         backgroundColor: '#FFFFFF',
//         alignSelf: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         flexDirection: 'row',
//         paddingLeft: 10,
//       ///  marginTop: 20,
//     },
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     rectangleImage: {
//         height: 120,
//         width: 353,
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
//         color: '#000',
//         fontSize: 16,
//     },
//     solutionText: {
//         color: '#FFF',
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 5,
//     },
//     itemsContainer: {
//         flex: 1,
//     },
//     itemContainer: {
//         flexDirection: 'column',
//         marginBottom: 4,
//     },
//     dot: {
//         width: 8,
//         height: 8,
//         backgroundColor: '#BEBBBB',
//         borderRadius: 4,
//         marginRight: 10,
//     },
//     verticalLine: {
//         width: 1,
//         backgroundColor: '#BEBBBB',
//         marginRight: -4,
//     },
//     regionText: {
//         fontWeight: 'bold',
//         marginRight: 5,
//         bottom: 4,
//         fontSize: 10,
//         color: '#5A5A5A',
//     },
//     rowText: {
//         top: 30,
//         flexDirection: 'row',
//         marginBottom: 10,
//     },
//     textColumn: {
//         flexDirection: 'column',
//     },
//     countryText: {
//         color: '#024886',
//         fontSize: 11,
//     },
//     buttonContainer: {
//         flexDirection: 'row',

//         marginTop: 20,


//     },
//     button: {
//         height:35,width:100,
//         backgroundColor: '#0B5290',
//         marginHorizontal:10,
//         borderRadius: 10,
//         alignItems:'center',
//         justifyContent:'center',
//         justifyContent: 'space-evenly',
//     },
//     buttonText: {
//         color: '#FFF',
//         fontSize: 16,
//     },
// });

// export default DashboardDetails;

// import React from "react";
// import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
// import { images } from "../asset/images/map";

// const DashboardDetails = () => {
//     const items = [
//         { region: 'Region', country: 'South' },
//         { region: 'Location', country: 'Chennai' },
//         { region: 'Collection', country: 'Collection & Repossession' },
//         { region: 'Agency Code', country: '098248448' },
//         { region: 'Date of Review', country: '31st Nov 2024' },
//     ];
//     const items1 = [
//         { region: 'State', country: 'Tamil Nadu' },
//         { region: 'Review Type', country: 'HDB' },
//         { region: 'VBMS Code', country: '0987654321' },
//         { region: 'Agency Name', country: 'HBD Financial Services Ltd.' },
//         { region: 'VBMS Code', country: '0987654321' },
//     ];
//     return (
//         <View style={styles.container}>
//             <View style={styles.square1}>
//                 <ImageBackground style={styles.rectangleImage} source={images.RECTANGLE}>
//                     <View style={styles.textContainer}>
//                         <View style={styles.auditTextContainer}>
//                             <Text style={styles.auditText}>Audit Of</Text>
//                         </View>
//                         <Text style={styles.solutionText}>Solution & Services</Text>
//                     </View>
//                 </ImageBackground>
//                 <View style={styles.square2}>
//                     <View style={styles.verticalLine} />
//                     <View style={styles.itemsContainer}>
//                         {items.map((item, index) => (
//                             <View key={index} style={styles.itemContainer}>
//                                 <View style={styles.rowText}>
//                                     <View style={styles.dot} />
//                                     <View style={styles.textColumn}>
//                                         <Text style={styles.regionText}>{item.region}:</Text>
//                                         <Text style={styles.countryText}>{item.country}</Text>
//                                     </View>
//                                 </View>
//                             </View>
//                         ))}
//                     </View>
//                     <View style={styles.verticalLine} />
//                     <View style={styles.itemsContainer}>
//                         {items1.map((item, index) => (
//                             <View key={index} style={styles.itemContainer}>
//                                 <View style={styles.rowText}>
//                                     <View style={styles.dot} />
//                                     <View style={styles.textColumn}>
//                                         <Text style={styles.regionText}>{item.region}:</Text>
//                                         <Text style={styles.countryText}>{item.country}</Text>
//                                     </View>
//                                 </View>
//                             </View>
//                         ))}
//                     </View>
//                 </View>
//                 <View style={styles.buttonContainer}>
//                     <TouchableOpacity style={styles.button}>
//                         <Text style={[styles.buttonText,]}>Cancel</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.button}>
//                         <Text style={styles.buttonText}>Continue</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     square1: {
//         height: 410,
//         width: 353,
//         borderRadius: 10,
//         backgroundColor: '#FFFFFF',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         alignItems: 'center',
//     },
//     square2: {
//         height: 250,
//         width: 310,
//         borderRadius: 10,
//         backgroundColor: '#FFFFFF',
//         alignSelf: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         flexDirection: 'row',
//         paddingLeft: 10,
//         marginTop: -35, // Adjust this value as needed to position square2 correctly
//     },
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     rectangleImage: {
//         height: 120,
//         width: 353,
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
//         color: '#000',
//         fontSize: 16,
//     },
//     solutionText: {
//         color: '#FFF',
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 5,
//     },
//     itemsContainer: {
//         flex: 1,
//     },
//     itemContainer: {
//         flexDirection: 'column',
//         marginBottom: 4,
//     },
//     dot: {
//         width: 8,
//         height: 8,
//         backgroundColor: '#BEBBBB',
//         borderRadius: 4,
//         marginRight: 10,
//     },
//     verticalLine: {
//         width: 1,
//         backgroundColor: '#BEBBBB',
//         marginRight: -4,
//     },
//     regionText: {
//         fontWeight: 'bold',
//         marginRight: 5,
//         bottom: 4,
//         fontSize: 10,
//         color: '#5A5A5A',
//     },
//     rowText: {
//         top: 30,
//         flexDirection: 'row',
//         marginBottom: 10,
//     },
//     textColumn: {
//         flexDirection: 'column',
//     },
//     countryText: {
//         color: '#024886',
//         fontSize: 11,
//     },
//     buttonContainer: {
//         flexDirection: 'row',
//         marginTop: 20,
//     },
//     button: {
//         height: 35,
//         width: 100,
//         backgroundColor: '#0B5290',
//         marginHorizontal: 10,
//         borderRadius: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     buttonText: {
//         color: '#FFF',
//         fontSize: 16,
//     },

// });

// export default DashboardDetails;


import React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { images } from "../asset/images/map";

const DashboardDetails = () => {
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
    return (
        <View style={styles.container}>
            <View style={styles.square1}>
                <ImageBackground style={styles.rectangleImage} source={images.RECTANGLE}>
                    <View style={styles.textContainer}>
                        <View style={styles.auditTextContainer}>
                            <Text style={styles.auditText}>Audit Of</Text>
                        </View>
                        <Text style={styles.solutionText}>Solution & Services</Text>
                    </View>
                </ImageBackground>
                <View style={styles.square2}>
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
                    <TouchableOpacity style={[styles.button, styles.cancelButton]}>
                        <Text style={[styles.buttonText, styles.canclebuttonText]}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.continueButton]}>
                        <Text style={[styles.buttonText, styles.contonuebuttonText]}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    square1: {
        height: 440,
        width: 353,
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
        width: 353,
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
        color: '#000',
        fontSize: 16,
    },
    solutionText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
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
        fontWeight: 'bold',
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
        color: '#024886',
        fontSize: 13,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft:10
    },
    button: {
        height: 35,
        width: 100,
       
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:40
    },
    cancelButton: {
        backgroundColor: '#DFF2FE',
    },
    continueButton: {
        backgroundColor: '#0B5290',
    },
    canclebuttonText: {
        color: '#0B5290',
        fontSize: 16,
    },
    contonuebuttonText: {
        color: '#FFFFFF'
    }
});

export default DashboardDetails;
