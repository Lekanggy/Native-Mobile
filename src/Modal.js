import React from 'react'

const Modal = () => {
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
  )
}

export default Modal