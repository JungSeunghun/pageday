"use client"

import { useState } from 'react';
import Controls from './_component/controls/controls';
import Goal from './_component/goal/goal';
import Report from './_component/report/report';
import Timer from './_component/timer/timer';
import Trigger from './_component/trigger/trigger';
import styles from './page.module.css';
import Memo from './_component/memo/memo';

export default function Main() {
  const [activeComponent, setActiveComponent] = useState<string>('goal');

  return (
    <>
      <Trigger />
      {activeComponent === 'goal' && <Goal />}
      {activeComponent === 'timer' && <Timer />}
      {activeComponent === 'memo' && <Memo />}
      <Controls setActiveComponent={setActiveComponent} />
      <Report />
    </>
  );
}