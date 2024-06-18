// import React from "react";
// import { ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { IconPngImages, images } from "../src/asset/images/map";
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// const SignInScreen = () => {
//     const navigation = useNavigation();

//     const handleSignUpPress = () => {
//         navigation.navigate('SignUpScreen');
//     };

//     const handleForgotPress = () => {
//         navigation.navigate('ForgotPassword');
//     };

//     return (
//         <ImageBackground source={images.BG} style={Styles.background}>
//             <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//                 <View style={Styles.container}>
//                     <Image style={Styles.HDFCLOGO} source={images.HDFCLOGO} />
//                     <Image style={Styles.VECTOR} source={images.VECTOR} />
//                     <View style={Styles.box}>
//                         <Text style={Styles.signInText}>Sign In</Text>
//                         {/* <Text style={{fontFamily:'Inter-Regular'}}>Sign In</Text> */}
//                         <View style={Styles.formContainer}>
//                             <Text style={Styles.label}>EMP Code/ Mobile No.</Text>
//                             <View style={Styles.inputContainer}>
//                                 <TextInput
//                                     style={Styles.input}
//                                     placeholder="13135|"
//                                 />
//                                 {/* <Icon name="person" size={24} color="black" style={Styles.icon} /> */}
//                                 <Image source={IconPngImages.PERSON} style={Styles.icon} />
//                             </View>

//                             <View style={Styles.inputContainer}>
//                                 <TextInput
//                                     style={[Styles.input, Styles.spaceforPassandForgot]}
//                                     placeholder="Enter your Password "
//                                     secureTextEntry
//                                 />
//                                 {/* <Icon name="lock-closed" size={24} color="black" style={Styles.icon} /> */}
//                                 <Image source={IconPngImages.SHAPE} style={Styles.icon} />
//                             </View>

//                             <TouchableOpacity onPress={handleForgotPress} style={[Styles.forgotPasswordButton, Styles.forgotPasswordButtonRight]}>
//                                 <Text style={Styles.forgotPasswordText}>Forgot Password?</Text>
//                             </TouchableOpacity>

//                             <TouchableOpacity style={Styles.button} >
//                                 <Text style={Styles.buttonText}>SIGN IN</Text>
//                             </TouchableOpacity>
//                             <View style={Styles.signUpContainer}>
//                                 <Text style={Styles.donthaveaccount}>Don’t have an Account? </Text>
//                                 <TouchableOpacity style={Styles.signUpButton} onPress={handleSignUpPress}>
//                                     <Text style={Styles.signUpText}>Sign Up</Text>
//                                 </TouchableOpacity>
//                             </View>
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
//     icon: {

//         position: 'absolute',
//         right: 20,

//         height: 20,
//         width: 18,

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
//     signInText: {
//         top: 40,
//         color: "#0B5290",
//         textAlign: 'center',
//         marginBottom: 20,
//         fontSize: 18,
//         fontWeight: 'bold',


//         fontFamily: 'Inter-Regular',
//         fontWeight: '600',


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
//         fontSize: 18
//     },
//     spaceforPassandForgot: {
//         marginBottom: 5,
//     },
//     forgotPasswordButtonRight: {
//         alignSelf: 'flex-end'
//     },
//     forgotPasswordText: {
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

// export default SignInScreen;

///////////////////////////////////////////////////////



// import React, { useState } from "react";
// import { ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { IconPngImages, images } from "../src/asset/images/map";
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// const SignInScreen = () => {
//     const navigation = useNavigation();
//     const [mobile, setMobile] = useState('');
//     const [password, setPassword] = useState('');
//     const [mobileError, setMobileError] = useState('');
//     const [passwordError, setPasswordError] = useState('');

//     const handleSignUpPress = () => {
//         navigation.navigate('SignUpScreen');
//     };

//     const handleForgotPress = () => {
//         navigation.navigate('ForgotPassword');
//     };

//     const handleSignInPress = () => {

//         if (mobile.trim() === '') {
//             setMobileError('Mobile number is required');
//             return;
//         }
//         setMobileError('');


//         if (password.trim() === '') {
//             setPasswordError('Password is required');
//             return;
//         }
//         setPasswordError('');

