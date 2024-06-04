"use client";

import { useState, useEffect } from 'react';
import styles from './goal.module.css';

export default function Goal() {
  const [editing, setEditing] = useState<{ today: boolean, tomorrow: boolean }>({ today: false, tomorrow: false });
  const [todayGoal, setTodayGoal] = useState({ text: "목표를 작성하세요.", completed: false });
  const [tomorrowGoal, setTomorrowGoal] = useState({ text: "목표를 작성하세요.", completed: false });
  const [newTodayGoal, setNewTodayGoal] = useState(todayGoal.text);
  const [newTomorrowGoal, setNewTomorrowGoal] = useState(tomorrowGoal.text);
  const [todayDate, setTodayDate] = useState('');
  const [tomorrowDate, setTomorrowDate] = useState('');

  useEffect(() => {
    const getFormattedDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}.${month}.${day}`;
    };

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    setTodayDate(getFormattedDate(today));
    setTomorrowDate(getFormattedDate(tomorrow));

    const fetchGoals = async () => {
      try {
        const response = await fetch('/api/goals');
        const data = await response.json();
        setTodayGoal(data.today || { text: "목표를 작성하세요.", completed: false });
        setTomorrowGoal(data.tomorrow || { text: "목표를 작성하세요.", completed: false });
        setNewTodayGoal(data.today?.text || "목표를 작성하세요.");
        setNewTomorrowGoal(data.tomorrow?.text || "목표를 작성하세요.");
      } catch (error) {
        console.error("Failed to fetch goals", error);
      }
    };

    fetchGoals();
  }, []);

  const handleEdit = (day: 'today' | 'tomorrow') => {
    setEditing((prev) => ({ ...prev, [day]: true }));
  };

  const handleCancel = (day: 'today' | 'tomorrow') => {
    setEditing((prev) => ({ ...prev, [day]: false }));
    if (day === 'today') {
      setNewTodayGoal(todayGoal.text);
    } else {
      setNewTomorrowGoal(tomorrowGoal.text);
    }
  };

  const handleComplete = (day: 'today' | 'tomorrow') => {
    setEditing((prev) => ({ ...prev, [day]: false }));
    if (day === 'today') {
      setTodayGoal({ ...todayGoal, text: newTodayGoal });
    } else {
      setTomorrowGoal({ ...tomorrowGoal, text: newTomorrowGoal });
    }
  };

  const toggleCompletion = (day: 'today' | 'tomorrow') => {
    if (day === 'today') {
      setTodayGoal((prev) => ({ ...prev, completed: !prev.completed }));
    } else {
      setTomorrowGoal((prev) => ({ ...prev, completed: !prev.completed }));
    }
  };

  return (
    <section className={styles.goals}>
      <div className={styles.goalSection}>
        <h2 className={styles.heading}>오늘 목표</h2>
        {editing.today ? (
          <>
            <input 
              className={styles.input}
              value={newTodayGoal} 
              onChange={(e) => setNewTodayGoal(e.target.value)} 
            />
            <button className={styles.button} onClick={() => handleCancel('today')}>취소</button>
            <button className={styles.button} onClick={() => handleComplete('today')}>완료</button>
          </>
        ) : (
          <>
            <label className={styles.checkLabel}>
              <input
                type="checkbox"
                checked={todayGoal.completed}
                onChange={() => toggleCompletion('today')}
                className={styles.checkbox}
              />
              <span className={styles.customCheckbox}></span>
              <span className={`${styles.goalText} ${todayGoal.completed ? styles.completed : ''}`}>{todayGoal.text}</span>
            </label>
            <p className={styles.date}>{todayDate}</p>
            <button className={styles.button} onClick={() => handleEdit('today')}>수정</button>
          </>
        )}
      </div>

      <div className={styles.goalSection}>
        <h2 className={styles.heading}>내일 목표</h2>
        {editing.tomorrow ? (
          <>
            <input 
              className={styles.input}
              value={newTomorrowGoal} 
              onChange={(e) => setNewTomorrowGoal(e.target.value)} 
            />
            <button className={styles.button} onClick={() => handleCancel('tomorrow')}>취소</button>
            <button className={styles.button} onClick={() => handleComplete('tomorrow')}>완료</button>
          </>
        ) : (
          <>
            <label className={styles.checkLabel}>
              <input
                type="checkbox"
                checked={tomorrowGoal.completed}
                onChange={() => toggleCompletion('tomorrow')}
                className={styles.checkbox}
              />
              <span className={styles.customCheckbox}></span>
              <span className={`${styles.goalText} ${tomorrowGoal.completed ? styles.completed : ''}`}>{tomorrowGoal.text}</span>
            </label>
            <p className={styles.date}>{tomorrowDate}</p>
            <button className={styles.button} onClick={() => handleEdit('tomorrow')}>수정</button>
          </>
        )}
      </div>
    </section>
  );
}