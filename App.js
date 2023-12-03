import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Pressable, Modal, ActivityIndicator, Alert} from 'react-native';
import Greet from './components/Greet';
import StyleElement from './components/StyleElement';
//import Modal from './src/Pressable';

const Long = require('./assets/adaptive-icon.png')
export default function App() {
  const [isModal, setIsModal] = useState(false)
  return (
    <StyleElement/>
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
