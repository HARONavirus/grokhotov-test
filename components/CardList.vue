<script setup>
import Card from './Card.vue';
import { useCartStore } from '~/stores/cartStore';

const cartStore = useCartStore();

const handleUpdateCount = (id, newCount) => {
  if (newCount < 1) {
    cartStore.removeCartItem(id);
  } else {
    const itemIndex = cartStore.items.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      const updatedItems = [...cartStore.items];
      updatedItems[itemIndex].count = newCount;
      cartStore.updateCartItems(updatedItems);
    }
  }
};

const handleRemoveItem = (id) => {
  cartStore.removeCartItem(id);
};
</script>

<template>
  <div>
    <div v-for="item in cartStore.items" :key="item.id">
      <Card :id="item.id" :title="item.title" :picture="item.picture" :description="item.description"
        :article="item.article" :price="item.price" :count="item.count"
        @updateCount="handleUpdateCount" @removeItem="handleRemoveItem" />
    </div>
  </div>
</template>

<style scoped>
.cardList-block {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 44px;
}

.separator {
    width: 800px;
    height: 1px;
    background-color: #C4C4C4;
}

</style>