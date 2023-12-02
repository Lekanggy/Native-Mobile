import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';

const Long = require('./assets/adaptive-icon.png')
export default function App() {
  return (
    <View style={styles.container}>
     
     <Button title="Press" onPress={()=> console.log("Button is working")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
