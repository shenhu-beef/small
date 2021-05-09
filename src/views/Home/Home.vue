<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control :titles="['流行', '新品', '精选']" 
                         @tabClick="tabClick" 
                         ref="tabControl1"
                         class="fakeTabControl"
                         v-show="isTabShow"
            ></tab-control>
        <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentScroll" @pullingUp="loadMore">
            <home-swiper :banners="banners" @imgload='swiperImgLoad'></home-swiper>
            <recommend :recommends="recommends"></recommend>
            <feature></feature>
            <tab-control :titles="['流行', '新品', '精选']" 
                         @tabClick="tabClick" 
                         ref="tabControl2"
            ></tab-control>
            <goods-list :goods='changeTpye'></goods-list>
        </scroll>
        <back-top @click.native="backClick" v-show="isShow"></back-top>
    </div>
</template>

<script>
    //子组件
    import HomeSwiper from './childrencomps/HomeSwiper'
    import Recommend from './childrencomps/Recommend'
    import Feature from './childrencomps/Feature'

    //公共组件
    import NavBar from 'components/common/navbar/NavBar'
    import TabControl from 'components/common/tabcontrol/TabControl'
    import GoodsList from 'components/content/goods/GoodsList'
    import Scroll from 'components/common/scroll/Scroll'
    import BackTop from 'components/common/backtop/BackTop'

    //其他组件
    import {
        getHomeMultidata,
        getHomeGoods
    } from 'network/home'

    export default {
        name: "Home",
        components: {
            HomeSwiper,
            Recommend,
            Feature,
            NavBar,
            TabControl,
            GoodsList,
            Scroll,
            BackTop
        },
        data() {
            return {
                banners: [],
                recommends: [],
                goods: {
                    'pop': {
                        page: 0,
                        list: []
                    },
                    'new': {
                        page: 0,
                        list: []
                    },
                    'sell': {
                        page: 0,
                        list: []
                    },
                },
                currentType: 'pop',
                scroll: null,
                isShow: false,
                taboffsetTop: 0,
                isTabShow: false,
            }
        },
        created() {
            //created里的方法具体写在methods里，created里只放方法名
            this.getHomeMultidata();
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')

        },
        mounted() {
            //$bus总线，可与其他组件进行通信
            //此处与GoodsListItem组件进行通信,图片每加载一次，就刷新一次
            const refresh = this.debounce(this.$refs.scroll.refresh, 500)
            this.$bus.$on('imgLoad', () => {
                refresh()
            })
        },
        computed: {
            changeTpye() {
                return this.goods[this.currentType].list
            }
        },
        methods: {
            /* 
                事件监听的相关方法
            */
            debounce(func, delay) {
                let timer = null;
                return function(...args) {
                    if (timer) clearTimeout(timer)
                    timer = setTimeout(() => {
                        func.apply(this, args)
                    }, delay)
                }
            },
            backClick() {
                //点击右下角上箭头在0.5秒滚回到顶部
                //$reds.scroll.scroll.是获取到scroll组件中的scroll对象
                // this.$refs.scroll.scroll.scrollTo(0, 0, 500);
                this.$refs.scroll.scrollTo(0, 0, 500)
            },
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop';
                        break;
                    case 1:
                        this.currentType = 'new';
                        break;
                    case 2:
                        this.currentType = 'sell';
                        break;
                }
                this.$refs.tabControl1.current = index
                this.$refs.tabControl2.current = index
            },
            contentScroll(position) {
                //回到顶部显示隐藏
                if (position.y > -1000) {
                    this.isShow = false
                } else {
                    this.isShow = true
                }
                //TabControl显示隐藏
                if (-position.y > this.taboffsetTop) {
                    this.isTabShow = true
                } else {
                    this.isTabShow = false
                }

            },
            loadMore() {
                this.getHomeGoods(this.currentType);
            },
            swiperImgLoad() {
                this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop;
            },
            /* 
                下面网络请求的相关方法
            */
            getHomeMultidata() {
                getHomeMultidata().then(res => {
                    console.log(res);
                    this.banners = res.data.data.banner.list
                    this.recommends = res.data.data.recommend.list
                })
            },
            getHomeGoods(type) {
                const page = this.goods[type].page + 1
                getHomeGoods(type, page).then(res => {
                    console.log(res);
                    this.goods[type].list.push(...res.data.data.list)
                        //也可以用for循环遍历将list依次传给
                    console.log(res.data.data.list);
                    this.goods[type].page += 1

                    this.$refs.scroll.finishPullUp()


                    // this.$refs.scroll.scroll.refresh();
                })
            },

        }
    }
</script>

<style scoped>
    #home {
        /* position: relative; */
        height: 100vh;
        /* padding-top: 44px; */
    }
    
    .home-nav {
        /* position: fixed;
        left: 0;
        top: 0; */
        width: 100%;
        background-color: var(--color-tint);
        color: #fff
    }
    
    .content {
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
    }
    /* .content {
        height: 600px;
        overflow: hidden;
    } */
    
    .fakeTabControl {
        position: relative;
        z-index: 9;
    }
</style>