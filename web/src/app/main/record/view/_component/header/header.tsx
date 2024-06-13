import { useRouter } from "next/navigation";
import styles from "./header.module.css"
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  const handleClickBack = () => {
    router.back();
  }

  return (
    <section className={styles.headerSection}>
      <section className={styles.headerLeftSection}></section>
      <section className={styles.headerMainSection}>
        <header className={styles.header}>
          <button className={styles.backButton}
            onClick={handleClickBack}>
            <Image src={"/icon/back.svg"} width={18} height={24} alt='뒤로가기 버튼' />
          </button>
        </header>
      </section>
      <section className={styles.headerRightSection}></section>
    </section>
  );
};