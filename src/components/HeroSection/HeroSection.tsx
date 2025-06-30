import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Учитесь программировать онлайн</h1>
        <p>Современные технологии, практические задания и поддержка менторов в одной платформе.</p>
        <button className={styles.button}>Начать обучение</button>
      </div>
    </section>
  );
};

export default HeroSection;
