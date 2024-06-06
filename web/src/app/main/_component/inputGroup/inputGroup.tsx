"use client"

import { ChangeEvent } from 'react';
import styles from './inputGroup.module.css';

interface InputGroupProps {
  id: string;
  placeholder: string;
  value: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputGroup({ id, placeholder, value, label, onChange }: InputGroupProps) {
  return (
    <div className={styles.inputGroup}>
      <input
        id={id}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={id}>{label}</label>
    </div>
  );
}
