<script setup>
import { useCartStore } from '~/stores/cartStore';
import { onMounted } from 'vue';

const cartStore = useCartStore();

onMounted(async () => {
  await cartStore.fetchCartItems();
});

</script>

<template>
  <div>
    <Header :cartStore="cartStore" />
    <NuxtPage />
  </div>
</template>