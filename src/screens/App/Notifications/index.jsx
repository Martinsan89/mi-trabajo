import { View, Text } from 'react-native'
import React from 'react'
import {styles} from './styles'

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', color:'white', fontSize: 25}}>Notifications</Text>
    </View>
  )
}

export default Notifications