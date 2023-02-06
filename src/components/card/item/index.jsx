import React, {useState} from "react";
import { View, Text, Button } from 'react-native'
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

const Item = ({ item, onHandlerModal }) => {
  const [colorDone, setColorDone] = useState(colors.default)
    return (
    <View style={[styles.itemContainer, {backgroundColor:colorDone} ]} >
      <Text style={styles.itemList}>{item.value}</Text>
      <View style={styles.buttonsContainer}>
        <Icon.Button name="check" color={colors.black} backgroundColor={colors.white}  onPress={() => setColorDone(colors.done)}></Icon.Button>
        <Icon.Button name="close" color={colors.black} backgroundColor={colors.white}  onPress={() => onHandlerModal(item)}></Icon.Button>
      </View>
    </View>
    )
}

export default Item;