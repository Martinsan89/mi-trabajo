import { useState } from "react";
import { View, Button, Text, Alert } from "react-native";
import {styles} from './styles'
import * as Location from 'expo-location'
import MapPreview from "../maps-preview";

const LocationSelector = ({onLocation}) => {
    const [pickedLocation, setPickedLocation] = useState({});

    
    const onHandleGetLocation= async () => {
        const isLocationPermission = await verifyPermissions();
        if(!isLocationPermission) return
        const location = await Location.getCurrentPositionAsync({
            timeout: 5000
        })
        const {latitude, longitude} = location.coords;
        
        setPickedLocation({lat: latitude, lng: longitude})
        onLocation({lat: latitude, lng: longitude})
        
    }
    const verifyPermissions = async () => {
        const {status} = Location.requestForegroundPermissionsAsync()
        console.log(status)
        if(status !== 'granted'){
            Alert.alert('Permisos insuficientes', 'debe dar permisos de localizacion', [{text: 'ok'}]);
            return false
        }
        return true;
    }
    
    return (
        <View style={styles.container}>
            <MapPreview location={pickedLocation} style={styles.preview}>
                <Text style={styles.text}>No hay ubicacion seleccionada</Text>
            </MapPreview>

            <Button 
                title="Seleccionar ubicacion"
                onPress={onHandleGetLocation}
            />
            <Button 
                title="Seleccionar desde el mapa"
                onPress={onHandleGetLocation}
            />
        </View>
    )
}

export default LocationSelector