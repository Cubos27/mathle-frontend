import useUp from './useUp';

import styles from './up.module.css';
import { upArrowIcon } from '../../assets';

export default function Up() {
  const { buttonDisplay, scrollUp } = useUp();
  const ALT_TEXT = 'Go up';

  return (
    <button 
      className={ `${ styles[`up`] } ${ buttonDisplay ? styles[`up--displayed`] : styles[`up--hidden`] }`  } 
      onClick={ scrollUp } 
      >
      <img className={ styles[`up__icon`] } src={ upArrowIcon } alt={ ALT_TEXT } />
    </button>
  )
}
