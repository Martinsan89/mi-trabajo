import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, User, Employer, Login, Register, Jobs, JobDetail, Notifications} from '../screens/index'
import { colors } from '../constants';
import {  TouchableOpacity } from 'react-native';
import { IconButton } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Home'
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
                name='Home' 
                component={Home}
                options={{
                    headerShown: false
                    
                }} 
            />
            <Stack.Screen 
                name='User' 
                component={User}
                options={({navigation}) => ({
                    headerShown:true,
                    title:'Usuario',
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                                <Icon name='bell' style={{fontSize: 22}}  /> 
                            </TouchableOpacity>
                        )
                    }
                      
                })}
            />
            <Stack.Screen 
                name='Employer' 
                component={Employer} 
                options={{
                    title:'Empresa'
                }}
            />
            <Stack.Screen 
                name='Login' 
                component={Login} 
                options={{
                    title:'Login'
                }}
            />
            <Stack.Screen 
                name='Register' 
                component={Register} 
                options={{
                    title:'Register'
                }}
            />
            <Stack.Screen 
                name='Notifications' 
                component={Notifications} 
                options={{
                    title:'Notifications'
                }}
            />
            <Stack.Screen 
                name='Jobs' 
                component={Jobs} 
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
};

export default ShopNavigator;