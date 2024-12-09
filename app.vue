<script setup>
import axios from "axios"

const cartList= ref([])

// Получаем с сервера товары в корзине
const fetchCart = async () => {
	try {
        const { data } = await axios.get('https://761c34c1accc2eb6.mokky.dev/cart')
        
        cartList.value = data
    } catch (err) {
        console.log(err);
    }
}

</script>

<template>
  <div>
    <Header></Header>
    <NuxtPage />
  </div>
</template>