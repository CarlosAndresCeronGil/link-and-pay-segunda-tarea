import React, { useContext } from "react"
import { StatusBar, StyleSheet, Text, View } from "react-native"
import PokemonList from "../components/PokemonList"
import UserContext from "../context/userContext"

const Home = () => {
    const {user} = useContext(UserContext)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>List of Pokemons</Text>
            <Text style={styles.welcome}>Welcome {user.name}</Text>
            <PokemonList></PokemonList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3c5aa6'
    },
    welcome: {
        fontSize: 20,
    }
})

export default Home