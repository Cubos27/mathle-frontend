import styles from './main-button.module.css';

interface MainButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function MainButton({ children, onClick } : MainButtonProps) {
  return (
    <button className={ styles[`main-button`] } onClick={ onClick }>{ children }</button>
  )
}
