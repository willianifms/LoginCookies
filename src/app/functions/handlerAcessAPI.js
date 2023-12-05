'use server'

const url = "https://aula-17-10-henna.vercel.app"

const getUserAuthenticated = async (user) => {
    const responseOfApi = await fetch(url + "/user/authenticated", 
    {
        method: 'POST',
        headers: {"Content-Type": "Application/json"},
        body: JSON.stringify(user)
    }); 
    const userAuth = await responseOfApi.json();
    return userAuth;
} 

const getUsers = async () => {
    try{
        const responseOfApi = await fetch(url + "/users", {
            next: { revalidate: 10}
        });
        const listUsers = await responseOfApi.json()
        return listUsers;
    }
    catch{
        return null
    }
}

const postUser = async (user) => {
    try{
        const responseOfApi = await fetch(url + "/user", {
            method: 'POST',
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(user)
        });
        const userSave = await responseOfApi.json();
        console.log(userSave)
        return userSave;
    
    }
    catch{
        return null
    }
}

const updateUser = async (user, id) =>{
    try{
        const responseOfApi = await fetch(url + "/user/" + id, {
            method: 'PUT',
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(user)
        });
        const userUpdate = await responseOfApi.json();
        console.log(userUpdate)
        return userUpdate;
    }
    catch{
        return null;
    }
}

const getUser = async (id) => {
    try {
        const responseOfApi = await fetch(`${url}/user/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'Application/json' },
        });
        const user = await responseOfApi.json();
        return user;
    } catch {
        return null;
    }
}
export { getUsers, getUserAuthenticated, postUser, updateUser, getUser};