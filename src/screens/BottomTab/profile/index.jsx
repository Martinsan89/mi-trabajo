import { View, FlatList  } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { useSelector, useDispatch } from 'react-redux'
import ProfileItem from '../../../components/profile-item'
import {Header} from '../../../components/index'
import { useEffect } from 'react'
import { loadProfile } from '../../../store/slice/profile.slice.js'

const Profile = ({navigation}) => {
  const dispatch = useDispatch();

  const profiles = useSelector((state) => state.profile.profiles);

  const renderItem = ({item}) => <ProfileItem {...item} onSelect={() => navigation.navigate('ProfileDetail', {profileId: item.id})}/>;

  const keyExtractor = (item) => item.id;

  useEffect(()=>{
    dispatch(loadProfile());
  },[dispatch])
 
  return (
    <View style={styles.container}>
      <Header title='Cree sus perfiles'/>
      <View style={styles.list}>
        <FlatList 
          data={profiles}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}

export default Profile