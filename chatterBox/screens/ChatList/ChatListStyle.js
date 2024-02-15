import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#192428'
    },
    noChatText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    startChatButton:{
        width: 200,
        height: 50,
        backgroundColor: '#3D6DCC',
        borderRadius: 10,
        marginTop: 20
    },
    newChatButtonText:{
        color: '#192428',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },

    chatListHeader:{
        width: '100%',
        height: 40,
        backgroundColor: '#2D383C',
        position: 'absolute',
        top: 0
    },
    chatListHeaderLogo:{
        width: '100%',
        height: 40,
        backgroundColor: '#2D383C',
        position: 'absolute',
        top: 40,
        alignItems: 'center'
    },

    chatContainer:{
        width: '100%',
        height: 75,
        backgroundColor: '#192428',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,

        borderBottomWidth: 1,
        borderBottomColor: '#2D383C'
    },
    chatName:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    chatLastMessage:{
        color: 'white',
        fontSize: 15,
        marginLeft: 10
    },
    chatPendingMessages:{
        width: 20,
        height: 20,
        backgroundColor: '#0784b5',
        borderRadius: 15,
        position: 'absolute',
        right: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    chatPendingMessagesText:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    plusButton:{
        position: 'absolute',
        right: 10,
        top: 5,
        backgroundColor: '#0784b5',
        borderRadius:20
    }
})