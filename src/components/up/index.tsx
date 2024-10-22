import useUp from './useUp';

import up from '../../assets/icons/up-arrow.svg'
import styles from './up.module.css';

export default function Up() {
  const { buttonDisplay, scrollUp } = useUp();
  const ALT_TEXT = 'Go up';

  return (
    <button 
      className={ `${ styles[`up`] } ${ buttonDisplay ? styles[`up--displayed`] : styles[`up--hidden`] }`  } 
      onClick={ scrollUp } 
      >
      <img className={ styles[`up__icon`] } src={ up } alt={ ALT_TEXT } />
    </button>
  )
}
