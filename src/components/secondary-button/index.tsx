import styles from './sec-button.module.css';

interface SecButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function SecondaryButton({ children, onClick } : SecButtonProps) {
  return (
    <button className={ styles[`sec-button`] } onClick={ onClick }>{ children }</button>
  )
}