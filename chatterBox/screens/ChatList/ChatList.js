import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import {styles} from './ChatListStyle';
import { useState, useEffect, useRef } from "react";
import { AntDesign } from 'react-native-vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getChatList } from "../../controllers/ChatController";
import { useIsFocused } from "@react-navigation/native";
import { getLoggedUser } from "../../controllers/UserController";
import { io } from "socket.io-client";

export default function ChatList({ navigation }) {
    const [chatList, setChatList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [arrivalMsg, setArrivalMsg] = useState(null);
    const focus = useIsFocused()
    const socket = useRef();


    const [user, setUser] = useState(null)

    const initialChatList = async () => {
        const token = await AsyncStorage.getItem('chatterToken')
        if(token){
            try{
                const newChatList = await getChatList(token)
                if(newChatList && newChatList.status === 500){
                    if(newChatList && newChatList.message === "Empty List!"){
                        setChatList([])
                        return
                    } else{
                        alert("Internal Server Error. Close the app and try again. If the problem persists, contact the support team.")
                        return
                    }
                }

                setChatList(newChatList)

                const username = await getLoggedUser(token)
                setUser(username)

                setLoading(false)
            } catch(e){
                alert(e)
            }
        }  else{
            navigation.navigate('SignIn')
        }
    }

    useEffect(() => {
        initialChatList()
        socket.current = io("ws://localhost:3000")
        socket.current.on("chat message", (data) => {
            setArrivalMsg(data.text)
        })
    }, [focus]);


    useEffect(()=>{
        initialChatList()
    }, [arrivalMsg])

    if(loading){
        return(
            <View style={styles.container}>
                <Text style={{fontWeight:'bold', fontSize:18, color:'white'}}>Loading...</Text>
            </View>
        )
    }

    const move2newChat = ()=>{
        navigation.navigate('NewChat')
    }

    if(chatList === null || chatList === undefined ||chatList.length === 0){
        return(
            <View style={styles.container}>
                <Text style={styles.noChatText}>No Chats Aviable. Let's Start a chat!</Text>
                <TouchableOpacity
                    style={styles.startChatButton}
                    onPress={move2newChat}
                >
                    <Text style={styles.newChatButtonText}>
                        Start New Chat
                    </Text>
                </TouchableOpacity> 
            </View>
        )
    }

    const move2Chat = (chat) =>{
        navigation.navigate({name: 'Chat', params:{
            idChat: chat.id
        }})
    }

    return(
        <View style={styles.container}>
            <View style={styles.chatListHeader}/>
            <View style={styles.chatListHeaderLogo}>
                <Image
                    source={require('../../Images/logoTransparent.png')}
                    style={{width: 40, height: 40, marginBottom: 5}}                       
                />
                <TouchableOpacity style={styles.plusButton}>
                    <AntDesign 
                        name="plus" 
                        size={30} 
                        color='#2D383C' 
                        onPress={move2newChat}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={{width:'100%', marginTop:80}}>
                {
                    chatList.map((chat) => {
                        return(
                            <TouchableOpacity onPress={()=> move2Chat(chat)} style={styles.chatContainer} key={chat.id}>
                                <AntDesign
                                    name="user"
                                    size={40}
                                    style={{
                                        width: 50, 
                                        height: 50, 
                                        color:'#0784b5',
                                    }}
                                />
                                <View>
                                    <Text style={styles.chatName}>{chat.chatName}</Text>
                                    <Text style={styles.chatLastMessage}>{chat.lastMessage.text.length <= 20 ? chat.lastMessage.text :  (chat.lastMessage.text.substring(0,20)+'...')}</Text>
                                </View>
                                {(!chat.lastMessage.read && chat.lastMessage.username !== user) && 
                                    <TouchableOpacity style={styles.chatPendingMessages}>
                                        <Text style={styles.chatPendingMessagesText}>{chat.lastMessage.read}</Text>
                                    </TouchableOpacity>
                                }
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}