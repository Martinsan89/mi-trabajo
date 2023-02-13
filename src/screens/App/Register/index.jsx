import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { TextFont } from '../../../components'

const Register = ({navigation, route}) => {
  let user = route.params.user;

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <TextFont textType={'Regular'} style={styles.header}>
                <Text>Registrate</Text>
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
            <Pressable 
                style={styles.btnLogin}
                onPress={() => navigation.navigate(user)}>
                <Text style={{color:'white'}}>Ingresar</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Register