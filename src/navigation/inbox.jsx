import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inbox, InboxDetail } from "../screens";
import { colors } from "../constants";
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { logOut } from "../store/actions";


const Stack = createNativeStackNavigator();

const InboxNavigator =() => {
    const dispatch = useDispatch()

    return (
        <Stack.Navigator
            initialRouteName='Inbox'
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
                name="Inbox"
                component={Inbox}
                options={({navigation}) => ({
                    title: 'Correos',
                    headerTitleStyle:{
                        fontSize: 22,
                    },
                    headerTitleAlign: 'center',
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
                name="InboxDetail"
                component={InboxDetail}
                options={({navigation}) => ({
                    title: 'Detalle',
                    headerTitleStyle:{
                        fontSize: 22,
                    },
                    headerTitleAlign: 'center',
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

export default InboxNavigator