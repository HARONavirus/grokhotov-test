<script setup>
import Card from './Card.vue';

const props = defineProps({
  cartItems : {
    type: Array,
    required: true,
  }
});
</script>

<template>
    <div class="cardList-block">
        <div v-for="(item, index) in cartItems" :key="item.id">
            <Card
                :title="item.title"
                :picture="item.picture"
                :description="item.description"
                :article="item.article"
                :price="item.price"
                :count="item.count"
            />
            <div v-if="index < cartItems.length - 1" class="separator"></div>
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