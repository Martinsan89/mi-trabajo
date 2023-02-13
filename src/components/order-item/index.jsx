import Ionicons from '@expo/vector-icons/Ionicons'
import { formatDate } from '../../utils/index'
import {styles} from './styles'
import { colors } from '../../constants'
import { Text, View, TouchableOpacity } from 'react-native'

const OrderItem = ({item, onDelete}) => {
    return (
        <View style={styles.contanier}>
            <View style={styles.headerContainer}>
                <Text style={styles.date}>{formatDate(item.date)}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.total}>{item.total}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=> onDelete(item.id)}>
                <Ionicons name="trash" size={22} color={colors.primary} />
            </TouchableOpacity>
        </View>
    )
}

export default OrderItem