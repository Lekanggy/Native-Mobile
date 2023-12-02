import React from 'react'
import { Text } from 'react-native'
import { Pressable } from 'react-native'
import { View } from 'react-native'

const Modal = () => {
  return (
    <>
      <Pressable onPress={()=>console.log(" Ijust press")}>
        <Text>This is a press event </Text>
      </Pressable>
       <Pressable onLongPress={()=>console.log(" I held press")}>
        <Text>This is a long press event </Text>
      </Pressable>
       <Pressable onPressIn={()=>console.log(" I press for 500ms and above")}>
        <Text>This is a press  on 500ms event </Text>
      </Pressable></>
  )
}

export default Modal