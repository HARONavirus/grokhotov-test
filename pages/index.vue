<template>
    <div class="container">
      <div class="cart-button">
        <button class="cart-button__button">
            <NuxtLink to="/cart">
                <span class="cart-button__text">Открыть корзину</span>
            </NuxtLink>
        </button>
      </div>
    </div>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Marcellus+SC&family=PT+Sans+Caption:wght@400;700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
  .cart-button {
    display: flex;
    margin-top: 10%;
  }
  
  .cart-button__button {
    border-radius: 2rem;
    outline: 2px solid black;
    padding: 1.1rem 2rem;
    box-shadow: 10px 10px;
    cursor: pointer;
    transition: all 0.1s ease-out;
  }

  .cart-button__text {
    font-family: "Mali", serif;
    font-weight: 400;
    font-style: normal;
    color: black;
    font-size: 5rem;
    user-select: none;
  }
  
  .cart-button__button:active {
    box-shadow: none;
    transform: translate(10px, 10px);
  }

  @media (max-width: 1024px) {
    .cart-button__button {
        padding: 0.8rem 1.5rem;
        font-size: 3.5rem;
    }
    .cart-button__text {
      font-size: 3.5rem;
    }
}

@media (max-width: 768px) {
    .cart-button__button {
        padding: 0.6rem 1rem;
        font-size: 2.5rem;
    }
    .cart-button__text {
      font-size: 2.5rem;
    }
}

@media (max-width: 480px) {
    .cart-button__button {
        padding: 0.4rem 0.7rem;
        font-size: 1.8rem;
    }
    .cart-button__text {
        font-size: 1.8rem;
    }
}
  </style>