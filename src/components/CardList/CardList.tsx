import React, { useState } from 'react';
import Card from '../Card/Card';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import styles from './CardList.module.css';
import reactImg from '../../assets/img/react.png';
import pythonImg from '../../assets/img/python.png';
import tsImg from '../../assets/img/typescript.png';

interface Course {
  id: number;
  author: string;
  title: string;
  description: string;
  imageSrc: string;
}

const baseCourses: Course[] = [
  {
    id: 1,
    author: 'React Team',
    title: 'React',
    description: 'Научитесь создавать интерфейсы с помощью одного из самых популярных фреймворков — React.',
    imageSrc: reactImg,
  },
  {
    id: 2,
    author: 'Python Core',
    title: 'Python',
    description: 'Разработайте первую программу и поймите основы алгоритмов на Python.',
    imageSrc: pythonImg,
  },
  {
    id: 3,
    author: 'TypeScript Team',
    title: 'TypeScript',
    description: 'Освойте типизацию JavaScript и пишите надёжный код с TypeScript.',
    imageSrc: tsImg,
  },
];

interface CardListProps {
  limit?: number;
  showHeaderLink?: boolean;
}

const CardList: React.FC<CardListProps> = ({ limit = 3, showHeaderLink = false }) => {
  const extendedCourses = Array.from({ length: limit }, (_, i) => {
    const base = baseCourses[i % baseCourses.length];
    return {
      ...base,
      id: i + 1,
    };
  });

  const initialCourse = extendedCourses[0];
  const [selectedDescription, setSelectedDescription] = useState(initialCourse.description);
  const [selectedImage, setSelectedImage] = useState(initialCourse.imageSrc);

  const handleCardClick = (description: string, imageSrc: string) => {
    setSelectedDescription(description);
    setSelectedImage(imageSrc);
  };

  return (
    <FeaturesSection
      title={
        showHeaderLink ? (
          <a href="/cards" style={{ color: 'inherit', textDecoration: 'none' }}>
            Курсы для разработчиков
          </a>
        ) : (
          selectedDescription
        )
      }
      imageSrc={selectedImage}
      imageAlt="Course illustration"
    >
      <div className={styles.cardsContainer}>
        {extendedCourses.map(({ id, author, title, description, imageSrc }) => (
          <Card
            key={id}
            title={`Курс: ${title}`}
            description={`${description}\nАвтор: ${author}`}
            onClick={() => handleCardClick(description, imageSrc)}
          />
        ))}
      </div>
    </FeaturesSection>
  );
};

export default CardList;
