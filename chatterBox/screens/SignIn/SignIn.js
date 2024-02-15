import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./SignInStyle";
import SignInController from "../../controllers/SignInController";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignIn({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const moveToChatList = async () => {
        try{
            const res = await SignInController(username, password)
            await AsyncStorage.setItem('chatterToken', res.token)
            navigation.navigate('ChatList');
        } catch(e){
           alert(e)
        }
    }

    return (
      <View style={styles.container}>
        <View style={styles.logo}>
            <Image
                style={styles.logoImage}
                source={require('../../Images/logo.png')}
                alt='logo'
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.SignInTitle}>Sign In</Text>

            <Text style={styles.label}>Username</Text>
            <TextInput 
                style={styles.inputStyle} 
                onChangeText={(text) => {setUsername(text)}}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput 
                style={styles.inputStyle} 
                secureTextEntry={true} 
                onChangeText={(text) => {setPassword(text)}}
            />
            <View style={{marginTop: 20}} />
                <TouchableOpacity
                    title="Sign In"
                    style={styles.SignInButton}
                    onPress={moveToChatList}
                >
                    <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>
        </View>
      </View>
    );
}