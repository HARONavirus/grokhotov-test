<script setup>
import { onMounted, ref, nextTick } from 'vue';
import { Swiper } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';

import CardList from '~/components/CardList.vue';
import { useCartStore } from '~/stores/cartStore';
import { usePromotionalStore } from '~/stores/promotionalStore';
import { formatNumberWithSpaces } from '~/composables/numberFormatter';

const cartStore = useCartStore();

const clearCart = () => {
  cartStore.clearCart();
  isAttachmentSelected.value = false;
};

const promotionalStore = usePromotionalStore();

const prevButtonRef = ref(null);
const nextButtonRef = ref(null);
const swiperRef = ref(null);
let swiperInstance = ref(null);

onMounted(async () => {
  await nextTick();

  swiperInstance.value = new Swiper(swiperRef.value, {
    loop: true,
    loopedSlides: promotionalStore.promProducts.length,
    navigation: {
      nextEl: nextButtonRef.value,
      prevEl: prevButtonRef.value,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      839: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1398: {
        slidesPerView: 4,
      },
    },
  });

  nextButtonRef.value.addEventListener('click', () => {
    swiperInstance.value.slideNext();
  });
  prevButtonRef.value.addEventListener('click', () => {
    swiperInstance.value.slidePrev();
  });
});

const isAttachmentSelected = ref(false);
const attachmentPrice = computed(() => isAttachmentSelected.value ? 1000 : 0);

const totalPrice = computed(() => {
  return cartStore.cartSummary.totalPrice + attachmentPrice.value;
});

const submitOrder = async () => {
  try {
    const response = await axios.post('https://761c34c1accc2eb6.mokky.dev/orders', prepareOrderData(), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200 || response.status === 201) {
      cartStore.clearCart();
      isAttachmentSelected.value = false;
      alert('Заказ успешно оформлен!');
    } else {
      const errorData = response.data;
      const errorMessage = errorData.error || errorData.message || `Ошибка с кодом ${response.status}`;
      alert('Ошибка при оформлении заказа: ' + errorMessage);
      console.error('Ошибка при оформлении заказа:', errorData);
    }
  } catch (error) {
    console.error('Ошибка при оформлении заказа:', error);
    alert('Ошибка при оформлении заказа: ' + error.message);
  }
};

const prepareOrderData = () => {
  return {
    items: cartStore.items.map(item => ({
      id: item.id,
      title: item.title,
      count: item.count,
      price: item.price,
    })),
    installation: isAttachmentSelected.value ? true : false,
    totalCount: cartStore.cartSummary.totalCount,
    totalPrice: totalPrice.value,
  };
};

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
                        <span class="cartItems-block__title__count"> {{ cartStore.cartSummary.totalCount }} {{ declension(cartStore.cartSummary.totalCount) }} </span>
                    </div>
                    <div class="cartItems-block__title__clear__button" @click="clearCart">
                        <span class="cartItems-block__title__clear__text">Очистить корзину</span>
                    </div>
                </div>
                <CardList />
                <div class="cartItems-block__attachment__block">
                    <label class="cartItems-block__attachment__block__checkbox">
                        <input type="checkbox" v-model="isAttachmentSelected">
                    </label>
                    <img class="cartItems-block__attachment__block__icon" src="../assets/svg/attachment.svg" alt="Иконка установки">
                    <div class="cartItems-block__attachment__block__info">
                        <div class="cartItems-block__attachment__block__info__title">
                            <span class="cartItems-block__attachment__block__info__title__text">Установка</span>
                        </div>
                        <div class="cartItems-block__attachment__block__info__description">
                            <span class="cartItems-block__attachment__block__info__description__text">
                                Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="price-block">
                <div class="price-block__title">
                    <span class="price-block__title__text">Итого</span>
                </div>
                <div class="price-block__price">
                    <span class="price-block__price__description">Сумма заказа</span>
                    <span class="price-block__price__amount"> {{ formatNumberWithSpaces(cartStore.cartSummary.totalPrice) }} ₽</span>
                </div>
                <div class="price-block__count">
                    <span class="price-block__count__description">Количество</span>
                    <span class="price-block__count__amount"> {{ cartStore.cartSummary.totalCount }} шт</span>
                </div>
                <div class="price-block__attachment">
                    <span class="price-block__attachment__description">Установка</span>
                    <span class="price-block__attachment__amount">{{ attachmentPrice === 0 ? 'Нет' : formatNumberWithSpaces(attachmentPrice) + " ₽" }}</span>
                </div>
                <hr>
                <div class="price-block__totalPrice">
                    <span class="price-block__totalPrice__description">Стоимость {{ cartStore.cartSummary.totalCount === 1 ? 'товара' : 'товаров' }}</span>
                    <span class="price-block__totalPrice__amount"> {{ formatNumberWithSpaces(totalPrice) }} ₽</span>
                </div>
                <div class="price-block__createOrder">
                    <button class="price-block__createOrder__button" @click="submitOrder">Оформить заказ</button>
                </div>
                <div class="price-block__buyOneClick">
                    <button class="price-block__buyOneClick__button">Купить в 1 клик</button>
                </div>
            </div>
        </div>
        <div class="products-block">
            <div class="products-block__header">
                <div class="products-block__header__title">
                    <span class="products-block__title__text">Просмотренные товары</span>
                </div>
                <div class="products-block__header__buttons">
                    <button ref="prevButtonRef" class="products-block__header__buttons__prevButton">
                        <img src="../assets/svg/prev.svg" alt="">
                    </button>
                    <button ref="nextButtonRef" class="products-block__header__buttons__nextButton">
                        <img src="../assets/svg/next.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="swiper-container">
                <div ref="swiperRef" class="swiper">
                    <div class="swiper-wrapper">
                        <div v-for="product in promotionalStore.promProducts" :key="product.id" class="swiper-slide">
                        <div class="product-card">
                            <div class="product-card__top">
                                <img class="product-card__image" :src="product.picture" :alt="product.title" />
                                <h3 class="product-card__title">{{ product.title }}</h3>
                                <p class="product-card__description">{{ product.description }}</p>
                            </div>
                            <div class="product-card__bottom">
                                <p class="product-card__price_rub">{{ formatNumberWithSpaces(product.low_price_rub) }} ₽ - {{ formatNumberWithSpaces(product.top_price_rub) }} ₽</p>
                                <p class="product-card__price_eur">{{ formatNumberWithSpaces(product.low_price_eur) }} € - {{ formatNumberWithSpaces(product.top_price_eur) }} €</p>
                                <button class="product-card__button">Подробнее</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
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
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

    &:active {
        transform: scale(0.9);
    }
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
    margin-bottom: 95px;
}

