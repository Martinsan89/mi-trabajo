import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import {JOBS} from '../../../constants/data/index'
import {InboxItem} from '../../../components/'
import {styles} from './styles'
// import { useSelector } from 'react-redux'

const Inbox = ({navigation}) => {

  const onDelete = (id) => {};

  const onSelected = (item) => {
    // dispatch(selectedCategory(item.id))
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
          data={JOBS}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.listContainer}
        />
      </View>
      
    </View>
  )
}

export default Inbox