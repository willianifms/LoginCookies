'use client'

import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../../login.css'

export default async function register() {

  const submitEvent = (e) =>{
    e.preventDefault();
    toast.success('Usuário registrado com sucesso')
  }
   return (
       <>
           <h1>register</h1>
          
           <form onSubmit={submitEvent}>
        <label htmlFor="">nome</label>
        <input type="text" />

        <label htmlFor="">E-mail</label>
        <input type="email" />

        <label htmlFor="">Senha</label>
        <input type="password" name="pass" id="" />

        <input type="submit" value="register" />
      </form>
      <ToastContainer/>
         
       </>
       
   );
};