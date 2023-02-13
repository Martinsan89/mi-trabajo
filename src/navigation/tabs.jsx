import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import InboxNavigator from "./inbox";
import ProfileNavigator from "./profile";
import JobsNavigator from "./jobs";

import { colors } from "../constants";
import Ionicons from '@expo/vector-icons/Ionicons'

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="JobsTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 12
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.secondary
            }}>
            <BottomTab.Screen 
                name='ProfileTab' 
                component={ProfileNavigator}
                options={{
                    title:'Profile',
                    tabBarIcon:({focused}) => (
                        <Ionicons 
                            name={focused ? 'home' : 'home-outline'} 
                            size={22} 
                            color={colors.primary}/> 
                    )
                }}/>
            <BottomTab.Screen 
                name='JobsTab' 
                component={JobsNavigator}
                options={{
                    title:'Trabajos',
                    tabBarIcon:({focused}) => (
                        <Ionicons 
                            name={focused ? 'file-tray' : 'file-tray-full-outline'} 
                            size={22} 
                            color={colors.primary}
                        /> 
                    )
                }}/>
            <BottomTab.Screen 
                name='InboxTab' 
                component={InboxNavigator}
                options={{
                    title:'Inbox',
                    tabBarIcon:({focused}) => (
                        <Ionicons 
                            name={focused ? 'cart' : 'cart-outline'} 
                            size={22} 
                            color={colors.primary}/> 
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}

export default Tabs;
