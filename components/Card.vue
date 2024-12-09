<script setup>
import { formatNumberWithSpaces } from '~/composables/numberFormatter';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['updateCount', 'removeItem']);

const increaseCount = () => {
  emit('updateCount', props.id, props.count + 1);
};

const decreaseCount = () => {
  emit('updateCount', props.id, props.count - 1);
};

const removeItem = () => {
  emit('removeItem', props.id);
};
</script>

<template>
    <div class="container">
        <div class="productCard-block">
            <img class="productCard-block__image" :src="props.picture" alt="Изображение товара">
            <div class="productCard-block__info">
                <div class="productCard-block__info__title">
                    <span class="productCard-block__info__title__text"> {{ props.title }} </span>
                </div>
                <div class="productCard-block__info__description">
                    <span class="productCard-block__info__description__text"> {{ props.description }} </span>
                </div>
                <div class="productCard-block__info__article">
                    <span class="productCard-block__info__article__text"> {{ props.article }} </span>
                </div>
            </div>
            <div class="productCard-block__data">
                <div class="productCard-block__count">
                    <div class="productCard-block__count__minus_button" @click="decreaseCount">
                        <img src="../assets/svg/minus.svg" alt="Уменьшить количество на 1">
                    </div>
                    <div class="productCard-block__count__number">
                        <span class="productCard-block__count__number__text"> {{ props.count }} </span>
                    </div>
                    <div class="productCard-block__count__plus_button" @click="increaseCount">
                        <img src="../assets/svg/plus.svg" alt="Увеличить количество на 1">
                    </div>
                </div>
                <div v-if="props.count > 1" class="productCard-block__count__pricePerPiece">
                    <span class="productCard-block__count__pricePerPiece__text"> {{ formatNumberWithSpaces(props.price) }} ₽/шт.</span>
                </div>
            </div>
            <div class="productCard-block__price">
                <span class="productCard-block__price__text"> {{ formatNumberWithSpaces(props.price * props.count) }} ₽</span>
            </div>
            <div class="productCard-block__delete">
                <img class="productCard-block__delete__button" src="../assets/svg/close.svg" alt="" @click="removeItem">
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.productCard-block {
    display: flex;
    width: 800px;
}

.productCard-block__image {
    width: 100px;
    height: 100px;
    margin-left: 15px;
    margin-right: 31px;
}

.productCard-block__info {
    margin-right: 79px;
}

.productCard-block__info__title {
    margin-bottom: 6px;
}

.productCard-block__info__title__text {
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 16px;
    color: #1F2432;
}

.productCard-block__info__description {
    margin-bottom: 7px;
    width: 263px;
}

.productCard-block__info__description__text {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    color: #2C3242;
}

.productCard-block__info__article {
    margin-bottom: 22px;
}

.productCard-block__info__article__text {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: #797B86;
}

.productCard-block__data {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 34px;
    margin-right: 56px;
}

.productCard-block__count {
    display: flex;
    align-items: center;
    width: 102px;
    justify-content: space-around;
}
.productCard-block__count__minus_button {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;


    &:active {
        transform: scale(0.9);
    }
}

.productCard-block__count__minus_button img {
    width: 8px;
    height: 2px;
}

.productCard-block__count__number__text {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: #1F2432;
}

.productCard-block__count__plus_button {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

    &:active {
        transform: scale(0.9);
    }
}

.productCard-block__count__plus_button img {
    width: 8px;
    height: 8px;
}

.productCard-block__count__pricePerPiece__text {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    color: #1F2432;
}

.productCard-block__price {
    margin-top: 34px;
    margin-right: 60px;
}

.productCard-block__price__text {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 18px;
    color: #1F2432;
}

.productCard-block__delete__button {
    width: 12px;
    height: 12px;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

    &:hover {
        opacity: 1;
	}

    &:active {
        transform: scale(0.9);
    }
}

@media (max-width: 839px) {
    .productCard-block {
        position: relative;
        flex-direction: column;
        align-items: center;
        width: 350px;
        border: 1px solid #1F2432;
        border-radius: 10px;
    }

    .productCard-block__image {
        margin: 20px 0 0 0;
    }

    .productCard-block__info {
        margin: 0;
    }
    
    .productCard-block__data {
        margin-top: 0;
        margin-right: 0;
    }

    .productCard-block__price {
        margin: 20px 0 20px 0;
    }

    .productCard-block__delete {
        position: absolute;
        right: 20px;
        top: 20px;
    }
}

</style>