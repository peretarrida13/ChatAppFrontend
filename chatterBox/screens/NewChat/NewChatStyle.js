import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#192428'
    },

    input:{
        width: '75%',
        height: 50,
        backgroundColor: '#2D383C',
        borderRadius: 10,
        color: 'white',
        fontSize: 18,
        padding: 10,
        paddingLeft: 40,
    },
    inputContainer:{
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        top: 60,
    },

    image:{
        zIndex: -1,
        position: 'absolute',
        top: 200,
        display: 'flex',
    },

    usernameScrollList:{
        width: '100%',
        height: '85%',
        position: 'absolute',
        top: 120,
    },
    chatContainer:{
        width: '100%',
        height: 75,
        backgroundColor: '#192428',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
})