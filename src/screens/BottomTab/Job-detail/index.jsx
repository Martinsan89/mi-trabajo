import React from 'react'
import {  Text, View } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux';

const JobDetail = () => {
  
  const product = useSelector((state) => state.products.selected)

 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.title}>{product.description}</Text>
      <Text style={styles.title}>{product.weight}</Text>
      <Text style={styles.title}>{product.price}</Text>
    </View>
  )
}

export default JobDetail

