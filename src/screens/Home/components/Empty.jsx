import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../utils/constans'

const Empty = () => {
  return (
    <View style={[{backgroundColor: 'red', flex: 1, justifyContent: 'center', alignItems: 'center'}]} >
      <Text>Have no data!</Text>
    </View>
  )
}

export default Empty

const styles = StyleSheet.create({})