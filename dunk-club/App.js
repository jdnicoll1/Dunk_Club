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


const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerPosition="right" initialRouteName="Home" >
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
