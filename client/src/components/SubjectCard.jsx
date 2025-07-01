import React from 'react';
// import styles from '../../styles/PracticeSession.module.css';

const SubjectCard = ({ subject, isSelected, onSelect }) => {
  return (
    <div 
      className={`${styles.subjectCard} ${isSelected ? styles.selected : ''}`}
      onClick={onSelect}
    >
      <div className={styles.subjectIcon}>
        <img src={subject.icon} alt={subject.name} />
      </div>
      <div className={styles.subjectInfo}>
        <h4>{subject.name}</h4>
        <p>{subject.questionsAvailable} questions available</p>
      </div>
    </div>
  );
};

export default SubjectCard;