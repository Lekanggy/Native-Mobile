import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

const StyleElement = () => {
  return (
    <View style={Styles.container}>
        <View style={[Styles.box, Styles.lightblue]}>
            <Text>Light bacground blue</Text>
        </View>
        <View style={[Styles.box, Styles.lightgreen]}>
            <Text>Light bacground</Text>
        </View>
    </View>
  )
}

export default StyleElement

const Styles = StyleSheet.create({
    container:{flex: 1, backgroundColor: "red", padding: 60},
    box: {
        width: 200,
        height: 200,
        padding: 20,
        backgroundColor: "pink"
    },
    lightblue:{
        backgroundColor: 'lightblue'
    },
    lightgreen: {
        backgroundColor: 'lightgreen'
    }
})