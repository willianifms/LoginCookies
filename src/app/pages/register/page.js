'use client'
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../components/Navbar";
import { useState } from 'react';
import '../../login.css'

export default async function register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })
const {push} = useRouter();

const handlerFormSubmit = async (event) =>{
  event.preventDefault();
  try{
    await postUser(user); 
    await new promisse((resolve) => {
      toast.success('Usuário registrado com sucesso')
      setTimeout(resolve, 5000)
    });
    return push("page/dashboard")
  }catch{
    toast.error('Erro ao cadastrar usuário');
  }
  
};



  return (
<>
<Navbar/>

    <div className="login_box">
      <h1>Register</h1>

      <form action="" onSubmit={handlerFormSubmit}>
        <div className="input_box">

          <input type="text" required />
          <label htmlFor="">nome</label>
        </div>

        <div className="input_box">

          <input type="email" required />
          <label htmlFor="">E-mail</label>
        </div>

        <div className="input_box">

          <input type="password" name="pass" id="" required />
          <label htmlFor="">Senha</label>
        </div>

        <button className="enter">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        register
          </button>
      </form>
      

    </div>
    <ToastContainer />
    </>


  );
};