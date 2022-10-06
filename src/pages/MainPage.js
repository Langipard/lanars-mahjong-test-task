import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { primeNumberGenerator, setCloseAllCards } from "../utils/mahjongUtils";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const [pickedCards, addPickedCard] = useState([]);
  const [cardsArray, setCardsArray] = useState(primeNumberGenerator(2, 60));
  useEffect(() => {
    setTimeout(() => {
      setCardsArray(setCloseAllCards(cardsArray));
    }, 5000);
  }, []);
  return (
    <div className={styles.container}>
      <p className={styles.title}>Mahjong</p>
      <div className={styles.cardContainer}>
        {cardsArray.map((card) => (
          <Card
            key={`card-${card.number}-${card.id}`}
            card={card}
            pickedCards={pickedCards}
            addPickedCard={addPickedCard}
            setCardsArray={setCardsArray}
            cardsArray={cardsArray}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
