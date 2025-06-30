import React from 'react';
import styles from './CtaSection.module.css';

const CtaSection: React.FC = () => {
  return (
    <section className={styles.cta}>
      <h2>Присоединяйтесь к нам сегодня</h2>
      <p>Создайте аккаунт и начните обучение с бесплатного курса.</p>
      <button className={styles.ctaButton}>Зарегистрироваться</button>
    </section>
  );
};

export default CtaSection;
