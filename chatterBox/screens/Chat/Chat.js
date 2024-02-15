import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { styles } from './ChatStyle';
import { useEffect, useRef, useState } from 'react';
import { Feather } from 'react-native-vector-icons';
import { getInfoChat } from '../../controllers/UserChatsController';
import { createMessage, getMessagesFromChat } from '../../controllers/MessageController';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { readMessage } from '../../controllers/ChatController';
import { io } from 'socket.io-client';

export default function Chat({ navigation }){
    const [user, setUser] = useState("");
    const [reciever, setReciever] = useState("");
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [arrivalMsg, setArrivalMsg] = useState(null);
    const route = useRoute()
    const chatId = route.params.idChat
    const socket = useRef();
    const scrollViewRef = useRef();


    const sendMessage =  async () => {
        if(message === '') return;
        try{
            const token = await AsyncStorage.getItem('chatterToken');
            const resp = await createMessage(token, chatId, message);
            if(resp === 200){
                socket.current.emit("chat message",{
                    text: message
                })
                setMessage('');
            }
            else alert('Error sending message. Try again.');
        } catch(e){
            alert(e)
        }

    }

    const getMessages = async () => {
        try{
            const token = await AsyncStorage.getItem("chatterToken")
            const res = await getMessagesFromChat(token, chatId)
            setMessages(res);
        } catch(e){
            alert(e)
        }
    }

    const getChatInfo = async () => {
        try{
            const token = await AsyncStorage.getItem('chatterToken')
            const res = await getInfoChat(token, chatId)
            setUser(res.you);
            setReciever(res.other);
        } catch(e){
            alert(e)
        }
    }

    useEffect(()=>{
        getMessages();
        getChatInfo();
        socket.current = io("ws://localhost:3000")
        socket.current.on("chat message", (data) => {
            setArrivalMsg(data.text)
        })
    },[])

    useEffect(()=>{
        getMessages();
    }, [arrivalMsg])

    const markAsRead = async (message) => {
        if(message.username === user) return;
        try{
            const token = await AsyncStorage.getItem('chatterToken');
            const id = message.id;
            const res = await readMessage(token, id);
            socket.current.emit("chat message",{
                text: "message read"
            })
        } catch(e){
            alert("Something went wrong. Try again.")
        }
    }

    const chatMessageComponent = (message, index) => {
        if(message.username === user){
            return(
                <View key={index} style={{width:'100%', height:'auto', alignItems:'flex-end'}}>
                    <View style={styles.sendBubble}>
                        <Text style={styles.sendText}>{message.text}</Text>
                    </View>
                    {
                       message.read && 
                        <Text style={styles.readLabel}>Read</Text>
                    }
                    <View style={{marginBottom:10}} />
                </View>
            )
        } else{
            if(!message.read) markAsRead(message)
            return(
                <View key={index} style={styles.recieveBubble}>
                    <Text style={styles.recieveText}>{message.text}</Text>
                </View>
            )
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.nameBar}>
                <Feather
                    name='arrow-left'
                    size={30}
                    color='white'
                    style={{position: 'absolute', left: 20, top: 45}}
                    onPress={()=> navigation.navigate("ChatList")}
                />
                <Image 
                    source={require('../../Images/avatar.png')}
                    style={styles.userImage}
                />
                <Text style={styles.topName}>{reciever}</Text>
            </View>
            <View style={styles.messagesContainer}>
                <FlatList
                    ref={scrollViewRef}
                    data={messages}
                    renderItem={({item, index}) => chatMessageComponent(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                />
                
            </View>
            <View style={styles.textInputContainer}>
                <TextInput value={message} style={styles.messageInput} onChangeText={(text) => setMessage(text)}/>
                <TouchableOpacity style={styles.sendButton} onPress={()=> sendMessage()}>
                    <Feather name='send' size={25} color='white'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
