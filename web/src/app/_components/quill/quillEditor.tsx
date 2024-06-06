"use client";

import dynamic from 'next/dynamic';
import { FC, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import styles from './quillEditor.module.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface QuillEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

const QuillEditor: FC<QuillEditorProps> = ({ value, onChange, placeholder }) => {
  useEffect(() => {
    const applyStyles = () => {
      const quillEditorToolbar = document.querySelector('.quill .ql-toolbar') as HTMLElement;
      const quillEditorContainer = document.querySelector('.quill .ql-container') as HTMLElement;
      
      if (quillEditorToolbar) {
        quillEditorToolbar.style.borderTopLeftRadius = '5px';
        quillEditorToolbar.style.borderTopRightRadius = '5px';
      }

      if (quillEditorContainer) {
        quillEditorContainer.style.maxHeight = '300px';
        quillEditorContainer.style.height = '300px';
        quillEditorContainer.style.borderBottomLeftRadius = '5px';
        quillEditorContainer.style.borderBottomRightRadius = '5px';
        quillEditorContainer.style.overflow = 'auto';
      }
    };

    const intervalId = setInterval(() => {
      const quillEditorContainer = document.querySelector('.quill .ql-container') as HTMLElement;
      if (quillEditorContainer) {
        applyStyles();
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      theme="snow"
      modules={{
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'align': [] }],
          [{ 'color': [] }],
        ],
      }}
      className={styles.quillEditor}
      placeholder={placeholder}
    />
  );
};

export default QuillEditor;