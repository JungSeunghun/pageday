"use client"

import {useState} from 'react';
import Nickname from './_pages/nickname/nickname';
import Info from './_pages/info/info';
import Dream from './_pages/dream/dream';
import Goal from './_pages/goal/goal';
import { useRouter } from 'next/navigation';

export default function Join() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const handleNext = () => {
    const next = step + 1;
    setStep(next);
  }

  const handleSubmit = async () => {
    router.push("/main");
  }

  return (
    <>
      {step === 0 && (
        <Nickname
          handleNext={handleNext}
        />
      )}
      {step === 1 && (
        <Info
          handleNext={handleNext}
        />
      )}
      {step === 2 && (
        <Dream
          handleNext={handleNext}
        />
      )}
      {step === 3 && (
        <Goal
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}