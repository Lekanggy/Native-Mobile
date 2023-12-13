import React from 'react'
import { FlatList, View, Text } from 'react-native'
import pokemon from '../src/data.json'

const Lists = () => {
  return (
   <FlatList
    data={[]}
    renderItem={({item})=>{
        console.log(item.id)
        return(
            <View key={item?.id}>
                <Text>{item.name}</Text>
                <Text>{item.type}</Text>
            </View>
        )
    }}
    keyExtractor={({item, index})=>item?.id.toString()}
    //ItemSeparatorComponent={<v></>}
    ListEmptyComponent={<Text>No item found</Text>}
   />
  )
}

export default Lists