"use client"

import { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Header from './_component/header/header';
import UserInfo from './_component/userInfo/userInfo';
import Attendance from './_component/attendance/attendance';

export default function Main() {
  return (
    <div className={styles.container}>
      <Header/>
      <UserInfo/>
      <Attendance/>
      <section className={styles.goals}>
        <div className={styles.goal}>
          <h2>오늘</h2>
          <p>2024.06.13</p>
          <p>독서 전 행동</p>
          <p>읽을 책 을(를) 한 다음 을(를) 읽을 것이다.</p>
        </div>
        <div className={styles.goal}>
          <h2>내일</h2>
          <p>2024.06.14</p>
          <p>독서 전 행동</p>
          <p>읽을 책 을(를) 한 다음 을(를) 읽을 것이다.</p>
        </div>
      </section>

      <section className={styles.recentRecords}>
        <h2>최근 기록</h2>
        <div className={styles.record}>
          <div className={styles.recordHeader}>
            <h3>애꾸눈해적</h3>
            <p>2024.06.13</p>
          </div>
          <p>시집을 읽으니까 마음이 편해진다. 특히 운동주라 더욱 절절한 기분.</p>
        </div>
        <div className={styles.record}>
          <div className={styles.recordHeader}>
            <h3>정승훈</h3>
            <p>2024.06.13</p>
          </div>
          <p>용의자 X의 어쩌구를 읽고 누군가를 확실히 어떻게 머시깽이 해버릴지 알 수 있었다</p>
        </div>
        <div className={styles.record}>
          <div className={styles.recordHeader}>
            <h3>정승훈</h3>
            <p>2024.06.13</p>
          </div>
          <p>용의자 X의 어쩌구를 읽고 누군가를 확실히 어떻게 머시깽이 해버릴지 알 수 있었다</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <button className={styles.footerButton}></button>
        <button className={styles.footerButton}></button>
        <button className={styles.footerButton}></button>
        <button className={styles.footerButton}></button>
        <button className={styles.footerButton}></button>
      </footer>
    </div>
  );
}