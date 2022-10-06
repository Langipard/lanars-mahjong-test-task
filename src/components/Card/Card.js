import classNames from "classnames";
import styles from "./Card.module.scss";

const Card = ({ number, onClick, open, selected, correct }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        styles.card,
        selected && styles.cardSelected,
        correct && styles.cardCorrect
      )}
    >
      <p
        className={classNames(
          styles.cardTitle,
          !open && styles.cardTitleClosed
        )}
      >
        {number}
      </p>
    </div>
  );
};

export default Card;
