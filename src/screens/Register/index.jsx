import { View, Text, Button, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, {useReducer, useState} from 'react'
import { styles } from './styles'
import { Input, Header } from '../../components'
import { colors } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signUp } from '../../store/actions' 
import { onInputChange, UPDATED_FORM } from '../../utils/form'

const initialState = {
    email: {value: '', error: '', touched: false, hasError: true},
    password: {value: '', error: '', touched: false, hasError: true},
    isFormValid: false
}

const formReducer = (state, action) => {
    switch(action.type) {
        case UPDATED_FORM:
            const {name, value, hasError, error, touched, isFormValid} = action.data;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched
                },
                isFormValid
            }
        default: 
            return state
    }
}

const Register = () => {
    const dispatch = useDispatch();
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const [isLogin, setIsLogin] = useState(true);
    const title = isLogin? 'Login' : 'Register';
    const message = isLogin? 'Dont have an account' : 'Already have an account';
    const messageButton = isLogin? 'Login' : 'Register';
    const [error, setError] = useState(false);

    const userId = useSelector((state) => state.register.id)

    const onHandlerSubmit = async () => {
        await dispatch( isLogin ? 
            signIn(formState.email.value,formState.password.value) : 
            signUp(formState.email.value,formState.password.value))
        if(!userId) setError(true)    

    }

    const onHandlerInputChange = ( value, type) => {
        onInputChange(type, value, dispatchFormState, formState)
    }

  return (
    <KeyboardAvoidingView style={styles.keybordContainer}
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        enabled    
    >
    <View style={styles.container}>
        <Header title='Mi-Trabajo' />
        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Input 
                placeholder='enter your email'
                placeholderTextColor={colors.primary}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(text) => onHandlerInputChange(text, 'email')}
                value={formState.email.value}
                hasError={formState.email.hasError}
                error={formState.email.error}
                touched={formState.email.touched}
                label='Email'
                labelStyle={styles.label}

            />
            <Input 
                placeholder='enter your password'
                placeholderTextColor={colors.primary}
                secureTextEntry
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(text) => onHandlerInputChange(text, 'password')}
                value={formState.password.value}
                hasError={formState.password.hasError}
                error={formState.password.error}
                touched={formState.password.touched}
                label='Password'
                labelStyle={styles.label}
            />
            <View style={styles.buttonContainer}>
                <Button title={messageButton} color={colors.primary} onPress={onHandlerSubmit}/>
                <View style={styles.prompt}>
                    <TouchableOpacity style={styles.promptButton} onPress={()=> {setIsLogin(!isLogin), setError(false)}}>
                        <Text style={styles.promptText}>{message}</Text>
                    </TouchableOpacity>
                </View>
                {error && <Text style={{color: 'red'}}>Usuario no encontrado</Text>}
            </View>
        </View>
    </View>
    </KeyboardAvoidingView>
  )
}

export default Register