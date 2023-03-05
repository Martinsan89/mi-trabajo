import { TouchableOpacity, Image, View, Text } from "react-native";
import {styles} from './styles'

const ProfileItem =({id, title, image, onSelect}) => {

    // console.warn(image)
    return (
        <TouchableOpacity style={styles.container} onPress={onSelect}>
            <Image style={styles.image} source={{uri: image}}/>
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileItem