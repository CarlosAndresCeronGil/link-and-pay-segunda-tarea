import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import UserContext from "../context/userContext";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {user.name ? <Stack.Screen name="Home" component={Home} /> : (
                        <>
                            <Stack.Screen name="SignIn" component={SignIn} />
                            <Stack.Screen name="SignUp" component={SignUp} />
                        </>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </UserContext.Provider>

    );
}

export default Navigation;