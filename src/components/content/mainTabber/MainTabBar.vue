<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="red">
          <img src="~assets/img/home.png" alt="" slot="tab-icon">
          <img src="~assets/img/home1.png" alt="" slot="tab-icon1">
          <div slot="tab-name">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
          <img src="~assets/img/cal1.png" alt="" slot="tab-icon">
          <img src="~assets/img/category.png" alt="" slot="tab-icon1">
          <div slot="tab-name">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shop" activeColor="red"> 
          <img src="~assets/img/shop.png" alt="" slot="tab-icon">
          <img src="~assets/img/shop1.png" alt="" slot="tab-icon1">
          <div slot="tab-name">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/my" activeColor="red">
          <img src="~assets/img/my.png" alt="" slot="tab-icon">
          <img src="~assets/img/my1.png" alt="" slot="tab-icon1">
          <div slot="tab-name">我的</div>
      </tab-bar-item>
      </tab-bar>
</template>

<script>
    import TabBar from "components/common/tabbar/TabBar"
    import TabBarItem from "components/common/tabbar/TabBarItem"

    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem
        },
    }
</script>

<style scoped>

</style>