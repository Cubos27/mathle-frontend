import { Link, useNavigate } from 'react-router-dom'

import mathle_icon from '@assets/icons/mathle-icon-1.webp'

import styles from './main-header.module.css'
import MainButton from '../main-button';

export default function MainHeader() {
  const navigate = useNavigate();
  const ALT_TEXT = 'Mathle Icon';
  const EXPLORE = `/explore`;
  const SIGN_UP = `/sign-up`;
  const LOCAL_HOME = `/`;

  const handleNavigation = () => {
    navigate( SIGN_UP );
  }

  return (
    <header className={ styles[`main-header`] }>
      <figure className={ styles[`main-header__logo`] } >
        <Link to={ LOCAL_HOME }>
          <img 
            src={ mathle_icon } 
            alt={ ALT_TEXT }
          />
        </Link>
      </figure>

      <section className={ styles[`main-header__section`] }>
        <nav className={ styles[`main-header__nav`] }>
          <ul>
            <li>
              <Link to={ EXPLORE }>Explore</Link>
            </li>
          </ul>
        </nav>

        <MainButton onClick={ handleNavigation }>Sign up</MainButton>
      </section>
    </header>
  )
}
