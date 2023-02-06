import React from 'react'
import { View, Text, Button, SafeAreaView, FlatList } from 'react-native'
import { styles } from './styles'
import { JobItem } from '../../components';
import { JOBS } from '../../constants/data';

const Jobs = ({navigation, route}) => {

  const {categoryId, title} = route.params;

  const filteredJobs = JOBS.filter((job) => job.categoryId === categoryId)

  const onSelected = (item) => {
    navigation.navigate('JobDetail', {
      jobId: item.id,
      title: item.title
    })
  }

  const renderItem = ({item}) => <JobItem item={item} onSelected={onSelected}/>
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={filteredJobs}
        renderItem={renderItem}
        keyExtractor={keyExtractor}  
        style={styles.contentList}
      />
    </SafeAreaView>
  )
}

export default Jobs