//         // Proceed with sign-in logic
//     };

//     return (
//         <ImageBackground source={images.BG} style={Styles.background}>
//             <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//                 <View style={Styles.container}>
//                     <Image style={Styles.HDFCLOGO} source={images.HDFCLOGO} />
//                     <Image style={Styles.VECTOR} source={images.VECTOR} />
//                     <View style={Styles.box}>
//                         <Text style={Styles.signInText}>Sign In</Text>
//                         <View style={Styles.formContainer}>
//                             <Text style={Styles.label}>EMP Code/ Mobile No.</Text>
//                             <View style={[Styles.inputContainer, mobileError ? Styles.spaceforPassandForgot : Styles.spacebutton]}>
//                                 <TextInput
//                                     style={Styles.input}
//                                     placeholder="13135|"
//                                     value={mobile}
//                                     onChangeText={setMobile}
//                                 />
//                                 <Image source={IconPngImages.PERSON} style={Styles.icon} />
//                             </View>
//                             {mobileError ? <Text style={Styles.errorText}>{mobileError}</Text> : null}


//                             <View style={Styles.inputContainer}>
//                                 <TextInput
//                                     style={[Styles.input, Styles.spaceforPassandForgot]}
//                                     placeholder="Enter your Password "
//                                     secureTextEntry
//                                     value={password}
//                                     onChangeText={setPassword}
//                                 />
//                                 <Image source={IconPngImages.SHAPE} style={Styles.icon} />
//                             </View>
//                             {passwordError ? <Text style={Styles.errorText}>{passwordError}</Text> : null}

//                             <TouchableOpacity onPress={handleForgotPress} style={[Styles.forgotPasswordButton, Styles.forgotPasswordButtonRight]}>
//                                 <Text style={Styles.forgotPasswordText}>Forgot Password?</Text>
//                             </TouchableOpacity>

