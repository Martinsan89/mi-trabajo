import { View, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";

import { MapPreview } from "../../../../components/index";
import { styles } from "./styles";

const ProfileDetail = ({ navigation, route }) => {
  const { profileId } = route.params;

  const place = useSelector((state) => state.place.places.find((place) => place.id === profileId));

  const parseCoords = JSON.parse(place?.coords)

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>{place.title}</Text>
      <Image source={{ uri: place.image }} style={styles.image} />
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <MapPreview style={styles.map} location={{ lat: parseCoords.lat, lng: parseCoords.lng }}>
          <Text>Ubicacion no disponible</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

export default ProfileDetail;