.cartItems-block__attachment__block {
    display: flex;
    align-items: center;
    width: 800px;
    height: 102px;
    padding-left: 25px;
    padding-right: 25px;
}

.cartItems-block__attachment__block__checkbox {
    margin-right: 20px;
}

.cartItems-block__attachment__block__checkbox input {
    width: 20px;
    height: 20px;
}

.cartItems-block__attachment__block__icon {
    width: 50px;
    height: 50px;
    margin-right: 20px
}

.cartItems-block__attachment__block__info__title__text {
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 16px;
    color: #1F2432;
}

.cartItems-block__attachment__block__info__description__text {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: #797B86;
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

    &:active {
        transform: scale(0.9);
    }
}

.products-block {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}

.products-block__header {
    display: flex;
    width: 1280px;
    justify-content: space-between;
    margin-bottom: 60px;
}

.products-block__title__text {
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 30px;
    color: #1F2432;
}

.products-block__header__buttons {
    display: flex;
    align-items: center;
    width: 120px;
    justify-content: space-between;
}

.products-block__header__buttons__prevButton,
.products-block__header__buttons__nextButton {
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

    &:active {
        transform: scale(0.9);
    }
}

.swiper-container {
    width: 1280px;
    height: 563px;
    overflow: hidden;
    margin-bottom: 100px;
}

.swiper-slide {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 563px;
    width: 305px;
    padding: 25px;
    box-sizing: border-box;
}

.product-card:last-child {
  margin-right: 0;
}

.product-card__image {
    height: 245px;
    width: 245px;
    margin-bottom: 10px
}

.product-card__title {
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 22px;
    color: #1F2432;
    margin-bottom: 10px;
}

.product-card__description {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: #1F2432;
}

.product-card__price_rub {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 22px;
    color: #1F2432;
    margin-bottom: 3px;
}

.product-card__price_eur {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #797B86;
    margin-bottom: 20px;
}
.product-card__button {
    width: 100%;
    height: 52px;
    align-items: center;
    justify-content: center;
    background-color: #0069B4;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: white;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

    &:active {
        transform: scale(0.9);
    }
}

@media (max-width: 1398px) {
    .cart__block {
        flex-direction: column;
        align-items: center;
    }

    .swiper-container {
        width: 100%; 
    }

    .products-block__header {
        width: 100%;
    }
}

@media (max-width: 839px) {
    .swiper-container {
        width: 400px; 
    }

    .cartItems-block__header {
        width: 100%;
    }

    .cartItems-block__attachment__block {
        width: 100%;
    }
}

@media (max-width: 685px) {
    .container {
        margin: 0;
    }

    .location-block {
        margin-left: 30px;
    }

    .cartItems-block__header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cartItems-block__title {
        margin-bottom: 20px
    }

    .cartItems-block__attachment__block {
        margin-top: 20px;
    }

    .cartItems-block__title__text {
        font-size: 30px;
    }
}

@media (max-width: 530px) {
    .products-block__header {
        flex-direction: column;
        align-items: center;
    }

    .products-block__header__title {
        margin-bottom: 20px;
    }

    .products-block__title__text {
        font-size: 25px;
    }
}

@media (max-width: 530px) {
    .price-block {
        width: 100%;
        padding: 15px 10px;
    }

    .swiper-container {
        width: 350px; 
    }
}

</style>