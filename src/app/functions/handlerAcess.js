import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {

    const userAuth = await getUserAuthenticated(user); // Chama a função getUserAuthenticated e espera por sua resolução
    
    const isTokenValidate = await validateToken(userAuth.token);// Chama a função validateToken e armazena o resultado

    if (isTokenValidate) {  // Verifica se o token é válido
        Cookies.set('token', userAuth.token, { expires: 1 });   // Define um cookie com o valor do token e uma validade de 1 dia
        localStorage.setItem('name', userAuth.name);   // Armazene o nome do usuário na localStorage
    }
    
    return userAuth;
}
export default handlerAcessUser;