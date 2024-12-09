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
    height: 100vh;
  }
  
  .cart-button {
    display: flex;
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
  </style>