import React, { useEffect } from "react";
import { styles } from "./LogoScreenStyle";
import { View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function LogoScreen({ navigation }) {

    const init = async () => {
        const token = await AsyncStorage.getItem('chatterToken')
        if(token){
            navigation.navigate('ChatList')
        } else {
            navigation.navigate('SignIn')
        }
    }

    useEffect(() => {
        setTimeout(() => {
            init()
        }, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <Image 
                source={require('../../Images/logo.png')} 
            />
        </View>
    );
}