import React from 'react';
import styles from './ConnectSection.module.css';
import connectImg from '../../assets/img/image2.png';

const ConnectSection: React.FC = () => {
  return (
    <section className={styles.connect}>
      <div className={styles.container}>
        <img src={connectImg} alt="Общение с наставником" className={styles.connectImage} />
        <div className={styles.connectText}>
          <h1>Общайтесь с наставниками</h1>
          <p>
            Получайте поддержку от опытных разработчиков, задавайте вопросы и развивайтесь быстрее с помощью живого общения.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
