<template>
    <div class="DetailSwiper">
        <swiper class="imgSwiper">
            <swiper-item v-for="(item,index) in topImage" :key="index">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    import {
        Swiper,
        SwiperItem
    } from 'components/common/swiper/index'

    export default {
        name: 'DetailSwiper',
        props: {
            topImage: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        components: {
            Swiper,
            SwiperItem
        }
    }
</script>

<style scoped>
    .imgSwiper {
        height: 300px;
        overflow: hidden;
    }
</style>