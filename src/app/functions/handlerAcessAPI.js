'use server'

const users = [
    { name: 'Kau', email: 'kau@email.com', password: 'smilinguido', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' },
    { name: 'Will', email: 'will@email.com', password: 'euamoavitoria', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' },
    { name: 'Mari', email: 'mari@email.com', password: 'lalala', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' },
    { name: 'Lucca', email: 'lucca@email.com', password: 'bomba', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' }
];
const getUserAuthenticated = (user) => {//recebe um objeto 'user' como entrada e verifica se há um usuário com o mesmo email e senha na matriz 'users'. Se encontrar, retorna esse usuário.
    let userAuth = {}
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === user.email && users[i].password === user.password) {
            userAuth = users[i];
        }
    }

    return userAuth;
}

const getUsers = (user) => {

    return users;
}

export { getUsers, getUserAuthenticated };