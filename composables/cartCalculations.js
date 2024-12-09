//Функция для подсчёта кол-ва товаров в корзине и итоговой цены
export const useCartSummary = (cartList) => {
    if (!cartList || cartList.length === 0) {
      return { totalCount: 0, totalPrice: 0 };
    }
  
    return cartList.reduce(
      (summary, item) => {
        summary.totalCount += parseInt(item.count, 10);
        summary.totalPrice += parseInt(item.price, 10) * parseInt(item.count, 10);
        return summary;
      },
      { totalCount: 0, totalPrice: 0 }
    );
  };