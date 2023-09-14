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
    <>
      <h1>alter</h1>

      <form action="" onSubmit={submitEvent}>
        <div className="input_box">
        <label htmlFor="">nome</label>
        <input type="text" />
        </div>

        <div className="input_box">
          <label htmlFor="">E-mail</label>
          <input type="email" />
        </div>

        <div className="input_box">
          <label htmlFor="">Senha</label>
          <input type="password" name="pass" id="" />
        </div>

        <input type="submit" value="alter" />
      </form>
      <ToastContainer />
    </>


  );
};