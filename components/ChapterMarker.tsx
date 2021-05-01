import styles from "../styles/ChapterMarker.module.css";

export default function ChapterMarker({ chapter }: { chapter: number }) {
  const text =
    chapter === 0
      ? `Prologue`
      : Number.isFinite(chapter)
      ? `Chapter ${chapter}`
      : `Not Revealed Yet`;

  return <div className={styles.chapter}>{text}</div>;
}
