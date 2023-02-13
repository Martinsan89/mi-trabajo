import React from 'react'
import {  Text, View, TouchableWithoutFeedback, TextInput, Button, Keyboard } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux';

const InboxDetail = () => {
  
  const product = useSelector((state) => state.inbox.selected)


  return (
    <TouchableWithoutFeedback  onPress={()=> Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.title}>{product.description}</Text>
        <View style={styles.footer}>
          <View style={styles.buttonConfirm}>
            <TextInput 
              style={styles.msg}
              placeholder={'Escriba su mensaje'} />
          </View>
            <Button title='Enviar' style={styles.textSend}/>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default InboxDetail