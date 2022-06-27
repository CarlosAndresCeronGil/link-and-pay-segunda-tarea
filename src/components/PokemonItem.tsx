import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "./CustomButton";

const PokemonItem = (props) => {

    const navigation = useNavigation()

    const handleTouch = () => {
        navigation.navigate("Detail", { id: props.id, name: props.name })
    }

    return (
        <TouchableOpacity onPress={handleTouch}>
            <View key={props.id} style={styles.pokemonCard}>
                <Image source={{ uri: props.artwork }} style={styles.pokemonImage}></Image>
                <View style={styles.pokemonData}>
                    <Text style={styles.pokemonId}>{props.id}</Text>
                    <Text style={styles.pokemonName}>{props.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    pokemonCard: {
        padding: 20,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row'
    },
    pokemonData: {
        marginLeft: 5,
        justifyContent: 'center'
    },
    pokemonImage: {
        width: 58,
        height: 58,
        borderRadius: 4
    },
    pokemonId: {
        fontSize: 20,
        color: '#2a75bb',
    },
    pokemonName: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default PokemonItem