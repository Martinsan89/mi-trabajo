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
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.type}>Tipo de empleo: {item.type}</Text>
                </View>
        </TouchableOpacity>
    </View>
  )
}

export default JobItem