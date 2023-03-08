import { View, Text, Image, FlatList  } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { useSelector, useDispatch } from 'react-redux'
import ProfileItem from '../../../components/profile-item'
import {Header} from '../../../components/index'
import { useEffect } from 'react'
import { loadPlaces } from '../../../store/slice/place.slice'


const Profile = ({navigation}) => {
  const dispatch = useDispatch();

  const places = useSelector((state) => state.place.places)

  const renderItem = ({item}) => <ProfileItem {...item} onSelect={() => navigation.navigate('ProfileDetail', {profileId: item.id})}/>;

  const keyExtractor = (item) => item.id;

  useEffect(()=>{
    dispatch(loadPlaces());
  },[dispatch])
  
  return (
    <View style={styles.container}>
      <Header title='Cree sus perfiles'/>
      <FlatList 
        data={places}
        style={styles.list}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  )
}

export default Profile