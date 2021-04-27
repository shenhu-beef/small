<template>
    <div class="tab-control">
        <div v-for="item in titles" class="tab-control-item">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabControl',
        props: {
            titles: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        components: {

        }
    }
</script>

<style scoped>
    .tab-control {
        display: flex;
        text-align: center;
    }
    
    .tab-control-item {
        flex: 1;
        height: 40px;
        line-height: 40px;
        background-color: coral;
    }
</style>