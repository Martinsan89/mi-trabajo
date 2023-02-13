import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { TextFont } from '../../../components'
import Icon from 'react-native-vector-icons/FontAwesome'

const Employer = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.buttonBackContainer}>
        <Icon.Button 
            name='home' 
            title='Login' 
            style={styles.buttonBack} 
            onPress={()=> 
                navigation.navigate('Home')}
            >Logout
        </Icon.Button>
    </View>
    <View style={styles.headerContainer}>
        <TextFont textType={'Regular'} style={styles.header}>
            <Text>Empresa</Text>
        </TextFont>
    </View>
  </View>
  )
}

export default Employer