<template>
  <div id="category">
    <nav-bar class="home-nav"><div slot="center">商品分类</div></nav-bar>
    <div class="cateContent">
      <!-- 左侧导航栏 -->
      <div class="wrapper">
        <div class="categories" :class="active(index)" v-for="(item, index) in categories" :key="index" @click="titleClick(index)">
          {{ item.title }}
        </div>
      </div>
      <!-- 右侧内容 -->
      <div class="itemContent" @scroll="contentScroll">
        <!-- 假的右侧导航栏 -->
        <tab-control :titles="['综合', '新品', '销量']" v-show="isTabShow" class="fakeTabControl" @tabClick="tabClick" ref="tabControl1"></tab-control>
        <categories-data :categoryData="categoryData" ref="r"></categories-data>
        <!-- 真的右侧导航栏 -->
        <tab-control :titles="['综合', '新品', '销量']" ref="tabControl" @tabClick="tabClick"></tab-control>
        <goods-list :categoryGoodsitem="showCategoryDetail"></goods-list>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/common/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import categoriesData from "./childrencomps/categoriesData";
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";
export default {
  name: "Category",
  data() {
    return {
      categories: [],
      isActive: 0,
      currentIndex: 0,
      currentType: "pop",
      categoryData: [],
      goodsType: {
        pop: [],
        new: [],
        sell: [],
      },
      isTabShow: false,
    };
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    categoriesData,
  },
  created() {
    this.getCategory1();
  },
  computed: {
    showCategoryDetail() {
      return this.goodsType[this.currentType];
    },
  },
  methods: {
    //   网络请求方法
    getCategory1() {
      getCategory().then((res) => {
        this.categories = res.data.data.category.list;
        this.getSubcategory1(0);
      });
    },
    getSubcategory1(index) {
      this.currentIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then((res) => {
        this.categoryData = res.data.data.list;
        this.getCategoryDetail1("pop");
        this.getCategoryDetail1("new");
        this.getCategoryDetail1("sell");
      });
    },
    getCategoryDetail1(type) {
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey, type).then((res) => {
        // console.log(res.data);
        this.goodsType[type] = res.data;
      });
    },

    titleClick(index) {
      this.isActive = index;
      this.getSubcategory1(index);
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.current = index;
      this.$refs.tabControl.current = index;
    },
    contentScroll(e) {
      if (e.srcElement.scrollTop > this.$refs.r.$el.offsetHeight) {
        this.isTabShow = true;
      } else {
        this.isTabShow = false;
      }
    },
    active(index) {
      return this.isActive == index ? "active" : {};
    },
  },
  //   mounted() {
  //     this.isScroll = new BScroll(".wrapper", {
  //       probeTybe: 3,
  //       pullUpLoad: true,
  //     });
  //     this.isScroll.on("scroll", (position) => {
  //       // console.log(position);
  //     });
  //     this.isScroll.on("pullingUp", () => {
  //       console.log("上拉加载更多");
  //     });
  //   },
};
</script>

<style scoped>
.home-nav {
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
}
.cateContent {
  display: flex;
}
.wrapper {
  flex: 1;
  height: calc(100vh - 44px - 49px);
  /* background-color: coral; */
  overflow: auto;
}
.categories {
  /* width: 85px; */
  height: 55px;
  background-color: rgb(245, 245, 245);
  display: flex;
  justify-content: center;
  align-items: center;
}

.active {
  border-left: 2px solid var(--color-tint);
  background-color: #fff;
}

.itemContent {
  flex: 3;
  height: calc(100vh - 44px - 49px);
  overflow: auto;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-around; */
}

.fakeTabControl {
  position: fixed;
  width: 75%;
  z-index: 1111;
}
</style>