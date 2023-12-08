import { StyleSheet, Text, View, useWindowDimensions, SafeAreaView} from "react-native"
import Mytext from "../src/Mytext"

export default function DimensionApi(){
    const windowHeight = useWindowDimensions().height
    const windowWidth = useWindowDimensions().width
    return (
        <View style={Styles.container}>
            <View style={Styles.box}>
                <Text style={{fontSize: windowHeight > 500 ? 24 : 30}}>
                   {
                    windowWidth > 500 ? "Welcome changes": "hummmm wel"
                   }
                    Welcome to development!! cool set yah me
                </Text>
                <Mytext/>
            </View>
        </View>
    )
}

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "plum",
    },
    box: {
      
        backgroundColor:"lightblue",
    },
    text: {
        fontSize: 24
    }
})