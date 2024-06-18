
// import React from "react";
// import { Image,ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { IconPngImages, images } from "../src/asset/images/map";
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// const SignUpScreen = () => {
//     const navigation = useNavigation();

//     const handleSignUpPress = () => {
//         navigation.navigate('SignInScreen');
//     };
//     const handleOtpPress = () => {
//         navigation.navigate('OtpScreen');
//     };
//     return (
//         <ImageBackground source={images.BG} style={Styles.background}>
//         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//             <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//                 <Image style={Styles.HDFCLOGO} source={images.HDFCLOGO} />
//                 <Image style={Styles.VECTOR} source={images.VECTOR} />
//                 <View style={Styles.box}>
//                     <Text style={Styles.signInText}>Sign Up</Text>
//                     <View style={Styles.formContainer}>
//                       {/* <Text style={Styles.label}>EMP Code/ Mobile No.</Text> */}
//                         <View style={Styles.inputContainer}>
//                             <TextInput
//                                 style={Styles.input}
//                                 placeholder="Enter your EMP Code "
//                             />
//                             {/* <Icon name="person" size={24} color="black" style={Styles.icon} /> */}
//                             <Image source={IconPngImages.PERSON} style={Styles.icon} />
//                         </View>

//                         <View style={Styles.inputContainer}>
//                             <TextInput
//                                 style={[Styles.input, ]}
//                                 placeholder="Enter your Mobile No. "
//                                 secureTextEntry
//                             />
//                             {/* <Icon name="lock-closed" size={24} color="black" style={Styles.icon} /> */}
//                             <Image source={IconPngImages.SHAPE} style={Styles.icon} />
//                         </View>



//                         <TouchableOpacity style={Styles.button} onPress={handleOtpPress}>
//                             <Text style={Styles.buttonText}>CONTINUE</Text>
//                         </TouchableOpacity>
//                         <View style={Styles.signUpContainer}>
//                             <Text style={Styles.donthaveaccount}>Already have an Account? </Text>
//                             <TouchableOpacity style={Styles.signUpButton}  onPress={handleSignUpPress}>
//                                 <Text style={Styles.signUpText}> Sign In</Text>
//                             </TouchableOpacity>
//                         </View>

//                     </View>
//                 </View>
//             </View>
//         </ScrollView>
//         </ImageBackground>
//     );
// }

// const Styles = StyleSheet.create({
//     icon: {

//         position: 'absolute',
//         right: 20,

//         height: 20,
//         width: 18,

//     },
//     background: {
//         flex: 1,
//       //  resizeMode: "cover",
//        // justifyContent: "center"
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
//         backgroundColor: "#ffffff",
//         padding: 30,
//         width: "100%",
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         overflow: 'hidden'
//     },
//     signInText: {
//         top: 40,
//         color: "#0B5290",
//         textAlign: 'center',
//         marginBottom: 20,
//         fontSize: 18,
//         fontWeight: 'bold'
//     },
//     formContainer: {
//         top: 65,
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

//     button: {
//         top: 15,
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



//     signUpContainer: {
//         flexDirection: 'row',
//         marginTop: 15,
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

// export default SignUpScreen;


