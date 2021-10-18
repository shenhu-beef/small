<!--  -->
<template>
  <div class="r">
          <div class="eachItem" v-for="(item, index) in categoryData" :key="index">
            <a :href="item.link">
              <img :src="item.image" alt="" />
              <div class="categoryTitle">{{ item.title }}</div>
            </a>
          </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props: {
      categoryData: {
          type: Array
      }
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
.r {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.eachItem {
  width: 40%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.eachItem a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.eachItem img {
  width: 100%;
  margin-bottom: 15px;
}
</style>