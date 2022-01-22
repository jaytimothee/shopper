<template>
  <div class="layout-row">
    <ProductList
      class="flex-70"
      :products="getAllProducts"
      @add-product="addToCart"
      @remove-product="removeFromCart"
    />
    <Cart class="flex-30" :cart="getCartItems" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ProductList from "@/components/ProductList";
import Cart from "@/components/Cart";

export default {
  name: "Checkout",
  components: { Cart, ProductList },
  created() {
    this.getProducts();
  },

  computed: {
    getAllProducts() {
      return this.$store.state.products.allProducts;
    },
    getCartItems() {
      return this.$store.state.cart.cart;
    },
  },

  methods: {
    ...mapActions({
      getProducts: "products/getAllProducts",
      addToCart: "cart/addToCart",
      removeFromCart: "cart/removeFromCart",
    }),
  },
};
</script>

<style scoped>
</style>
