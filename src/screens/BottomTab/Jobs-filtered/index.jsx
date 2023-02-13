import React, {useEffect} from 'react'
import { View, Text, Button, SafeAreaView, FlatList } from 'react-native'
import { styles } from './styles'
import { JobItem } from '../../../components';
import { JOBS } from '../../../constants/data';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectProduct, filterProducts } from '../../store/actions';


const JobsFiltered = ({navigation, route}) => {
  // const dispatch = useDispatch();

  const {categoryId, title} = route.params;

  // const category = useSelector((state) => state.category.selected)

  const filteredJobs = JOBS.filter((job) => job.categoryId === categoryId)

  const onSelected = (item) => {
    navigation.navigate('JobDetail', {
      jobId: item.id,
      title: item.title
    })
  }

  const renderItem = ({item}) => <JobItem item={item} onSelected={onSelected}/>
  const keyExtractor = (item) => item.id.toString();

  // useEffect(()=>{
  //   dispatch(filterProducts(category.id))
  // },[])

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

export default JobsFiltered