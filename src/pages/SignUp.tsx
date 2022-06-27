import React, { useState } from "react"
import { Text, View, StyleSheet } from "react-native"
import CustomButton from "../components/CustomButton"
import CustomInput from "../components/CustomInput"

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSignInPress = () => {
        console.warn("Sign in pressed")
    }

    const handleRegisterPress = () => {
        console.warn("Register pressed")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an account</Text>
            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}/>

            <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword} 
            secureTextEntry/>

            <CustomInput
            placeholder="Confirm password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            secureTextEntry/>
            
            <CustomButton text="Register" onPress={handleRegisterPress} type="SECONDARY"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0075BE'
    }
})

export default SignUp