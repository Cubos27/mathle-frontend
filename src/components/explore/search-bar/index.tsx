import useSearchBar from './useSearchBar';

import styles from './search-bar.module.css';
import MainButton from '../../main-button';

export default function SearchBar() {
  const { formRef, onSearchChange, handleSubmit, onClearForm } = useSearchBar();
  const INPUT_PLACEHOLDER = 'Search what we are learning today...';

  return (
    <form className={ styles[`search-bar`] } ref={ formRef }>
      
      <input 
        className={ styles[`search-bar__input`] } 
        name="search-bar__input" 
        type="search" 
        placeholder={ INPUT_PLACEHOLDER } 
        onChange={ onSearchChange }
        required
      />
      
      <MainButton onClick={ handleSubmit }>Search</MainButton>

      <MainButton onClick={ onClearForm } >Clear</MainButton>

    </form>
  )
}
