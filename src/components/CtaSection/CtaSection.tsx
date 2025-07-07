import React from 'react';
import styles from './CtaSection.module.css';
import ctaImg from '../../assets/img/image3.png';

const CtaSection: React.FC = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>Создайте свой профиль<br />и начните обучение</h1>
          <button className={styles.ctaButton}>Начать сейчас</button>
        </div>
        <img src={ctaImg} alt="Онлайн-обучение" className={styles.ctaImage} />
      </div>
    </section>
  );
};

export default CtaSection;
