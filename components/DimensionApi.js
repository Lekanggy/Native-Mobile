import { StyleSheet, Text, View, Dimensions } from "react-native"

export default function DimensionApi(){
    return (
        <View style={Styles.container}>
            <View style={Styles.box}>
                <Text style={Styles.text}>Welcome to development!!</Text>
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
        justifyContent: "center",
        alignItems:"center"
    },
    box: {
        width:  "90%",
        height: "70%",
        backgroundColor:"lightblue",
        justifyContent:"center",
        alignItems: "center"
    },
    text: {
        fontSize: 24
    }
})