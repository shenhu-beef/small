<template>
    <div>
        <nav-bar>
            <div class="left" slot="left" @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div class="center" slot="center">
                <div v-for="(item,index) in title" 
                     class="titleItem" 
                     :class="{active: currentIndex == index}"
                     @click="titleClick(index)">
                    {{item}}
                </div>
            </div>
            <div class="right" slot="right"></div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: 'DetailNavBar',
        data() {
            return {
                title: ['商品', '参数', '评论', '推荐'],
                currentIndex: 0
            }
        },
        components: {
            NavBar
        },
        methods: {
            titleClick(index) {
                this.currentIndex = index
            },
            backClick() {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .left {
        margin-top: 7px;
    }
    
    .center {
        display: flex;
        font-size: 15px;
    }
    
    .titleItem {
        flex: 1;
    }
    
    .active {
        color: var(--color-high-text)
    }
</style>