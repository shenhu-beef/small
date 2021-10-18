<template>
    <div class="bottom-bar">
        <check-button @click.native="checkClick" class="checked" :is-check="isSelectAll"></check-button>
        <span>全选</span>
        <div class="totalPrice">合计:￥{{totalPrice}}</div>
        <div class="cleanCar" @click="cleanCar">清空</div>
        <button class="calculate" @click="calcClick(totalPrice,isSelectAll)">去计算({{checkLength}})</button>
    </div>
</template>

<script>
    import CheckButton from 'components/content/checkButton/CheckButton'

    export default {
        name: 'CartBottomBar',
        components: {
            CheckButton
        },
        methods: {

        },
        methods: {
            // totalPrice() {
            //     this.a = this.$store.state.cartList.filter(item => {
            //         return item.checked
            //     }).reduce((preValue, item) => {
            //         return preValue + item.price * item.count
            //     }, 0).toFixed(2)
            // },
        },
        computed: {
            totalPrice() {
                return this.$store.state.cartList.filter(item => {
                    return item.checked
                }).reduce((preValue, item) => {
                    return preValue + item.price * item.count
                }, 0).toFixed(2)
            },
            checkLength() {
                return this.$store.state.cartList.filter(item => item.checked).length
            },
            isSelectAll() {
                if (this.$store.state.cartList.length === 0) {
                    return false
                } else {
                    return !(this.$store.state.cartList.filter(item => !item.checked).length)
                }

            }
        },
        methods: {
            checkClick() {
                if (this.isSelectAll) {
                    this.$store.state.cartList.forEach(item => {
                        item.checked = false
                    });
                } else {
                    this.$store.state.cartList.forEach(item => {
                        item.checked = true
                    });
                }
            },
            calcClick(totalPrice, isSelectAll) {
                this.$emit('calcClick', totalPrice, isSelectAll)
            },
            cleanCar() {
                // console.log(123);
                this.$store.state.cartList = []
            }
        }
    }
</script>

<style scoped>
    .bottom-bar {
        position: relative;
        height: 39px;
        border-top: 1px solid #ccc;
        display: flex;
        align-items: center;
    }
    
    .checked {
        width: 20px;
        height: 20px;
        margin-left: 10px;
        margin-right: 5px;
    }
    
    .totalPrice {
        margin-left: 10px;
    }
    .cleanCar {
        width: 70px;
        height: 100%;
        font-size: 13px;
        color: #fff;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 100px;
    }
    .calculate {
        position: absolute;
        right: 0;
        width: 100px;
        height: 100%;
        font-size: 13px;
        color: #fff;
        outline: none;
        border: 0;
        background-color: coral;
    }
</style>