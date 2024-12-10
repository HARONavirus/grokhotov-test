<script setup>
import { declension } from '../composables/declensions';
import { formatNumberWithSpaces } from '../composables/numberFormatter';

const props = defineProps({
  cartStore: {
    type: Object,
    required: true,
  },
});

</script>

<template>
  <header>
    <div class="header-cart__block">
      <NuxtLink to="/cart">
        <svg class="header-cart__icon">
          <use xlink:href="../assets/svg/sprite.svg#cart"></use>
        </svg>
      </NuxtLink>
      <div class="header-cart__info">
        <div class="header-cart__title">
          <span>Ваша корзина</span>
        </div>
        <div class="header-cart__count">
          <span> {{ props.cartStore.cartSummary.totalCount }} {{ declension(props.cartStore.cartSummary.totalCount) }} </span>
        </div>
        <div class="header-cart__price">
          <span> {{ formatNumberWithSpaces(props.cartStore.cartSummary.totalPrice) }} ₽</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 95px;
    margin-bottom: 30px;
}

.header-cart__block {
    display: flex;
    align-items: center;
    margin-right: 5%;
}

.header-cart__icon {
    height: 32px;
    width: 32px;
    margin-right: 10px;
}

.header-cart__info {
    display: flex;
    flex-direction: column;
}

.header-cart__title span {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #1F2432;
    font-size: 14px;
}

.header-cart__count span {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #797B86;
    font-size: 12px;
}

.header-cart__price span {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #1F2432;
    font-size: 12px;
}

</style>