<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: 'Scroll',
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scroll: null
            }
        },
        mounted() {
            //创建BScroll对象
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad,
                observeDom: true,
                observeImage: true,
                click: true,
            })

            //监听滚动位置
            this.scroll.on('scroll', (position) => {
                    // console.log(position);
                    this.$emit('scroll', position)
                })
                // this.scroll.scrollTo(0, 0, 1500)

            //监听上拉加载更多
            this.scroll.on('pullingUp', () => {
                // console.log('上拉加载更多');
                this.$emit('pullingUp')
            })

        },
        methods: {
            scrollTo(x, y, time) {
                this.scroll.scrollTo(x, y, time)
            },
            finishPullUp() {
                this.scroll.finishPullUp()
            }
        }
    }
</script>

<style scoped>

</style>