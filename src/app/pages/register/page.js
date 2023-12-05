'use client'
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../components/Navbar";
import { postUser } from '@/app/functions/handlerAcessAPI';
import { useState } from 'react';
import '../../login.css'

export default function register() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })
const {push} = useRouter();

const submitForm = async (event) => {
  event.preventDefault();
  try{
      await postUser(user);
      await new Promise((resolve) => {
          toast.success("Usuário cadastrado com sucesso!!")
          setTimeout(resolve, 5000)
      });
      return push("/pages/dashboard")
  }
  catch{
      return toast.error("Erro!")
  }
};



  return (
<>
<Navbar/>

    <div className="login_box">
      <h1>Register</h1>

      <form action="" onSubmit={submitForm}>
        <div className="input_box">

          <input type="text" required onChange={(event) => { setUser({ ...user, name: event.target.value })}} />
          <label htmlFor="">nome</label>
        </div>

        <div className="input_box">

          <input type="email" required onChange={(event) => { setUser({ ...user, email: event.target.value })}}/>
          <label htmlFor="">E-mail</label>
        </div>

        <div className="input_box">

          <input type="password" name="pass" id="" required onChange={(event) => { setUser({ ...user, password: event.target.value })}} />
          <label htmlFor="">Senha</label>
        </div>

        <input type="submit" value="Cadastrar" />
        
        
        <button className="enter" >
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