import React from 'react'
import {  Text, View } from 'react-native'
import { JOBS } from '../../constants/data';
import { styles } from './styles'

const JobDetail = ({navigation, route}) => {
  
  const {jobId, title} = route.params;

  const job = JOBS.find((job) => job.id === jobId)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.title}>{job.description}</Text>
      <Text style={styles.title}>{job.weight}</Text>
      <Text style={styles.title}>{job.price}</Text>
    </View>
  )
}

export default JobDetail

