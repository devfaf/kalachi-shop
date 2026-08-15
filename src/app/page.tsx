import styles from "./page.module.css";
import ButtonTest from "./Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ButtonTest />
      </main>
    </div>
  );
}
