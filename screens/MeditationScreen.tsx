import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MeditationScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>MeditationScreen</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default MeditationScreen;