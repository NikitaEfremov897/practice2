import React from 'react';
import styles from './QuoteSection.module.css';

const QuoteSection: React.FC = () => {
  return (
    <section className={styles.quote}>
      <blockquote>
        “Программы должны быть написаны для того, чтобы их читали люди, и только потом — для того, чтобы их выполняли машины.”  
        <span>— Гарольд Абельсон</span>
      </blockquote>
    </section>
  );
};

export default QuoteSection;
