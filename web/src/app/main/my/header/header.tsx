import styles from "./header.module.css"

export default function Header() {
  return (
    <section className={styles.headerSection}>
      <section className={styles.headerLeftSection}></section>
      <section className={styles.headerMainSection}>
        <header className={styles.header}>
          <h3 className={styles.headerTitle}>
            마이페이지
          </h3>
        </header>
      </section>
      <section className={styles.headerRightSection}></section>
    </section>
  );
};