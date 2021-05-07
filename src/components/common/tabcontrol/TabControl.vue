<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" class="tab-control-item" :class="{isActive: current==index}" @click="itemClick(index)">
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
        data() {
            return {
                current: 0
            }
        },
        methods: {
            itemClick(index) {
                this.current = index;
                this.$emit('tabClick', index);
            }
        },
        components: {

        }
    }
</script>

<style scoped>
    .tab-control {
        position: sticky;
        top: 44px;
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
        background-color: #fff;
        z-index: 9;
    }
    
    .tab-control-item {
        flex: 1;
    }
    
    .isActive {
        color: var(--color-high-text);
    }
    
    .isActive span {
        border-bottom: 3px solid var(--color-tint);
        padding: 5px;
    }
</style>