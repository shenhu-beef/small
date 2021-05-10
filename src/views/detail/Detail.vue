<template>
    <div id="detail">
        <detail-nav-bar class="detailNavBar"></detail-nav-bar>
        <scroll class="content" :probe-type="3" :pull-up-load="true">
            <detail-swiper :top-image="topImage"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
        </scroll>
    </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import DetailBaseInfo from './childComps/DetailBaseInfo'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import DetailGoodsInfo from './childComps/DetailGoodsInfo'
    import Scroll from 'components/common/scroll/Scroll'
    import {
        getDetail,
        Goods,
        Shop,
    } from 'network/detail'

    export default {
        name: 'Detail',
        data() {
            return {
                iid: null,
                topImage: [],
                goods: {},
                shop: {},
                detailInfo: {}
            }
        },
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            Scroll,
            DetailGoodsInfo
        },
        created() {
            this.iid = this.$route.params.iid;
            getDetail(this.iid).then(res => {
                console.log(res);
                const data = res.data.result
                this.topImage = data.itemInfo.topImages

                //获取商品信息
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
                // console.log(this.goods);

                //获取店家信息
                this.shop = new Shop(data.shopInfo)
                console.log(this.shop);

                //获取商品详情数据
                this.detailInfo = data.detailInfo
            })
        }
    }
</script>

<style scoped>
    #detail {
        position: relative;
        height: 100vh;
        z-index: 11;
        background-color: #fff;
    }
    
    .detailNavBar {
        position: relative;
        z-index: 10;
        background-color: #fff;
    }
    
    .content {
        height: calc(100% - 44px);
        background-color: #fff;
    }
</style>