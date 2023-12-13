import React, { useState } from 'react'
import { Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

const Form = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setErr] = useState({})

    const validateForm = ()=>{
        let errors = {};
        if(!username) errors.username = "Username is required";
        if(!password) errors.password = "Password is required";
        setErr(errors)
        return Object.keys(errors).length === 0;
    }

    const handleValidate = ()=>{
        if(validateForm()){
            setUsername("")
            setPassword("")
            setErr({})
        }
    }
  return (
    <KeyboardAvoidingView 
        style={styles.container}
        behavior='padding'
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : -10}
    >
        <View style={styles.form}>
            <Text style={styles.label}>Username</Text>
            <TextInput
                 placeholder='Enter your username'
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            {
                error.username ? <Text style={styles.errorText}>{error.username}</Text> : null
            }
            <Text style={styles.label}>Password</Text>
            <TextInput
                 placeholder='Enter your password'
                 value={password}
                 onChangeText={setPassword}
                 style={styles.input}
                 secureTextEntry
            />
            {
                error.password ? <Text style={styles.errorText}>{error.password}</Text> : null
            }
            <Button title='Login' onPress={handleValidate}/>
        </View>
    </KeyboardAvoidingView>
  )
}

export default Form

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 20,
      backgroundColor: "#f5f5f5",
    },
    form: {
      backgroundColor: "#ffffff",
      padding: 20,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: "bold",
    },
    input: {
      height: 40,
      borderColor: "#ddd",
      borderWidth: 1,
      marginBottom: 15,
      padding: 10,
      borderRadius: 5,
    },
    errorText: {
      color: "red",
      marginBottom: 10,
    },
  });