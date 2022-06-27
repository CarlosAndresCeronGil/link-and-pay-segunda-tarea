import React from "react"
import { StyleSheet, Text, Pressable } from "react-native"

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    
    container_PRIMARY: {
        backgroundColor: '#FFCC00',
    },

    container_SECONDARY: {
        backgroundColor: '#0075BE',
    },

    container_TERCIARY: {
        borderWidth: 1,
        borderColor: '#0075BE',
    },

    text: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})

export default CustomButton