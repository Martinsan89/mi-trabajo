import React from 'react'
import {  Text, View, TouchableWithoutFeedback, TextInput, Button, Keyboard } from 'react-native'
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {confirmMsg} from '../../../../store/actions/inbox.action'

const InboxDetail = () => {

  const [msg, setMsg] = useState('')

  const product = useSelector((state) => state.inbox.selected)

  const dispatch = useDispatch();

  const createMsg = () => {
    dispatch(confirmMsg(msg))
  }
  


  return (
    <TouchableWithoutFeedback  onPress={()=> Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>{product?.title}</Text>
        <Text style={styles.title}>{product?.description}</Text>
        <View style={styles.footer}>
          <View style={styles.buttonConfirm}>
            <TextInput 
              style={styles.msg}
              placeholder={'Escriba su mensaje'}
              onChangeText={(newMsg)=>setMsg(newMsg)} />
          </View>
            <Button title='Enviar' style={styles.textSend} onPress={createMsg}/>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default InboxDetail