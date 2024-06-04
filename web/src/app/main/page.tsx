import Controls from './_component/controls/controls';
import Goal from './_component/goal/goal';
import Report from './_component/report/report';
import Timer from './_component/timer/timer';
import Trigger from './_component/trigger/trigger';
import styles from './page.module.css'

export default function Main() {
  return (
    <>
      <Trigger />
      <Goal />
      <Timer />
      <Controls />
      <Report />
    </>
  );
}