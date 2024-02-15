import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#192428'
    },

    nameBar:{
        width: '100%',
        height: 90,

        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',

        padding: 10,
        
        backgroundColor: '#2C3E50',

        position: 'absolute',
        top: 0,
        zIndex: 1
    },

    userImage:{
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10
    },
    topName:{
        color: 'white',
        fontSize: 20,
        marginBottom: 10
    },

    textInputContainer:{
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'right',
        alignItems: 'flex-end',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#192428',
    },

    messageInput:{
        width: '85%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 10,
        marginBottom: 10,
        marginLeft: 10
    },
    sendButton:{
        width: 50,
        height: 50,
        backgroundColor: '#2C3E50',
        borderRadius: 25,
        marginBottom: 10,
        marginRight: 10,

        justifyContent: 'center',
        alignItems: 'center'
    },

    messagesContainer:{
        height: '80%',
        width: '100%',
        backgroundColor: '#192428',
        marginTop: 25,
    },

    sendBubble:{
        width:'auto',
        maxWidth: '80%',
        height: 'auto',

        backgroundColor: '#39ACE7',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        padding: 10,
        
        marginRight: 10,
        
        alignSelf: 'flex-end'
    },

    sendText:{
        color: 'white',
        fontSize: 20
    },

    recieveBubble:{
        width:'auto',
        maxWidth: '80%',
        height: 'auto',

        alignSelf: 'flex-start',

        backgroundColor: '#045C7E',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
        padding: 10,
        marginBottom: 10,
        marginLeft: 10,
    },

    recieveText:{
        color: 'white',
        fontSize: 20
    },

    readLabel:{
        alignSelf: 'flex-end',
        color: 'gray',
        marginRight: 10,
    }
});