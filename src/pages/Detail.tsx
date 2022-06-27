import React, { useEffect } from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { gql, useQuery } from "@apollo/client";

const POKEMON_DETAIL = gql`
query findPokemon($name: String!) {
    pokemon(name: $name) {
      abilities {
        ability {
          name
        }
      }
      height
      weight
      species {
        name
      }
        sprites {
        front_default
      }
    }
  }
`

const Detail = ({ route }) => {


    const { id, name } = route.params
    const { data, loading, error } = useQuery(POKEMON_DETAIL, {
        variables: {
            name: name
        }
    })

    useEffect(function () {
        console.log("data", data)
        console.log("name", name)
    },[])

    return (
        <View style={style.container}>
            {
                loading ? <Text style={style.loading}>Loading...</Text> :
                    (
                        <View style={style.container}>
                            <Text style={style.title}>Detail of pokemon {name}</Text>
                            <Image style={style.pokemonImage} source={{ uri: data?.pokemon.sprites.front_default }}></Image>
                            <Text style={style.subTitle}>Abilites: </Text>
                            {
                                data?.pokemon.abilities.map(ability => (
                                    <Text style={style.ability}>{ability.ability.name}</Text>
                                ))
                            }
                            <Text><Text style={style.subTitle}>Height:</Text> {data?.pokemon.height}</Text>
                            <Text><Text style={style.subTitle}>Wight:</Text> {data?.pokemon.weight}</Text>
                            <Text><Text style={style.subTitle}>Species:</Text> {data?.pokemon.species.name}</Text>
                        </View>
                    )
            }
        </View>
    )
}

const style = StyleSheet.create({
    ability: {
        fontSize: 15,
        marginTop: 5
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    loading: {
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    pokemonImage: {
        width: 200,
        height: 200
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        color: '#3c5aa6'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 2
    }
})

export default Detail