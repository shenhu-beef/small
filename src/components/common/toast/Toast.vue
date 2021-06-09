<template>
    <div class="toast" v-show="show">
        <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
        name: 'Toast',
        props: {
            message: {
                type: String,
                default: '',
            },
            show: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .toast {
        position: absolute;
        width: 200px;
        height: 50px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, .6);
        color: #fff;
        border-radius: 20px;
        text-align: center;
        line-height: 50px;
    }
</style>