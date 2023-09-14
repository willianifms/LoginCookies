'use client'
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../../login.css'

export default async function alter() {

  const submitEvent = (e) => {
    e.preventDefault();
    toast.success('Usuário alterado com sucesso')
  }
  return (
    <div className="login_box">
      <h1>alter</h1>

      <form action="" onSubmit={submitEvent}>
        <div className="input_box">

          <input type="text" />
          <label htmlFor="">nome</label>
        </div>

        <div className="input_box">

          <input type="email" />
          <label htmlFor="">E-mail</label>
        </div>

        <div className="input_box">

          <input type="password" name="pass" id="" />
          <label htmlFor="">Senha</label>
        </div>

        <button className="enter">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        alter
          </button>
      </form>
      
      <ToastContainer />
    </div>


  );
};