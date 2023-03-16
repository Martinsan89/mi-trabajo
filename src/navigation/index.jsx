import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import HomeNavigator from './homeNavigator'
import RegisterNavigator from "./register";

const AppNavigator = () => {
    const userId = useSelector((state) => state.register.userId)

    return (
        <NavigationContainer>
            {
                userId? <HomeNavigator /> : <RegisterNavigator />
            }
        </NavigationContainer>
    )
};

export default AppNavigator;