import React from 'react'
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = ({name, title, user, navigation }) => {
    return (
        <Icon.Button 
            name={name} 
            title={title} 
            style={styles.buttonHome}
            onPress={() => {
                navigation.navigate('Register', {user: user})
            }}
        >
            {title}
        </Icon.Button>
    )
}

export default IconButton;