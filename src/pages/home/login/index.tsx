import { useState } from "react";

import styles from "./login.module.css";

import MainButton from "@/components/main-button";
import SecondaryButton from "@/components/secondary-button";

export default function LoginContainer({ onElse }) {
    const [ username, setUsername ] = useState( `` );
    const [ password, setPassword ] = useState( `` );
  
    const handleUsername = ( event ) => setUsername( event.target.value );
    const handlePassword = ( event ) => setPassword( event.target.value );
  
    const onCancel = ( event ) => {
      event.preventDefault();
      setUsername( `` );
      setPassword( `` );
      
      onElse();
    }
  
    const handleSubmit = ( event ) => {
      event.preventDefault();
      // Here you can add the logic to authenticate
    }
  
    return (
      <form className={ styles[`login`] } onSubmit={ handleSubmit }>
        <h2>Inicia ahora</h2>
        
        <label className={ `__label` } htmlFor="login__username">
          <span className={ `__span`} >Nombre de usuario</span>
          <input 
            className={ `__input` } 
            name="login__username" 
            type="text" 
            placeholder="Nombre de usuario" 
            onChange={ handleUsername }
          />
        </label>
        
        <label className={ `__label` } htmlFor="login__password">
          <span className={ `__span` } >Contraseña</span>
          <input 
            className={ `__input` } 
            name="login__password" 
            type="password" 
            placeholder="Contraseña" 
            onChange={ handlePassword }
          />
        </label>
  
        <section className={ styles[`login__actions`]}>
          <MainButton>Iniciar sesión</MainButton>
          <SecondaryButton onClick={ onCancel }>Registrate ahora</SecondaryButton>
        </section>
      </form>
    );
  }