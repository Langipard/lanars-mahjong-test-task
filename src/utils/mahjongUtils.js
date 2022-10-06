function makeRandomArr(a, b) {
  return Math.random() - 0.5;
}

const objectivise = (arr) => {
  return arr.map((number, i) => ({
    number,
    open: true,
    selected: false,
    correct: false,
    id: i,
  }));
};

export const primeNumberGenerator = (start = 2, end = 60, maxLength = 32) => {
  let primeNumberArray = [];
  nextPrime: for (let i = start; i <= end; i++) {
    for (let j = start; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }
    if (primeNumberArray.length >= maxLength) break;
    primeNumberArray.push(i);
    primeNumberArray.push(i);
  }
  primeNumberArray.sort(makeRandomArr);
  return objectivise(primeNumberArray);
};

export const updateCard = (array, card1, card2) => {
  return array.map((item) => {
    if (card1.id === item.id) {
      return { ...card1, open: !card1.open, selected: !card1.selected };
    }
    if (card2 && card2.id === item.id) {
      return { ...card2, open: !card2.open, selected: !card2.selected };
    }
    return { ...item };
  });
};

export const setCloseAllCards = (array) => {
  return array.map((card) => ({
    ...card,
    open: false,
  }));
};

export const setCardsCorrect = (array, card1, card2) => {
  return array.map((item) => {
    if (card1.id === item.id) {
      return { ...card1, correct: true };
    }
    if (card2 && card2.id === item.id) {
      return { ...card2, correct: true };
    }
    return { ...item };
  });
};
