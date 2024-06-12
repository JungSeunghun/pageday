import { useRouter } from "next/navigation";
import styles from "./header.module.css"
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  const handleClickLogo = () => {
    router.push("/main")
  }

  return (
    <section className={styles.headerSection}>
      <section className={styles.headerLeftSection}></section>
      <section className={styles.headerMainSection}>
        <header className={styles.header}>
          <button className={styles.logo} onClick={handleClickLogo}>
            <Image src="/main/textlogo.svg" alt="페이지데이 로고" className={styles.logo} width={108} height={32}/>
          </button>
          <div className={styles.iconContainer}>
            <i className={styles.icon}>
              <Image src="/icon/search.svg" alt="검색 아이콘" width={24} height={24} />
            </i>
            <i className={styles.icon}>
              <Image src="/icon/alarmOff.svg" alt="알람 아이콘" width={24} height={24} />
            </i>
          </div>
        </header>
      </section>
      <section className={styles.headerRightSection}></section>
    </section>
  );
};