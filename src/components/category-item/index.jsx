import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles';
import TextFont from '../textFont';

const CategoryItem = ({item, onSelected}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity
            style={{...styles.contentContainer, backgroundColor: item.color}}
            onPress={()=> onSelected(item)}
        >
        <View>
            <TextFont textType={'Neuton-Light'}>
                <Text style={styles.title}>{item.title}</Text>
            </TextFont>
        </View>    
      </TouchableOpacity>
    </View>
  )
}

export default CategoryItem;