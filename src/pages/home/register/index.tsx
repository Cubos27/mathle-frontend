import { useState } from "react";

import styles from "./register.module.css";

import MainButton from "@/components/main-button";
import SecondaryButton from "@/components/secondary-button";

export default function RegisterContainer({ onElse }) {
  const [ username, setUsername ] = useState( `` );
  const [ birthday, setBirthday ] = useState( `` );
  const [ mail, setMail ] = useState( `` );
  const [ password, setPassword ] = useState( `` );
  const [ passwordR, setPasswordR ] = useState( `` );

  const handleUsername = ( event ) => setUsername( event.target.value );
  const handleBirthday = ( event ) => setBirthday( event.target.value );
  const handleMail = ( event ) => setMail( event.target.value );
  const handlePassword = ( event ) => setPassword( event.target.value );
  const handlePasswordR = ( event ) => setPasswordR( event.target.value );

  const onCancel = ( event ) => {
    event.preventDefault();
    setUsername( `` );
    setBirthday( `` );
    setMail( `` );
    setPassword( `` );
    setPasswordR( `` );

    onElse();
  }
  
  const handleSubmit = ( event ) => {
    event.preventDefault();
    const validatePassword = () => password === passwordR;
  }

  return (
    <form className={ styles[`register`] } onSubmit={ handleSubmit }>
      <h2>Registrate ahora</h2>
      
      <label className={ `__label` } htmlFor="register__username">
        <span className={ `__span --required` } >Nombre de usuario</span>
        <input 
          className={ `__input` } 
          name="register__username" 
          type="text" 
          placeholder="Nombre de usuario" 
          onChange={ handleUsername }
        />
      </label>

      <label className={ `__label` } htmlFor="register__birthday">
        <span className={ `__span` } >Fecha de nacimiento</span>
        <input 
          className={ `__input` } 
          name="register__birthday" 
          type="date" 
          placeholder="Nombre de usuario" 
          onChange={ handleBirthday }
        />
      </label>

      <label className={ `__label` } htmlFor="register__mail">
        <span className={ `__span` } >Correo electrónico</span>
        <input 
          className={ `__input` } 
          name="register__mail" 
          type="mail" 
          placeholder="Correo electrónico" 
          autoComplete="email" 
          onChange={ handleMail }
        />
      </label>
      
      <label className={ `__label` } htmlFor="register__password">
        <span className={ `__span --required` } >Contraseña</span>
        <input 
          className={ `__input` } 
          name="register__password" 
          type="password" 
          placeholder="Contraseña" 
          onChange={ handlePassword }
        />
      </label>

      <label className={ `__label` } htmlFor="register__password-r">
        <span className={ `__span --required` } >Repite contraseña</span>
        <input 
          className={ `__input` } 
          name="register__password-r" 
          type="password" 
          placeholder="Contraseña" 
          onChange={ handlePasswordR }
        />
      </label>

      <section className={ styles[`register__actions`]}>
        <SecondaryButton onClick={ onCancel }>Ya tengo cuenta</SecondaryButton>
        <MainButton>Registrate</MainButton>
      </section>
    </form>
  );
}