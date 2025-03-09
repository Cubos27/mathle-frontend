import { useState } from 'react';

import styles from './home.module.css';
import RegisterContainer from './register';
import LoginContainer from './login';

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
