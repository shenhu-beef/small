import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/Home/Home.vue')
const Category = () =>
    import ('../views/Category/Category.vue')
const Shop = () =>
    import ('../views/Shop/Shop.vue')
const My = () =>
    import ('../views/My/My.vue')
const Detail = () =>
    import ('../views/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/my',
        component: My
    },
    {
        path: '/detail/:iid',
        component: Detail
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router