import { useEffect, useState } from "react";
import { setCardsCorrect, updateCard } from "../../utils/mahjongUtils";
import Card from "./Card";

const CardContainer = ({
  card,
  pickedCards,
  addPickedCard,
  setCardsArray,
  cardsArray,
}) => {
  useEffect(() => {
    if (pickedCards.length === 2) {
      if (pickedCards[0].number !== pickedCards[1].number) {
        setTimeout(() => {
          setCardsArray(updateCard(cardsArray, pickedCards[0], pickedCards[1]));
        }, 1000);
      } else {
        setCardsArray(
          setCardsCorrect(cardsArray, pickedCards[0], pickedCards[1])
        );
      }
    }
  }, [pickedCards]);
  const onClickCard = (event) => {
    if (!card.open) {
      setCardsArray(updateCard(cardsArray, card));
      if (pickedCards.length < 2) {
        addPickedCard([
          { ...card, open: true, selected: true },
          ...pickedCards,
        ]);
      } else {
        addPickedCard([{ ...card, open: true, selected: true }]);
      }
    }
  };
  return <Card onClick={onClickCard} {...card} />;
};

export default CardContainer;