import React, { useState } from "react";
import { ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { IconPngImages, images } from "../src/asset/images/map";
import { FontFamilyName } from "../src/styles/Customfonts";

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [empCode, setEmpCode] = useState('');
    const [mobile, setMobile] = useState('');
    const [empCodeError, setEmpCodeError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [isempCodeFocused, setIsempCodeFocused] = useState(false);
    const [ismobileFocused, setIsmobileFocused] = useState(false);

    const handleSignInPress = () => {
        navigation.navigate('SignInScreen');
    };

    const handleOtpPress = () => {
        // Add validation for EMP code and mobile number
        if (empCode.trim() === '') {
            setEmpCodeError('EMP Code is required');
            return;
        } else {
            setEmpCodeError('');
        }
        if (mobile.trim() === '') {
            setMobileError('Mobile No. is required');
            return;
        } else {
            setMobileError('');
        }

        // Proceed with OTP screen navigation
        navigation.navigate('OtpScreen');
    };

    return (
        <ImageBackground source={images.BG} style={Styles.background}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image style={Styles.HDFCLOGO} source={images.HDFCLOGO} />
                    <Image style={Styles.VECTOR} source={images.VECTOR} />
                    <View style={Styles.box}>
                        <Text style={Styles.signInText}>Sign Up</Text>
                        <View style={Styles.formContainer}>
                            {/* <View style={[Styles.inputContainer, empCodeError ? Styles.spaceforPassandForgot : Styles.spacebutton]}> */}
                            <View style={[Styles.inputContainer, isempCodeFocused ? Styles.focusedInput : null,empCodeError ? Styles.spaceforPassandForgot : Styles.spacebutton]}>
                                <TextInput
                                    style={Styles.input}
                                    placeholder="Enter your EMP Code"
                                    value={empCode}
                                    onChangeText={setEmpCode}
                                    onFocus={() => setIsempCodeFocused(true)}
                                    onBlur={() => setIsempCodeFocused(false)}
                                />
                                <Image source={IconPngImages.PERSON} style={Styles.icon} />
                            </View>
                            {empCodeError ? <Text style={Styles.errorText}>{empCodeError}</Text> : null}

                            {/* <View style={[Styles.inputContainer, mobileError ? Styles.spaceforPassandForgot : Styles.spacebutton]}> */}
                            <View style={[Styles.inputContainer, ismobileFocused ? Styles.focusedInput : null,mobileError ? Styles.spaceforPassandForgot : Styles.spacebutton]}>
                                <TextInput
                                    style={Styles.input}
                                    placeholder="Enter your Mobile No."
                                    value={mobile}
                                    onChangeText={setMobile}
                                    onFocus={() => setIsmobileFocused(true)}
                                    onBlur={() => setIsmobileFocused(false)}
                                />
                                <Image source={IconPngImages.SHAPE} style={Styles.icon} />
                            </View>
                            {mobileError ? <Text style={Styles.errorText}>{mobileError}</Text> : null}

                            <TouchableOpacity style={Styles.button} onPress={handleOtpPress}>
                                <Text style={Styles.buttonText}>CONTINUE</Text>
                            </TouchableOpacity>
                            <View style={Styles.signUpContainer}>
                                <Text style={Styles.donthaveaccount}>Already have an Account? </Text>
                                <TouchableOpacity style={Styles.signUpButton} onPress={handleSignInPress}>
                                    <Text style={Styles.signUpText}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const Styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        right: 20,
        height: 20,
        width: 18,
    },
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
        backgroundColor: "#ffffff",
        padding: 30,
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden'
    },
    focusedInput: {
        borderColor: '#004F9F',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: "#EFF4FF"
    },
    signInText: {
        top: 40,
        color: "#0B5290",
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily:FontFamilyName.INTERSEMIBOLDS,
    },
    formContainer: {
        top: 65,
        width: "100%",
        height: 400
    },
    label: {
        marginBottom: 5,
        color: "#5A5A5A"
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    input: {
        flex: 1,
        height: 45,
        borderColor: '#004F9F',
        fontFamily:FontFamilyName.POPPINSREGULAR,

        paddingHorizontal: 10,
        backgroundColor: "#EFF4FF"
    },
    spacebutton: {
        marginBottom: 30,
    },
    spaceforPassandForgot: {
        marginBottom: 5,
    },
    button: {
        top: 15,
        height: 45,
        backgroundColor: '#0B5290',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
       // fontSize: 18,
        fontFamily:FontFamilyName.POPPINSBOLD,
        fontWeight:'700',
       
    },
    signUpContainer: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    donthaveaccount: {
        color: '#000000',
   
        fontSize: 16,
        fontFamily:FontFamilyName.POPPINSBOLD,
        fontWeight:'400'
    },
    signUpText: {
        color: '#0B5290',
        fontFamily:FontFamilyName.POPPINSSEMIBOLD,
        fontWeight:'700',
        fontSize: 16,
    },
    signUpButton: {
        paddingVertical: 5,
        alignItems: 'center'
    },
    errorText: {
        color: 'red',
        marginBottom: 30,
    },
});

export default SignUpScreen;
