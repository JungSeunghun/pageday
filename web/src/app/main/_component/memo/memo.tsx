"use client"

import 'react-quill/dist/quill.snow.css';
import styles from './memo.module.css';
import { useState } from 'react';
import QuillEditor from '@/app/_components/quill/quillEditor';

export default function Memo() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('api/memo', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      setTitle('');
      setContent('');
      alert('Article saved successfully!');
    } catch (error) {
      console.error('Error saving article:', error);
      alert('Error saving article');
    }
  }

  return (
    <section className={styles.memo}>
      <form className={styles.memoForm} onSubmit={handleSubmit}>
        <div className={styles.memoSection}>
          <input
            className={styles.memoInput}
            type="text"
            placeholder='제목을 입력하세요.'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <QuillEditor 
            value={content} 
            onChange={setContent} 
            placeholder='내용을 입력하세요.'
          />
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.memoButton} type="submit">저장</button>
        </div>
      </form>
    </section>
  );
};