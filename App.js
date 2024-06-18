// import React from "react";
// import { Button, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Login" component={Login} />



//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }

// const Login = () => {
//   return (
//     <View>
//       <Text>
//         Login Screen
//       </Text>
//     </View>
//   );
// }
// const Home = (props) => {
//   return (
//     <View>
//       <Text>
//         Home Screen
//       </Text>
//       <Button title="Go to Login Page" onPress={() => props.navigation.navigate("Login")} />
//     </View>
//   );
// }
// export default App;


// app.js

import React from "react";
import {  Text, View } from 'react-native';

import Appnavigator from "./src/Appnavigator";





// const App = () => {
//   return <Appnavigator />;
//     // <NavigationContainer>
//     //   <Stack.Navigator>
//     //     <Stack.Screen
//     //       name="Splash"
//     //       component={SplashScreen}
//     //       options={{ headerShown: false }} // Hide header for splash screen
//     //     />
//     //     {/* Add more screens here */}
//     //   </Stack.Navigator>
//     // </NavigationContainer>
   
// };

// export default App;
const Apps =()=>{
   return <Appnavigator/>;
  
}
export default Apps;
