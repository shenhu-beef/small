<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend :recommends="recommends"></recommend>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import HomeSwiper from './childrencomps/HomeSwiper'
    import Recommend from './childrencomps/Recommend'

    import {
        getHomeMultidata
    } from 'network/home'

    export default {
        name: "Home",
        components: {
            NavBar,
            HomeSwiper,
            Recommend,
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
    .home-nav {
        background-color: var(--color-tint);
        color: #fff
    }
</style>