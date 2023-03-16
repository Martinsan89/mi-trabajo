import { View, Image, Text, Alert, Button, Pressable } from "react-native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import {styles} from './styles'


const ImageSelector = ({onImage}) => {
    const [pickedUrl, setPickedUrl] = useState(null)

    const verifyPermissions = async () => {
        const {status} = await ImagePicker.requestCameraPermissionsAsync();
        if(status !== 'granted'){
            Alert.alert('Permisos insuficientes', 'debe dar permisoss', [{text: 'ok'}]);
            return false
        }
        return true;
    };

    const onHandleTakeImage = async () => {
        const isCamaraPermission = await verifyPermissions();
        if(!isCamaraPermission) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.7
        });
        setPickedUrl(image.assets[0].uri);
        onImage(image.assets[0].uri);
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUrl ? (
                    <Text>No hay imagen seleccionada</Text>
                ): (
                    <Image style={styles.image} source={{uri: pickedUrl}} />
                )}
            </View>
            <Pressable style={styles.btn} onPress={onHandleTakeImage}>
                <Text style={styles.btnText}>Seleccionar Imagen</Text>
            </Pressable>
        </View>
    )
}

export default ImageSelector
