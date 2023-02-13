import React from 'react'
import {  Text, View, TouchableOpacity } from 'react-native'
import { JOBS } from '../../../constants/data';
import { styles } from './styles'
// import { useSelector } from 'react-redux';

const InboxDetail = ({navigation, route}) => {
  
  // const product = useSelector((state) => state.products.selected)

  const {categoryId, title} = route.params;
  const job = JOBS.find((job) => job.id === categoryId)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.title}>{job.description}</Text>
      <Text style={styles.title}>{job.weight}</Text>
      <Text style={styles.title}>{job.price}</Text>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={()=> null}>
            <Text style={styles.textSend}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default InboxDetail