<template>
  <div class="layout-row">
    <ProductList class="flex-70" :products="products" @add-product="addToCart" @remove-product="removeFromCart" />
    <Cart class="flex-30" :cart="cart" />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
import Cart from "@/components/Cart";

export default {
  name: "Checkout",
  components: {Cart, ProductList},
  data() {
    return {
      cart: {
        items: [],
        subTotal: 0,
        totalPrice: 0,
        discount: 0,
        selectedCoupon: 0
      },
     products: []
    }
  },
  created() {
    this.products = PRODUCTS.map((product, index) => {
      product.id = index + 1;
      product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
      product.cartQuantity = 0;
      return product;
    });
  },
  methods: {
    addToCart(product) {
      // Calculate Subtotal
      this.cart.subTotal += product.price
      this.cart.items.push(product);

      //calculate total
      this.cart.totalPrice = this.cart.subTotal + this.cart.discount + this.cart.selectedCoupon
    },
    removeFromCart(productToRemove) {

      let item = this.cart.items.filter((product) => {
        console.log(product.id, productToRemove.id)
        return product.id !== productToRemove.id
        })
        this.cart.items = item
    },
  }
}
export const PRODUCTS = [
  {
    heading: "Cap - $10",
    name: "Cap",
    price: 10
  },
  {
    heading: "Hand Bag - $30",
    name: "HandBag",
    price: 30
  },
  {
    heading: "Shirt - $30",
    name: "Shirt",
    price: 30
  },
  {
    heading: "Shoes - $50",
    name: "Shoe",
    price: 50
  },
  {
    heading: "Pant - $40",
    name: "Pant",
    price: 40
  },
  {
    heading: "Slipper - $20",
    name: "Slipper",
    price: 20
  }
]

</script>

<style scoped>

</style>
