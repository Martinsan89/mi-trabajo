import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile, EditProfile, MapsScreen, ProfileDetail } from "../screens";
import { colors } from "../constants";
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from "react-native";
import { logOut } from "../store/actions";
import { useDispatch } from "react-redux";



const Stack = createNativeStackNavigator();

const ProfileNavigator =() => {
    const dispatch = useDispatch()

    return (
        <Stack.Navigator
            initialRouteName='Profile'
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor:colors.white
                },
                headerTintColor: colors.primary,
                navigationBarColor: colors.secondary,
                headerTitleStyle: {
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: colors.secondary
                }
            }}
        >
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={({navigation}) => ({
                    title: 'Perfil',
                    headerTitleStyle:{
                        fontSize: 22,
                    },
                    headerTitleAlign: 'center',
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                                <Ionicons name='pencil-outline' style={{fontSize: 22}}  /> 
                            </TouchableOpacity>
                        )
                    },
                    headerLeft: () => {
                        return (
                            <TouchableOpacity onPress={() => dispatch(logOut())}>
                                <Ionicons name='log-out' style={{fontSize: 22}}  /> 
                            </TouchableOpacity>
                        )
                    }
                })}
            />
            <Stack.Screen 
                name='EditProfile' 
                component={EditProfile} 
                options={{
                    title:'Editar'
                }}
            />
            <Stack.Screen 
                name='ProfileDetail' 
                component={ProfileDetail} 
                options={{
                    title:'Detalle'
                }}
            />
            <Stack.Screen 
                name='Maps' 
                component={MapsScreen} 
                options={{
                    title:'Maps'
                }}
            />
        </Stack.Navigator>
    )
}

export default ProfileNavigator