import { StyleSheet } from "react-native"

import { DefaultTheme, NavigationContainer, useTheme } from "@react-navigation/native"
import { HomeScreen } from "./components/HomeScreen"
import { ProfileScreen } from "./components/ProfileScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import Octicons from "react-native-vector-icons/Octicons"
import { Settings } from "./components/Settings"

const Tab = createBottomTabNavigator()

export default function App() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            paddingVertical: 50,
            paddingHorizontal: 20,
            backgroundColor: "#242424",
            alignItems: "flex-start",
            justifyContent: "flex-start",
        },
        title: {
            color: "white",
            fontSize: 30,
            fontWeight: "900",
        },
        wrapper: {
            marginTop: 30,
            flex: 1,
            width: "100%",
        },
    })
    const { colors } = useTheme()

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: "rgb(255, 45, 85)",
            dark: "#242424",
            gold: "#FCBB64",
            goldGradient: "linear-gradient(180deg, #F5D383 0%, #FCBB64 100%)",
        },
    }

    return (
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        if (route.name === "Home") {
                            iconName = focused ? "ios-home" : "ios-home-outline"
                        }
                        if (route.name === "RGS") {
                            iconName = focused ? "ios-server" : "ios-server-outline"
                        }
                        if (route.name === "Settings") {
                            iconName = focused ? "ios-settings" : "ios-settings-outline"
                        }
                        return <Ionicons name={String(iconName)} size={size} color={color} />
                    },
                    tabBarItemStyle: {},
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "#2d2d2d",
                        borderTopColor: "transparent",
                    },
                    tabBarActiveTintColor: MyTheme.colors.gold,
                    tabBarInactiveTintColor: "gray",
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="RGS" component={ProfileScreen} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
