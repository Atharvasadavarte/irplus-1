// import React, { useState } from "react";
// import { ImageBackground,Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import { IconPngImages, images } from "../src/asset/images/map";
// const ForgotPassword = () => {
//     const navigation = useNavigation();
//     const [emp, setEMPcode] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [empError, setEMPError] = useState('');
//     const [mobileError, setMobileError] = useState('');

//     const handleSignUpPress = () => {
//         navigation.navigate('SignUpScreen');
//     };
//     const handleOtpPress = () => {
//         navigation.navigate('OtpScreen');
//     };
//     const handleSubmitPress = () => {

//         if (emp.trim() === '') {
//             setEMPError('EMP Code is required');
//             return;
//         }
//         setEMPError('');


//         if (mobile.trim() === '') {
//             setMobileError('Mobile No. is required');
//             return;
//         }
//         setMobileError('');

//         // Proceed with sign-in logic
//     };
//     return (
//         <ImageBackground source={images.BG} style={Styles.background}>
//         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//             <View style={{ flex: 1,  alignItems: "center", justifyContent: "center" }}>
//                 <Image style={Styles.HDFCLOGO} source={images.HDFCLOGO} />
//                 <Image style={Styles.VECTOR} source={images.VECTOR} />
//                 <View style={Styles.box}>
//                     <Text style={Styles.signInText}>Forget Password</Text>
//                     <View style={Styles.formContainer}>
//                       {/* <Text style={Styles.label}>EMP Code/ Mobile No.</Text> */}
//                         <View style={Styles.inputContainer}>
//                             <TextInput
//                                 style={Styles.input}
//                                 placeholder="Enter your EMP Code "
//                                 value={emp}
//                                     onChangeText={setEMPcode}
//                             />
//                             {/* <Icon name="person" size={24} color="black" style={Styles.icon} /> */}
//                             <Image source={IconPngImages.PERSON} style={Styles.icon} />
//                         </View>
//                         {empError ? <Text style={Styles.errorText}>{empError}</Text> : null}

//                         <View style={Styles.inputContainer}>
//                             <TextInput
//                                 style={[Styles.input, ]}
//                                 placeholder="Enter your Mobile No. "
//                                 secureTextEntry
//                             />
//                             {/* <Icon name="lock-closed" size={24} color="black" style={Styles.icon} /> */}
//                             <Image source={IconPngImages.SHAPE} style={Styles.icon} />
//                         </View>
//                         {passwordError ? <Text style={Styles.errorText}>{passwordError}</Text> : null}



//                         <TouchableOpacity style={Styles.button} onPress={handleOtpPress}>
//                             <Text style={Styles.buttonText}>SUBMIT</Text>
//                         </TouchableOpacity>
//                         <View style={Styles.signUpContainer}>
//                             <Text style={Styles.donthaveaccount}>Don’t have an Account?</Text>
//                             <TouchableOpacity style={Styles.signUpButton}  onPress={handleSignUpPress}>
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

// export default ForgotPassword;


import React, { useState } from "react";
import { StatusBar,ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { IconPngImages, images } from "../src/asset/images/map";

const ForgotPassword = () => {
    const navigation = useNavigation();
    const [emp, setEMPcode] = useState('');
    const [mobile, setMobile] = useState('');
    const [empError, setEMPError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [isempFocused, setIsempeFocused] = useState(false);
    const [ismobileFocused, setIsmobileFocused] = useState(false);

    const handleSignUpPress = () => {
        navigation.navigate('SignUpScreen');
    };
    const handleOtpPress = () => {
        if (emp.trim() === '') {
            setEMPError('EMP Code is required');
            return;
        } else {
            setEMPError('');
        }
        if (mobile.trim() === '') {
            setMobileError('Mobile No. is required');
            return;
        } else {
            setMobileError('');
        }
        navigation.navigate('OtpScreen');
    };

    return (
        <ImageBackground source={images.BG} style={Styles.background}>
             <StatusBar  backgroundColor="#00265F" />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image style={Styles.HDFCLOGO} source={images.HDFCLOGO} />
                    <Image style={Styles.VECTOR} source={images.VECTOR} />
                    <View style={Styles.box}>
                        <Text style={Styles.signInText}>Forget Password</Text>
                        <View style={Styles.formContainer}>
                            {/* <View style={[Styles.inputContainer, empError ? Styles.spaceforPassandForgot : Styles.spacebutton]}> */}
                            <View style={[Styles.inputContainer, isempFocused ? Styles.focusedInput : null, empError ? Styles.spaceforPassandForgot : Styles.spacebutton]}>
                                <TextInput
                                    style={Styles.input}
                                    placeholder="Enter your EMP Code "
                                    value={emp}
                                    onChangeText={setEMPcode}
                                    onFocus={() => setIsempeFocused(true)}
                                    onBlur={() => setIsempeFocused(false)}
                                />
                                <Image source={IconPngImages.PERSON} style={Styles.icon} />
                            </View>
                            {empError ? <Text style={Styles.errorText}>{empError}</Text> : null}

                            {/* <View style={Styles.inputContainer}> */}
                            <View style={[Styles.inputContainer, ismobileFocused ? Styles.focusedInput : null, empError ? Styles.spaceforPassandForgot : Styles.spacebutton]}>
                                <TextInput
                                    style={[Styles.input]}
                                    placeholder="Enter your Mobile No. "
                                    value={mobile}
                                    onChangeText={setMobile}
                                    onFocus={() => setIsmobileFocused(true)}
                                    onBlur={() => setIsmobileFocused(false)}
                                />
                                <Image source={IconPngImages.SHAPE} style={Styles.icon} />
                            </View>
                            {mobileError ? <Text style={Styles.errorText}>{mobileError}</Text> : null}

                            <TouchableOpacity style={Styles.button} onPress={handleOtpPress}>
                                <Text style={Styles.buttonText}>SUBMIT</Text>
                            </TouchableOpacity>
                            <View style={Styles.signUpContainer}>
                                <Text style={Styles.donthaveaccount}>Don’t have an Account?</Text>
                                <TouchableOpacity style={Styles.signUpButton} onPress={handleSignUpPress}>
                                    <Text style={Styles.signUpText}> Sign Up</Text>
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
    signInText: {
        top: 40,
        color: "#0B5290",
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 18,
        fontWeight: 'bold'
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
        // marginBottom: 30,
    },
    focusedInput: {
        borderColor: '#004F9F',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: "#EFF4FF"
    },
    input: {
        flex: 1,
        height: 45,
        borderColor: '#004F9F',
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
        top: 25,
        height: 45,
        backgroundColor: '#0B5290',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
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
});

export default ForgotPassword;
