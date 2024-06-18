
// import React from "react";
// import { Image,ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { IconPngImages, images } from "../src/asset/images/map";
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// const CreatePasswordScreen = () => {
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
//                     <Text style={Styles.signInText}>Create Password</Text>
//                     <View style={Styles.formContainer}>
//                       {/* <Text style={Styles.label}>EMP Code/ Mobile No.</Text> */}
//                         <View style={Styles.inputContainer}>
//                             <TextInput
//                                 style={Styles.input}
//                                 placeholder="Enter your Password"
//                             />
//                             <Image  source={IconPngImages.PERSON} style={Styles.icon} />


//                         </View>

//                         <View style={Styles.inputContainer}>
//                             <TextInput
//                                 style={[Styles.input, ]}
//                                 placeholder="Re-type your Password"
//                                 secureTextEntry
//                             />
//                             {/* <Icon name="lock-closed" size={24} color="black" style={Styles.icon} />
//                              */}
//                               <Image  source={IconPngImages.SHAPE} style={Styles.icon} />

//                              {/* //  <Image  source={IconPngImages.SHAPE} style={Styles.icon} /> */}

//                         </View>



//                         <TouchableOpacity style={Styles.button} onPress={handleOtpPress}>
//                             <Text style={Styles.buttonText}>SIGN UP</Text>
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
//     icon: {
//       // top:10,
//         position:'absolute',
//         right:10,
//       //  bottom:10,
//         height:20,
//      width:18,

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

// export default CreatePasswordScreen;

import React, { useState } from "react";
import { ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { IconPngImages, images } from "../src/asset/images/map";
import { FontFamilyName } from "../src/styles/Customfonts";

const CreatePasswordScreen = () => {
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isconfirmPassword, setIsconfirmPassword] = useState(false);

    const handleSignInPress = () => {
        navigation.navigate('SignInScreen');
    };

    const handleOtpPress = () => {
        // Password validation
        if (password.trim() === '') {
            setPasswordError('Password is required');
            return;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            return;
        } else {
            setPasswordError('');
        }

        // Confirm password validation
        if (confirmPassword.trim() === '') {
            setConfirmPasswordError('Please confirm your password');
            return;
        } else if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match');
            return;
        } else {
            setConfirmPasswordError('');
        }

        // Proceed with navigation
        navigation.navigate('OtpScreen');
    };

    return (
        <ImageBackground source={images.BG} style={Styles.background}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image style={Styles.HDFCLOGO} source={images.HDFCLOGO} />
                    <Image style={Styles.VECTOR} source={images.VECTOR} />
                    <View style={Styles.box}>
                        <Text style={Styles.signInText}>Create Password</Text>
                        <View style={Styles.formContainer}>
                            {/* <View style={[Styles.inputContainer, passwordError ? Styles.spaceforPassandForgot : Styles.spacebutton]}> */}
                            <View style={[Styles.inputContainer, isPasswordFocused ? Styles.focusedInput : null, passwordError ? Styles.spaceforPassandForgot : Styles.spacebutton]}>
                                <TextInput
                                    style={Styles.input}
                                    placeholder="Enter your Password"
                                    secureTextEntry
                                    value={password}
                                    onChangeText={setPassword}
                                    onFocus={() => setIsPasswordFocused(true)}
                                    onBlur={() => setIsPasswordFocused(false)}
                                />
                                <Image source={IconPngImages.SHAPE} style={Styles.icon} />
                            </View>
                            {passwordError ? <Text style={Styles.errorText}>{passwordError}</Text> : null}

                            {/* <View style={[Styles.inputContainer, confirmPasswordError ? Styles.spaceforPassandForgot : Styles.spacebutton]}> */}
                            <View style={[Styles.inputContainer, isconfirmPassword ? Styles.focusedInput : null, confirmPasswordError ? Styles.spaceforPassandForgot : Styles.spacebutton]}>
                                <TextInput
                                    style={Styles.input}
                                    placeholder="Re-type your Password"
                                    secureTextEntry
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    onFocus={() => setIsconfirmPassword(true)}
                                    onBlur={() => setIsconfirmPassword(false)}
                                />
                                <Image source={IconPngImages.SHAPE} style={Styles.icon} />
                            </View>
                            {confirmPasswordError ? <Text style={Styles.errorText}>{confirmPasswordError}</Text> : null}

                            <TouchableOpacity style={Styles.button} onPress={handleOtpPress}>
                                <Text style={Styles.buttonText}>SIGN UP</Text>
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
    background: {
        flex: 1,
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
    signInText: {
        top: 40,
        color: "#0B5290",
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20,
        fontWeight: '600',
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
    },
    formContainer: {
        top: 65,
        width: "100%",
        height: 400
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
        fontSize:14,
        fontWeight:'400',
        fontFamily:FontFamilyName.POPPINSREGULAR,
        paddingHorizontal: 10,
        backgroundColor: "#EFF4FF"
    },
    icon: {
        position: 'absolute',
        right: 10,
        height: 20,
        width: 18,
    },
    spacebutton: {
        marginBottom: 30,
    },
    spaceforPassandForgot: {
        marginBottom: 5,
    },
    focusedInput: {
        borderColor: '#004F9F',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: "#EFF4FF"
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
        fontFamily:FontFamilyName.POPPINSSEMIBOLD,
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
        marginBottom: 5,
    },
    focusedInput: {
        borderColor: '#004F9F',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: "#EFF4FF"
    },
});

export default CreatePasswordScreen;
