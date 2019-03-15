import Vue from 'vue'
import VueRouter from 'vue-router'//引用路由
import Home from '@/components/modules/Home'
import children from './children'//路由分离，返回子路由的内容
import Error from '@/components/modules/Error'

Vue.use(VueRouter)//使用路由

const routes = [
    {
        path: "/",
        component: Home,
        children: children
    },//Path 路径 component 相应的组件 
    {
        path: "*",//匹配404
        component: Error
    }
]

const router = new VueRouter({
    // mode:"history",//路由时去掉#
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
})

router.afterEach((to, from) => {
    // window.scroll(0, 0);//跳转到顶部
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.isLogin)) {
        console.log("这是个需要登录的界面");
        next();
    }
    else {
        next();
    }
})

export default router