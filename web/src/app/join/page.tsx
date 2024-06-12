"use client"

import {useState} from 'react';
import Nickname from './_pages/nickname/nickname';
import Info from './_pages/info/info';
import Dream from './_pages/dream/dream';
import Goal from './_pages/goal/goal';
import { useRouter } from 'next/navigation';
import Loading from './_pages/loading/loading';

export default function Join() {
  const router = useRouter();
  const [nickname, setNickname] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [job, setJob] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [interest, setInterest] = useState<string>('');
  const [dream, setDream] = useState<string>('');
  const [todayAction, setTodayAction] = useState<string>('');
  const [todayBook, setTodayBook] = useState<string>('');


  const [step, setStep] = useState(0);

  const handleNext = () => {
    const next = step + 1;
    setStep(next);
  }

  const handlePrev = () => {
    if(step == 0) return;
    const prev = step - 1;
    setStep(prev);
  }

  return (
    <>
      {step === 0 && (
        <Nickname
          nickname={nickname}
          setNickname={setNickname}
          handleNext={handleNext}
        />
      )}
      {step === 1 && (
        <Info
          nickname={nickname}
          gender={gender}
          setGender={setGender}
          job={job}
          setJob={setJob}
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
          day={day}
          setDay={setDay}
          interest={interest}
          setInterest={setInterest}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
      {step === 2 && (
        <Dream
          dream={dream}
          setDream={setDream}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
      {step === 3 && (
        <Goal
          nickname={nickname}
          todayAction={todayAction}
          setTodayAction={setTodayAction}
          todayBook={todayBook}
          setTodayBook={setTodayBook}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}
      {step === 4 && (
        <Loading />
      )}
    </>
  );
}