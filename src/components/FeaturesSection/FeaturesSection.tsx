import React from 'react';
import styles from './FeaturesSection.module.css';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  title: string | React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

const FeaturesSection: React.FC<Props> = ({ children, title, imageSrc, imageAlt = 'Info Image' }) => {
  return (
    <section className={styles.info}>
      <div className={styles.container}>
        <h1>
          <Link to="/cards" className={styles.titleLink}>
            {title}
          </Link>
        </h1>
        {imageSrc && <img src={imageSrc} alt={imageAlt} className={styles.infoImage} />}
        <div className={styles.features}>{children}</div>
      </div>
    </section>
  );
};

export default FeaturesSection;
