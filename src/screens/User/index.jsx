import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import {CATEGORIES} from '../../constants/data/index'
import { CaterogyItem } from '../../components'
// import { TextFont, Input } from '../../components'
// import Icon from 'react-native-vector-icons/FontAwesome'


const User = ({navigation}) => {

    const onSelected = (item) => {
        navigation.navigate('Jobs', {
            categoryId: item.id,
            title: item.title
        })
    };

    const renderItem = ({item}) => <CaterogyItem item={item} onSelected={onSelected}/>;
    const keyExtractor = (item) => item.id.toString();

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={CATEGORIES}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.containerList}
                contentContainerStyle={styles.contentContainerList} />
    </SafeAreaView>
    )
}

export default User
{/* <View style={styles.buttonBackContainer}>
    <Icon.Button 
        name='home' 
        title='Login' 
        style={styles.buttonBack} 
        onPress={()=> 
            navigation.navigate('Home')}
        >Logout
    </Icon.Button>
</View> */}
{/* <View style={styles.headerContainer}>
    <TextFont textType={'Regular'} style={styles.header}>
        <Text>Usuario</Text>
    </TextFont>
</View> */}