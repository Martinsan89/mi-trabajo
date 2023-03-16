import { TouchableOpacity, Image, View, Text } from "react-native";
import {styles} from './styles'

const ProfileItem =({id, title, image, address, onSelect}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onSelect}>
            <Image style={styles.image} source={image?{uri: image}: null}/>
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileItem