<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from "axios";
import { useCartSummary } from '~/composables/cartCalculations';
import { declension } from '~/composables/declensions';

const cartItems = ref([]);
const cartSummaryData = ref({});

onMounted(async () => {
  try {
    const { data } = await axios.get('https://761c34c1accc2eb6.mokky.dev/cart');
    cartItems.value = data;
    updateCartSummary();
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
});

const updateCartSummary = () => {
    cartSummaryData.value = useCartSummary(cartItems.value);
};

</script>

<template>
  <div>
    <Header :cartSummary="cartSummaryData" :declension="declension" />
    <NuxtPage :cartSummary="cartSummaryData" :declension="declension" />
  </div>
</template>