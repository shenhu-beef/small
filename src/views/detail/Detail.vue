<template>
    <div>
        <detail-nav-bar></detail-nav-bar>
        <detail-swiper :top-image="topImage"></detail-swiper>
    </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import {
        getDetail
    } from 'network/detail'

    export default {
        name: 'Detail',
        data() {
            return {
                iid: null,
                topImage: []
            }
        },
        components: {
            DetailNavBar,
            DetailSwiper
        },
        created() {
            this.iid = this.$route.params.iid;
            getDetail(this.iid).then(res => {
                console.log(res);
                this.topImage = res.data.result.itemInfo.topImages
            })
        }
    }
</script>

<style scoped></style>