import Vue from 'vue'
import VueRouter from 'vue-router'//引用路由
import Home from '@/components/modules/Home'
import children from './children'//路由分离，返回子路由的内容

Vue.use(VueRouter)//使用路由

const router = new VueRouter({
    // mode:"history",//路由时去掉#
    routes: [
        {
            path: "/",
            component: Home,
            children: children
        }//Path 路径 component 相应的组件 
    ]
})

router.afterEach((to, from, next) => {
    window.scroll(0, 0);//跳转到顶部
})

export default router