import { defineStore } from 'pinia';
import axios from 'axios';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  
  actions: {
    async fetchCartItems() {
      this.loading = true;
      this.error = null;
      try {
        const { data } = await axios.get('https://761c34c1accc2eb6.mokky.dev/cart');
        this.items = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    
    updateCartItems(updatedCartItems) {
      this.items = updatedCartItems;
    },

    removeCartItem(idToRemove) {
      this.items = this.items.filter((item) => item.id !== idToRemove);
    },

    clearCart() {
      this.items = [];
    }
  },

  getters: {
    cartSummary: (state) => {
      if (!state.items || state.items.length === 0) {
        return { totalCount: 0, totalPrice: 0 };
      }

      return state.items.reduce(
        (summary, item) => {
          summary.totalCount += parseInt(item.count, 10);
          summary.totalPrice += parseInt(item.price, 10) * parseInt(item.count, 10);
          return summary;
        },
        { totalCount: 0, totalPrice: 0 }
      );
    },
  },
});