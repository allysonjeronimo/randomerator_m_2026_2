import {Pressable, Text, StyleSheet} from "react-native"

export const BUTTON_PRIMARY = "primary"
export const BUTTON_SECONDARY = "secondary"
export const BUTTON_DANGER = "danger"
export const BUTTON_SUCCESS = "success"

export function Button({type = BUTTON_PRIMARY, text, onClick}){
    
    const buttonStyles = {
        [BUTTON_PRIMARY]: styles.buttonPrimary,
        [BUTTON_SECONDARY]: styles.buttonSecondary,
        [BUTTON_DANGER]: styles.buttonDanger,
        [BUTTON_SUCCESS]: styles.buttonSuccess   
    }
    
    return (
        <Pressable style={buttonStyles[type]} onPress={onClick}>

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
    buttonSecondary: {
        backgroundColor: "#979898",
        padding: 16,
        borderRadius: 8,
        marginTop: 16
    },
    buttonDanger: {
        backgroundColor: "#c02c4e",
        padding: 16,
        borderRadius: 8,
        marginTop: 16
    },
    buttonSuccess: {
        backgroundColor: "#1c8f61",
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

