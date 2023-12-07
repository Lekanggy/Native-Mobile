import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Pressable, Modal, ActivityIndicator, Alert} from 'react-native';
import Greet from './components/Greet';
import StyleElement from './components/StyleElement';
import Box from './components/Box';
import DimensionApi from './components/DimensionApi';
//import Modal from './src/Pressable';

const Long = require('./assets/adaptive-icon.png')
export default function App() {
  const [isModal, setIsModal] = useState(false)
  return (
    <SafeAreaProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: "plum"}}>
          <DimensionApi/>
        </SafeAreaView>
    </SafeAreaProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
