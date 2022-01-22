import TYPES from './mutation-types'
import shop from '@/api/shop'


// initial state
const state = () => ({
    allProducts: []
})


// actions
const actions = {
    getAllProducts({ commit }) {
        shop.getProducts((products) => {
            commit(TYPES.SET_PRODUCTS, products)
        })
    }
}

// mutations
const mutations = {
    [TYPES.SET_PRODUCTS](state, products) {
        state.allProducts = products.map((product, index) => {
            product.id = index + 1;
            product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
            product.cartQuantity = 1;
            return product;
        });
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}