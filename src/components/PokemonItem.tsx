import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const PokemonItem = (props) => {
    return (
        <View key={props.id} style={styles.pokemonCard}>
            <Image source={{ uri: props.artwork}} style={styles.pokemonImage}></Image>
            <View style={styles.pokemonData}>
                <Text style={styles.pokemonId}>{props.id}</Text>
                <Text style={styles.pokemonName}>{props.name}</Text>
            </View>
        </View>
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