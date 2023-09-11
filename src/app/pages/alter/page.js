'use client'
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default async function alter() {

  const submitEvent = (e) =>{
    e.preventDefault();
    toast.success('Usuário alterado com sucesso')
  }
   return (
       <>
           <h1>alter</h1>
          
           <form action="" onSubmit={submitEvent}>
        <label htmlFor="">nome</label>
        <input type="text" />

        <label htmlFor="">E-mail</label>
        <input type="email" />

        <label htmlFor="">Senha</label>
        <input type="password" name="pass" id="" />

        <input type="submit" value="alter" />
      </form>
      <ToastContainer/>
           </>
    
       
   );
};