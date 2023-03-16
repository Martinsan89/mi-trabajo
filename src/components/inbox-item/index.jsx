import Ionicons from '@expo/vector-icons/Ionicons'

import {styles} from './styles'
import { Text, View, TouchableOpacity, Pressable } from 'react-native'

const InboxItem = ({item, onSelected, toDelete}) => {
    
    return (
        <View style={styles.container}>
        <TouchableOpacity
            style={styles.contentContainer}
            onPress={() => onSelected(item)}>
                <View style={styles.textContent}>
                    <Text style={styles.title}>
                        {item.msg}
                    </Text>
                    <Pressable onPress={()=>toDelete(item.id)}>
                        <Ionicons name='trash-outline' style={styles.trash} />
                    </Pressable>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.price}>{item.description}</Text>
                </View>
        </TouchableOpacity>
        </View>
    )
}

export default InboxItem