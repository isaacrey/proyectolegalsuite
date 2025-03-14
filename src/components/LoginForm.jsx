import React, { useState, useEffect} from 'react'

import { Link, useNavigate } from "react-router-dom";

import Llamados from '../services/Llamados.jsx';

function LoginForm() {

    const [nombreUsuario,SetNombreUsuario]=useState()
    const [nombreEmail,SetEmailUsuario]=useState()
    const [passwordUsuario,SetPasswordUsuario]=useState()
    const [usuarios,SetUsuarios]=useState()



const navigate = useNavigate()

    useEffect(() => {

        async function fetchDataUsers() {

            const datos = await llamados.GetUsers()

            SetUsuarios(datos)
    };

    fetchDataUsers();

}, []);

function email(evento) {

    SetEmailUsuario(evento.target.value)
}

function password(evento) {

    SetPasswordUsuario(evento.target.value)
}


function validar() {

    console.log(nombreEmail,passwordUsuario);
    console.log(usuarios);

const encontrado = usuarios.filter(usuarios => usuarios.email===nombreEmail && usuarios.password===passwordUsuario)

    if (encontrado.length === 0) {
        console.log("Usuario o contraseña incorrectos");

    }else{

        navigate('/List')




    }
}


  return (
    <div>
    
        <label htmlFor="email">EMAIL</label>
        <input value={nombreEmail} onChange={email} type="text"/>
        <br />
        <label htmlFor="contraseña">CONTRASEÑA</label>
        <input value={passwordUsuario} onChange={password}type="text" />
        <br />
        <button onClick={validar}>INICIAR</button>
    </div>
  )};

  //<input value={nombreUsuario} onChange={nombre} type="text"/>

export default LoginForm