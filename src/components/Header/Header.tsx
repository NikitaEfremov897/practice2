import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

interface HeaderProps {
  onAuthClick?: (type: 'signup' | 'login') => void;
}

const Header: React.FC<HeaderProps> = ({ onAuthClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <h4>Курсы для разработчиков</h4>
          </Link>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.forRecruiters}>Для работодателей</a>
          <button
            type="button"
            className={`${styles.signUp} ${styles.button}`}
            onClick={() => onAuthClick?.('signup')}
          >
            Регистрация
          </button>
          <button
            type="button"
            className={`${styles.logIn} ${styles.button}`}
            onClick={() => onAuthClick?.('login')}
          >
            Вход
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
