'use server'

const url = "https://aula-17-10.vercel.app";


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
           


const getUsers = (user) => {


}

export { getUsers, getUserAuthenticated };