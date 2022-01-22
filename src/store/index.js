import { createStore } from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
    modules: {
        cart,
        products
    },
    strict: debug
})

export default store