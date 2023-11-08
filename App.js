import { Text, View, StyleSheet } from 'react-native';
import Homescreen from "./screens/Homescreen";
import Loginscreen from "./screens/Loginscreen";
import Profilescreen from "./screens/Profilescreen";
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Login Screen" screenOptions = {{
        HeadersShown:false
      }}
      >
      <Stack.Screen name = "Home" component = {Homescreen}/>
      <Stack.Screen name = "Login Screen" component = {Loginscreen}/>
      <Stack.Screen name = "Profile Screen" component = {Profilescreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}