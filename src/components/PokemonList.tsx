import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { gql, useQuery } from "@apollo/client";
import PokemonItem from "./PokemonItem";

const POKEMON_LIST = gql`
query {
    pokemons {
      results {
        id
        name
        artwork
      }
    }
}
`;

const PokemonList = () => {
    const { data } = useQuery(POKEMON_LIST)
    return (
        <View>
            <FlatList 
            data={data?.pokemons.results}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({item: pokemon}) => (
                <PokemonItem {...pokemon}></PokemonItem>
            )}
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    pokemonCard: {
        padding: 20,
        paddingTop: 5,
        paddingBottom: 5
    }
})

export default PokemonList;