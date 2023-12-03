import React from 'react'

const ActivityIndicator = () => {
  return (
    <View style={styles.container}>
    <ActivityIndicator size= "large" color="red" animating={false}/>
    <Button title="Alert" onPress={()=> Alert.alert("New alert created")}/>
    <Button 
      title="Alert" 
      onPress={()=> Alert.alert("New alert created", "Sub title", [
        {
          text: "Ok",
          onPress: ()=> console.log("Alert press")
        },
        {
          text: "Cancel",
          onPress: ()=> console.log("Alert Cancel")
        }
      ])}
    />
  </View>
  )
}

export default ActivityIndicator