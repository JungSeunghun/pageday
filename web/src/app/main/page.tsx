import Controls from './_component/controls/controls';
import Goals from './_component/goals/goals';
import Report from './_component/report/report';
import Trigger from './_component/trigger/trigger';
import styles from './page.module.css'

export default function Main() {
  return (
    <>
      <Trigger />
      <Goals />
      <Controls />
      <Report />
    </>
  );
}