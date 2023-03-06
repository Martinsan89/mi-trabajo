import { View, FlatList } from 'react-native'
import React from 'react'
import {InboxItem} from '../../../components'
import {styles} from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { selectInbox, getChats } from '../../../store/actions/index';
import { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'


const Inbox = ({navigation}) => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chats.list)

  const onSelected = (item) => {
    dispatch(selectInbox(chats.id))
    navigation.navigate("InboxDetail", {
      title: item.title,
      categoryId: item.id
    });
  };



  const renderItem = ({item}) => <InboxItem item={item} onSelected={onSelected}/> 
  const keyExtractor = (item) => item.id.toString();

  useFocusEffect(
    useCallback(()=> {
      dispatch(getChats())
    },[dispatch])

  )
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList 
          data={chats}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.listContainer}
        />
      </View>
      
    </View>
  )
}

export default Inbox