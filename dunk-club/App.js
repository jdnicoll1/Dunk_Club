import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

// import all screens for drawer navigation
import Home from './components/Home.js';
import DunkChat from './components/DunkChat.js';
import LoginScreen from "./components/Login/LoginScreen.js";
import SignUpScreen from "./components/Login/SignUpScreen.js";
import GettingStarted from "./components/Login/GettingStarted.js";


const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerPosition="right" initialRouteName="Getting Started" >
        <Drawer.Screen name="Getting Started" options={{headerShown: false}} component={GettingStarted} />
        <Drawer.Screen name="Log In" component={LoginScreen} />
        <Drawer.Screen name="Sign Up" component={SignUpScreen} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Dunk Chat" component={DunkChat} />
        
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
