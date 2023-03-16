import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../constants';


import TabsNavigator from './tabs'

const Stack = createNativeStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName='TabsNavigator'
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
                name='TabsNavigator' 
                component={TabsNavigator}
                options={{
                    headerShown: false
                    
                }} 
            />
        </Stack.Navigator>
    )
};

export default HomeNavigator;