import { StatusBar } from "expo-status-bar"
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    View,
} from "react-native"

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
        button: {
            marginBottom: 30,
            width: 260,
            alignItems: "center",
            backgroundColor: "#2196F3",
        },
        buttonText: {
            textAlign: "center",
            padding: 20,
            color: "white",
        },
    })

    return (
        <View style={styles.container}>
            <StatusBar style="inverted" />
            <Image source={require("./assets/SpinberryLogo.png")} />
            <Text style={styles.title}>RGS Lobby</Text>

            <View style={styles.wrapper}></View>
        </View>
    )
}
