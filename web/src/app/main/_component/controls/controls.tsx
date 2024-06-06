import styles from './controls.module.css';

interface ControlsProps {
  setActiveComponent: (component: string) => void;
}

export default function Controls({ setActiveComponent }: ControlsProps) {
  return (
    <section className={styles.controls}>
      <button onClick={() => setActiveComponent('goal')}>목표 설정</button>
      <button onClick={() => setActiveComponent('timer')}>스톱워치</button>
      <button onClick={() => setActiveComponent('memo')}>독서 기록</button>
    </section>
  );
}
