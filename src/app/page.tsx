import styles from "../styles/page.module.css";
import ButtonTest from "./Button";
import { toPersianNumber } from "@/lib/utils/farsiNumbers";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ButtonTest />
        <p>number {toPersianNumber(12360007)}</p>
      </main>
    </div>
  );
}
