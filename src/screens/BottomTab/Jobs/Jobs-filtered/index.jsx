import React, {useEffect} from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { styles } from './styles'
import { JobItem } from '../../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { selectProduct, filterProducts } from '../../../../store/actions';


const JobsFiltered = ({navigation}) => {
  const dispatch = useDispatch();


  const category = useSelector((state) => state.category.selected)

  const filteredJobs = useSelector((state) => state.products.filteredProducts)

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('JobDetail', {
      jobId: item.id,
      description: item.description
    })
  }

  const renderItem = ({item}) => <JobItem item={item} onSelected={onSelected}/>
  const keyExtractor = (item) => item.id.toString();

  useEffect(()=>{
    dispatch(filterProducts(category.id))
  },[])

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