<template>
    <div class="goods">
        <!-- <img v-if="goodsitem.show.img" :src="goodsitem.show.img" alt="" @load="imgLoad" @click="imgClick"> -->
        <img :src="goodsitem.img || goodsitem.show.img" alt="" @load="imgLoad" @click="imgClick">
        <div class="goods-info">
            <p>{{goodsitem.title}}</p>
            <span class="price">{{goodsitem.price}}</span>
            <span class="collect">{{goodsitem.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GoodsListItem',
        props: {
            goodsitem: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        methods: {
            //$bus总线，可与其他组件进行通信
            imgLoad() {
                this.$bus.$emit('imgLoad')
            },
            imgClick() {
                this.$router.push('/detail/' + this.goodsitem.iid)
            }
        }
    }
</script>

<style scoped>
    .goods {
        padding-bottom: 40px;
        position: relative;
        width: 47%;
        margin: 5px 3px;
    }
    
    .goods img {
        width: 100%;
        margin: 5px 5px;
        border-radius: 5px;
    }
    
    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }
    
    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
    
    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }
    
    .goods-info .collect {
        position: relative;
    }
    
    .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: 0;
        width: 14px;
        height: 14px;
        background: url("~assets/img/collect.svg") 0 0/14px 14px;
    }
</style>