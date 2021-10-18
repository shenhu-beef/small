<template>
    <div class="goods">
        <goods-list-item v-for="(item,index) in goods" :goodsitem="item" :key="index"></goods-list-item>
        <goods-list-item v-for="(item,index) in good" :goodsitem="item" :key="index"></goods-list-item>
        <goods-list-item v-for="(item,index) in categoryGoodsitem" :goodsitem="item" :key="index"></goods-list-item>
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
            },
            categoryGoodsitem: {
                type: Array,
                default () {
                    return []
                }
            },
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