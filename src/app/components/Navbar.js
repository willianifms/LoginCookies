'use client'
import { validateToken } from '../functions/validateToken';
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import "./navbar.css"


export default function Navbar() {

  const { push, refresh } = useRouter();
  const handlerRemoveCookies = async (e) => {
    e.preventDefault();
    Cookies.remove('token');
    localStorage.removeItem('name');
    refresh('/')

  }
  return (
    <header>
      <div className="container">
        <nav id='navbar' role='navigation'>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/pages/alter'>Alterar</a></li>
            <li><a href='/pages/register'>Cadastrar</a></li>
            <li><button onClick={handlerRemoveCookies}>Sair</button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}