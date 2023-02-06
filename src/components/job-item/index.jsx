import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles} from './styles'

const JobItem = ({item, onSelected}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity
            style={styles.contentContainer}
            onPress={() => onSelected(item)}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.price}>${item.price}</Text>
                    <Text style={styles.weight}>{item.weight}</Text>
                </View>
        </TouchableOpacity>
    </View>
  )
}

export default JobItem