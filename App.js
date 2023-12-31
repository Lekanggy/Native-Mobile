//import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { useState } from 'react';
import { StyleSheet,StatusBar, Text, View, Image, ImageBackground, Button, Pressable, Modal, ActivityIndicator, Alert, ScrollView} from 'react-native';
import Greet from './components/Greet';
import StyleElement from './components/StyleElement';
import Box from './components/Box';
import DimensionApi from './components/DimensionApi';
import PokemonCard from './src/poker/PokemonCard';
import Lists from './components/Lists';
import Form from './src/Form';
import Networking from './src/Networking';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Modal from './src/Pressable';

// const Long = require('./assets/adaptive-icon.png')
// export default function App() {
//   // const [isModal, setIsModal] = useState(false)
//   const charmanderData = {
//     name: "Charmander",
//     image: require("./assets/charmander.png"),
//     type: "Fire",
//     hp: 39,
//     moves: ["Scratch", "Ember", "Growl", "Leer"],
//     weaknesses: ["Water", "Rock"],
//   };

//   const squirtleData = {
//     name: "Squirtle",
//     image: require("./assets/squirtle.png"), // Replace with the actual image path
//     type: "Water",
//     hp: 44,
//     moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
//     weaknesses: ["Electric", "Grass"],
//   };

//   const bulbasaurData = {
//     name: "Bulbasaur",
//     image: require("./assets/bulbasaur.png"), // Replace with the actual image path
//     type: "Grass",
//     hp: 45,
//     moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
//     weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
//   };

//   const pikachuData = {
//     name: "Pikachu",
//     image: require("./assets/pikachu.png"), // Replace with the actual image path
//     type: "Electric",
//     hp: 35,
//     moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
//     weaknesses: ["Ground"],
//   };

//   return (
//     <SafeAreaProvider>
//         <SafeAreaView style={styles.container}>
//           {/* <ScrollView>
//             <PokemonCard {...charmanderData}/>
//             <PokemonCard {...squirtleData}/>
//             <PokemonCard {...bulbasaurData}/>
//             <PokemonCard {...pikachuData}/>
//           </ScrollView> */}
//           {/* <Lists/> */}
//             {/* <Form/> */}
//             <Networking/>
//         </SafeAreaView>
//     </SafeAreaProvider>
  
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//    backgroundColor: "#f5f5f5",
//    paddingTop: StatusBar.currentHeight,
//    paddingHorizontal: 16,
//   },
// });

const Stack = createNativeStackNavigator()
export default function App(){
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='About'>
          <Stack.Screen name="Home" component={Form}/>
          <Stack.Screen name="About" component={Form}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

//The shadow properties is specify individually, such as shdColor, shdOffset, shdOpacity, shaRadius etc. 
// Shadow properties do not work on android so we have to use elevation api(android).
//Border radius does not work on text in ios.
//There is no inheritance of style in native app e.g from a View to a Text unlike css from div to children. But it support inheritance  within Text to nested Text.
// Flexbox axes in native is reversed from main---> downward and cross---> across left to right
