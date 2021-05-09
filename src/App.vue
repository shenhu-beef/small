<template>
  <div id="app">
      <keep-alive exclude="Detail">
          <router-view></router-view>
      </keep-alive>
      
      <main-tab-bar></main-tab-bar>
      <swiper></swiper>
</div>
</template>

<script>
    import MainTabBar from 'components/content/mainTabber/MainTabBar'
    import Swiper from 'components/common/swiper/Swiper'
    export default {
        name: 'App',
        components: {
            MainTabBar,
            Swiper
        }
    }
</script>

<style scoped>
    @import "assets/css/base.css";
</style>