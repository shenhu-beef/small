<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends" class="recommend-item" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Recommend',
        props: {
            recommends: {
                type: Array,
                default () {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .recommend {
        display: flex;
        width: 100%;
        text-align: center;
        padding: 10px 0 20px;
        border-bottom: 8px solid #eee;
    }
    
    .recommend .recommend-item {
        flex: 1;
    }
    
    .recommend-item img {
        width: 90%;
        margin-bottom: 5px;
    }
</style>