import React from 'react'
import { Text, View, TouchableWithoutFeedback, TextInput, Keyboard, Pressable } from 'react-native'
import { styles } from './styles'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {confirmMsg} from '../../../../store/actions/inbox.action'
import { colors } from '../../../../constants';

const JobDetail = ({ route}) => {

  let description = route.params.description;
  let title = route.params.title;

  const [msg, setMsg] = useState('')
  const [confirm, setConfirm] = useState(false)

  const dispatch = useDispatch();

  const createMsg = () => {
    dispatch(confirmMsg(msg, title, description)),
    setConfirm(true)
  }

  return (
    <TouchableWithoutFeedback  onPress={()=> Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{description}</Text>
        <View style={styles.buttonConfirm}>
          <TextInput 
            style={styles.msg}
            placeholder={'Escriba su mensaje... '}
            placeholderTextColor={colors.white}
            onFocus={()=> setConfirm(false)}
            onChangeText={(newMsg)=>setMsg(newMsg)} />
        </View>
        {confirm && <View style={styles.confirmContainer}>
          <Text style={styles.confirm}>Mensaje enviado</Text>
        </View>}
          <Pressable style={styles.textSend}  onPress={createMsg}>
            <Text style={styles.text}>Enviar </Text>
          </Pressable>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default JobDetail

