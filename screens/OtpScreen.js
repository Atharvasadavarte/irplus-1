
// import React from "react";
// import { ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { images } from "../src/asset/images/map";
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// const OtpScreen = () => {
//     const navigation = useNavigation();



//     const handleOtpPress = () => {
//         navigation.navigate('ForgotPassword');
//     };

//     return (
//         <ImageBackground source={images.BG} style={Styles.background}>
//             <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//                 <View style={Styles.container}>
//                     <Image style={Styles.HDFCLOGO} source={images.HDFCLOGO} />
//                     <Image style={Styles.VECTOR} source={images.VECTOR} />
//                     <View style={Styles.box}>
//                         <Text style={Styles.otpText}>OTP Screen</Text>
//                         <View style={Styles.formContainer}>


//                             <Text style={Styles.fourDigitText}>Enter 4 digit OTP, which sent your
//                                 registered mobile no xxxxxx2327</Text>





//                             <TouchableOpacity style={[Styles.forgotPasswordButton, Styles.resetOtpButtonLeft]}>
//                                 <Text style={Styles.resetOtpText}>Reset OTP</Text>
//                             </TouchableOpacity>

//                             <TouchableOpacity style={Styles.button} >
//                                 <Text style={Styles.buttonText}>VERIFY</Text>
//                             </TouchableOpacity>

//                         </View>
//                     </View>
//                 </View>
//             </ScrollView>
//         </ImageBackground>
//     );
// }

// const Styles = StyleSheet.create({
//     background: {
//         flex: 1,
//         //  resizeMode: "cover",
//         // justifyContent: "center"
//     },
//     container: {
//         flex: 1,
//         //  backgroundColor: "rgba(255,255,255,0.6)", // Adjust the opacity as needed
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     HDFCLOGO: {
//         top: 15,
//         height: 38,
//         width: 197,
//         marginBottom: 30
//     },
//     VECTOR: {
//         top: 10,
//         height: 42,
//         width: 60
//     },
//     box: {
//         top: 45,
//         // backgroundColor: "rgba(255,255,255,0.9)",
//         backgroundColor: "#FFFFFF",
//         padding: 30,
//         width: "100%",
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         overflow: 'hidden'
//     },
//     otpText: {
//         top: 40,
//         color: "#0B5290",
//         textAlign: 'center',
//         marginBottom: 20,
//         fontSize: 18,
//         fontWeight: 'bold'
//     },
//     fourDigitText:{
//       textAlign:'center',
//       fontSize: 18,
//       fontWeight: 'bold'

//     },
//     formContainer: {
//         top: 50,
//         width: "100%",
//         height: 400
//     },
//     label: {
//         marginBottom: 5,
//         color: "#5A5A5A"
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 30,
//     },
//     input: {
//         flex: 1,
//         height: 45,
//         borderColor: '#004F9F',
//         borderWidth: 1,
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         backgroundColor: "#EFF4FF"
//     },
//     icon: {
//         marginLeft: 10,
//     },
//     button: {
//         top: 50,
//         height: 45,
//         backgroundColor: '#0B5290',
//         paddingVertical: 10,
//         borderRadius: 5,
//         alignItems: 'center'
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 16
//     },
//     spaceforPassandForgot: {
//         marginBottom: 5,
//     },
//     resetOtpButtonLeft: {
//         alignSelf: 'flex-start'
//     },
//     resetOtpText: {
//         color: '#000000',
//     },
//     signUpContainer: {
//         flexDirection: 'row',
//         marginTop: 50,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     donthaveaccount: {
//         color: '#000000',
//         fontSize: 16
//     },
//     signUpText: {
//         color: '#0B5290',
//     },
//     signUpButton: {
//         paddingVertical: 5,
//         alignItems: 'center'
//     },
// });

// export default OtpScreen;

import React, { useState } from "react";
import { ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { images } from "../src/asset/images/map";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { FontFamilyName } from "../src/styles/Customfonts";

const OtpScreen = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState('');

    const handleSetPasswordPress = () => {
        navigation.navigate('SetPasswordScreen');
    };

    const handleCreatePassword = () => {
        navigation.navigate('CreatePasswordScreen');
    };
    // Function to handle OTP input change
    const handleOtpChange = (text, index) => {
        // Validate input to accept only numeric characters
        if (/^\d+$/.test(text) || text === '') {
            // Update the OTP state
            let newOtp = otp.split('');
            newOtp[index] = text;
            setOtp(newOtp.join(''));
        }
    };

    return (
        <ImageBackground source={images.BG} style={Styles.background}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={Styles.container}>
                    <Image style={Styles.HDFCLOGO} source={images.HDFCLOGO} />
                    <Image style={Styles.VECTOR} source={images.VECTOR} />
                    <View style={Styles.box}>
                        <Text style={Styles.otpText}>OTP Screen</Text>
                        <View style={Styles.formContainer}>

                            <Text style={Styles.fourDigitText}>Enter 4 digit OTP, which sent your registered mobile no xxxxxx2327</Text>

                            {/* OTP input boxes */}
                            <View style={Styles.otpInputContainer}>
                                {[0, 1, 2, 3].map((index) => (
                                    <TextInput
                                        key={index}
                                        style={Styles.otpInput}
                                        maxLength={1}
                                        placeholder="0"
                                        keyboardType="numeric"
                                        onChangeText={(text) => handleOtpChange(text, index)}
                                        value={otp[index]}
                                    />
                                ))}
                            </View>

                            <TouchableOpacity style={[Styles.forgotPasswordButton, Styles.resetOtpButtonLeft]}>
                                <Text style={Styles.resetOtpText}>Reset OTP</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.button} onPress={handleSetPasswordPress}>
                                <Text style={Styles.buttonText}>VERIFY</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.button} onPress={handleCreatePassword}>
                                <Text style={Styles.buttonText}>CreatePassword</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const Styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    HDFCLOGO: {
        top: 15,
        height: 38,
        width: 197,
        marginBottom: 30
    },
    VECTOR: {
        top: 10,
        height: 42,
        width: 60
    },
    box: {
        height:'80%',
        top: 45,
        backgroundColor: "#FFFFFF",
        padding: 30,
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden'
    },
    otpText: {
        top: 40,
        color: "#0B5290",
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20,
        fontWeight: '600',
        fontFamily: FontFamilyName.INTERSEMIBOLDS
    },
    fourDigitText: {
        textAlign: 'center',
        fontSize: 18,
        // fontWeight: 'bold'
        fontFamily: FontFamilyName.POPPINSREGULAR
    },
    formContainer: {
        top: 50,
        width: "100%",
        height: 400
    },
    otpInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 30,
    },

    otpInput: {
        top: 60,
        width: 60,
        height: 60,
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#EFF4FF',
        fontFamily: FontFamilyName.INTERREGULAR,
        fontWeight: '600'
    },
    resetOtpButtonLeft: {
        alignSelf: 'flex-start'
    },
    resetOtpText: {
        top: 45,
        color: '#000000',
        fontFamily:FontFamilyName.POPPINSREGULAR
    },
    button: {
        top: 90,
        height: 45,
        backgroundColor: '#0B5290',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily:FontFamilyName.POPPINSBOLD,
        fontWeight:'700'
    },
    signUpContainer: {
        flexDirection: 'row',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    donthaveaccount: {
        color: '#000000',
        fontSize: 16
    },
    signUpText: {
        color: '#0B5290',
    },
    signUpButton: {
        paddingVertical: 5,
        alignItems: 'center'
    },
});

export default OtpScreen;
