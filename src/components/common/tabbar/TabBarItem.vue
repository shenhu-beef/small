<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="tab-icon"></slot></div>
        <div v-else><slot name="tab-icon1"></slot></div>
        <div :style="activeStyle"><slot name="tab-name"></slot></div>  
    </div>
    
  </template>

<script>
    export default {
        name: "TabBarItem",
        data() {
            return {
                // isActive: true
            }
        },
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'red'
            }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle() {
                return this.isActive ? {
                    color: this.activeColor
                } : {}
            }
        },
        methods: {
            itemClick() {
                this.$router.replace(this.path)
            }
        },

    }
</script>

<style>
    .tab-bar-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
    }
    
    .tab-bar-item img {
        width: 24px;
        height: 24px;
    }
    
    .active {
        color: red;
    }
</style>