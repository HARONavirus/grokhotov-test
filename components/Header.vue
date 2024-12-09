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
                    <span>3 товара</span>
                </div>
                <div class="header-cart__price">
                    <span>50 576 ₽</span>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Marcellus+SC&family=PT+Sans+Caption:wght@400;700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 95px;
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