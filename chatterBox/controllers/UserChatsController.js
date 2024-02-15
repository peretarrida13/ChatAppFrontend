export async function getInfoChat(token, chatId) {
    try{
        const response = await fetch('http://localhost:8080/api/userChat/getChatInfo/'+chatId, {
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