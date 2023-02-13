import { View, Text, Button} from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Header, IconButton, TextFont} from '../../../components'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonBackContainer}>
        <Icon.Button 
          name='key' 
          title='Login' 
          style={styles.buttonBack} 
           onPress={()=> 
            navigation.navigate('Login')}
        >Login</Icon.Button>
      </View>
      <Header />
        <View 
          style={styles.subContainer}
        >
          <TextFont 
            textType={'Italic'} 
            style={styles.subTitle}
          >
            <Text>Bienvenido a Mi-Trabajo.</Text>
          </TextFont>
          <TextFont 
            textType={'Light'} 
            style={styles.subText} >
              <Text>Elige si eres usuario o empleador. </Text>
          </TextFont>
        </View>
        <View style={styles.buttonContainer}>
          <IconButton 
            name={'user'} 
            title={'Usuario'} 
            user={'TabsNavigator'}
            navigation={navigation}  
          />
          <IconButton 
            name={'suitcase'} 
            title={'Empresa'} 
            user={'Employer'}  
            navigation={navigation}
          />
        </View>
    </View>
  )
}
export default Home;