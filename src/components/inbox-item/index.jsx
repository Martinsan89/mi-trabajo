import Ionicons from '@expo/vector-icons/Ionicons'

import {styles} from './styles'
import { colors } from '../../constants'
import { Text, View, TouchableOpacity } from 'react-native'

const InboxItem = ({item, onSelected}) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity
            style={styles.contentContainer}
            onPress={() => onSelected(item)}>
                <Text style={styles.title}>
                    {item.msg}
                </Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.price}>{item.description}</Text>
                </View>
        </TouchableOpacity>
        </View>
    )
}

export default InboxItem