'use client'
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../../components/Navbar";
import '../login.css';
import { updateUser } from '@/app/functions/handlerAcessAPI';
import { useRouter } from 'next/navigation';

export default  function alter({params}) {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
});

  const { push } = useRouter();

  const submitEvent =  async (e) => {
    e.preventDefault();
    try{
        await updateUser(user, params.id);
        await new Promise((resolve) => {
            toast.success("Usuário alterado com sucesso!!")
            setTimeout(resolve, 5000)
        });
        return push("/pages/dashboard")
    }
    
    catch{
        return toast.error("Erro!")
    }
  }
  return (
<>
<Navbar/>

    <div className="login_box">
      <h1>alter</h1>

      <form action="" onSubmit={submitEvent}>
        <div className="input_box">

          <input type="text" required  onChange={(e) => { setUser({ ...user, name: e.target.value })}} />
          <label htmlFor="">nome</label>
        </div>

        <div className="input_box">

          <input type="email" required  onChange={(e) => { setUser({ ...user, email: e.target.value })}} />
          <label htmlFor="">E-mail</label>
        </div>

        <div className="input_box">

          <input type="password" name="pass" id="" required  onChange={(e) => { setUser({ ...user, password: e.target.value })}}/>
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
      

    </div>
    <ToastContainer />
    </>


  );
};