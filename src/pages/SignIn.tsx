import React, { useContext, useState } from "react"
import { View, Image, StyleSheet } from "react-native"
import pokemon from '../../assets/images/pokemon.png'
import CustomButton from "../components/CustomButton"
import CustomInput from "../components/CustomInput"
import { useNavigation } from "@react-navigation/native"
import Login from "../api/auth"
import jwtDecode from "jwt-decode"
import UserContext from "../context/userContext"
import AsyncStorage from "@react-native-async-storage/async-storage"

const SignIn = () => {
    const userContext = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigation = useNavigation()

    const handleSignInPress = () => {
        const login = Login(email, password)
        if(login !== undefined) {
            // navigation.navigate("Home")
            const user = jwtDecode(login)
            userContext.setUser(user)
            AsyncStorage.setItem("user", JSON.stringify(user))
        } else {
            console.warn("Invalid email or password")
        }
    }

    const handleRegisterPress = () => {
        console.warn("Register pressed")
        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.container}>
            <Image source={pokemon} style={styles.logo} resizeMode="contain"></Image>
            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}/>

            <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword} 
            secureTextEntry/>

            <CustomButton text="Sign in" onPress={handleSignInPress}/>
            <CustomButton text="Register" onPress={handleRegisterPress} type="SECONDARY"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: 150,
        height: 150
    }
})

export default SignIn