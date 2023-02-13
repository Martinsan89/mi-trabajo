import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../screens";
import { colors } from "../constants";
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const ProfileNavigator =() => {
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
                            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                                <Ionicons name='notifications' style={{fontSize: 22}}  /> 
                            </TouchableOpacity>
                        )
                    },
                    headerLeft: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Ionicons name='log-out' style={{fontSize: 22}}  /> 
                            </TouchableOpacity>
                        )
                    }
                })}
            />
        </Stack.Navigator>
    )
}

export default ProfileNavigator