import TYPES from './mutation-types'

// initial state
const state = () => ({
    cart: {
        items: [],
        subTotal: 0,
        totalPrice: 0,
        discount: 0,
        selectedCoupon: 0
    }
})

const actions = {
    addToCart(context, product) {
        context.commit(TYPES.ADD_ITEM_TO_CART, product)
        context.commit(TYPES.CALCULATE_SUBTOTAL)
    },

    removeFromCart(context, product) {
        context.commit(TYPES.REMOVE_ITEM_FROM_CART, product)
        context.commit(TYPES.CALCULATE_SUBTOTAL)
    },

    selectCoupon(context, coupon) {
        context.commit(TYPES.APPLY_COUPON, coupon)
        context.commit(TYPES.CALCULATE_SUBTOTAL)
    }
}


const mutations = {
    [TYPES.ADD_ITEM_TO_CART](state, product) {
        state.cart.items.push(product)
    },

    [TYPES.REMOVE_ITEM_FROM_CART](state, product) {
        const index = state.cart.items.map(item => item.id).indexOf(product.id);
        state.cart.items.splice(index, 1)
    },

    [TYPES.CALCULATE_SUBTOTAL](state) {
        // subtoatal - discount = total price
        state.cart.subTotal = state.cart.items.reduce((total, item) => (item.price) + total, 0)
        state.cart.discount = state.cart.subTotal * state.cart.selectedCoupon
        state.cart.totalPrice = state.cart.subTotal - state.cart.discount
    },

    [TYPES.APPLY_COUPON](state, coupon) {
        state.cart.selectedCoupon = (coupon / 100)
        state.cart.discount = state.cart.subTotal * state.cart.selectedCoupon
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}