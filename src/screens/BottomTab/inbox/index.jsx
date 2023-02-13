import { View, FlatList } from 'react-native'
import React from 'react'
import {InboxItem} from '../../../components/'
import {styles} from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { selectInbox } from '../../../store/actions';

const Inbox = ({navigation}) => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.inbox.categories)


  const onSelected = (item) => {
    dispatch(selectInbox(item.id))
    navigation.navigate("InboxDetail", {
      title: item.title,
      categoryId: item.id
    });
  };



  const renderItem = ({item}) => <InboxItem item={item} onSelected={onSelected}/> 
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList 
          data={categories}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.listContainer}
        />
      </View>
      
    </View>
  )
}

export default Inbox