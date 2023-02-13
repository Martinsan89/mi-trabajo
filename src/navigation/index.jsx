import { NavigationContainer } from "@react-navigation/native";

// import TabsNavigator from "./tabs";
import HomeNavigator from './homeNavigator'

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <HomeNavigator />
        </NavigationContainer>
    )
};

export default AppNavigator;