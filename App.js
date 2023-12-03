import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Pressable, Modal, ActivityIndicator, Alert} from 'react-native';
import Greet from './components/Greet';
import StyleElement from './components/StyleElement';
import Box from './components/Box';
//import Modal from './src/Pressable';

const Long = require('./assets/adaptive-icon.png')
export default function App() {
  const [isModal, setIsModal] = useState(false)
  return (
   <View style={styles.container}>
    <Box style={{backgroundColor: "#8e9b00"}}>Box 1</Box>
    <Box style={{backgroundColor: "#b65d1f"}}>Box 2</Box>
    <Box style={{backgroundColor: "#1c4c56"}}>Box 3</Box>
    <Box style={{backgroundColor: "#6b0803"}}>Box 4</Box>
    <Box style={{backgroundColor: "#0b9f21"}}>Box 5</Box>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    marginTop: 40,
    borderWidth: 6,
    borderColor: "red"
  },
});

//The shadow properties is specify individually, such as shdColor, shdOffset, shdOpacity, shaRadius etc. 
// Shadow properties do not work on android so we have to use elevation api(android).
//Border radius does not work on text in ios.
//There is no inheritance of style in native app e.g from a View to a Text unlike css from div to children. But it support inheritance  within Text to nested Text.
// Flexbox axes in native is reversed from main---> downward and cross---> across left to right
