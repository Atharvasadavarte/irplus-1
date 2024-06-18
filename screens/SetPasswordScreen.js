
// import React from "react";
// import { ImageBackground,Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import { IconPngImages, images } from "../src/asset/images/map";
// const SetPasswordScreen = () => {
//     const navigation = useNavigation();

//     const handleSignInPress = () => {
//         navigation.navigate('SignInScreen');
//     };

//     return (
//         <ImageBackground source={images.BG} style={Styles.background}>
//         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//             <View style={{ flex: 1,  alignItems: "center", justifyContent: "center" }}>
//                 <Image style={Styles.HDFCLOGO} source={images.HDFCLOGO} />
//                 <Image style={Styles.VECTOR} source={images.VECTOR} />
//                 <View style={Styles.box}>
//                     <Text style={Styles.signInText}>Set Password</Text>
//                     <View style={Styles.formContainer}>
//                       {/* <Text style={Styles.label}>EMP Code/ Mobile No.</Text> */}
//                         <View style={Styles.inputContainer}>
//                             <TextInput
//                                 style={Styles.input}
//                                 placeholder="Enter your Password"
//                             />
//                             {/* <Icon name="person" size={24} color="black" style={Styles.icon} /> */}
//                             <Image source={IconPngImages.PERSON} style={Styles.icon} />
//                         </View>

//                         <View style={Styles.inputContainer}>
//                             <TextInput
//                                 style={[Styles.input, ]}
//                                 placeholder="Re-enter your password"
//                                 secureTextEntry
//                             />
//                             {/* <Icon name="lock-closed" size={24} color="black" style={Styles.icon} /> */}
//                             <Image source={IconPngImages.SHAPE} style={Styles.icon} />
//                         </View>



//                         <TouchableOpacity style={Styles.button} onPress={handleSignInPress}>
//                             <Text style={Styles.buttonText}>SUBMIT</Text>
//                         </TouchableOpacity>
//                         <View style={Styles.signUpContainer}>
//                             <Text style={Styles.donthaveaccount}>Don’t have an Account?</Text>
//                             <TouchableOpacity style={Styles.signUpButton}  >
//                                 <Text style={Styles.signUpText}> Sign Up</Text>
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
//     container: {
//         flex: 1,
//       //  backgroundColor: "rgba(255,255,255,0.6)", // Adjust the opacity as needed
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
//         top: 25,
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
//         marginTop: 30,
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

// export default SetPasswordScreen;


import React, { useState } from "react";
import { ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { IconPngImages, images } from "../src/asset/images/map";
import { FontFamilyName } from "../src/styles/Customfonts";

const SetPasswordScreen = () => {
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);


    const handleSubmitPress = () => {
        if (password.trim() === '') {
            setPasswordError('Password is required');
            return;
        } else {
            setPasswordError('');
        }
        if (confirmPassword.trim() === '') {
            setConfirmPasswordError('Confirm Password is required');
            return;
        } else {
            setConfirmPasswordError('');
        }
        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            return;
        } else {
            setConfirmPasswordError('');
        }
        // Navigate to SignIn screen if password is confirmed
        navigation.navigate('SignInScreen');
    };

    return (
        <ImageBackground source={images.BG} style={Styles.background}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={Styles.container}>
                    <Image style={Styles.HDFCLOGO} source={images.HDFCLOGO} />
                    <Image style={Styles.VECTOR} source={images.VECTOR} />
                    <View style={Styles.box}>
                        <Text style={Styles.signInText}>Set Password</Text>
                        <View style={Styles.formContainer}>
                            {/* <View style={[Styles.inputContainer, isPasswordFocused ? Styles.spaceforPassandForgot : Styles.spacebutton]}>
                         */}
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

                            <View style={[Styles.inputContainer, isConfirmPasswordFocused ? Styles.focusedInput : null, confirmPasswordError ? Styles.spaceforPassandForgot : Styles.spacebutton]}>
                                <TextInput
                                    style={[Styles.input]}
                                    placeholder="Confirm Password"
                                    secureTextEntry
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    onFocus={() => setIsConfirmPasswordFocused(true)}
                                    onBlur={() => setIsConfirmPasswordFocused(false)}
                                />
                                <Image source={IconPngImages.SHAPE} style={Styles.icon} />
                            </View>
                            {confirmPasswordError ? <Text style={Styles.errorText}>{confirmPasswordError}</Text> : null}

                            <TouchableOpacity style={Styles.button} onPress={handleSubmitPress}>
                                <Text style={Styles.buttonText}>SUBMIT</Text>
                            </TouchableOpacity>
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
    signInText: {
        top: 40,
        color: "#0B5290",
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20,
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
        fontWeight: '600',
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
        fontFamily:FontFamilyName.POPPINSREGULAR,
        paddingHorizontal: 10,
        backgroundColor: "#EFF4FF"
    },
    button: {
        top: 25,
        height: 45,
        backgroundColor: '#0B5290',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    spacebutton: {
        marginBottom: 30,
    },
    spaceforPassandForgot: {
        marginBottom: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily:FontFamilyName.POPPINSBOLD,
        fontWeight:'700',
    },
    signUpContainer: {
        flexDirection: 'row',
        marginTop: 30,
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

export default SetPasswordScreen;
