import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Register } from "../screens/index";

const Stack = createNativeStackNavigator();

const RegisterNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Register"
            screenOptions={{
                headerShown: false,
            }}    
        >
            <Stack.Screen 
                name="Register" 
                component={Register}
                options={{
                    headerShown: false
                }} 
            />

        </Stack.Navigator>
    )
}

export default RegisterNavigator