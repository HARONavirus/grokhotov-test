//Функция для склонения слов в зависиомти от кол-ва товаров в корзине
export const declension = (number) => {
  const remainder10 = number % 10;
  const remainder100 = number % 100;

  if (number === 1 || (remainder10 === 1 && remainder100 !== 11)) {
    return "товар";
  } else if (remainder10 >= 2 && remainder10 <= 4 && (remainder100 < 10 || remainder100 > 20)) {
    return "товара";
  } else {
    return "товаров";
  }
};