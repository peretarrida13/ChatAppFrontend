export async function getUserByUsername(token, username){
    try{
        const response = await fetch('http://localhost:8080/api/users/getUserByUsername/'+username, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'access-token': token,
            }
        })

        const data = await response.json()
        return data
    }
    catch(e){
        throw e;
    }
}

export async function getAllUsers(token){
    try{
        const response = await fetch('http://localhost:8080/api/users/getAll', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'access-token': token,
            }
        })

        const data = await response.json()
        return data
    }
    catch(e){
        throw e;
    }
}

export async function getLoggedUser(token){
    try{
        const response = await fetch('http://localhost:8080/api/users/getLoggedUser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'access-token': token,
            }
        })
        const data = await response.json()
        return data.username
    }
    catch(e){
        console.log(e)
        throw e;
    }
}