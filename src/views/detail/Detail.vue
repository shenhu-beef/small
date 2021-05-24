<template>
    <div id="detail">
        <detail-nav-bar class="detailNavBar" @titleClick="titleClick" ref="nav"></detail-nav-bar>
        <scroll class="content" :probe-type="3" :pull-up-load="true" ref="scroll" @scroll="contentScroll">
            <detail-swiper :top-image="topImage"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
            <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
            <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
            <!-- <detail-recommend-info :recommend-list="recommendList"></detail-recommend-info> -->
            <goods-list ref="recommend" :good='recommendList'></goods-list>
        </scroll>
        <detail-bottom-bar></detail-bottom-bar>
    </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import DetailBaseInfo from './childComps/DetailBaseInfo'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import DetailGoodsInfo from './childComps/DetailGoodsInfo'
    import Scroll from 'components/common/scroll/Scroll'
    import DetailParamInfo from './childComps/DetailParamInfo'
    import DetailCommentInfo from './childComps/DetailCommentInfo'
    import DetailRecommendInfo from './childComps/DetailRecommendInfo'
    import GoodsList from 'components/content/goods/GoodsList'
    import DetailBottomBar from './childComps/DetailBottomBar'
    import {
        getDetail,
        Goods,
        Shop,
        GoodsParam,
    } from 'network/detail'

    import {
        getHomeGoods
    } from 'network/home'

    export default {
        name: 'Detail',
        data() {
            return {
                iid: null,
                topImage: [],
                goods: {},
                shop: {},
                detailInfo: {},
                paramInfo: {},
                commentInfo: {},
                good: {
                    'pop': {
                        page: 0,
                        list: [],
                    },
                },
                themeY: [], //四个nav的top值
                currentIndex: null
            }
        },
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            Scroll,
            DetailGoodsInfo,
            DetailParamInfo,
            DetailCommentInfo,
            DetailRecommendInfo,
            GoodsList,
            DetailBottomBar
        },
        created() {
            this.getHomeGoods('pop')
            this.iid = this.$route.params.iid;
            getDetail(this.iid).then(res => {
                // console.log(res);
                const data = res.data.result
                this.topImage = data.itemInfo.topImages

                //获取商品信息
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
                // console.log(this.goods);

                //获取店家信息
                this.shop = new Shop(data.shopInfo)
                    // console.log(this.shop);

                //获取商品详情数据
                this.detailInfo = data.detailInfo

                //获取参数信息
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

                //获取用户评论
                this.commentInfo = data.rate.list[0];

                //获取推荐
                // this.recommendList = res.data.data.list;

            })
        },
        mounted() {

        },
        computed: {
            recommendList() {
                return this.good['pop'].list
            }
        },
        methods: {
            imageLoad() {
                this.$refs.scroll.refresh()

                this.themeY = []
                this.themeY.push(0)
                this.themeY.push(this.$refs.param.$el.offsetTop)
                this.themeY.push(this.$refs.comment.$el.offsetTop)
                this.themeY.push(this.$refs.recommend.$el.offsetTop)
                console.log(this.themeY);
            },
            getHomeGoods(type) {
                const page = this.good[type].page + 1
                getHomeGoods(type, page).then(res => {
                    console.log(res);
                    this.good[type].list.push(...res.data.data.list)
                        //也可以用for循环遍历将list依次传给
                        // console.log(res.data.data.list);
                    this.good[type].page += 1

                    this.$refs.scroll.finishPullUp()
                })
            },
            titleClick(index) {
                console.log(index);
                this.$refs.scroll.scrollTo(0, -this.themeY[index], 200)
            },
            contentScroll(position) {
                // console.log(position);
                const positionY = -position.y;
                let length = this.themeY.length
                for (let i = 0; i < length; i++) {
                    // console.log(i);
                    if (this.currentIndex !== i && ((i < length - 1 && positionY > this.themeY[parseInt(i)] && positionY < this.themeY[parseInt(i) + 1]) || (i === length - 1 && positionY > this.themeY[parseInt(i)]))) {
                        // console.log(i);
                        this.currentIndex = i;
                        console.log(this.currentIndex);
                        this.$refs.nav.currentIndex = this.currentIndex
                    }
                }
            }
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
        height: calc(100% - 44px - 49px);
        background-color: #fff;
    }
</style>