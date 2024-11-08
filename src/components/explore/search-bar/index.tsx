import styles from './search-bar.module.css';
import MainButton from '../../main-button';

interface ISearchBarProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
}

export default function SearchBar({ onSubmit, onChange, onClear, value } : ISearchBarProps) {
  const INPUT_PLACEHOLDER = 'We are learning today...';

  return (
    <form className={ styles[`search-bar`] } onSubmit={ onSubmit }>
      
      <input 
        className={ styles[`search-bar__input`] } 
        name="search-bar__input" 
        type="search" 
        placeholder={ INPUT_PLACEHOLDER } 
        onChange={ onChange }
        required
        value={ value }
      />
      
      <MainButton>Search</MainButton>

      <MainButton onClick={ onClear } >Clear</MainButton>

    </form>
  )
}
