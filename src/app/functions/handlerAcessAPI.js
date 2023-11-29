'use server'

const url = "https://aula-17-10-henna.vercel.app";


const getUsers = async (user) => {
try{
    const responseApi = await fetch(url +"/users",{cache:"no-cache"},{
        next: {revalidate: 10}
    })
    listaUser = responseApi.json()
    return listaUser;
 }catch{
    return null
 }
}


const getUserAuthenticated = async (user) => {
    const responseApi = await fetch(url + "/user/authenticated",
        {
            method: "POST",
            header: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });

    const userAuth = await responseApi.json();
    return userAuth;
}

const postUser = async (user) => {
    try {
        const responseApi = await fetch(url + "/user",
            {
                method: "POST",
                header: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            });

        const userSave = await responseApi.json();
        return userSave;
    }
    catch {
        return null
    }
}

const userUpdate = async (user, id) => {
    try {
        const responseApi = await fetch(url + "/user/" + id ,
            {
                method: "PUT",
                header: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            });

        const userUpdate = await responseApi.json();
        return userUpdate;
    }
    catch {
        return null
    }
}




export { getUsers, getUserAuthenticated, postUser, userUpdate };