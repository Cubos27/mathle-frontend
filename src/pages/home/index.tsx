import { useState, useEffect } from 'react';

import MainButton from '@/components/main-button';
import SecondaryButton from '@/components/secondary-button';

const LoginContainer = ({ onElse }) => {
  const [ username, setUsername ] = useState( `` );
  const [ password, setPassword ] = useState( `` );

  const handleUsername = ( event ) => setUsername( event.target.value );
  const handlePassword = ( event ) => setPassword( event.target.value );

  const onCancel = ( event ) => {
    event.preventDefault();
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

const RegisterContainer = ({ onElse }) => {
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

import styles from './home.module.css';

export default function Home() {
  const [ hasAccount, setHasAccount ] = useState( true );

  const doesntHaveAccount = () => setHasAccount( false );
  const hasAccountNow = () => setHasAccount( true );

  return (
    <>
      <section className={ styles[`home__presentation`] }>
        <h1 className={ styles[`home__title`] }>Mathle</h1>
      </section>

      <section className={ styles[`home__forms`] }>
        {
          hasAccount ? <LoginContainer onElse={ doesntHaveAccount } /> : <RegisterContainer onElse={ hasAccountNow } />
        }
      </section>
    </>
  )
}
