import { Button } from "../../../components/Button";
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
      <Button variant="warning" onClick={() => onRate(false)} tabIndex={tabIndex}>
        Still learning <kbd>&larr;</kbd>
      </Button>
      <Button onClick={() => onRate(true)} tabIndex={tabIndex}>
        Got it <kbd>&rarr;</kbd>
      </Button>
    </div>
  );
}
