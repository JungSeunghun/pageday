"use client"

import React, { useState, useEffect, ChangeEvent } from 'react';
import styles from './trigger.module.css';

const Trigger: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchTrigger = async () => {
      try {
        const token = localStorage.getItem('jwt'); // Assume JWT is stored in local storage
        const response = await fetch('/api/getTrigger', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setText(data.trigger);
          setInputValue(data.trigger);
        } else {
          console.error('Error fetching trigger:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching trigger:', error);
      }
    };

    fetchTrigger();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSaveClick = async () => {
    setText(inputValue);
    setIsEditing(false);

    try {
      const token = localStorage.getItem('jwt'); // Assume JWT is stored in local storage
      const response = await fetch('/api/saveTrigger', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ trigger: inputValue })
      });
      if (!response.ok) {
        console.error('Error saving trigger:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving trigger:', error);
    }
  };

  return (
    <section className={styles.trigger}>
      {!isEditing ? (
        <>
          <span className={styles.label}>독서 전 트리거 :</span>
          <span className={styles.text}>{text}</span>
          <button className={styles.button} onClick={handleEditClick}>수정</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className={styles.input}
          />
          <button className={styles.button} onClick={handleSaveClick}>수정 완료</button>
        </>
      )}
    </section>
  );
};

export default Trigger;