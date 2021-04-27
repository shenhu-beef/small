<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend :recommends="recommends"></recommend>
        <feature></feature>
        <tab-control :titles="['流行', '新品', '精选']"></tab-control>
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

    //其他组件
    import {
        getHomeMultidata
    } from 'network/home'

    export default {
        name: "Home",
        components: {
            HomeSwiper,
            Recommend,
            Feature,
            NavBar,
            TabControl
        },
        data() {
            return {
                banners: [],
                recommends: [],
            }
        },
        created() {
            getHomeMultidata().then(res => {
                console.log(res);
                this.banners = res.data.data.banner.list
                this.recommends = res.data.data.recommend.list
            })
        }
    }
</script>

<style scoped>
    #home {
        padding-top: 44px;
    }
    
    .home-nav {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        background-color: var(--color-tint);
        color: #fff
    }
</style>