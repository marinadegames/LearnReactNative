import { Image, StyleSheet, Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"

export const ProfileScreen = () => {
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

    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <Image source={require("../assets/SpinberryLogo.png")} />
            <Text style={styles.title}>Profile</Text>
            <View style={styles.wrapper}></View>
        </View>
    )
}
