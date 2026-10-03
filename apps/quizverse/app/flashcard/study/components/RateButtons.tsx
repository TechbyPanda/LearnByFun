import styles from "./RateButtons.module.css";

interface RateButtonsProps {
  /** Hidden (and unfocusable) until the card has been flipped. */
  visible: boolean;
  onRate: (gotIt: boolean) => void;
}

export function RateButtons({ visible, onRate }: RateButtonsProps) {
  const tabIndex = visible ? 0 : -1;

  return (
    <div className={styles.row} data-visible={visible}>
      <button
        type="button"
        className={styles.again}
        onClick={() => onRate(false)}
        tabIndex={tabIndex}
      >
        Still learning <kbd>&larr;</kbd>
      </button>
      <button
        type="button"
        className={styles.gotIt}
        onClick={() => onRate(true)}
        tabIndex={tabIndex}
      >
        Got it <kbd>&rarr;</kbd>
      </button>
    </div>
  );
}
