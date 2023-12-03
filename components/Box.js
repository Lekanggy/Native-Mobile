import { Text, View, StyleSheet } from "react-native";

export default function Box({children, style}){
    return (
        <View style={[Styles.box, style]}>
            <Text style={Styles.text}>{children}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    box:{
        backgroundColor: "#fff", 
        padding:20
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    }
})