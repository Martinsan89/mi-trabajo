import { View, Text, Image, FlatList  } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { useSelector } from 'react-redux'
import ProfileItem from '../../../components/profile-item'


const Profile = ({navigation}) => {
  const places = useSelector((state) => state.place.places)

  const renderItem = ({item}) => <ProfileItem {...item}/>

  const keyExtractor = (item) => item.id
  
  return (
    <FlatList 
      data={places}
      style={styles.container}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  )
}

export default Profile