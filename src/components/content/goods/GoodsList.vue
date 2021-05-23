<template>
    <div class="goods">
        <goods-list-item v-for="item in goods" :goodsitem="item"></goods-list-item>
        <goods-list-item v-for="item in good" :goodsitem="item"></goods-list-item>
    </div>
</template>

<script>
    import GoodsListItem from './GoodsListItem'
    export default {
        name: 'GoodsList',
        props: {
            goods: {
                type: Array,
                default () {
                    return []
                }
            },
            good: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        components: {
            GoodsListItem
        }
    }
</script>

<style scoped>
    .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>