import {Pressable, Text, StyleSheet} from "react-native"

export function Button({text, onClick}){
    return (
        <Pressable style={styles.buttonPrimary} onPress={onClick}>

            <Text style={styles.buttonText}>
                {text}
            </Text>

        </Pressable>
    )
}

const styles = StyleSheet.create({
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

