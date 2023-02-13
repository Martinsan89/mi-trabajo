import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Jobs, JobsFiltered, JobDetail } from "../screens/index";
import { colors } from "../constants";
import Ionicons from '@expo/vector-icons/Ionicons'

const Stack = createNativeStackNavigator();

const JobsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Jobs"
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
                name='Jobs' 
                component={Jobs} 
                options={({navigation}) => ({
                    title: 'Trabajos',
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
            <Stack.Screen 
                name='JobsFiltered' 
                component={JobsFiltered} 
                options={({route}) => ({
                    title: route.params.title
                })}
            />
            <Stack.Screen 
                name='JobDetail' 
                component={JobDetail} 
                options={({route}) => ({
                    title: route.params.title
                })}
            />
        </Stack.Navigator>
    )
}

export default JobsNavigator