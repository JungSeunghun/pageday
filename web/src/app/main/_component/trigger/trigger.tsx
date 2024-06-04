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
        const response = await fetch('/api/trigger', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          if(response.status === 200) {
            const data = await response.json();
            setText(data.contents);
            setInputValue(data.contents);
          }
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
      const response = await fetch('/api/trigger/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contents: inputValue })
      });
      if (!response.ok) {
        console.error('Error saving trigger:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving trigger:', error);
    }
  };

  const handleCancelClick = () => {
    setText(text);
    setIsEditing(false);
  }

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
          <button className={styles.button} onClick={handleCancelClick}>취소</button>
          <button className={styles.button} onClick={handleSaveClick}>완료</button>
        </>
      )}
    </section>
  );
};

export default Trigger;