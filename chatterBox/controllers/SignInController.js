

export default async function SignInController(username, password) {
    console.log(username, password)
    try{
        const response = await fetch('http://127.0.0.1:8080/api/users/signIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username, 
                password: password 
            })
        });

        const data = await response.json();
        return data
    
    } catch(e){
        console.log(e)
        throw e
    }
}