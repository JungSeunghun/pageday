"use client"

import { useState } from 'react';
import Search from './_pages/search/search';
import Editor from './_pages/editor/editor';

export default function Write() {
  const [step, setStep] = useState(0);
 

  const handleNext = () => {
    setStep(1);
  }

  const handleBack = () => {
    setStep(0);
  }
  
  return (
    <>
      {step == 0 && <Search handleNext={handleNext} />}
      {step == 1 && <Editor handleBack={handleBack}/>}
    </>
  );
};