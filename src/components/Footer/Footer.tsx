import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footAll}>
        <div className={styles.footerRight}>
          <p className={styles.footerText}>Курсы для разработчиков</p>
          <p className={styles.footerText}>Мы поддерживаем группу разнообразных молодых креативных специалистов.</p>
          <p className={styles.footerText}>©2025 Курсы для раазработчиков.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;