//                             <TouchableOpacity style={Styles.button} onPress={handleSignInPress}>
//                                 <Text style={Styles.buttonText}>SIGN IN</Text>
//                             </TouchableOpacity>
//                             <View style={Styles.signUpContainer}>
//                                 <Text style={Styles.donthaveaccount}>Don’t have an Account? </Text>
//                                 <TouchableOpacity style={Styles.signUpButton} onPress={handleSignUpPress}>
//                                     <Text style={Styles.signUpText}>Sign Up</Text>
//                                 </TouchableOpacity>
//                             </View>
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
//     },
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     icon: {
//         position: 'absolute',
//         right: 20,
//         height: 20,
//         width: 18,
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
//         backgroundColor: "#FFFFFF",
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
//         fontWeight: 'bold',
//         fontFamily: 'Inter-Regular',
//         fontWeight: '600',
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
//         // marginBottom: 30,
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
//         top: 50,
//         height: 45,
//         backgroundColor: '#0B5290',
//         paddingVertical: 10,
//         borderRadius: 5,
//         alignItems: 'center'
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 18
//     },
//     spaceforPassandForgot: {
//         marginBottom: 5,
//     },
//     spacebutton: {
//         marginBottom: 30,
//     },
//     forgotPasswordButtonRight: {
//         alignSelf: 'flex-end'
//     },
//     forgotPasswordText: {
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
//     errorText: {
//         color: 'red',
//        marginBottom: 30,

//     },
// });

// export default SignInScreen;
////////////////////////


import React, { useState } from "react";
import { StatusBar, ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { IconPngImages, images } from "../src/asset/images/map";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { FontFamilyName } from "../src/styles/Customfonts";



const SignInScreen = () => {
    const navigation = useNavigation();
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isMobileFocused, setIsMobileFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const handleSignUpPress = () => {
        navigation.navigate('SignUpScreen');
    };


    const handleForgotPress = () => {
        navigation.navigate('ForgotPassword');
    };

    const handleSignInPress = () => {

        if (mobile.trim() === '') {
            setMobileError('Mobile number is required');
            return;
        }
        setMobileError('');


        if (password.trim() === '') {
            setPasswordError('Password is required');
            return;
        }
        setPasswordError('');
        navigation.navigate('Parent');
        // Proceed with sign-in logic
    };

    return (
        <ImageBackground source={images.BG} style={Styles.background}>
            <StatusBar backgroundColor="#00265F" />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={Styles.container}>
                    <Image style={Styles.HDFCLOGO} source={images.HDFCLOGO} />
                    <Image style={Styles.VECTOR} source={images.VECTOR} />
                    <View style={Styles.box}>
                        <Text style={Styles.signInText}>Sign In</Text>
                        <View style={Styles.formContainer}>

                            <View style={[Styles.inputContainer, isMobileFocused ? Styles.focusedInput : null, mobileError ? Styles.spaceforPassandForgot : Styles.spacebutton]}>
                                <TextInput
                                    style={Styles.input}
                                    placeholder="EMP Code/ Mobile No.|"
                                    value={mobile}
                                    onChangeText={setMobile}
                                    onFocus={() => setIsMobileFocused(true)}
                                    onBlur={() => setIsMobileFocused(false)}
                                />
                                <Image source={IconPngImages.PERSON} style={Styles.icon} />
                            </View>
                            {mobileError ? <Text style={Styles.errorText}>{mobileError}</Text> : null}


                            <View style={[Styles.inputContainer, isPasswordFocused ? Styles.focusedInput : null, passwordError ? Styles.spaceforPassandForgot : Styles.spacebutton]}>
                                <TextInput
                                    style={Styles.input}
                                    placeholder="Enter your Password "
                                    secureTextEntry
                                    value={password}
                                    onChangeText={setPassword}
                                    onFocus={() => setIsPasswordFocused(true)}
                                    onBlur={() => setIsPasswordFocused(false)}
                                />
                                <Image source={IconPngImages.SHAPE} style={Styles.icon} />
                            </View>
                            {passwordError ? <Text style={Styles.errorText}>{passwordError}</Text> : null}

                            <TouchableOpacity onPress={handleForgotPress} style={[Styles.forgotPasswordButtonRight]}>
                                <Text style={Styles.forgotPasswordText}>Forgot Password?</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.button} onPress={handleSignInPress}>
                                <Text style={Styles.buttonText}>SIGN IN</Text>
                            </TouchableOpacity>
                            <View style={Styles.signUpContainer}>
                                <Text style={Styles.donthaveaccount}>Don’t have an Account? </Text>
                                <TouchableOpacity style={Styles.signUpButton} onPress={handleSignUpPress}>
                                    <Text style={Styles.signUpText}>Sign Up</Text>
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
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        position: 'absolute',
        right: 20,
        height: 20,
        width: 18,
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
        top: 45,
        backgroundColor: "#FFFFFF",
        padding: 30,
        height:'80%',
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
        
        fontFamily:FontFamilyName.INTERSEMIBOLDS,
        fontWeight: '600',
    },
    // signInText: {

    //     color: "#0B5290",
    //     textAlign: 'center',
    //     marginBottom: 20,
    //     fontSize: 18,
    //    // fontWeight: 'bold',
    //     fontFamily: 'Inter-Regular',
    //     fontWeight: '700',
    // },
    formContainer: {
        top: 50,
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

        paddingHorizontal: 10,
        backgroundColor: "#EFF4FF",
        borderWidth: 0, // initially no border
    },
    input: {
        flex: 1,
        height: 45,
        paddingHorizontal: 10,
        fontSize:14,
        fontWeight:'400',
        fontFamily:FontFamilyName.POPPINSREGULAR
    },
    spacebutton: {
        marginBottom: 30,
    },
    spaceforPassandForgot: {
        marginBottom: 2,
    },
    button: {
        top: 40,
        height: 45,
        backgroundColor: '#0B5290',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily:FontFamilyName.POPPINSBOLD,
        fontWeight:'700',
       
        
    },
    focusedInput: {
        borderColor: '#004F9F',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: "#EFF4FF"
    },
    forgotPasswordButtonRight: {
        alignSelf: 'flex-end'
    },
    forgotPasswordText: {
        color: '#000000',
        fontFamily:FontFamilyName.POPPINSREGULAR,
        fontWeight:'400',
        fontSize:14
    },

    signUpContainer: {
        flexDirection: 'row',
        marginTop: 50,
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
        marginBottom: 30


    },
});

export default SignInScreen;
