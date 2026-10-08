import { View, Text, StyleSheet, Pressable } from "react-native";

export function Randomerator(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Randomerator
            </Text>
            <View style={styles.content}>
                <Text style={styles.result}>100</Text>
                <Pressable style={styles.buttonPrimary}>
                    <Text style={styles.buttonText}>Generate</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d5d5d5",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 32,
        gap: 32
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
    },
    content:{
        backgroundColor: "#fff",
        width: "100%",  
        padding: 16,
        borderRadius: 8 
    },
    result: {
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center",
        color: "#6c6c6c"
    },
    buttonPrimary: {
        backgroundColor: "#0099ff",
        padding: 16,
        borderRadius: 8,
        marginTop: 16
    },
    buttonText:{
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
    }
})