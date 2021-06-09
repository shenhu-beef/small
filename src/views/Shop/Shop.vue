<template>
    <div>
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{$store.state.cartList.length}})</div>
        </nav-bar>
        <cart-list></cart-list>
        <Cart-bottom-bar @calcClick='calcClick'></Cart-bottom-bar>
        <toast :show="show" :message="message"></toast>
    </div>
    
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import CartList from './childComps/CartList'
    import CartBottomBar from './childComps/CartBottomBar'
    import Toast from 'components/common/toast/Toast'
    export default {
        name: "Shop",
        data() {
            return {
                show: false,
                message: ''
            }
        },
        components: {
            NavBar,
            CartList,
            CartBottomBar,
            Toast
        },
        methods: {
            calcClick(totalPrice, isSelectAll) {
                if (this.$store.state.cartList.length === 0) {
                    this.show = true;
                    this.message = "请选择购买商品"

                    setTimeout(() => {
                        this.show = false;
                        this.message = ""
                    }, 1500)
                } else {
                    this.show = true;
                    this.message = "支付成功"
                    setTimeout(() => {
                        this.show = false;
                        this.message = ""
                    }, 1500)
                }

            }
        }
    }
</script>

<style scoped>
    .nav-bar {
        background-color: var(--color-tint);
        color: #fff;
    }
</style>