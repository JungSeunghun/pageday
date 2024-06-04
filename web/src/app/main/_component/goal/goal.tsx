"use client";

import { useState, useEffect } from "react";
import InputGroup from "./inputGroup";
import styles from "./goal.module.css";

interface Goal {
  actionBeforeReading: string;
  readingTime: string;
  action: string;
  date: string;
}

export default function Goal() {
  const [editing, setEditing] = useState<{ today: boolean; tomorrow: boolean }>({
    today: false,
    tomorrow: false,
  });
  const [todayGoal, setTodayGoal] = useState<Goal>({
    actionBeforeReading: "",
    readingTime: "",
    action: "",
    date: ""
  });
  const [tomorrowGoal, setTomorrowGoal] = useState<Goal>({
    actionBeforeReading: "",
    readingTime: "",
    action: "",
    date: ""
  });
  const [todayDate, setTodayDate] = useState<string>("");
  const [tomorrowDate, setTomorrowDate] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const todayDate = new Date();
      const todayYear = todayDate.getFullYear();
      const todayMonth = (todayDate.getMonth() + 1).toString().padStart(2, "0");
      const todayDay = todayDate.getDate().toString().padStart(2, "0");
      const today = `${todayYear}-${todayMonth}-${todayDay}`;

      const tomorrowDate = new Date(todayDate);
      tomorrowDate.setDate(tomorrowDate.getDate() + 1);
      const tomorrowYear = tomorrowDate.getFullYear();
      const tomorrowMonth = (tomorrowDate.getMonth() + 1).toString().padStart(2, "0");
      const tomorrowDay = tomorrowDate.getDate().toString().padStart(2, "0");
      const tomorrow = `${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}`;

      setTodayDate(today);
      setTomorrowDate(tomorrow);

      const responseTodayGoal = await fetch(`/api/goal?date=${today}`);
      if (responseTodayGoal.status === 200) {
        const todayGoalData: Goal = await responseTodayGoal.json();
        setTodayGoal(todayGoalData);
      }

      const responseTomorrowGoal = await fetch(`/api/goal?date=${tomorrow}`);
      if (responseTomorrowGoal.status === 200) {
        const tomorrowGoalData: Goal = await responseTomorrowGoal.json();
        setTomorrowGoal(tomorrowGoalData);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (day: "today" | "tomorrow") => {
    setEditing((prev) => ({ ...prev, [day]: true }));
  };

  const handleCancel = (day: "today" | "tomorrow") => {
    setEditing((prev) => ({ ...prev, [day]: false }));
  };

  const handleComplete = async (day: "today" | "tomorrow") => {
    const isToday = day === "today";
    const goal: Goal = {
      actionBeforeReading: isToday ? todayGoal.actionBeforeReading : tomorrowGoal.actionBeforeReading,
      readingTime: isToday ? todayGoal.readingTime : tomorrowGoal.readingTime,
      action: isToday ? todayGoal.action : tomorrowGoal.action,
      date: isToday ? todayDate : tomorrowDate,
    };

    const response = await fetch("/api/goal/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goal),
    });

    if (response.status === 200) {
      if (day === "today") {
        setTodayGoal(goal);
      } else {
        setTomorrowGoal(goal);
      }
      setEditing((prev) => ({ ...prev, [day]: false }));
    }
  };

  return (
    <section className={styles.goals}>
      <div className={styles.goalSection}>
        <h2 className={styles.heading}>오늘 목표</h2>
        {editing.today ? (
          <>
            <InputGroup
              id="actionBeforeReadingToday"
              placeholder="독서 전 행동"
              value={todayGoal.actionBeforeReading}
              label="독서 전 행동"
              onChange={(e) =>
                setTodayGoal((prev) => ({
                  ...prev,
                  actionBeforeReading: e.target.value,
                }))
              }
            />
            <InputGroup
              id="readingTimeToday"
              placeholder="시간"
              value={todayGoal.readingTime}
              label="시간"
              onChange={(e) =>
                setTodayGoal((prev) => ({ ...prev, readingTime: e.target.value }))
              }
            />
            <InputGroup
              id="actionToday"
              placeholder="목표 행동"
              value={todayGoal.action}
              label="목표 행동"
              onChange={(e) =>
                setTodayGoal((prev) => ({ ...prev, action: e.target.value }))
              }
            />
            <button className={styles.button} onClick={() => handleCancel("today")}>
              취소
            </button>
            <button className={styles.button} onClick={() => handleComplete("today")}>
              완료
            </button>
          </>
        ) : (
          <>
            <p className={styles.goalText}>
              {todayGoal.actionBeforeReading} {todayGoal.readingTime} {todayGoal.action}
            </p>
            <p className={styles.date}>{todayDate}</p>
            <button className={styles.button} onClick={() => handleEdit("today")}>
              수정
            </button>
          </>
        )}
      </div>
      <div className={styles.goalSection}>
        <h2 className={styles.heading}>내일 목표</h2>
        {editing.tomorrow ? (
          <>
            <InputGroup
              id="actionBeforeReadingTomorrow"
              placeholder="독서 전 행동"
              value={tomorrowGoal.actionBeforeReading}
              label="독서 전 행동"
              onChange={(e) =>
                setTomorrowGoal((prev) => ({
                  ...prev,
                  actionBeforeReading: e.target.value,
                }))
              }
            />
            <InputGroup
              id="readingTimeTomorrow"
              placeholder="시간"
              value={tomorrowGoal.readingTime}
              label="시간"
              onChange={(e) =>
                setTomorrowGoal((prev) => ({ ...prev, readingTime: e.target.value }))
              }
            />
            <InputGroup
              id="actionTomorrow"
              placeholder="책제목"
              value={tomorrowGoal.action}
              label="책제목"
              onChange={(e) =>
                setTomorrowGoal((prev) => ({ ...prev, action: e.target.value }))
              }
            />
            <button className={styles.button} onClick={() => handleCancel("tomorrow")}>
              취소
            </button>
            <button className={styles.button} onClick={() => handleComplete("tomorrow")}>
              완료
            </button>
          </>
        ) : (
          <>
            <p className={styles.goalText}>
              {tomorrowGoal.actionBeforeReading} {tomorrowGoal.readingTime} {tomorrowGoal.action}
            </p>
            <p className={styles.date}>{tomorrowDate}</p>
            <button className={styles.button} onClick={() => handleEdit("tomorrow")}>
              수정
            </button>
          </>
        )}
      </div>
    </section>
  );
}
