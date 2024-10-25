import useLearnParams from '../../../hooks/useLearnParams'
import { TLink } from '../../../logic/types/TLink';

import { Link } from 'react-router-dom'
import styles from './navigation.module.css'
import { rightArrowIcon } from '../../../assets';

export default function Navigation() {
  const { links } = useLearnParams();
  const prePath = ( relativePath : string ) => `/learn/${relativePath}`;
  return (
    <nav className={ styles[`navigation`] }>
      <ul className={ styles[`navigation__links`] }>
        { links.map( (link : TLink, index : number) => 
          (<li className={ styles[`navigation__link`] } > 
            <img className={ styles[`navigation__link--marker`] } src={ rightArrowIcon } alt='right arrow icon' />
            <Link to={ prePath( link.link ) } key={ index }>{ link.toDisplay }</Link>
          </li> )
        ) }
      </ul>
    </nav>
  )
}
