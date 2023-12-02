import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Pressable, Modal} from 'react-native';
//import Modal from './src/Pressable';

const Long = require('./assets/adaptive-icon.png')
export default function App() {
  const [isModal, setIsModal] = useState(false)
  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={()=> setIsModal(true)}/>
      <Modal 
        visible={isModal} 
        onRequestClose={()=> setIsModal(false)} 
        animationType='slide'
      >
        <View   style={{backgroundColor: "lightblue", flex: 1}}>
          <Button title='Close modal' onPress={()=> setIsModal(false)}/>
          <Text>Modal content</Text>
        </View>
        
      </Modal>
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
