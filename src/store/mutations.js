export default {
    addCounter(state, payload) {
        payload.count++;
    },
    addToCart1(state, payload) {
        payload.checked = true;
        state.cartList.push(payload)
    }
}