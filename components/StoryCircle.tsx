import styles from "../styles/StoryCircle.module.css";

const chapterNumbers: number[] = [];
for (let i = 1; i <= 32; i++) {
  chapterNumbers.push(i);
}

export default function StoryCircle() {
  return (
    <div className={styles.circleholder}>
      <div className={styles.storycircle}>
        <div className={styles.readinglabel}>
          <svg viewBox="0 0 500 500">
            <ellipse
              transform="rotate(148, 250, 250)"
              ry="190"
              rx="190"
              cy="250"
              cx="250"
              fill="transparent"
              id="circle"
            />
            <text width="500" fontSize="50">
              <textPath xlinkHref="#circle">READING CHAPTER</textPath>
            </text>
          </svg>
        </div>
        <div className={styles.chapternumbers}>
          {chapterNumbers.map((num) => {
            const extraClass = null; //TODO: twobefore, onebefore, oneafter, twoafter
            return (
              <div key={num} className={`${styles.chapternumber}`}>
                {num}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
