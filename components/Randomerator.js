import { View, Text, StyleSheet} from "react-native";
import { useState } from "react"
import { Button } from "./button/index"

export function Randomerator(){

    const [value, setValue] = useState(0)

    function incrementar(){
        setValue(value + 1)
    }

    function decrementar(){
        setValue(value - 1)
    }

    function resetar(){
        setValue(0)
    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>
                Randomerator
            </Text>

            <View style={styles.content}>

                <Text style={styles.resultText}>{value}</Text>

                <Button
                    text="Incrementar"
                    onClick={incrementar}
                />

                <Button
                    text="Decrementar"
                    onClick={decrementar}
                />

                <Button
                    text="Resetar"
                    onClick={resetar}
                />

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
        fontWeight: "bold",
        color: "#3f3f3f"
    },
    content:{
        backgroundColor: "#fff",
        width: "100%",  
        padding: 16,
        borderRadius: 16 
    },
    resultText: {
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center",
        color: "#6c6c6c"
    }
})