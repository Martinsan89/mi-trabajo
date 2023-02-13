import { View, Text, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { TextFont } from '../../../components'
import Ionicons from '@expo/vector-icons/Ionicons'



const Profile = ({navigation}) => {

  // const onDelete = (id) => {};

  
  return (

    <View style={styles.container}>
        <View >
            <TouchableOpacity style={styles.buttonBackContainer} onPress={()=> null}>
                <Ionicons 
                    name='pencil' 
                    title='Edit' 
                    style={styles.buttonBack} 
                />
                <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
        </View>
      <View style={styles.headerContainer}>
                <TextFont textType={'Regular'} style={styles.header}>
                    <Text>Perfil</Text>
                </TextFont>
            </View>
            <View style={styles.formContainer}>
                <View>
                    <Text style={styles.label}>Ingrese su nombre</Text>
                    <TextInput style={styles.input} placeholder="Nombre" />
                </View>
                <View>
                    <Text style={styles.label}>Ingrese su email</Text>
                    <TextInput style={styles.input} placeholder="Email" />
                </View>
                <View>
                    <Text style={styles.label}>Ingrese su password</Text>
                    <TextInput style={styles.input} placeholder="Password" />
                </View>
                <View>
                    <Text style={styles.label}>Repita el password</Text>
                    <TextInput style={styles.input} placeholder="Confirmar Password" />
                </View>
            </View>
    </View>
  )
}

export default Profile