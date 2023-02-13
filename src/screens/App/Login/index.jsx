import React from "react";
import { styles } from "./styles";
import { View, Text, TextInput, Pressable} from "react-native";
import { TextFont } from "../../../components";
import Icon from 'react-native-vector-icons/FontAwesome'



const Login = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.buttonBackContainer}>
                <Icon.Button 
                    name='home' 
                    title='Login' 
                    style={styles.buttonBack} 
                    onPress={()=> 
                        navigation.navigate('Home')}
                    >Home
                </Icon.Button>
            </View>
            <View style={styles.headerContainer}>
                <TextFont textType={'Regular'} style={styles.header}>
                    <Text>Login</Text>
                </TextFont>
            </View>
            <View style={styles.formContainer}>
                <View>
                    <Text style={styles.label}>Ingrese su email</Text>
                    <TextInput style={styles.input} placeholder="Email" />
                </View>
                <View>
                    <Text style={styles.label}>Ingrese su password</Text>
                    <TextInput style={styles.input} placeholder="Password" />
                </View>
                <Pressable 
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('TabsNavigator')}>
                    <Text>Ingresar</Text>
                </Pressable>
            </View>
        </View>
    )
};

export default Login;