import { useState, useEffect } from "react";
import { View,  Text, Alert, Pressable } from "react-native";
import {styles} from './styles'
import * as Location from 'expo-location'
import MapPreview from "../maps-preview";
import { useNavigation, useRoute } from "@react-navigation/native"; 

const LocationSelector = ({onLocation}) => {
    const [pickedLocation, setPickedLocation] = useState(null);

    const navigation = useNavigation();
    const route = useRoute();

    const {mapLocation} = route.params || {};
    
    const onHandleGetLocation= async (isMaps = false) => {
        const isLocationPermission = await verifyPermissions();
        if(!isLocationPermission) return
        const location = await Location.getCurrentPositionAsync({
            timeout: 5000
        })
        const {latitude, longitude} = location.coords;

        
        setPickedLocation({lat: latitude, lng: longitude})
        onLocation({lat: latitude, lng: longitude})
        if(isMaps) {
        navigation.navigate('Maps', {coords: {lat: latitude, lng: longitude}})
        }
        
    }
    const verifyPermissions = async () => {
        const {status} = await Location.requestForegroundPermissionsAsync();

        if(status !== 'granted'){
            Alert.alert('Permisos insuficientes', 'debe dar permisos de localizacion', [{text: 'ok'}]);
            return false
        }
        return true;
    }

    const onHandlerMapsLocation = async () => {
        await onHandleGetLocation(true);
    }

    useEffect(() => {
        if(mapLocation) {
            setPickedLocation(mapLocation);
            onLocation(mapLocation);
        }
    }, [mapLocation])
    
    return (
        <View style={styles.container}>
            <MapPreview location={pickedLocation} style={styles.preview}>
                <Text style={styles.text}>No hay ubicacion seleccionada</Text>
            </MapPreview>
            <View style={styles.btnContent}>
                <Pressable style={styles.btn} onPress={onHandleGetLocation}>
                    <Text style={styles.btnText}>Seleccionar ubicación</Text>
                </Pressable>
            </View>
            <View style={styles.btnContent}>
                <Pressable style={styles.btn} onPress={onHandlerMapsLocation}>
                    <Text style={styles.btnText}>Seleccionar desde el mapa</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LocationSelector