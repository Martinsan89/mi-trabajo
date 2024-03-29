import { View, ScrollView, Button, Text, TextInput} from 'react-native'
import React from 'react'
import {styles} from './styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveProfile } from '../../../../store/slice/profile.slice'
import {ImageSelector, LocationSelector}  from '../../../../components/index'
import { colors } from '../../../../constants'



const EditProfile = ({navigation}) => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [coords, setCoords] = useState(null)

  const dispatch = useDispatch()

  const onHandlerSubmit = () => {
    dispatch(saveProfile(title, image, coords))
    navigation.goBack()
  }

  const onHandlerChange = (text) => {
    setTitle(text)
  }

  const onImage = (uri) => {
    setImage(uri)
  }

  const onLocation = (location) => {
    setCoords(location);
  }
  
  return (

    <ScrollView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>Profesión</Text>
            <TextInput style={styles.input} 
              placeholder='Escribe el nombre del lugar' 
              value={title}
              onChangeText={onHandlerChange}
            />
            <ImageSelector
              onImage={onImage}
            /> 
            <LocationSelector
              onLocation={onLocation}
            />
            <View style={styles.btnContent}>
              <Button title="Guardar" 
                color={colors.black}
                onPress={onHandlerSubmit}
                disabled={title.length === 0}  
              />
            </View>
        </View>


    </ScrollView>
  )
}

export default EditProfile