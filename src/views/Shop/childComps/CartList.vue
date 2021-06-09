<template>
    <div class="cart-list">
        <scroll class="centent" :probe-type="3" :pull-up-load="true" ref="scroll">
            <!-- <li v-for="item in $store.state.cartList">{{item}}</li> -->
            <cart-list-item v-for="(item, index) in $store.state.cartList" :key="index" :item-info="item"></cart-list-item> 
        </scroll>
    </div>
</template>

<script>
    import Scroll from 'components/common/scroll/Scroll'
    import CartListItem from './CartListItem'
    export default {
        name: 'CartList',
        components: {
            Scroll,
            CartListItem
        },
        activated() {
            this.$refs.scroll.refresh()
        }
    }
</script>

<style scoped>
    .cart-list {
        height: calc(100vh - 44px - 49px - 40px);
    }
    
    .centent {
        height: 100%;
        overflow: hidden;
    }
</style>