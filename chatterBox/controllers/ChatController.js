export async function getChatList(token) {
    try{
        const response = await fetch('http://localhost:8080/api/userChat/getUserChats', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'access-token': token
            }
        })

        const data = await response.json()
        if(response.message === "Empty List!"){
            return []
        } 

        return data
    }
    catch(e){
        throw e;
    }
}

export async function createChat(token, user) {
    try{
        const response = await fetch('http://localhost:8080/api/chat/createChat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access-token': token
            },
            body: JSON.stringify({
                chatName: user,
                newUsername: user
            })
        })

        const data = await response.json()
        return data
    }
    catch(e){
        throw e;
    }
}

export async function readMessage(token, idMessage) {
    try{
        const response = await fetch('http://localhost:8080/api/messages/readMessage/'+idMessage, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access-token': token
            },
        })

        const data = await response.json()
        return data
    }
    catch(e){
        throw e;
    }
}