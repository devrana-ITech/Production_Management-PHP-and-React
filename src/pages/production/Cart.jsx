 class Cart {
  constructor(cartName = "shoppingCart") {
      this.cartName = cartName;
  }

  getCart() {
      return JSON.parse(localStorage.getItem(this.cartName)) || [];
  }

  save(item) {
      let cart = this.getCart();
      if (!this.itemExists(item.item_id)) {
          cart.push(item);
      } else {
          this.updateQuantity(item.item_id, item.qty);
      }
      localStorage.setItem(this.cartName, JSON.stringify(cart));
  }

  updateQuantity(id, qty) {
      const cart = this.getCart();
      const updatedCart = cart.map((item) => {
          if (item.item_id === id) {
              item.qty += qty;
              if (item.qty < 1) item.qty = 1;
              const discount = item.discount || 0;
              item.total_discount = discount * item.qty;
              item.subtotal = item.qty * item.price - item.total_discount;
          }
          return item;
      });
      localStorage.setItem(this.cartName, JSON.stringify(updatedCart));
  }

  itemExists(id) {
      return this.getCart().some((item) => item.item_id === id);
  }

  removeItem(id) {
      const cart = this.getCart();
      const updatedCart = cart.filter((item) => item.item_id !== id);
      localStorage.setItem(this.cartName, JSON.stringify(updatedCart));
  }

  clearCart() {
      localStorage.removeItem(this.cartName);
  }
}

  
  export default Cart;
  