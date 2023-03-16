import { View, Text, ScrollView, Image } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useSelector } from "react-redux";

import { MapPreview } from "../../../../components/index";
import { styles } from "./styles";

import {deleteProfile} from '../../../../store/slice/profile.slice'
import { useDispatch } from "react-redux";

const ProfileDetail = ({ navigation, route }) => {
  const { profileId } = route.params;
  const dispatch = useDispatch();

  const  profile =  useSelector((state) => state.profile.profiles.find((profile) => profile.id === profileId));

  const toDelete = (id) => {
    dispatch(deleteProfile(id)),
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{profile.title}</Text>
      <Image source={{ uri: profile?.image }} style={styles.image} />
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{profile.address}</Text>
        </View>
        <MapPreview style={styles.map} location={{ lat: profile.coords.lat, lng: profile.coords.lng }}>
          <Text>Ubicacion no disponible</Text>
        </MapPreview>
      </View>
      <View style={styles.delete}>
        <Pressable style={styles.textSend} onPress={()=> toDelete(profile.id)}>
          <Text style={styles.text}>Eliminar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ProfileDetail;