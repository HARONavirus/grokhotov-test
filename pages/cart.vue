<script setup>
const props = defineProps({
  cartSummary: {
    type: Object,
    required: true,
  },
  declension: {
    type: Function,
    required: true,
  },
  cartItems : {
    type: Array,
    required: true,
  }
});

const attachmentPrice = ref(0)

const totalPrice = computed(() => {
  return props.cartSummary.totalPrice + attachmentPrice.value;
});

</script>

<template>
    <div class="container">
        <div class="location-block">
            <span class="location-block__title">Главная</span>
            <img class="location-block__icon" src="../assets/svg/arrow.svg" alt="">
            <span class="laction-block__location">Корзина</span>
        </div>
        <div class="cart__block">
            <div class="cartItems-block">
                <div class="cartItems-block__header">
                    <div class="cartItems-block__title">
                        <span class="cartItems-block__title__text">Ваша корзина</span>
                        <span class="cartItems-block__title__count"> {{ cartSummary.totalCount }} {{ declension(cartSummary.totalCount) }} </span>
                    </div>
                    <div class="cartItems-block__title__clear__button">
                        <span class="cartItems-block__title__clear__text">Очистить корзину</span>
                    </div>
                </div>
            </div>
            <div class="price-block">
                <div class="price-block__title">
                    <span class="price-block__title__text">Итого</span>
                </div>
                <div class="price-block__price">
                    <span class="price-block__price__description">Сумма заказа</span>
                    <span class="price-block__price__amount"> {{ cartSummary.totalPrice }} ₽</span>
                </div>
                <div class="price-block__count">
                    <span class="price-block__count__description">Количество</span>
                    <span class="price-block__count__amount"> {{ cartSummary.totalCount }} шт</span>
                </div>
                <div class="price-block__attachment">
                    <span class="price-block__attachment__description">Установка</span>
                    <span class="price-block__attachment__amount">{{ attachmentPrice === 0 ? 'Нет' : attachmentPrice + " ₽" }}</span>
                </div>
                <hr>
                <div class="price-block__totalPrice">
                    <span class="price-block__totalPrice__description">Стоимость {{ cartSummary.totalCount === 1 ? 'товара' : 'товаров' }}</span>
                    <span class="price-block__totalPrice__amount"> {{ totalPrice }} ₽</span>
                </div>
                <div class="price-block__createOrder">
                    <button class="price-block__createOrder__button">Оформить заказ</button>
                </div>
                <div class="price-block__buyOneClick">
                    <button class="price-block__buyOneClick__button">Купить в 1 клик</button>
                </div>
            </div>
        </div>
        <div class="products-block">

        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    margin-left: 80px;
    margin-right: 80px;
}

.location-block {
    margin-bottom: 60px;
}

.location-block__title {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: #33374E;
}

.location-block__icon {
    height: 8px;
    width: 5px;
    margin-left: 10px;
    margin-right: 10px;
    color: #33374E;
}

.laction-block__location {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: #797B86;
}

.cartItems-block {
    display: flex;
    flex-direction: column;
}

.cartItems-block__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 800px;
    margin-bottom: 50px;
}

.cartItems-block__title__text {
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 44px;
    color: #1F2432;
    margin-right: 22px;
}

.cartItems-block__title__count {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    color: #797B86;
}

.cartItems-block__title__clear__button {
    margin-bottom: 5px;
}

.cartItems-block__title__clear__text {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: #797B86;
}

.cart__block {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.price-block {
    width: 425px;
    margin-top: 35px;
    padding: 35px 30px;
}

.price-block__title {
    margin-bottom: 31px;
}

.price-block__title__text {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    color: #1F2432;
}

.price-block__price,
.price-block__count, 
.price-block__attachment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;
}

.price-block__price__description,
.price-block__count__description,
.price-block__attachment__description {
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 16px;
    color: #1F2432;
}

.price-block__price__amount,
.price-block__count__amount,
.price-block__attachment__amount {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #1F2432;
}

.price-block hr {
    width: 100%;
    height: 1px;
    border: none;
    background-color: #AEB0B6;
    margin-bottom: 10px;
}

.price-block__totalPrice {
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-bottom: 30px;
}

.price-block__totalPrice__description {
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    color: #1F2432;
}

.price-block__totalPrice__amount {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 26px;
    color: #1F2432;
}

.price-block__createOrder {
    margin-bottom: 12px;
}

.price-block__createOrder__button {
    width: 100%;
    height: 54px;
    align-items: center;
    justify-content: center;
    background-color: #0069B4;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    color: white;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

    &:hover {
        opacity: 1;
	}

    &:active {
        transform: scale(0.9);
    }
}

.price-block__buyOneClick__button {
    width: 100%;
    height: 54px;
    align-items: center;
    justify-content: center;
    border: 1px solid #0069B4;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    color: #0069B4;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

    &:hover {
        opacity: 1;
	}

    &:active {
        transform: scale(0.9);
    }
}

</style>