import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#192428'
    },

    logo:{
        marginBottom: 20
    },
    
    logoImage:{
        width: 200,
        height: 200
    },

    inputContainer:{
        width: '80%',
        backgroundColor: '#2D383C',
        padding: 20,
        borderRadius: 10,
    },

    SignInTitle:{
        color: '#39ACE7',
        fontSize: 32,
        fontWeight: 'bold',
    },

    inputStyle:{
        width: '100%',

        borderColor:'#39ACE7',
        borderWidth: 3,
        borderRadius: 10,
        
        color: '#39ACE7',
        fontSize: 20,

        padding: 10,
        marginTop: 10
    },

    label:{
        color: '#39ACE7',
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },

    SignInButton:{
        marginTop: 20,

        backgroundColor: '#39ACE7',
        color: '#192428',
        padding: 10,
        
        borderRadius: 10,

        alignItems: 'center',
    },

    signInButtonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2D383C'
    }
})