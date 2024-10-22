import { Link, useNavigate } from 'react-router-dom'
import { WEBSITE_ADDRESS } from '../../env';

import mathle_icon from '../../assets/icons/mathle-icon-1.webp'

import styles from './main-header.module.css'
import MainButton from '../main-button';

export default function MainHeader() {
  const navigate = useNavigate();
  const ALT_TEXT = 'Mathle Icon';
  const EXPLORE = `${ WEBSITE_ADDRESS }/explore`;
  const SIGN_UP = `${ WEBSITE_ADDRESS }/sign-up`;

  const handleNavigation = () => {
    navigate( SIGN_UP );
  }

  return (
    <header className={ styles[`main-header`] }>
      <figure className={ styles[`main-header__logo`] } >
        <img 
          src={ mathle_icon } 
          alt={ ALT_TEXT }
        />
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
