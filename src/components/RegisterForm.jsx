import React, { useState, useEffect } from 'react'
import { Link, useNavigate} from "react-router-dom";

import llamados from '../services/Llamados.jsx';

function RegisterForm() {

    const [nombreUsuario, SetnombreUsuario]=useState()
    const [nombreEmail, SetEmailUsuario]=useState()
    const [passwordUsuario, SetPasswordUsuario]=useState()



const navigate = useNavigate()

function validar() {

  llamados.PostUsers(nombreUsuario, nombreEmail, passwordUsuario);
}

function nombre(evento) {

  SetnombreUsuario(evento.target.value)
}


function password(evento) {

  SetPasswordUsuario(evento.target.value)

}

function email(evento) {

  SetEmailUsuario(evento.target.value)
}


function password(evento) {

  SetPasswordUsuario(evento.target.value)
}

console.log(nombreUsuario, passwordUsuario);


  return (
    <div>
        <label htmlFor="NOMBRE">NOMBRE</label>
        <input value={nombreUsuario} onChange={nombre} type="text"/>
        <br />
        <label htmlFor="email">EMAIL</label>
        <input value={nombreEmail} onChange={email} type="text"/>
        <br />
        <label htmlFor="contraseña">CONTRASEÑA</label>
        <input value={passwordUsuario} onChange={password} type="text"/>
        <br />
        <button onClick={validar}>REGISTER</button>
    </div>
  )
} 

//value, on change, inputs on click al boton para datos y mandar hacer el post, funcion validar

export default RegisterForm