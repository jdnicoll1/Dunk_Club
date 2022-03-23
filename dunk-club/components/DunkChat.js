import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';


export default function DunkChat({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Dunk Chat Screen" />
      </View>
    );
  }