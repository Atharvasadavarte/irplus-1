import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { images } from "../src/asset/images/map";
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignInScreen');
    }, 300);
  }, []);

  return (
    <LinearGradient
      colors={['#0D6EDA', '#024886']}
      locations={[0, 1]}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} // Center content vertically and horizontally
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
 <Image style={Styles.VECTOR} source={images.VECTOR} />
 </LinearGradient>
  );
}
const Styles = StyleSheet.create({
  VECTOR: {
    top: 10,
    height: 100,
    width: 142

  }
})
export default SplashScreen;
