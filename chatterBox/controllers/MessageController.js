export async function getMessagesFromChat(token, chatId){
    try{
        const response = await fetch('http://localhost:8080/api/messages/getMessagesByChat/'+chatId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'access-token': token,
            }
        })

        const data = await response.json()
        return data;
    } catch(e){
        throw e;
    }
}

export async function createMessage(token, chatId, message){
    try{
        const response = await fetch('http://localhost:8080/api/messages/createMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access-token': token,
            },
            body: JSON.stringify({
                messageText: message,
                chatId: chatId,
            })
        })

        const data = await response.json()
        return data;
    } catch(e){
        throw e;
    }
}