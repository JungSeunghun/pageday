"use client"

import { useState } from 'react';
import styles from './page.module.css';
import Header from './_component/header/header';
import UserInfo from './_component/userInfo/userInfo';
import Attendance from './_component/attendance/attendance';
import Goal from './_component/goal/goal';
import Recent from './_component/recent/recent';
import Footer from './_component/footer/footer';

export default function Main() {
  return (
    <div className={styles.container}>
      <Header />
      <UserInfo />
      <Attendance />
      <Goal />
      <Recent />
    </div>
  );
}