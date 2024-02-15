import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import {styles} from './NewChatStyle';
import { useState } from "react";
import { AntDesign } from 'react-native-vector-icons';
import { createChat } from "../../controllers/ChatController";
import { getAllUsers, getUserByUsername } from "../../controllers/UserController";
import AsyncStorage from "@react-native-async-storage/async-storage";
const chats = [{
    name: 'John Doe',
},
{
    name: 'Jane Doe',
},
{
    name: 'John Doe',
},
{
    name: 'Jane Doe',
},
{
    name: 'John Doe',
},
{
    name: 'Jane Doe',
},
{
    name: 'John Doe',
},
{
    name: 'Jane Doe',
},
{
    name: 'John Doe',
},
{
    name: 'Jane Doe',
},
{
    name: 'John Doe',
},
{
    name: 'Jane Doe',
},
{
    name: 'John Doe',
},
{
    name: 'Jane Doe',
},
{
    name: 'Jane Doe',
},
{
    name: 'John Doe',
},
{
    name: 'Jane Doe',
},
{
    name: 'John Doe',
},
{
    name: 'Jane Doe',
},
]

export default function NewChat({ navigation }){
    const [username, setUsername] = useState(null);
    const [users, setUsers] = useState([])

    const createChatFunc = async (user) =>{
        try{
            const token = await AsyncStorage.getItem('chatterToken')
            const chatid = await createChat(token, user)
        
            navigation.navigate('Chat', {
                idChat: chatid
            })
        } catch(e){
            alert("Error creating chat")
        }
    }

    const searchUser = async (text) =>{
        setUsername(text)
        try{
            const token = await AsyncStorage.getItem('chatterToken')
            if(text === null || text === undefined || text.length === 0){
                const userList = await getAllUsers(token)
                setUsers(userList)
                return;
            }

            const usersList = await getUserByUsername(token, text)
            setUsers(usersList)
        } catch(e){
            alert("Error searching user. Please try again.")
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <AntDesign
                    color="white"
                    size={30}
                    name="arrowleft"
                    style={{position: 'absolute', top: 12, left: 10, zIndex: 1}}
                    onPress={() => navigation.goBack( )}
                />
                <AntDesign 
                    name="search1" 
                    size={20} 
                    color="white" 
                    style={{position: 'absolute', top: 15, left: 60, zIndex: 1}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Search Username"
                    placeholderTextColor="gray"
                    onChangeText={(text) => searchUser(text)}
                    autoCapitalize="none"
                >
                </TextInput>
            </View>
            {   username === null || username.length === 0 ?
                    <Image
                        source={require('../../Images/logoTransparent.png')}
                        style={styles.image}
                    /> :
                    <View style={styles.usernameScrollList}>
                        <ScrollView>
                            {
                                users !== null && users !== undefined && users.length !== 0 &&
                                users.map((chat, index) =>{
                                    return(
                                        <TouchableOpacity onPress={() => createChatFunc(chat)} key={index} style={styles.chatContainer}>
                                            <Image
                                                source={require('../../Images/avatar.png')}
                                                style={{width: 50, height: 50, borderRadius: 25}}/>
                                            <Text style={styles.chatName}>{chat}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
}
        </View>
    )
}